import { defineStore } from 'pinia'
import { useNuxtApp } from '#app'
import {
  collection,
  doc,
  query,
  onSnapshot,
  updateDoc,
  deleteDoc,
  addDoc,
} from 'firebase/firestore'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartItems: [] as Array<any>,
    shippingFee: 49.9,
    cartUnsubscribe: null as null | (() => void),
  }),

  getters: {
    cartTotal: (state) =>
      state.cartItems.reduce((total, item) => total + item.fiyat * item.quantity, 0),

    grandTotal: (state) => state.cartTotal + state.shippingFee,
  },

  actions: {
    initCartListener() {
      const { $db } = useNuxtApp()
      const colRef = collection($db, 'sepet')

      if (this.cartUnsubscribe) {
        this.cartUnsubscribe()
      }

      this.cartUnsubscribe = onSnapshot(colRef, (snapshot) => {
        const newItems: any[] = []
        snapshot.forEach((docSnap) => {
          const data = docSnap.data()
          newItems.push({
            id: docSnap.id,
            ...data,
            quantity: data.quantity || 1,
          })
        })
        this.cartItems = newItems
      })
    },

    stopCartListener() {
      if (this.cartUnsubscribe) {
        this.cartUnsubscribe()
        this.cartUnsubscribe = null
      }
    },

    async increaseQuantity(index: number) {
      const { $db } = useNuxtApp()
      this.cartItems[index].quantity++
      const docRef = doc($db, 'sepet', this.cartItems[index].id)
      await updateDoc(docRef, { quantity: this.cartItems[index].quantity })
    },

    async decreaseQuantity(index: number) {
      if (this.cartItems[index].quantity > 1) {
        const { $db } = useNuxtApp()
        this.cartItems[index].quantity--
        const docRef = doc($db, 'sepet', this.cartItems[index].id)
        await updateDoc(docRef, { quantity: this.cartItems[index].quantity })
      }
    },

    async removeItem(index: number) {
      const { $db } = useNuxtApp()
      const itemToRemove = this.cartItems[index]
      await deleteDoc(doc($db, 'sepet', itemToRemove.id))
      // onSnapshot devrede olduğu için cartItems otomatik güncellenir
    },

    async addToCart(newItem: any) {
      const { $db } = useNuxtApp()
      const existingItem = this.cartItems.find((item) => item.id === newItem.id)

      if (existingItem) {
        existingItem.quantity++
        const docRef = doc($db, 'sepet', existingItem.id)
        await updateDoc(docRef, { quantity: existingItem.quantity })
      } else {
        await addDoc(collection($db, 'sepet'), {
          ...newItem,
          quantity: 1,
        })
        // onSnapshot ekler
      }
    },

    // --- Tüm ürünleri TEK SEFERDE silen fonksiyon ---
    async clearCart() {
      const { $db } = useNuxtApp()

      // Şu anki cartItems içindeki HER ürünü Firestore'dan sil
      for (const item of this.cartItems) {
        await deleteDoc(doc($db, 'sepet', item.id))
      }
      // onSnapshot çalıştığı için cartItems otomatik olarak boşalır
    },
  },
})
