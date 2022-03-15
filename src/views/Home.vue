<template>
  <img src="https://gentlemen-barberclubs.de/images/big/3.jpg" alt="">

  <div class="imageContainer">
    <div class="center">
      <!-- <h1>Gents BarberShop</h1> -->
       <router-link :to="{ name: 'Login'}"> <h1 style="font-weight: bold;"><button class="btn">BOOK NOW</button></h1></router-link>
    </div>
  </div>

  <h1 style="font-weight: bold;color:#b18044">THE VIBE</h1>

  

  

  
 
</template>

<script>
export default {
  
}
</script>


<style scoped>

img{
    width: 100%;
    height:100vh;
    object-fit: cover;
    /* -webkit-filter: blur(3px);
    filter: blur(3px); */
    filter: brightness(0.5);
}

.center {
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   background: transparent;
}

h1{
  background: transparent;
}

</style>
