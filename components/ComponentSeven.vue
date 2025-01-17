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
        <div class="carousel-caption d-none d-md-block">
          <h5>{{ slide.title }}</h5>
          <p>{{ slide.description }}</p>
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


<script>
export default {
  data() {
    return {
      slides: [
        {
          image: '/icons/kazandiran-kasim-indirimleri-kampanyasi-banner-tr-181.jpg',
          alt: 'First slide',
          title: 'First slide label',
          description: 'Some representative placeholder content for the first slide.',
          interval: 10000,
        },
        {
          image:'/icons/is-bankasi-kultur-yayinlari-banner-tr-180.jpg',
          alt: 'Second slide',
          title: 'Second slide label',
          description: 'Some representative placeholder content for the second slide.',
          interval: 2000,
        },
        {
          image: '/icons/kazandiran-kasim-indirimleri-kampanyasi-alfa-yayin-grubu-banner-v2-tr-182.jpg',
          alt: 'Third slide',
          title: 'Third slide label',
          description: 'Some representative placeholder content for the third slide.',
          interval: 5000,
        },
        {
          image: '/icons/kazandiran-kasim-indirimleri-kampanyasi-april-yayincilik-banner-v2-tr-183.jpg',
          alt: 'Fourth slide',
          title: 'Fourth slide label',
          description: 'Some representative placeholder content for the fourth slide.',
          interval: 7000,
        },
        {
          image: '/icons/kazandiran-kasim-indirimleri-kampanyasi-arkadas-yayin-grubu-banner-v2-tr-184.jpg',
          alt: 'Fifth slide',
          title: 'Fifth slide label',
          description: 'Some representative placeholder content for the fifth slide.',
          interval: 8000,
        },
        {
          image: '/icons/kazandiran-kasim-indirimleri-kampanyasi-destek-yayinlari-banner-v2-tr-186.jpg',
          alt: 'Sixth slide',
          title: 'Sixth slide label',
          description: 'Some representative placeholder content for the sixth slide.',
          interval: 6000,
        },
        {
          image: '/icons/kazandiran-kasim-indirimleri-kampanyasi-dex-yayinevi-banner-v2-tr-187.jpg',
          alt: 'Seventh slide',
          title: 'Seventh slide label',
          description: 'Some representative placeholder content for the seventh slide.',
          interval: 10000,
        },
        {
          image: '/icons/kazandiran-kasim-indirimleri-kampanyasi-diyojen-yayincilik-banner-v2-tr-188.jpg',
          alt: 'Eighth slide',
          title: 'Eighth slide label',
          description: 'Some representative placeholder content for the eighth slide.',
          interval: 5000,
        },
        {
          image: '/icons/kazandiran-kasim-indirimleri-kampanyasi-epsilon-yayin-grubu-banner-v2-tr-189.jpg',
          alt: 'Ninth slide',
          title: 'Ninth slide label',
          description: 'Some representative placeholder content for the ninth slide.',
          interval: 7000,
        },
        {
          image: '/icons/kazandiran-kasim-indirimleri-kampanyasi-indigo-kitap-banner-v2-tr-190.jpg',
          alt: 'Tenth slide',
          title: 'Tenth slide label',
          description: 'Some representative placeholder content for the tenth slide.',
          interval: 9000,
        },
        {
          image: '/icons/kazandiran-kasim-indirimleri-kampanyasi-ithaki-yayin-grubu-banner-v2-tr-191.jpg',
          alt: 'Eleventh slide',
          title: 'Eleventh slide label',
          description: 'Some representative placeholder content for the eleventh slide.',
          interval: 4000,
        },
        {
          image: '/icons/kazandiran-kasim-indirimleri-kampanyasi-nox-yayinlari-banner-v2-tr-192.jpg',
          alt: 'Twelfth slide',
          title: 'Twelfth slide label',
          description: 'Some representative placeholder content for the twelfth slide.',
          interval: 5000,
        },
        {
          image: '/icons/kazandiran-kasim-indirimleri-kampanyasi-pegasus-yayinlari-banner-v2-tr-193.jpg',
          alt: 'Twelfth slide',
          title: 'Twelfth slide label',
          description: 'Some representative placeholder content for the twelfth slide.',
          interval: 5000,
        },
        {
          image: '/icons/kazandiran-kasim-indirimleri-kampanyasi-beta-kids-ve-beta-byou-secili-urunlerde-45-indirim-banner-tr-194.jpg',
          alt: 'Thirteenth slide',
          title: 'Thirteenth slide label',
          description: 'Some representative placeholder content for the thirteenth slide.',
          interval: 5000,
        },
      ],
    };
  },
};
</script>

<style scoped>
.carousel-item img {
  object-fit: cover;
  height: 60vh; /* Resim yüksekliğini yüzde 60 yaparak boyutları küçültüyoruz */
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
  width: 15px;  /* Butonun genişliği değişmeyecek */
  height: 15px; /* Butonun yüksekliği değişmeyecek */
  background-color: #fff; /* İç kısmı beyaz yapıyoruz */
  border: 2px solid #fff; /* Dış kısmı beyaz yapıyoruz */
  opacity: 0.7;
  border-radius: 50%; /* Yuvarlak şekil */
  transition: opacity 0.6s ease, background-color 0.3s ease;
}

.carousel-indicators button.active {
  opacity: 1;
  background-color: #fff; /* Aktif butonun iç kısmı beyaz */
  border-color: #fff; /* Aktif butonun dış kısmı beyaz */
}

.carousel-caption {
  width: 70%;
  color: #fff;
  padding: 1.25rem;
  margin-bottom: 1.25rem;
}


</style>
