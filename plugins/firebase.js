// plugins/firebase.js
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

export default defineNuxtPlugin((nuxtApp) => {
    const firebaseConfig = {
        apiKey: "AIzaSyC13v42EI8kXmhPMBiw46NK_Vj4R5RBGVY",
        authDomain: "proje-8c192.firebaseapp.com",
        projectId: "proje-8c192",
        storageBucket: "proje-8c192.firebasestorage.app",
        messagingSenderId: "545440960322",
        appId: "1:545440960322:web:85c9cd4f591af88a4e82db"
      };

  // Firebase App'i başlat
  const firebaseApp = initializeApp(firebaseConfig)

  // Firestore örneğini oluştur
  const db = getFirestore(firebaseApp)

  // Nuxt app'e firebaseApp ve db'yi enjekte et
  nuxtApp.provide('firebase', firebaseApp)
  nuxtApp.provide('db', db)
  
})