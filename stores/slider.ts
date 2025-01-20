// ~/stores/slider.ts
import { defineStore } from 'pinia'
import { useNuxtApp } from '#app'
import { collection, query, getDocs } from 'firebase/firestore'

interface SlideType {
  image: string
  alt: string
  interval: number
  title?: string
  description?: string
}

export const useSliderStore = defineStore('slider', {
  state: () => ({
    slides: [] as SlideType[],
  }),

  actions: {
    // Firestore'daki 'slider1' koleksiyonundan verileri çeken fonksiyon
    async fetchSliderData() {
      const { $db } = useNuxtApp()
      const sliderCollection = collection($db, 'slider1')
      const q = query(sliderCollection)
      const querySnapshot = await getDocs(q)

      const tempSlides: SlideType[] = []

      querySnapshot.forEach((docSnap) => {
        const data = docSnap.data()

       
        tempSlides.push({
          image: data.link || '',                // Resim URL
          alt: data.alt || 'Slide Image',        // Alt metin
          interval: data.interval || 5000,       // Slaytın gösterim süresi
          title: data.title || '',              // Opsiyonel başlık
          description: data.description || '',   // Opsiyonel açıklama
        })
      })

      // State'e atama
      this.slides = tempSlides
    },
  },
})
