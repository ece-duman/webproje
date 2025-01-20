<template>
  <div class="popup-overlay">
    <div class="popup-container">
      <!-- Başlık -->
      <div class="popup-header">
        <h3>Ürün Başarıyla Sepete Eklendi</h3>
        <span class="success-icon">✔</span>
      </div>

      <!-- Ürün Bilgisi -->
      <div class="popup-content">
        <div class="product-wrapper">
          <img
            :src="selectedProduct?.img || defaultImage"
            alt="Siyam Kitap Resmi"
            class="product-image"
          />
          <div class="product-info-wrapper">
            <div class="product-info">
              <p class="product-brand fw-bold">
                {{ selectedProduct?.publisher || 'Epsilon Yayınevi' }}
              </p>
              <p class="product-title">
                {{ selectedProduct?.name || 'Siyam IV Mare' }}
              </p>
              <div class="price-wrapper">
                <del class="text-gray text-delete price-old">305,00 TL</del>
                <div class="current-price fw-black text-primary">
                  {{ selectedProduct?.price || '252,80 TL' }}
                </div>
              </div>
              <div class="count-info text-black">1 Adet</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Düğmeler -->
      <div class="popup-buttons">
        <!-- Bu buton sidebar aç/kapa yapacak -->
        <button @click="toggleCartSidebar" class="btn btn-primary">
          SEPETE GİT
        </button>

        <button @click="" class="btn btn-secondary">SATIN AL</button>
        <!-- Modal Kapat Butonu -->
        <button @click="$emit('close-modal')" class="btn btn-secondary">
          KAPAT
        </button>
      </div>
    </div>
  </div>

  <!-- Sepet Bileşeni -->
  <ComponentFive v-if="isCartVisible" @close="toggleCartSidebar" />
</template>

<script>
import ComponentFive from './ComponentFive.vue'

export default {
  name: 'ProductAddedModal',
  components: {
    ComponentFive,
  },
  props: {
    selectedProduct: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      defaultImage: 'https://www.kitapsepeti.com/siyam-545196-37-K.jpg',
      isCartVisible: false, // Sepetin görünüp görünmediğini tutan değişken
    }
  },
  methods: {
    toggleCartSidebar() {
      // Açık/kapalı durumu tersine çevirir
      this.isCartVisible = !this.isCartVisible
    },
    goToCart() {
      this.$router.push('/cart')
    },
    proceedToCheckout() {
      this.$router.push('/checkout')
    },
  },
}
</script>


<style scoped>
/* Senin style kodların değişmedi. */
.popup-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  pointer-events: none;
}

.popup-container {
  background: #fff;
  width: 570px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  pointer-events: auto;
}
/* Genel Popup Stil */
.popup-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  pointer-events: none; /* Arka plan tıklamalarını pasif yapar */
}

.popup-container {
  background: #fff;
  width: 570px; /* Ana container genişliği */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  pointer-events: auto;
}

/* Başlık */
.popup-header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 16px;
}

.popup-header h3 {
  font-size: 18px;
  font-weight: bold;
  margin-right: 8px; /* Başlık ile tik arasına biraz mesafe ekleyelim */
}

.success-icon {
  color: #43B54C;
  font-size: 20px;
}

/* İçerik */
.popup-content {
  border-top: 1px solid #ddd;
  padding-top: 16px;
}

.product-wrapper {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.product-image {
  width: 86px;
  height: 129px;
  border-radius: 4px;
  object-fit: cover;
}

/* Yazılar için wrapper */
.product-info-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
}

.product-info {
  flex: 1;
}

/* Yazılar */
.product-brand {
  font-size: 14px;
  font-weight: bold;
}

.product-title {
  font-size: 16px;
}

/* Fiyat düzeni */
.price-wrapper {
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: #56008E;
}

.price-old {
  font-size: 12px;
  color: #888;
  text-decoration: line-through;
}

.current-price {
  font-size: 16px;
  font-weight: bold;
  color: #56008E;
}

/* Adet bilgisi */
.count-info {
  font-size: 14px;
  color: #000;
}

/* Düğmeler */
.popup-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
}

.btn {
  width: 31%;
  padding: 8px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  border-radius: 4px;
  transition: background-color 0.3s;
  cursor: pointer;
  border: none;
}

.btn-primary {
  background-color: #56008E;
  color: #fff;
}

.btn-primary:hover {
  background-color: #4d00cc;
}

.btn-secondary {
  background-color: #333;
  color: #fff;
}

.btn-secondary:hover {
  background-color: #111;
}
</style>
