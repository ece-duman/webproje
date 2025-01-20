import { defineStore } from 'pinia'
import { useNuxtApp } from '#app'
import { collection, query, getDocs } from 'firebase/firestore'

export const useResimlerStore = defineStore('resimler', {
  state: () => ({
    resimler: [] as Array<{ resim: string }>,
  }),
  actions: {
    async fetchResimler() {
      const { $db } = useNuxtApp()
      const q = query(collection($db, 'body2'))
      const querySnapshot = await getDocs(q)

      this.resimler = []
      querySnapshot.forEach((docSnap) => {
        const data = docSnap.data()
        this.resimler.push({ resim: data.resim })
      })
    },
  },
})
