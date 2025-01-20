<template>
  <div class="container-fluid">
    <div class="row">
      <!-- Sol Alan: Kategoriler, Önemli Bilgiler, Hızlı Erişim, Üye -->
      <div class="col-md-8 left-section">
        <div class="top-content">
          <div class="flex-container">
            <div class="flex-item"><!-- Esnek düzen için bir flexbox -->
              <h5>Kategoriler</h5>
              <ul>
                <li>Edebiyat Kitapları</li>
                <li>Çocuk Kitapları</li>
                <li>Tarih Kitapları</li>
                <li>Sağlık Kitapları</li>
                <li>Yemek Kitapları</li>
              </ul>
            </div>

            <div class="flex-item">
              <h5>Önemli Bilgiler</h5>
              <ul>
                <li>Teslimat Koşulları</li>
                <li>Üyelik Sözleşmesi</li>
                <li>Satış Sözleşmesi</li>
                <li>Garanti ve İade Koşulları</li>
                <li>Gizlilik ve Güvenlik</li>
              </ul>
            </div>

            <div class="flex-item">
              <h5>Hızlı Erişim</h5>
              <ul>
                <li>İletişim</li>
                <li>Yeni Çıkan Kitaplar</li>
                <li>Çok Satan Kitaplar</li>
                <li>Müşteri Hizmetleri</li>
              </ul>
            </div>

            <div class="flex-item">
              <h5>Üye</h5>
              <ul>
                <li>Üye Kayıt</li>
                <li>Giriş Yap</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Beyaz Çizgi ile Ayrılmış Sağ Alan: Sosyal Medya ve Telefon Numarası -->
      <div class="col-md-4 right-section">
        <div class="content-area">
          <div class="menu-item-wrapper">
            <!-- Sosyal Medya Başlığı (Mobilde ve Masaüstünde farklı gösterilecek) -->
            <div class="d-none d-md-flex justify-content-end social-title mb-1">
              Sosyal Medyada Bizi Takip Edin!
            </div>

            <div id="footer-social-list" class="row list-style-none d-flex align-items-center flex-wrap justify-content-end">
              <div class="col-4 col-md-12">
                <div class="d-flex d-md-none social-title">
                  Sosyal Medyada Bizi Takip Edin!
                </div>
              </div>
              <div class="col-8 col-md-12 d-flex align-items-center justify-content-end gap-1 ">
                <!-- Sosyal medya linkleri -->
                <div>
                  <a id="social-media-330221" href="https://www.instagram.com/kitapsepeticom/" target="_blank" title="Instagram">
                    <img src="https://www.kitapsepeti.com/Data/img/menu_item/1/tr_img_1_221.png" width="38" height="38" alt="Instagram">
                  </a>
                </div>
                <div>
                  <a id="social-media-330222" href="https://www.facebook.com/kitapsepeti" target="_blank" title="Facebook">
                    <img src="https://www.kitapsepeti.com/Data/img/menu_item/2/tr_img_1_222.png" width="38" height="38" alt="Facebook">
                  </a>
                </div>
                <div>
                  <a id="social-media-330223" href="https://twitter.com/kitapsepeticom" target="_blank" title="Twitter">
                    <img src="https://www.kitapsepeti.com/Data/img/menu_item/3/tr_img_1_223.png" width="38" height="38" alt="Twitter">
                  </a>
                </div>
                <div>
                  <a id="social-media-330224" href="https://www.youtube.com/@kitapsepeticom" target="_blank" title="Youtube">
                    <img src="https://www.kitapsepeti.com/Data/img/menu_item/4/tr_img_1_224.png" width="38" height="38" alt="Youtube">
                  </a>
                </div>
                <div>
                  <a id="social-media-330225" href="https://www.tiktok.com/@kitapsepeticom" target="_blank" title="TikTok">
                    <img src="https://www.kitapsepeti.com/Data/img/menu_item/5/tr_img_1_225.png" width="38" height="38" alt="TikTok">
                  </a>
                </div>
              </div>
            </div>

            <!-- Telefon Numarası -->
            <div class="w-100 py-2">
              <div class="row justify-content-end">
                <img src="https://www.kitapsepeti.com/theme/v5-kitapsepeti/assets/footer/support-icon.svg" width="77" height="98" alt="Telefon Numarası">
                <div class="col-auto footer-phone">
                  <strong class="d-block text-white text-right">
                    Telefon Numarası
                  </strong>
                  <a href="tel:+902124813111" id="footer-phone-link-330" class="text-white">
                    +90 212 481 31 11
                  </a>
                  <div class="col-12 fw-bold text-primary bg-light border-round">
                    HAFTA İÇİ: 09:00 - 18:00
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Vue 3 ve Nuxt 3 özellikleri burada kullanılabilir
</script>

<style scoped>
/* Sayfa arka planını mor yapma */
body {
  background-color: #56008e; /* Mor renk */
  color: white; /* Yazı rengi beyaz */
}

/* Sol alanın kutu şeklinde düzenlenmesi */
.left-section {
  background-color: #56008e;
  color: white;
  border-right: 2px solid white; /* Beyaz çizgi ile ayırma */
  padding: 20px;
  
}

/* Sağ alan (sosyal medya ve telefon numarası) kutusu */
.right-section {
  background-color: #56008e; /* Mor arka plan */
  color: white; /* Beyaz yazı rengi */
  padding: 20px;
  border-left: 2px solid white; /* Beyaz çizgi ile ayırma */
}

.top-content {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
}

.flex-container {
  display: flex;
  gap: 10px; /* Her bir item arasındaki boşluk */
  flex-wrap: wrap;
}

.flex-item {
  width: 220px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

h5 {
  font-weight: bold;
  margin-bottom: 10px;
}

ul {
  list-style-type: none;
  padding-left: 0;
}

ul li {
  padding: 5px 0;
}

/* Sosyal medya simgeleri */
#footer-social-list img {
  width: 38px;
  height: 38px;
}

.footer-phone {
  text-align: right;
}

.footer-phone a {
  color: white;
  text-decoration: none;
}

/* Mobilde farklı davranışlar */
@media (max-width: 767px) {
  .col-md-4 {
    margin-top: 20px;
  }
}
</style>
