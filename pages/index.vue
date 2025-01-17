<template>
   
    <ComponentOne/>
    <ComponentEight/>
    <ComponentSeven/>
    <ComponentNine/>
    <ComponentThree/>
    <ComponentNine/>
    <ComponentTen/>
    <ComponentNine/>
    <ComponentTwo/>
    <ComponentSix/>

</template>

<style>
.bosluk{
    padding: 50px;
}

</style>
  
  <script setup>
  import { useRouter } from 'vue-router';
import ComponentEight from '~/components/ComponentEight.vue';
import ComponentNine from '~/components/ComponentNine.vue';
import ComponentOne from '~/components/ComponentOne.vue';
import ComponentSeven from '~/components/ComponentSeven.vue';
import ComponentSix from '~/components/ComponentSix.vue';
import ComponentTen from '~/components/ComponentTen.vue';
import ComponentThree from '~/components/ComponentThree.vue';
import ComponentTwo from '~/components/ComponentTwo.vue';
  
  const router = useRouter();
  
  const navigateToComponent = (componentId) => {
    router.push(`/component/${componentId}`);
  };

  const goToComponentTwo = () => {
  // ComponentTwo'ya yönlendir yeni ekledim
  router.push({ path: '/component/2' });
}

  </script>
  
  <style scoped>
  .container {
    text-align: center;
    margin: 20px;
  }
  .button-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }
  button {
    padding: 10px 20px;
    cursor: pointer;
  }
  </style>
  
