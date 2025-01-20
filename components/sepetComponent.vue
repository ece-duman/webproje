<template>
  <!-- Popup Mesajı (Satın alındı vs.) -->
  <div v-if="isVisible" class="popup">
    <div class="popup-content">
      <p>{{ message }}</p>
      <button @click="closePopup">Tamam</button>
    </div>
  </div>

  <!-- Sepet İçeriği -->
  <div class="sepet-container">
    <h1 class="text-2xl font-bold mb-4">Sepetiniz</h1>

    <!-- Sepette ürün varsa -->
    <div v-if="cartItems.length > 0">
      <div class="row">
        <ul class="col-8">
          <li v-for="item in cartItems" :key="item.id" class="sepet-item">
            <div class="row" style="font-size: 15px; align-items: center;">
              <!-- Ürün Görseli -->
              <div class="col-2" style="max-width: 100px; min-width: 100px;">
                <img :src="item.icon" width="76px" height="104px" />
              </div>

              <!-- Ürün Başlık -->
              <div class="col-4">
                <div class="urun-baslik">{{ item.isim }}</div>
              </div>

              <!-- Ürün Fiyat -->
              <div class="col-2">
                <div class="urun-fiyat">
                  {{ item.fiyat.toFixed(2) }} TL
                </div>
              </div>

              <!-- Miktar -->
              <div class="col-2">
                <div class="urun-adet">
                  <button
                    @click="decrementQuantity(item.id)"
                    :disabled="item.quantity <= 1"
                    class="sepet-miktar-buton"
                  >
                    -
                  </button>
                  Adet: {{ item.quantity }}
                  <button
                    @click="incrementQuantity(item.id)"
                    class="sepet-miktar-buton"
                  >
                    +
                  </button>
                </div>
              </div>

              <!-- Ürün Sil -->
              <div class="col-2">
                <button @click="removeItem(item.id)" class="urun-sil">Sil</button>
              </div>
            </div>
          </li>
        </ul>

        <!-- Sağ Taraf: Toplam ve Satın Al -->
        <div class="col-4">
          <div class="sepet-sag-kapsayici">
            <div class="sepet-toplam">
              <strong>Toplam Fiyat: {{ totalPrice }} TL</strong>
            </div>
            <button class="satin-al-buton" @click="satinAl">Satın Al</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Sepet Boşsa -->
    <div v-else>
      <p>Sepetiniz boş.</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useCartStore } from '@/stores/cart'

// Pinia Store
const cartStore = useCartStore()

// Popup görünürlüğü / mesaj
const isVisible = ref(false)
const message = ref('')

// Sepetteki ürünleri store'dan çekiyoruz
const cartItems = computed(() => cartStore.cartItems)

// Toplam fiyat için cartStore.cartTotal
// (Arzu ederseniz grandTotal için cartStore.grandTotal)
const totalPrice = computed(() => {
  // virgüllü gösterim
  return cartStore.cartTotal.toFixed(2)
})

// Ürünü silme işlemi (store metodu index alıyor)
function removeItem(itemId: string) {
  // itemId'ye göre index bul
  const index = cartItems.value.findIndex((item) => item.id === itemId)
  if (index !== -1) {
    cartStore.removeItem(index)
  }
}

// Miktar artırma
function incrementQuantity(itemId: string) {
  const index = cartItems.value.findIndex((item) => item.id === itemId)
  if (index !== -1) {
    cartStore.increaseQuantity(index)
  }
}

// Miktar azaltma
function decrementQuantity(itemId: string) {
  const index = cartItems.value.findIndex((item) => item.id === itemId)
  if (index !== -1) {
    cartStore.decreaseQuantity(index)
  }
}

// Sepeti tamamen boşaltmak isterseniz (store'da clearCart yoksa)
function clearCart() {
  // Tek tek silerek boşaltacağız
  cartStore.clearCart()
}

// Popup göster/kapat
function showPopup(newMessage: string) {
  message.value = newMessage
  isVisible.value = true
}
function closePopup() {
  isVisible.value = false
}

// Satın Al butonu
function satinAl() {
  if (cartItems.value.length === 0) {
    showPopup('Sepetiniz boş. Lütfen önce ürün ekleyin.')
    return
  }
  showPopup(`Satın alma işlemi tamamlandı. Toplam tutar: ${totalPrice.value} TL`)
  clearCart()
}
</script>

<style scoped>
.sepet-container {
  margin: 20px;
}

.sepet-item {
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

/* Ürün adı/fiyat/miktar */
.urun-baslik,
.urun-fiyat,
.urun-adet {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

/* Ürün Sil Butonu */
.urun-sil {
  color: #ff6000;
  background: none;
  border: none;
  cursor: pointer;
  margin-left: auto;
}

.sepet-toplam {
  margin-top: 20px;
  font-size: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
}

.sepet-miktar-buton {
  width: 25px;
  height: 25px;
  padding: 0%;
  font-weight: bolder;
  text-align: center;
  background-color: #f9f9f9;
  color: #ff6000;
  border-radius: 50%;
  border: 0px;
  border-color: #ff6000;
  cursor: pointer;
}
.sepet-miktar-buton:hover {
  background-color: #e0e0e0;
}

.satin-al-buton {
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  line-height: calc(var(--font-size-16) + 4px);
  font-size: var(--font-size-16);
  border: 1px solid #000;
  height: 56px;
  background-color: #fff;
  transition: all 0.2s linear;
  color: #000;
  width: 60%;
}
.satin-al-buton:hover {
  border: 1px solid #ff6000;
  background-color: #ff6000;
  color: #fff;
}

.sepet-sag-kapsayici {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  text-align: center;
  background-color: #f9f9f9;
}

/* Popup Stil */
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.popup-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}
.popup-content p {
  margin-bottom: 15px;
}
.popup-content button {
  background-color: #ff6000;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}
.popup-content button:hover {
  background-color: #e55600;
}
</style>
