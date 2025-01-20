<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';
import { useNuxtApp } from '#app';

const authStore = useAuthStore();
const router = useRouter();
const { $db } = useNuxtApp();
</script>

<template>
  <div>
    <!-- Ana içerik -->
    <main>
      <div class="container">
        <!-- Sol tarafta Üye Girişi veya Üye Kayıt Formu -->
        <section class="form-section">
          <!-- Sekme Başlıkları -->
          <div class="tab-header">
            <button 
              :class="{ active: authStore.activeTab === 'login' }"
              @click="authStore.setActiveTab('login')"
            >
              Üye Girişi
            </button>
            <button 
              :class="{ active: authStore.activeTab === 'register' }"
              @click="authStore.setActiveTab('register')"
            >
              Üye Kayıt
            </button>
          </div>

          <!-- Üye Girişi Formu -->
          <div v-if="authStore.activeTab === 'login'" class="login-form">
            <form @submit.prevent="authStore.loginUser($db, router)">
              <div class="form-group">
                <label for="emailLogin">E-posta adresinizi giriniz</label>
                <input
                  type="email"
                  id="emailLogin"
                  v-model="authStore.loginData.email"
                  required
                />
              </div>
              <div class="form-group">
                <label for="passwordLogin">Şifrenizi giriniz</label>
                <input
                  type="password"
                  id="passwordLogin"
                  v-model="authStore.loginData.password"
                  required
                />
              </div>
              <button type="submit" class="submit-btn">
                Giriş Yap
              </button>
            </form>
          </div>

          <!-- Üye Kayıt Formu -->
          <div v-else-if="authStore.activeTab === 'register'" class="register-form">
            <form @submit.prevent="authStore.registerUser($db)">
              <div class="form-group">
                <label for="ad">Ad *</label>
                <input 
                  type="text" 
                  id="ad"
                  v-model="authStore.registerData.ad"
                  required
                />
              </div>
              <div class="form-group">
                <label for="soyad">Soyad *</label>
                <input 
                  type="text" 
                  id="soyad"
                  v-model="authStore.registerData.soyad"
                  required
                />
              </div>
              <div class="form-group">
                <label for="dogumTarihi">Doğum Tarihi *</label>
                <input
                  type="date"
                  id="dogumTarihi"
                  v-model="authStore.registerData.dogumTarihi"
                  required
                />
              </div>
              <div class="form-group">
                <label for="telefon">Cep Telefonu *</label>
                <input
                  type="tel"
                  id="telefon"
                  v-model="authStore.registerData.telefon"
                  required
                />
              </div>
              <div class="form-group">
                <label for="email">E-Posta Adresi *</label>
                <input
                  type="email"
                  id="email"
                  v-model="authStore.registerData.email"
                  required
                />
              </div>
              <div class="form-group">
                <label for="sifre">Şifre *</label>
                <input
                  type="password"
                  id="sifre"
                  v-model="authStore.registerData.sifre"
                  required
                />
              </div>
              <div class="form-group">
                <label for="sifreTekrar">Şifre Tekrar *</label>
                <input
                  type="password"
                  id="sifreTekrar"
                  v-model="authStore.registerData.sifreTekrar"
                  required
                />
              </div>
              <div class="form-check-group">
                <input 
                  type="checkbox" 
                  id="ticariIleti"
                  v-model="authStore.registerData.ticariIleti"
                />
                <label for="ticariIleti">
                  Ticari elektronik ileti, e-posta, sms ve arama metnini okudum, onaylıyorum.
                </label>
              </div>
              <div class="form-check-group">
                <input 
                  type="checkbox" 
                  id="kvkk"
                  v-model="authStore.registerData.kvkk"
                  required
                />
                <label for="kvkk">
                  KVKK Sözleşmesi’ni okudum ve kabul ediyorum.
                </label>
              </div>
              <button type="submit" class="submit-btn">
                KAYIT OL
              </button>
            </form>
          </div>
        </section>

        <!-- Sağ tarafta görsel + metin -->
        <aside class="info-section">
          <h2>Tercihen Kitapsepeti</h2>
          <p>
            Kitap; insanlık tarihinin büyük bir bölümünü kaplayan, insanların 
            dünyasını genişletip onları sınırsız yolculuğa çıkaran en temel nesne.
          </p>
        </aside>
      </div>
    </main>

    <!-- Alt Kısım (Footer) -->
    <footer class="footer">
      <p>© 2025 Örnek KitapSepeti Tasarımı</p>
    </footer>
  </div>
