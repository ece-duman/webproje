<template>
  <!-- 3 üstte bir altta resim olan kısım- firebasede body2 kısmı -->
  <div class="orta-banner-container">
    <div class="orta-banner-icerik">
      <!-- Üst kısımda 3 adet resim -->
      <div class="orta-banner-ust-kisim">
        <div class="zoom-container" v-if="resimler[1]">
          <img :src="resimler[1].resim" alt="Image 1" />
        </div>
        <div class="zoom-container" v-if="resimler[3]">
          <img :src="resimler[3].resim" alt="Image 2" />
        </div>
        <div class="zoom-container" v-if="resimler[2]">
          <img :src="resimler[2].resim" alt="Image 3" />
        </div>
      </div>

      <!-- Alt kısımda 1 adet resim -->
      <div class="orta-banner-alt-kisim" v-if="resimler[0]">
        <img :src="resimler[0].resim" alt="Image 4" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useResimlerStore } from '~/stores/body2Store'

// Pinia store'u kullanarak resimleri alıyoruz
const resimlerStore = useResimlerStore()
const resimler = ref([])

// Store'dan verileri çekiyoruz
onMounted(async () => {
  await resimlerStore.fetchResimler() // Firestore'dan verileri çek
  resimler.value = resimlerStore.resimler // Store'daki resimleri bileşen değişkenine ata
})
</script>

<style scoped>
.orta-banner-container {
  width: 1170px;
  margin: 0 auto;
  margin-top: 50px;
}
.orta-banner-icerik {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.orta-banner-ust-kisim {
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
}
.zoom-container {
  overflow: hidden;
  width: 360px;
  height: 195.5px;
  display: inline-block;
}
.zoom-container > img {
  width: 360px;
  height: 195.5px;
  transition: transform 0.5s ease;
}
.zoom-container > img:hover {
  cursor: pointer;
  transform: scale(1.05);
}
.orta-banner-alt-kisim {
  overflow: hidden;
  margin-top: 10px;
}
.orta-banner-alt-kisim > img {
  width: 1140px;
  height: 244.5px;
  transition: transform 0.5s ease;
}
.orta-banner-alt-kisim > img:hover {
  cursor: pointer;
  transform: scale(1.05);
}
</style>
