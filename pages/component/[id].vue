<template>
    <div class="component-page">
      <h1>Component {{ id }}</h1>
      <!-- Dinamik olarak bileşen gösterme -->
      <component :is="component" />
      <button @click="goBack">Go Back</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import ComponentOne from '@/components/ComponentOne.vue';
  
  /* Mevcut bileşenler listesi
  const components = {
    1: 'ComponentOne',
    2: 'ComponentTwo',
    3: 'ComponentThree',
    4: 'ComponentFour',
    5: 'ComponentFive',
    6: 'ComponentSix',
    7: 'ComponentSeven',
    8: 'ComponentEight',
    9: 'ComponentNine',
    10: 'ComponentTen',
    // İstediğin kadar bileşen ekleyebilirsin 
  }; */

  // Dinamik bileşenleri tanımlamak için
  const components = {
    1: defineAsyncComponent(() => import('@/components/ComponentOne.vue')),
    2: defineAsyncComponent(() => import('@/components/ComponentTwo.vue')),
    3: defineAsyncComponent(() => import('@/components/ComponentThree.vue')),
    4: defineAsyncComponent(() => import('@/components/ComponentFour.vue')),
    5: defineAsyncComponent(() => import('@/components/ComponentFive.vue')),
    6: defineAsyncComponent(() => import('@/components/ComponentSix.vue')),
    7: defineAsyncComponent(() => import('@/components/ComponentSeven.vue')),
    8: defineAsyncComponent(() => import('@/components/ComponentEight.vue')),
    9: defineAsyncComponent(() => import('@/components/ComponentNine.vue')),
    10: defineAsyncComponent(() => import('@/components/ComponentTen.vue')),
    // Eğer bileşen sayısını arttırmak isterseniz buraya ekleyebilirsiniz
  };
  
  const route = useRoute();
  const router = useRouter();
  const id = route.params.id;
  
  // Hangi bileşenin gösterileceğini belirle
  //const componentName = ref(components[id] || 'DefaultComponent');

  // Bileşeni dinamik olarak belirleme
  const component = ref(components[id] || null); // Varsayılan null
  
  // Geri dönüş butonu
  const goBack = () => {
    router.push('/');
  };
  </script>

<style scoped>
.component-page {
  text-align: center;
}
button {
  margin-top: 20px;
  padding: 10px 20px;
  cursor: pointer;
}
</style>
  