<template>
  <div>
    <h2>ÇOK SATANLAR</h2>

    <!-- Kaydırılabilir Alan -->
    <div class="slider-container">
      <!-- Kaydırma Butonları -->
      <div class="slider-buttons left" @click="scrollLeft"> < </div>
      <div class="slider-buttons right" @click="scrollRight"> > </div>

      <!-- Kartlar Dinamik Olarak Yüklenecek -->
      <div class="cards-container" ref="cardsContainer">
        <div
          v-for="(card, index) in visibleCards"
          :key="index"
          class="card"
        >
          <img
            :src="card.img"
            class="card-img-top"
            alt="Example Image"
          />
          <div class="card-body">
            <div class="stars">
              <span class="star">&#9733;</span>
              <span class="star">&#9733;</span>
              <span class="star">&#9733;</span>
              <span class="star">&#9733;</span>
              <span class="star">&#9733;</span>
            </div>
            <p class="name">{{ card.name }}</p>
            <p class="card-text">
              {{ card.publisher }}<br>{{ card.author }}
            </p>

            <!-- Fiyat Butonu -->
            <button
              class="btn btn-primary"
              :data-price="card.price"
              @click="addToCart(card)"
            >
              {{ card.price }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigasyon Yuvarlakları -->
    <div class="navigation-dots">
      <span
        v-for="(dot, index) in totalPages"
        :key="index"
        :class="['dot', { active: currentIndex === index }]"
        @click="goToPage(index)"
      ></span>
    </div>

    <!-- Modal Component (Göster/Gizle) -->
    <ComponentFour
      v-if="showModal"
      :selected-product="selectedProduct"
      @close-modal="closeModal"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useCartStore } from '~/stores/cart';

// Modal kontrol vb. değişkenler
const showModal = ref(false);
const selectedProduct = ref(null);
const currentIndex = ref(0);

// Pinia store'u kullanarak verileri alıyoruz
const cokSatanlarStore = useCokSatanlarStore();
const cards = computed(() => cokSatanlarStore.cards);

// Modal fonksiyonları
const openModal = (card) => {
  selectedProduct.value = card;
  showModal.value = true;
};
const closeModal = () => {
  showModal.value = false;
  selectedProduct.value = null;
};

// Sepete ekleme fonksiyonu
const addToCart = async (card) => {
  await cokSatanlarStore.addToCart(card);
  openModal(card); // Modalı açarak kullanıcıya bilgi ver
};

// Bileşen yüklendiğinde verileri çek
onMounted(() => {
  cokSatanlarStore.fetchCokSatanlar();
});

// Slider’daki görüntüleme
const visibleCards = computed(() => {
  return cards.value.slice(currentIndex.value, currentIndex.value + 6);
});
const totalPages = computed(() => {
  return Math.ceil(cards.value.length / 6);
});

// Kaydırma fonksiyonları
const scrollLeft = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
};
const scrollRight = () => {
  if (currentIndex.value + 1 < cards.value.length) {
    currentIndex.value++;
  }
};
const goToPage = (index) => {
  currentIndex.value = index * 6;
};
</script>

<style scoped>
/* ------- Ana Kart Container ve Slider Stilleri ------- */
.cards-container {
  display: flex;
  overflow-x: auto;
  gap: 5px;
  justify-content: center;
  padding-left: 5px;
  padding-right: 5px;
}

.card {
  width: 100%;
  max-width: 160px;
  min-width: 120px;
  margin: 10px 5px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  height: 440px;
  overflow: hidden;
  border-radius: 0;
}

.card-img-top {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  transition: transform 0.3s ease;
}

.card-img-top:hover {
  transform: scale(1.1);
}

.card-body {
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-grow: 1;
  padding-bottom: 40px;
}

/* ------- Yazı Stilleri ------- */
.card-title {
  font-size: 14px;
  margin-bottom: 10px;
}

.card-text {
  font-size: 12px;
  margin-bottom: 10px;
  color: rgb(116, 82, 185);
}

.name {
  text-align: center;
  font-weight: bold;
  color: #555;
  margin-top: 5px;
  font-size: 13px;
}

/* ------- Yıldızlar ------- */
.stars {
  display: flex;
  justify-content: center;
  margin: 5px 0;
}

.star {
  font-size: 18px;
  color: rgb(196, 193, 181);
  margin: 0 2px;
}

/* ------- Buton Stili ------- */
.btn {
  width: 100%;
  height: 45px;
  margin-top: auto;
  text-align: center;
  padding: 1px;
  padding-top: 2px;
  padding-bottom: 2px;
  font-size: 14px;
  margin-bottom: 1px;
  background-color: rgb(120, 75, 162);
  color: transparent;
  border-radius: 5px;
  border: none;
  transition: all 0.3s ease;
}

/* Başlangıçta fiyat görünür */
.btn::before {
  content: attr(data-price);
  display: block;
  color: white;
  font-size: 16px;
  font-weight: bold;
}

/* Hover (üzerine gelindiğinde) durumu */
.btn:hover {
  background-color: rgb(120, 75, 162);
  color: white;
}

/* Hover durumunda sadece "Sepete Ekle" yazısı gösterilecek, fiyat gizlenir */
.btn:hover::before {
  content: "SEPETE EKLE";
  font-size: 14px;
  color: white;
  font-weight: normal;
}

.btn:hover::after {
  content: "Sepete Ekle";
  display: block;
  color: white;
}

/* Başlangıçta yalnızca fiyatı gösterir */
.btn::after {
  content: "249,99TL";
  display: block;
  color: white;
}

/* ------- Slider Container ------- */
.slider-container {
  position: relative;
  display: flex;
  justify-content: center;
}

.cards-container {
  display: flex;
  overflow-x: auto;
  gap: 10px;
  justify-content: center;
  padding: 0 50px;
  max-width: 100%;
}

/* ------- Navigation Dots ------- */
.navigation-dots {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: gray;
  margin: 0 5px;
  cursor: pointer;
}

.dot.active {
  background-color: rgb(214, 128, 48);
}

/* ------- Slider Buttons ------- */
.slider-buttons {
  position: absolute;
  top: 40%;
  background-color: rgba(241, 231, 231, 0.5);
  color: rgb(172, 165, 165);
  font-size: 24px;
  padding: 15px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 2;
  transition: background-color 0.3s ease;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.slider-buttons.left {
  left: calc(50% - 510px);
  transform: translateY(-50%);
}

.slider-buttons.right {
  right: calc(50% - 513px);
  transform: translateY(-50%);
}

/* ------- Başlık ------- */
h2 {
  color: #892c93;
  text-align: center;
}
</style>
