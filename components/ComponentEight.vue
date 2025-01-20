<template>
  <div>
    <!-- Kategori Butonları ve Açılır Menü -->
    <div class="container mt-5">
      <div class="row align-items-center">
        <!-- Yatay Çizgi ve İçerik -->
        <div class="col-12">
          <div class="category-container">
            <!-- Açılır Menü (En Sol) -->
            <div 
              class="dropdown" 
              @mouseenter="showDropdown" 
              @mouseleave="hideDropdown"
            >
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                aria-expanded="false"
              >
                <div class="icon-container">
                  <img src="public/icons/menu.ico" alt="" class="icon-size" />
                </div>
              </button>
              <ul 
                class="dropdown-menu" 
                :class="{'show': isDropdownVisible}" 
                aria-labelledby="dropdownMenuButton"
              >
                <!-- Edebiyat Kategorisi -->
                <li 
                  @mouseenter="showEdebiyatMenu" 
                  @mouseleave="hideEdebiyatMenu"
                >
                  <a class="dropdown-item" href="#">
                    Edebiyat &raquo;
                  </a>
                  <ul v-if="isEdebiyatMenuVisible" class="dropdown-menu dropdown-submenu submenu submenu-columns">
                    <div class="submenu-column"></div>
                    <li><a class="dropdown-item" href="#">Roman</a></li>
                    <li><a class="dropdown-item" href="#">Deneme 2</a></li>
                    <li><a class="dropdown-item" href="#">Türk Edebiyatı</a></li>
                    <li><a class="dropdown-item" href="#">Öykü</a></li>
                    <li><a class="dropdown-item" href="#">Şiir 5</a></li>
                  </ul>
                </li>

                <!-- Eğitim Kategorisi -->
                <li><a class="dropdown-item" href="#">Eğitim</a></li>

                <!-- Felsefe Kategorisi -->
                <li 
                  @mouseenter="showFelsefeMenu" 
                  @mouseleave="hideFelsefeMenu"
                >
                  <a class="dropdown-item" href="#">
                    Felsefe Kitapları &raquo;
                  </a>
                  <ul v-if="isFelsefeMenuVisible" class="dropdown-menu dropdown-submenu submenu-columns">
                    <div class="row">
                      <div class="col-4">
                        <li><a class="dropdown-item" href="#">Araştırma</a></li>
                        <li><a class="dropdown-item" href="#">Din Felsefesi</a></li>
                        <li><a class="dropdown-item" href="#">Siyaset Felsefesi</a></li>
                      </div>
                      <div class="col-4">
                        <li><a class="dropdown-item" href="#">Genel Felsefe </a></li>
                        <li><a class="dropdown-item" href="#">Felsefe Tarihi</a></li>
                        <li><a class="dropdown-item" href="#">Diğer Felsefe </a></li>
                      </div>
                      <div class="col-4">
                        <li><a class="dropdown-item" href="#">Felsefi Akımlar</a></li>
                        <li><a class="dropdown-item" href="#">Filozoflar</a></li>
                      </div>
                    </div>
                  </ul>
                </li>

                <!-- Diğer Kategoriler -->
                <li><a class="dropdown-item" href="#">Çocuk Kitapları</a></li>
                <li><a class="dropdown-item" href="#">Gezi ve Rehber</a></li>
                <li><a class="dropdown-item" href="#">Sağlık</a></li>
                <li><a class="dropdown-item" href="#">İnsan ve Toplum</a></li>
                <li><a class="dropdown-item" href="#">İnanç ve Mitolojiler</a></li>
                <li><a class="dropdown-item" href="#">Psikoloji</a></li>
                <li><a class="dropdown-item" href="#">Hukuk</a></li>
                <li><a class="dropdown-item" href="#">İslam</a></li>
                <li><a class="dropdown-item" href="#">Yayınevleri</a></li>
                <li><a class="dropdown-item" href="#">Yazarlar</a></li>
              </ul>
            </div>
    
            <!-- Kategori Metinleri (Yatay Çizgi Üzerinde ve Arasında Çizgiler) -->
            <div 
              class="category-item" 
              v-for="category in categories" 
              :key="category.name" 
              :class="{ 'highlighted-item': category.name === 'ÇOK SATANLAR' }"
            >
              {{ category.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
export default {
  name: 'ComponentOne',
  data() {
    return {
      isDropdownVisible: false, // Menü görünürlüğünü kontrol eden değişken
      isEdebiyatMenuVisible: false, // Edebiyat alt menüsünün görünürlüğü
      isFelsefeMenuVisible: false, // Felsefe alt menüsünün görünürlüğü
      categories: [
        { name: 'ROMAN', subcategories: ['Roman', 'Şiir', 'Drama'] },
        { name: 'BİLİM KURGU', subcategories: ['Sınav Kitapları', 'Pedagoji', 'Okul Rehberliği'] },
        { name: 'ÇOCUK KİTAPLARI', subcategories: ['Ontoloji', 'Epistemoloji', 'Ahlak Felsefesi'] },
        { name: 'ÇİZGİ ROMAN', subcategories: ['Masallar', 'Eğitici Kitaplar', 'Resimli Kitaplar'] },
        { name: 'SINAV KİTAPLARI', subcategories: ['Seyahat Rehberleri', 'Doğa Yürüyüşleri', 'Tarihi Yerler'] },
        { name: 'ÇOK SATANLAR', subcategories: ['Beslenme', 'Psikoloji', 'Egzersiz'] },
      ]
    };
  },
  methods: {
    showDropdown(): void {
      this.isDropdownVisible = true; // Genel menüyü aç
    },
    hideDropdown(): void {
      this.isDropdownVisible = false; // Genel menüyü kapat
    },
    showEdebiyatMenu(): void {
      this.isEdebiyatMenuVisible = true; // Edebiyat alt menüsünü göster
    },
    hideEdebiyatMenu(): void {
      this.isEdebiyatMenuVisible = false; // Edebiyat alt menüsünü gizle
    },
    showFelsefeMenu(): void {
      this.isFelsefeMenuVisible = true; // Felsefe alt menüsünü göster
    },
    hideFelsefeMenu(): void {
      this.isFelsefeMenuVisible = false; // Felsefe alt menüsünü gizle
    }
  }
};
</script>

<style scoped>
.header + .category-container {
  margin-top: 10px; /* Header ile category-container arasında 10px boşluk bırakır */
}
/* İcon boyutunu küçültmek için */
.icon-size {
  width: 24px;
  height: 24px;
}

/* İconu içerisine alacak kutu */
.icon-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
}

/* Yatay çizgi ve içeriği ayarlama */
.category-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #56008e;
  width: auto;
  padding: 0px 0;
  border-radius: 5px;
  
}

