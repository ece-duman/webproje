export default defineNuxtConfig({
  modules: ['@pinia/nuxt'], // Pinia modülünü ekleyin
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  plugins: [
    '~/plugins/firebase.ts'
  ],
  // CSS dosyalarını dahil et
  css: [
    'bootstrap/dist/css/bootstrap.min.css', // Bootstrap CSS
  ],

  // Head yapılandırması (meta, link, script gibi)
  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { charset: 'utf-8' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }, // Favicon
      ],
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js',
          async: true, // Opsiyonel: Script'i asenkron olarak yükler
        },
      ],
    },
  },

  // Eğer gerekli ise, build kısmında bootstrap'ı transpile et
  build: {
    transpile: ['bootstrap'],
  },

  // TypeScript yapılandırması
  typescript: {
    strict: true, // TypeScript'i daha sıkı kontrol eder
    shim: false, // Volatil TypeScript hatalarını devre dışı bırakır
  },
});