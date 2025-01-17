<template>
    <div class="image-container">
      <div class="image-item">
        <img src="public/icons/AAA.jpg" alt="Image 1" />
      </div>
      <div class="image-item">
        <img src="public/icons/BBB.jpg" alt="Image 2" />
      </div>
      <div class="image-item">
        <img src="public/icons/CCC.jpg" alt="Image 3" />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ImageGallery'
  }
  </script>
  
  <style scoped>
  .image-container {
    display: flex; /* Flexbox kullanarak öğeleri yan yana diz */
    justify-content: center; /* Öğeleri yatayda ortala */
    gap: 20px; /* Resimler arasındaki boşluğu ayarlayın */
    padding: 20px 40px 20px 40px;
  }
  
  .image-item {
    width: 25%; /* Her bir resmin genişliğini %30 yap */
    overflow: hidden; /* Taşmalar engellenir */
  }
  
  .image-item img {
    width: 100%; /* Resmi kapsayıcıya sığdırmak için */
    height: auto; /* Yüksekliğini oranlı şekilde ayarlayın */
    transition: transform 0.3s ease; /* Yumuşak geçiş efekti */
  }
  
  .image-item img:hover {
    transform: scale(1.1); /* Fare ile üzerine gelindiğinde resmi %10 büyüt */
  }
  </style>
  