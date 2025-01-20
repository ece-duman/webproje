import { defineStore } from 'pinia';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    activeTab: 'register' as 'login' | 'register',
    loginData: {
      email: '',
      password: '',
    },
    registerData: {
      ad: '',
      soyad: '',
      dogumTarihi: '',
      telefon: '',
      email: '',
      sifre: '',
      sifreTekrar: '',
      ticariIleti: false,
      kvkk: false,
    },
  }),
  actions: {
    setActiveTab(tab: 'login' | 'register') {
      this.activeTab = tab;
    },
    async loginUser($db: any, router: any) {
      try {
        const usersRef = collection($db, 'uyeler');
        const q = query(
          usersRef,
          where('email', '==', this.loginData.email),
          where('sifre', '==', this.loginData.password)
        );
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          alert('Giriş başarılı!');
          console.log('Giriş yapılan kullanıcı:', querySnapshot.docs[0].data());
          this.loginData.email = '';
          this.loginData.password = '';
          router.push('/');
        } else {
          alert('E-posta veya şifre hatalı. Lütfen tekrar deneyin.');
        }
      } catch (error) {
        console.error('Giriş sırasında bir hata oluştu:', error);
        alert('Giriş sırasında bir hata oluştu. Lütfen tekrar deneyin.');
      }
    },
    async registerUser($db: any) {
      if (this.registerData.sifre !== this.registerData.sifreTekrar) {
        alert('Şifreler eşleşmiyor!');
        return;
      }

      if (!this.registerData.kvkk) {
        alert('KVKK sözleşmesini kabul etmelisiniz.');
        return;
      }

      try {
        await addDoc(collection($db, 'uyeler'), {
          ad: this.registerData.ad,
          soyad: this.registerData.soyad,
          telefon: this.registerData.telefon,
          email: this.registerData.email,
          sifre: this.registerData.sifre,
        });
        alert('Kayıt başarılı!');
        this.registerData = {
          ad: '',
          soyad: '',
          dogumTarihi: '',
          telefon: '',
          email: '',
          sifre: '',
          sifreTekrar: '',
          ticariIleti: false,
          kvkk: false,
        };
      } catch (error) {
        console.error('Kayıt sırasında bir hata oluştu:', error);
        alert('Kayıt sırasında bir hata oluştu. Lütfen tekrar deneyin.');
      }
    },
  },
});
