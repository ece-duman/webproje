<template>
  <div class="image-container">
    <!-- 1. resim (varsa) -->
    <div class="image-item" v-if="resim[0]">
      <img :src="resim[0].resim" alt="Image 1" />
    </div>

    <!-- 2. resim (varsa) -->
    <div class="image-item" v-if="resim[1]">
      <img :src="resim[1].resim" alt="Image 2" />
    </div>

    <!-- 3. resim (varsa) -->
    <div class="image-item" v-if="resim[2]">
      <img :src="resim[2].resim" alt="Image 3" />
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useBody1Store } from '~/stores/body1Store';

// Pinia store'dan verileri alıyoruz
const body1Store = useBody1Store();
const resim = computed(() => body1Store.resim);

// Bileşen yüklendiğinde store'dan verileri çek
onMounted(() => {
  body1Store.fetchBody1Images();
});
</script>

<style scoped>
.image-container {
  display: flex; /* Flexbox kullanarak öğeleri yan yana diz */
  justify-content: center; /* Öğeleri yatayda ortala */
  gap: 20px; /* Resimler arasındaki boşluğu ayarlayın */
  padding: 20px 40px 20px 40px;
}

.image-item {
  width: 25%; /* Örnek: her bir resmin genişliği */
  overflow: hidden; /* Taşmaları engeller */
}

.image-item img {
  width: 100%; /* Resmi kapsayıcıya sığdırmak için */
  height: auto; /* Yüksekliğini oranlı şekilde ayarlar */
  transition: transform 0.3s ease; /* Yumuşak geçiş efekti */
}

.image-item img:hover {
  transform: scale(1.1); /* Üzerine gelindiğinde resmi %10 büyüt */
}
</style>
