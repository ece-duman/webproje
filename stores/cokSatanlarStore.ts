import { defineStore } from 'pinia';
import { useNuxtApp } from '#app';
import { collection, query, getDocs, addDoc, doc, updateDoc } from 'firebase/firestore';

export const useCokSatanlarStore = defineStore('cokSatanlar', {
  state: () => ({
    cards: [] as Array<{
      name: string;
      publisher: string;
      author: string;
      price: string;
      img: string;
      eskiFiyat?: string;
    }>,
  }),
  actions: {
    async fetchCokSatanlar() {
      const { $db } = useNuxtApp();
      const q = query(collection($db, 'cokSatanlar'));
      const querySnapshot = await getDocs(q);

      this.cards = querySnapshot.docs.map((docSnap) => {
        const data = docSnap.data();
        return {
          name: data.isim,
          publisher: data.yayinevi,
          author: data.yazar,
          price: data.fiyat,
          img: data.link,
          eskiFiyat: data.eskiFiyat,
        };
      });
    },
    async addToCart(card) {
      const { $db } = useNuxtApp();
      const cartCollection = collection($db, 'sepet');
      const q = query(cartCollection);
      const querySnapshot = await getDocs(q);

      let existingItem = null;

      querySnapshot.forEach((docSnap) => {
        const data = docSnap.data();
        if (data.isim === card.name) {
          existingItem = { id: docSnap.id, ...data };
        }
      });

      if (existingItem) {
        const docRef = doc($db, 'sepet', existingItem.id);
        const newQuantity = (existingItem.quantity || 1) + 1;
        await updateDoc(docRef, { quantity: newQuantity });
        await this.fetchCartItems();
      } else {
        await addDoc(cartCollection, {
          fiyat: card.price,
          icon: card.img,
          isim: card.name,
          yazar: card.author,
          yayinevi: card.publisher,
          quantity: 1,
        });
        await this.fetchCartItems();
      }
    },
    async fetchCartItems() {
      const { $db } = useNuxtApp()
      const q = query(collection($db, 'sepet'))
      const querySnapshot = await getDocs(q)
      this.cartItems = []
      querySnapshot.forEach((docSnap) => {
        const data = docSnap.data()
        this.cartItems.push({
          id: docSnap.id,
          ...data,
          quantity: data.quantity || 1,
        })
      })
    },
  },
});
