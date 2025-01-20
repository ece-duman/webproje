<template>
  <div v-if="isVisible" class="fixed inset-0 right-0 w-96 bg-white shadow-lg z-50 flex flex-col">
    <!-- Header -->
    <div class="flex items-center justify-between p-4 border-b">
      <h2 class="text-lg font-bold text-purple-700 flex items-center space-x-2">
        <span class="text-orange-500 text-xl">🛒</span>
        <span>Sepetim</span>
      </h2>
      <button @click="closeSidebar" class="close-button">✕</button>
    </div>

    <!-- Cart Items -->
    <div class="flex-1 overflow-y-auto p-4">
      <div
        v-for="(item, index) in cartStore.cartItems"
        :key="item.id"
        class="cart-item rounded-lg shadow-md hover:shadow-lg p-4 border border-gray-200 relative transition transform hover:scale-105"
      >
        <img :src="item.icon" alt="Ürün Resmi" class="book-image mr-4" />
        <div class="cart-item-content">
          <div class="flex-1">
            <p class="text-sm font-semibold">{{ item.isim }}</p>
            <p class="text-sm text-gray-600">{{ item.yazar }}</p>
            <p class="text-sm text-gray-500">{{ item.yayinevi }}</p>
          </div>
          <div class="price-section flex items-center justify-between w-full">
            <div class="flex flex-col items-center">
              <p class="text-lg font-bold text-purple-600">{{ item.fiyat }} TL</p>
              <div class="flex items-center mt-2">
                <button
                  @click="cartStore.decreaseQuantity(index)"
                  class="border border-gray-300 px-2 py-1 text-gray-600 hover:bg-gray-100"
                >
                  -
                </button>
                <span class="mx-2">{{ item.quantity }}</span>
                <button
                  @click="cartStore.increaseQuantity(index)"
                  class="border border-gray-300 px-2 py-1 text-gray-600 hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>
            <button
              @click="cartStore.removeItem(index)"
              class="text-red-500 hover:text-red-700 ml-2 absolute top-2 right-2"
            >
              🗑
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Summary -->
    <div class="p-4 border-t">
      <div class="flex justify-between mb-2">
        <span>Sepet Toplamı</span>
        <span class="font-bold">{{ cartStore.cartTotal.toFixed(2) }} TL</span>
      </div>
      <div class="flex justify-between mb-2">
        <span>Kargo Ücreti</span>
        <span class="font-bold">{{ cartStore.shippingFee.toFixed(2) }} TL</span>
      </div>
      <div class="flex justify-between mb-4">
        <span>Genel Toplam</span>
        <span class="font-bold text-purple-700">{{ cartStore.grandTotal.toFixed(2) }} TL</span>
      </div>
      <button
        @click="goToCart"
        class="w-full bg-purple-700 text-white py-2 rounded-lg mb-2 hover:bg-purple-800 transition"
      >
        SEPETE GİT
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '~/stores/cart' // <-- Yolunuzu burada düzeltin

const message = ref('')

// Pinia'daki store'u kullan
const cartStore = useCartStore()
const cartItems = computed(() => cartStore.cartItems)


// Yan panel görünür mü kapalı mı tutmak için
const isVisible = ref(true)

// Sayfa yönlendirmeleri için router
const router = useRouter()

function closeSidebar() {
  isVisible.value = false
}

const goToCart = ()  =>{
  router.push('/sepet')
}

// Bileşen yüklendiğinde verileri çek
onMounted(() => {
  cartStore.initCartListener()
})
</script>


<style scoped>
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}

.fixed {
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  background-color: white;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.cart-item {
  width: 300.2px; /* Kutu genişliği */
  height: 118.3px; /* Kutu yüksekliği */
  background-color: #f9f9f9; /* Kutu arka plan rengi */
  font-size: 0.625rem; /* Yazı boyutu */
  font-weight: 500; /* Yazı kalınlığı */
  line-height: 1.2; /* Satır yüksekliği */
  padding: 10px; /* İçerik kenar boşluğu */
  display: flex; /* İçerikleri yan yana hizala */
  align-items: center; /* Dikey hizalama */
  gap: 10px; /* İçerikler arasında boşluk */
  border-radius: 8px; /* Yuvarlak köşeler */
  margin-bottom: 10px; /* Kutular arasındaki boşluk */
  overflow: hidden; /* Taşan içerikleri gizle */
}

.book-image {
  flex-shrink: 0; /* Görselin daralmasını önle */
  width: 60px; /* Görsel genişliği */
  height: 82.86px; /* Görsel yüksekliği */
  object-fit: cover; /* Görseli kutuya sığdır */
  border-radius: 4px; /* Görsel köşe yuvarlaması */
}

.cart-item-content {
  flex: 1; /* İçerik alanını genişlet */
  display: flex; /* İçerik düzenlemesi */
  flex-direction: column; /* Dikey hizalama */
  justify-content: center; /* Yatay ve dikey ortalama */
  text-align: center; /* Metin ortalama */
}

.cart-item-content p {
  margin: 0; /* Varsayılan boşlukları kaldır */
  overflow: hidden; /* Taşan metinleri gizle */
  text-overflow: ellipsis; /* Uzun metinlere üç nokta koy */
  white-space: nowrap; /* Satır kaymasını engelle */
}

.cart-item:hover {
  background-color: #f0f0f0;
  border: 1px solid #e0e0e0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.price-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.w-96 {
  width: 335px;
}

.close-button {
  position: absolute; /* Konumu bağımsız olarak ayarla */
  top: 10px; /* Yukarıdan uzaklık */
  left: 10px; /* Soldan uzaklık */
  font-size: 1.5rem; /* Boyut */
  background: none; /* Arka plan kaldır */
  border: none; /* Kenarlık kaldır */
  cursor: pointer; /* İmleç değişimi */
  color: gray; /* Renk */
  transition: color 0.2s ease; /* Renk geçiş efekti */
}

.close-button:hover {
  color: black; /* Üzerine gelindiğinde renk değişimi */
}

button.bg-orange-500 {
  background-color: #ff8000; /* Turuncu arka plan */
}

button.bg-orange-500:hover {
  background-color: #e67300; /* Hoverda daha koyu turuncu */
}

button.bg-purple-700 {
  background-color: #56008e; /* Mor arka plan */
  margin-bottom: 0.5rem; /* Alt boşluk */
}

button.bg-purple-700:hover {
  background-color: #4c0078; /* Hoverda daha koyu mor */
}
</style>