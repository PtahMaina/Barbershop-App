<template>
  <img src="https://gentlemen-barberclubs.de/images/big/3.jpg" alt="">

  <div class="imageContainer">
    <div class="center">
      <h1 style="font-size:50px">"Masters of Barbering"</h1>
      <h3>Lets Your Hair Do The Talking...</h3>
       <router-link :to="{ name: 'Login'}"> <h1 style="font-weight: bold;"><button class="btn">BOOK NOW</button></h1></router-link>
    </div>
  </div>
    <div class="info">
      <h1 class="energy d-flex justify-content-center" style="font-weight: bold;color:#b18044">THE ENERGY</h1>
      <h5 class="paragraph">Here at The Urban Shave Barber Shop, we specialize in every barber specialty. We provide our customers with the best services possible. Our team of executives and well-informed barbers work to help you achieve your delighted look. We flourish on good music, mindful conversations, and enhancing relations in our community.</h5>

    </div>
  
  

  

  
 
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

h1,h3{
  background: transparent;
}
.info {
  padding-top:50px;
}

.info h5{
  display:flex;
  text-align: center;
  padding-right: 170px;
  padding-left: 170px;
  padding-top:50px;
}
</style>
