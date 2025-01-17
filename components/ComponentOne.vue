<!-- components/ComponentOne.vue -->
<template>
  <header class="header">
     
          <div class="header-logo-container">
              <div class="header-logo">
                  <img src="public\items\kitapsepeti-logo1.png">
              </div>
          </div>
          <div class="header-arama-container">
              
                  <form class="search-form">
                      <span class="search-icon">
                      <svg style="padding: 4px; margin-left: 4px;" fill="#ff8000" height="24px" width="24px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 490.4 490.4" xml:space="preserve" stroke="#ff8000" transform="rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="6.865600000000001"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M484.1,454.796l-110.5-110.6c29.8-36.3,47.6-82.8,47.6-133.4c0-116.3-94.3-210.6-210.6-210.6S0,94.496,0,210.796 s94.3,210.6,210.6,210.6c50.8,0,97.4-18,133.8-48l110.5,110.5c12.9,11.8,25,4.2,29.2,0C492.5,475.596,492.5,463.096,484.1,454.796z M41.1,210.796c0-93.6,75.9-169.5,169.5-169.5s169.6,75.9,169.6,169.5s-75.9,169.5-169.5,169.5S41.1,304.396,41.1,210.796z"></path> </g> </g></svg>
                      </span>
                      <div class="divider">&nbsp;</div>                     
                      <input type="search" name="q" placeholder="Aradığınız ürünün adını yazınız." />
                      <button type="submit">ARA</button>
                  </form>                
          </div>
          <div class="header-sag-taraf-container">
              <button style="max-width: 134.5px;">
                  <div class="buton-dekorasyon">
                      <svg fill="#ff8000" width="52px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18.5347,16.5117 L15.0777,14.9407 C16.2477,14.0257 16.9997,12.6007 16.9997,10.9997 C16.9997,8.2387 14.7617,5.9997 11.9997,5.9997 C9.2387,5.9997 6.9997,8.2387 6.9997,10.9997 C6.9997,12.6007 7.7517,14.0257 8.9227,14.9407 L5.4657,16.5117 C5.1367,16.6617 4.8477,16.8787 4.6157,17.1457 C3.5967,15.6867 2.9997,13.9127 2.9997,11.9997 C2.9997,7.0297 7.0297,2.9997 11.9997,2.9997 C16.9707,2.9997 20.9997,7.0297 20.9997,11.9997 C20.9997,13.9127 20.4027,15.6867 19.3847,17.1457 C19.1527,16.8787 18.8637,16.6617 18.5347,16.5117 M7.9997,10.9997 C7.9997,8.7907 9.7907,6.9997 11.9997,6.9997 C14.2087,6.9997 15.9997,8.7907 15.9997,10.9997 C15.9997,13.2087 14.2087,14.9997 11.9997,14.9997 C9.7907,14.9997 7.9997,13.2087 7.9997,10.9997 M11.9997,20.9997 C9.3127,20.9997 6.9017,19.8227 5.2517,17.9557 C5.4057,17.7247 5.6217,17.5387 5.8797,17.4227 L9.9617,15.5667 C10.5837,15.8447 11.2737,15.9997 11.9997,15.9997 C12.7257,15.9997 13.4157,15.8447 14.0387,15.5667 L18.1207,17.4227 C18.3777,17.5387 18.5937,17.7247 18.7477,17.9557 C17.0987,19.8227 14.6867,20.9997 11.9997,20.9997 M11.9997,1.9997 C6.4767,1.9997 1.9997,6.4767 1.9997,11.9997 C1.9997,17.5227 6.4767,21.9997 11.9997,21.9997 C17.5227,21.9997 21.9997,17.5227 21.9997,11.9997 C21.9997,6.4767 17.5227,1.9997 11.9997,1.9997"></path> </g></svg>
                      <span style="font-size: 10px; color: white;">E-posta ile Giriş veya Kayıt Ol</span>
                  </div>
              </button>
                   
              <button style="background-color: #ff8000; border-color: #ff8000; width: 112px; position: relative;">
                  <div class="buton-dekorasyon" style="gap: 10px;">
                      <svg width="26px" height="26px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--emojione-monotone" preserveAspectRatio="xMidYMid meet" fill="#000000" transform="matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M61.063 2H58.25v.896c-3.916.876-4.479 4.511-4.7 5.9c-.105.657-.318 1.942-.582 3.516H3.988c-1.938 0-2.155 1.811-1.902 2.813l5.746 25.367c.252 1.002 1.313 1.82 2.353 1.82h42.944c1.034 0 1.877.841 1.877 1.875s-.843 1.875-1.877 1.875H6.255a1.874 1.874 0 1 0 0 3.75h2.43a7.494 7.494 0 0 0-3.872 6.563h1.875c0 3.105 2.52 5.625 5.625 5.625s5.625-2.52 5.625-5.625h1.875a7.495 7.495 0 0 0-3.873-6.563h26.494a7.495 7.495 0 0 0-3.873 6.563h1.875a5.627 5.627 0 0 0 11.252 0h1.875a7.497 7.497 0 0 0-3.872-6.563h3.44a5.628 5.628 0 0 0 5.625-5.625a5.626 5.626 0 0 0-5.627-5.625h-.697l2.398-14.91c.668-3.938 2.108-12.445 2.446-14.561c.17-1.069.335-1.82.974-2.241v.774h2.813A.94.94 0 0 0 62 6.688v-3.75A.94.94 0 0 0 61.063 2m-48.75 57.188A2.816 2.816 0 0 1 9.5 56.375h5.625a2.816 2.816 0 0 1-2.812 2.813m33.75 0a2.816 2.816 0 0 1-2.814-2.813h5.627a2.818 2.818 0 0 1-2.813 2.813m-2.307-42.194a1.07 1.07 0 0 1 1.04-.932h5.937c.516 0 .875.416.794.927l-.588 3.771c-.078.51-.567.927-1.084.927h-5.663a.826.826 0 0 1-.841-.932l.405-3.761m-1.009 9.375a1.073 1.073 0 0 1 1.04-.932h5.483c.517 0 .875.416.797.927l-.443 2.834c-.079.51-.567.927-1.084.927h-5.257a.828.828 0 0 1-.841-.932l.305-2.824M6.866 20.777l-.95-3.805c-.124-.502.198-.91.715-.91h7.059c.518 0 .985.419 1.04.932l.404 3.762a.828.828 0 0 1-.84.932H8.033c-.516 0-1.042-.411-1.167-.911m3.271 9.348c-.516 0-1.042-.41-1.166-.91l-.716-2.867c-.125-.502.195-.91.712-.91h5.729c.517 0 .985.419 1.04.932l.304 2.824a.827.827 0 0 1-.84.932h-5.063zm5.969 8.438h-3.865c-.519 0-1.042-.41-1.167-.91l-.716-2.867c-.124-.502.196-.91.714-.91h4.53c.517 0 .985.419 1.042.932l.302 2.824a.826.826 0 0 1-.84.931m11.492-.938a.942.942 0 0 1-.94.938h-4.891a1.07 1.07 0 0 1-1.039-.932l-.304-2.824a.825.825 0 0 1 .839-.932h5.395a.94.94 0 0 1 .94.938v2.812m0-8.437a.942.942 0 0 1-.94.938H20.86c-.516 0-.982-.419-1.04-.932l-.302-2.824a.826.826 0 0 1 .839-.932h6.301a.94.94 0 0 1 .94.938v2.812m0-8.438a.942.942 0 0 1-.94.938h-6.702a1.07 1.07 0 0 1-1.04-.932l-.404-3.762a.827.827 0 0 1 .84-.932h7.307a.94.94 0 0 1 .94.938v3.75zm10.159 16.881a1.071 1.071 0 0 1-1.04.932h-4.42a.941.941 0 0 1-.939-.938v-2.813a.94.94 0 0 1 .939-.938h4.924c.516 0 .896.419.84.932l-.304 2.825m.906-8.438a1.071 1.071 0 0 1-1.04.932h-5.326a.941.941 0 0 1-.939-.938v-2.813a.94.94 0 0 1 .939-.938h5.83c.517 0 .896.419.839.932l-.303 2.825m.906-8.437a1.071 1.071 0 0 1-1.04.932h-6.232a.941.941 0 0 1-.939-.938V17a.94.94 0 0 1 .939-.938h6.837c.517 0 .896.419.841.932l-.406 3.762m7.232 17.807v-.007l-.008.007H42.377c-.029 0-.054-.014-.083-.018c-.005-.034-.005-.068-.011-.104l-.044.092a.402.402 0 0 0 .037.008c-.461-.053-.791-.434-.738-.91l.302-2.824a1.073 1.073 0 0 1 1.04-.932h5.076c.517 0 .873.416.795.927l-.443 2.834c-.077.51-.565.927-1.082.927h-.425" fill="#fff"></path></g></svg>
                 
                      <span style="color:white; font-size: 13px;">Sepetim</span>
                  </div>
                  <!-- Counter -->
                  <span style="
                      position: absolute;
                      top: -10px; /* Butonun üst kısmından uzaklığı */
                      right: 0px; /* Sağ kenardan uzaklığı */
                      background-color: #e42437;
                      color: white;
                      font-size: 12px;
                      width: 20px;
                      height: 20px;
                      border-radius: 50%;
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      font-weight: bold;
                  ">
                      3
                  </span>
              </button>

          </div>
      
  </header>