/* Kategori metinlerinin stilini ayarlama */
.category-item {
  font-size: 18px;
  font-weight: normal;
  color: white;
  padding: 5px 25px;
  border-radius: 0;
  border-right: 2px solid white;
}

/* Son iki kategoriden sonra çizgi göstermesin */
.category-item:nth-last-child(-n+2) {
  border-right: none; /* Son iki öğenin sağ kenar çizgilerini kaldır */
}
/* Son kategoriyi sağa kaydır */
.category-item:nth-last-child(1) {
  margin-left: 50px; 
}


/* Açılır menü stilini değiştirme */
.dropdown-menu {
  border: none;
  box-shadow: none;
  background-color: white;
  display: none;
  padding: 30px;
  min-width: 300px;
}

.dropdown-menu.show {
  display: block;
}

/* Hover durumunda */
.dropdown:hover .dropdown-menu {
  display: block;
}

/* Alt menü stilini */
.dropdown-submenu {
  position: absolute;
  left: 100%;
  top: 0;
  display: none;
}

.dropdown-menu > li:hover > .dropdown-submenu {
  display: block;
}

/* Felsefe Kitapları menüsünü 3 sütun halinde göstermek için */
.submenu-columns {
  display: grid;
  grid-template-columns: repeat(3, 1200px); /* 3 sütun ayarı */
  gap: 20px; /* Hücreler arası boşluk */
  padding: 20px; /* Tüm container'ı çevreleyen boşluk */
}

/* Menüdeki her bir sütun için düzenleme */
.submenu-column {
  list-style-type: none;
  padding: 0;
  gap: 200px;
}

.submenu-column li {
  padding: 6px 0px 10px 10px;
}

.submenu-column li a {
  color: #000;
  text-decoration: none;
  padding: 5px;
  display: block;
}

/* Hover efekti */
.submenu-column li a:hover {
  background-color: #f1f1f1;
}

/* Son iki öğeyi tek sütunda yapmak için */
.submenu-columns .submenu-column:nth-child(7),
.submenu-columns .submenu-column:nth-child(8) {
  grid-column: span 1; /* Son 2 öğeyi 1 sütun olarak bırak */
}

/* Menüdeki öğelerin yerleşimini 3 satırda düzenlemek için */
.submenu-columns {
  grid-template-rows: auto auto 1fr; /* İlk iki satırda 3 öğe, 3. satırda 2 öğe olacak */
}

/* 'ÇOK SATANLAR' yazısının içini beyaz, yazısını mor yapma */
.highlighted-item {
  color: #6a0dad; /* Mor yazı rengi */
  background-color: white; /* Beyaz arka plan */
  padding: 5px 10px; /* Yazı etrafında boşluk */
  border-radius: 5px; /* Köşeleri yuvarlak yapmak */
}
/* Alt menü öğelerinin yazı boyutunu küçültme */
.dropdown-submenu .dropdown-item {
  font-size: 12px; /* Burada 12px istediğiniz daha küçük bir değere ayarlanabilir */
}


</style> 