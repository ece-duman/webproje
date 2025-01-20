import { defineStore } from 'pinia';
import { useNuxtApp } from '#app';
import { collection, query, getDocs } from 'firebase/firestore';

export const useYayinEvleriStore = defineStore('yayinEvleri', {
  state: () => ({
    images: [] as string[], // Resimlerin tutulduğu dizi
  }),
  actions: {
    async fetchYayinEvleri() {
      const { $db } = useNuxtApp();
      const q = query(collection($db, 'yayinevleri'));
      const querySnapshot = await getDocs(q);

      this.images = querySnapshot.docs.map((doc) => doc.data().resim);
    },
  },
});
