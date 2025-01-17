<template>
  <div class="orta-banner-container">
      <div class="orta-banner-icerik">
          <div class="orta-banner-ust-kisim">
              <div class="zoom-container"><img src="public\banner\cok-satan-kitaplar-1-tr-tr-1.jpg"></div>
              <div class="zoom-container"><img src="public\banner\yeni-cikan-kitaplar-2-tr-tr-2.jpg"></div>
              <div class="zoom-container"><img src="public\banner\sinavlara-hazirlik-kitaplari-3-tr-tr-3.jpg"></div>                
          </div>
          <div class="orta-banner-alt-kisim">
              <img src="public\banner\cocuk-kitaplari-1-tr-tr-1.jpg">
          </div>
      </div>
  </div>
</template>

<style>
.orta-banner-container{
  width: 1170px;
  margin: 0 auto;
  margin-top: 50px;
}
.orta-banner-icerik{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
}
.orta-banner-ust-kisim{
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
/* border-radius: 10px; */ 
display: inline-block;
}
.zoom-container>img{
  width: 360px;
  height: 195.5px;
  transition: transform 0.5s ease;
}
.zoom-container>img:hover{
  cursor: pointer;
  transform: scale(1.05);
}
.orta-banner-alt-kisim{
  overflow: hidden;
  margin-top: 10px;
}
.orta-banner-alt-kisim>img{
  width: 1140px;
  height: 244.5px;
  transition: transform 0.5s ease;
}
.orta-banner-alt-kisim>img:hover{
  cursor: pointer;
  transform: scale(1.05);
}
</style>