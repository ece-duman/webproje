import { defineStore } from 'pinia';
import { useNuxtApp } from '#app';
import { collection, query, getDocs } from 'firebase/firestore';

export const useBody1Store = defineStore('body1', {
  state: () => ({
    resim: [] as Array<{ resim: string }>,
  }),
  actions: {
    async fetchBody1Images() {
      const { $db } = useNuxtApp();
      const q = query(collection($db, 'body1'));
      const querySnapshot = await getDocs(q);

      this.resim = querySnapshot.docs.map((docSnap) => ({
        resim: docSnap.data().resim,
      }));
    },
  },
});
