<template>
  <!-- daire şeklinde yayınevlerinin olduğu component. firebase'de yayinEvleri kısmı  -->
  <div class="slider-container">
    <div class="slider-icerik">
      <div class="slider-yazi">POPÜLER YAYINEVLERİ</div>
      <div class="slider-wrapper">
        <button class="slider-button left" @click="prevSlide">
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L9.41421 12L15.7071 18.2929C16.0976 18.6834 16.0976 19.3166 15.7071 19.7071C15.3166 20.0976 14.6834 20.0976 14.2929 19.7071L7.29289 12.7071C7.10536 12.5196 7 12.2652 7 12C7 11.7348 7.10536 11.4804 7.29289 11.2929L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289Z"
              fill="#808080"
            ></path>
          </svg>
        </button>
        <div class="slider">
          <div class="slider-track" ref="trackRef">
            <div
              v-for="(image, index) in images"
              :key="index"
              class="slider-item"
            >
              <div class="image-wrapper">
                <img :src="image" alt="Slider Image" />
              </div>
            </div>
          </div>
        </div>
        <button class="slider-button right" @click="nextSlide">
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            transform="matrix(-1, 0, 0, 1, 0, 0)"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L9.41421 12L15.7071 18.2929C16.0976 18.6834 16.0976 19.3166 15.7071 19.7071C15.3166 20.0976 14.6834 20.0976 14.2929 19.7071L7.29289 12.7071C7.10536 12.5196 7 12.2652 7 12C7 11.7348 7.10536 11.4804 7.29289 11.2929L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289Z"
              fill="#808080"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useYayinEvleriStore } from '~/stores/yayinEvleriStore';

const images = ref([]); // Resimlerin tutulduğu dizi
const currentIndex = ref(0); // Şu anki aktif indeks
const trackRef = ref(null);

// Pinia store'dan verileri al
const yayinEvleriStore = useYayinEvleriStore();

const updateTrackPosition = () => {
  if (trackRef.value) {
    const offset = -(currentIndex.value * (114 + 30)); // Görsel boyutu + margin
    trackRef.value.style.transform = `translateX(${offset}px)`;
  }
};

const prevSlide = () => {
  currentIndex.value =
    (currentIndex.value - 1 + images.value.length) % images.value.length;
  updateTrackPosition();
};

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % images.value.length;
  updateTrackPosition();
};

const startAutoSlide = () => {
  setInterval(() => {
    nextSlide();
  }, 3000);
};

onMounted(async () => {
  await yayinEvleriStore.fetchYayinEvleri(); // Store'dan verileri çek
  images.value = yayinEvleriStore.images; // Store'daki verileri bileşene ata
  startAutoSlide();
});
</script>

<style>
.slider-container {
  width: 1170px;
  margin: 0 auto;
}

.slider-icerik {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 15px;
}

.slider-yazi {
  color: #560083;
  font-size: 32px;
  font-weight: 600;
}

.slider-wrapper {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.slider {
  display: flex;
  align-items: center;
  overflow: hidden;
}

.slider-track {
  display: flex;
  transition: transform 2s ease-in-out;
  will-change: transform;
}

.slider-item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 114px;
  height: 114px;
  margin: 0 15px;
}

.image-wrapper {
  width: 114px;
  height: 114px;
  border: 4px solid #ff8000;
  border-radius: 50%;
  overflow: hidden;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.slider-button {
  position: absolute;
  display: flex;
  align-items: center;
  top: 50%;
  transform: translateY(-50%);
  background-color: #f4f4fe;
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  cursor: pointer;
  z-index: 1000;
}

.slider-button.left {
  left: 22px;
}

.slider-button.right {
  right: 22px;
}
</style>
