<template>
  <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
    <!-- Carousel Indicators -->
    <div class="carousel-indicators">
      <button
        v-for="(slide, index) in slides"
        :key="index"
        :data-bs-target="'#carouselExampleDark'"
        :data-bs-slide-to="index"
        :class="{ active: index === 0 }"
        :aria-label="'Slide ' + (index + 1)"
        :aria-current="index === 0 ? 'true' : 'false'"
      ></button>
    </div>

    <!-- Carousel Inner -->
    <div class="carousel-inner">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="carousel-item"
        :class="{ active: index === 0 }"
        :data-bs-interval="slide.interval"
      >
        <img :src="slide.image" class="d-block w-100" :alt="slide.alt" />
        <div class="carousel-caption d-none d-md-block" v-if="slide.title || slide.description">
          <h5 v-if="slide.title">{{ slide.title }}</h5>
          <p v-if="slide.description">{{ slide.description }}</p>
        </div>
      </div>
    </div>

    <!-- Carousel Controls -->
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleDark"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleDark"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { useSliderStore } from '~/stores/slider' // Store dosyanızın yolu

// Pinia store'u kullan
const sliderStore = useSliderStore()

// Bileşen yüklendiğinde verileri çek
onMounted(() => {
  sliderStore.fetchSliderData()
})

// slides'i reaktif hale getirmek için computed
const slides = computed(() => sliderStore.slides)
</script>

<style scoped>
.carousel-item img {
  object-fit: cover;
  height: 60vh; /* Resim yüksekliğini yüzde 60 yaparak boyutları ayarlıyoruz */
  width: 100%;  /* Resmin genişliğini tüm alanı kapsayacak şekilde ayarlıyoruz */
}

.carousel-control-prev,
.carousel-control-next {
  width: 10%; /* Kontrol butonlarının genişliğini küçültüyoruz */
  opacity: 0.5;
  transition: opacity 0.15s ease;
}

.carousel-control-prev:hover,
.carousel-control-next:hover {
  opacity: 0.9;
}

.carousel-indicators button {
  width: 15px;
  height: 15px;
  background-color: #fff;
  border: 2px solid #fff;
  opacity: 0.7;
  border-radius: 50%;
  transition: opacity 0.6s ease, background-color 0.3s ease;
}

.carousel-indicators button.active {
  opacity: 1;
  background-color: #fff;
  border-color: #fff;
}

.carousel-caption {
  width: 70%;
  color: #fff;
  padding: 1.25rem;
  margin-bottom: 1.25rem;
}
</style>
