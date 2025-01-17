// plugins/firebase.js
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

export default defineNuxtPlugin((nuxtApp) => {
  const firebaseConfig = {
    apiKey: "AIzaSyBYj-7GOtwmWjJuO4aASY8lp2qXaCUyMrs",
    authDomain: "webproje-9eec1.firebaseapp.com",
    projectId: "webproje-9eec1",
    storageBucket: "webproje-9eec1.firebasestorage.app",
    messagingSenderId: "279040144677",
    appId: "1:279040144677:web:1921d8e137a7286b7f96cc"
  };

  // Firebase App'i başlat
  const firebaseApp = initializeApp(firebaseConfig)

  // Firestore örneğini oluştur
  const db = getFirestore(firebaseApp)

  // Nuxt app'e firebaseApp ve db'yi enjekte et
  nuxtApp.provide('firebase', firebaseApp)
  nuxtApp.provide('db', db)
  
})