</template>

 
 
  <style scoped>
  /* Genel ayarlar */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Open Sans', sans-serif;
    background-color: #fafafa;
    color: #333;
  }
  
  /* Üst kısım (Header) */
  .header {
    background-color: #5f2caf; /* Mor tonunuza göre değiştirebilirsiniz */
    color: #fff;
    padding: 1rem;
    text-align: center;
    font-size: 1.3rem;
    font-weight: bold;
  }
  
  /* Ana container */
  .container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    max-width: 1200px;
    margin: 2rem auto;
    gap: 2rem;
  }
  
  /* Form bölümü */
  .form-section {
    background-color: #fff;
    padding: 2rem;
    border-radius: 8px;
    flex: 1;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
  }
  
  .tab-header {
    display: flex;
    gap: 2rem;
    margin-bottom: 1.5rem;
    border-bottom: 1px solid #ddd;
  }
  
  .tab-header button {
    background: none;
    border: none;
    padding: 0.5rem;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    color: #666;
    position: relative;
  }
  
  .tab-header button:hover {
    color: #5f2caf;
  }
  
  .tab-header button.active {
    color: #5f2caf;
    border-bottom: 3px solid #5f2caf;
  }
  
  .login-form form {
    margin-bottom: 1rem;
  }
  
  .form-group {
    margin-bottom: 1rem;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 0.4rem;
    font-weight: 600;
  }
  
  .form-group input[type="email"],
  .form-group input[type="password"] {
    width: 100%;
    padding: 0.6rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .remember-password {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }
  
  .form-check-group {
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }
  
  .form-check-group input[type="checkbox"] {
    transform: scale(1.1);
    cursor: pointer;
  }
  
  .forgot-link {
    font-size: 0.9rem;
    color: #999;
    text-decoration: none;
  }
  
  .forgot-link:hover {
    text-decoration: underline;
  }
  
  .submit-btn {
    background-color: #ff8000;
    color: #fff;
    border: none;
    padding: 0.8rem 1.2rem;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    font-weight: 600;
    transition: background-color 0.3s;
  }
  
  .submit-btn:hover {
    background-color: #e76b00;
  }
  
  /* Alternatif giriş butonu */
  .alternative-login {
    display: flex;
    align-items: center;
    margin-top: 1rem;
    gap: 1rem;
  }
  
  .alternative-login span {
    color: #999;
  }
  
  .google-btn {
    background-color: #fff;
    border: 1px solid #ccc;
    color: #444;
    font-weight: bold;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.3s;
  }
  
  .google-btn:hover {
    background-color: #f2f2f2;
  }
  
  /* Bilgilendirme (aside) bölümü */
  .info-section {
    flex: 1;
    background-color: #fff;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
  }
  
  .info-section h2 {
    color: #5f2caf;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  .info-section p {
    margin-bottom: 1rem;
    line-height: 1.4;
  }
  
  .note-box {
    background-color: #f7f7f7;
    border-left: 4px solid #5f2caf;
    padding: 1rem;
    border-radius: 4px;
    margin-bottom: 1rem;
  }
  
  /* Örnek resim */
  .info-image {
    display: block;
    width: 100%;
    max-width: 350px;
    margin-top: 1rem;
    border-radius: 6px;
  }
  
  /* Alt kısım (Footer) */
  .footer {
    text-align: center;
    padding: 1rem;
    color: #666;
    font-size: 0.9rem;
    background-color: #f0f0f0;
  }
  </style>
  