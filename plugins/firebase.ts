// plugins/firebase.ts
import { defineNuxtPlugin } from '#app'
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore, Firestore } from 'firebase/firestore'
import type { FirebaseApp } from 'firebase/app'

export default defineNuxtPlugin((nuxtApp) => {
  // Firebase uygulaması zaten başlatılmış mı diye kontrol et
  let firebaseApp: FirebaseApp
  if (getApps().length === 0) {
    const firebaseConfig = {
      apiKey: "AIzaSyBYj-7GOtwmWjJuO4aASY8lp2qXaCUyMrs",
      authDomain: "webproje-9eec1.firebaseapp.com",
      projectId: "webproje-9eec1",
      storageBucket: "webproje-9eec1.firebasestorage.app",
      messagingSenderId: "279040144677",
      appId: "1:279040144677:web:1921d8e137a7286b7f96cc"
    }

    // Firebase App'i başlat
    firebaseApp = initializeApp(firebaseConfig)
  } else {
    // Firebase zaten başlatıldıysa mevcut uygulamayı al
    firebaseApp = getApp()
  }

  // Firestore örneğini oluştur
  const db: Firestore = getFirestore(firebaseApp)

  // Nuxt app'e firebaseApp ve db'yi enjekte et
  nuxtApp.provide('firebase', firebaseApp)
  nuxtApp.provide('db', db)
})