</template>

<style>
.header{
width: 100%;
height: 90px;
background-color: #fff;
padding: 15px 15px;
display: flex; 
margin: 0 auto;
align-items: center; 
justify-content: center;

}

.header-logo-container{
  width: 292.5px;
  height: 60px;
  display: flex;
  justify-content: center;
  margin-right: 30px;
}

.header-logo{
  width: 238px;
  height: 60px;
}

.header-arama-container{
  width: 487.5px;
  height: 60px;
  align-items: center;
  display: flex;

}


.search-form {
display: flex;
align-items: center;
border: 1px solid #3f0068;;
border-radius: 4px;
overflow: hidden;
background-color: #fff;
max-height: 42px;
width: 457px;
}


.search-form .search-icon {
background-color: #fff;
display: flex;
justify-content: center;
align-items: center;
}



/* Çizgi */
.search-form .divider {
width: 1px;
height: 80%;
background-color: #3f0068; 
margin: 0 10px;
}


.search-form input {
flex: 1;
padding: 10px 15px;
border: none;
font-size: 14px;
outline: none;
}


.search-form button {
background-color: #3f0068;
color: #fff;
height: 42px;
width: 89px;
text-align: center;
right: 0px;
border-radius: 0 4px 4px 0;
font-size: 0.6875rem;
font-weight: 700;
}

.search-form button:hover {
background-color: #2d004b;
}

.header-sag-taraf-container{
  width: 375px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px;
  gap: 10px;
}

.header-sag-taraf-container>button{
  height: 42px;
  color: #3f0068;
  background-color: #3f0068;
  border-radius: 4px;
  box-shadow: 2px 2px 7px 0 rgba(86, 0, 142, 0.4);
}

.buton-dekorasyon{
  display: flex;
  gap: 2px;
}   
</style>
