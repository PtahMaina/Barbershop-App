<template>
<div class="flex flex-col items-center justify-center">
  <div class="relative top-0">
  <img src="https://i.postimg.cc/yY98bncV/Group-1.png" alt="" class="relative top-0 object-cover w-screen banner">
  </div>
  <div class="relative flex items-center justify bottom-96">
    <div class="flex flex-col items-center justify-center">
      <h1 class="text-white">Masters of Barbering</h1>
       <h3 class="text-white">Lets Your Hair Do The Talking...</h3>
       <router-link :to="{ name: 'Login'}"> <h1 style="font-weight: bold;"><button class="btn btn-outline-light">BOOK NOW</button></h1></router-link>
    </div>
  </div>
  <div class="-mt-10">
    <h1>Why you should pay us a vist</h1>
  </div>

    <div class="flex flex-col mt-10 ">
      <div class="flex flex-col">
        <h1 class="">Our services</h1>
        <h1>Our core focus</h1>
      </div>
      <div class="grid grid-cols-4 mt-5">
      <div>
        <h1>Men's Haircut</h1>
        <p>Description</p>
      </div>
      <div>
        <h1>Treatment</h1>
        <p>Description</p>
      </div>
      <div>
        <h1>Beard Trim</h1>
        <p>Description</p>
      </div>
      <div>
        <h1>Wash</h1>
        <p>Description</p>
      </div>
      </div>
    </div>

</div>
 

  <!-- <img src="https://gentlemen-barberclubs.de/images/big/3.jpg" alt=""> -->
 
 
    <!-- <div class="spirit">
      <h1 class="energy d-flex justify-content-center" style="font-weight: bold;color:#b18044">THE ENERGY</h1>
      <div class="paragraph">
        <p>Here at The Urban Shave Barber Shop, we specialize in every barber specialty.
        We provide our customers with the best services possible.
        Our team of executives and well-informed barbers work to help you achieve your delighted look. 
        We flourish on good music, mindful conversations, and enhancing relations in our community.
        </p>   
      </div>
      <div class="border"></div>
    </div> -->
  <!-- <div class="container pt-5">
    <div class="row">
      <div class="col">
        <h2 style="font-weight: bold;color:#b18044">HOURS</h2>
        <h6>Tues-Saturday 9:00am-6:00pm</h6>
        <h6>Sat 9:00am-3:00p</h6>
        <h6>Closed Sun & Mon</h6>
      </div>
      <div class="col">
        <h2 style="font-weight: bold;color:#b18044">CONTACT US</h2>
        <h6>0761621649</h6>
      </div>
      <div class="col">
        <h2 style="font-weight: bold;color:#b18044">LOCATION</h2>
        <h6>18 Chukker Road, Kenwyn, Cape Town 7780</h6>
      </div>
    </div>
    </div>   -->
  
  

  

  
 
</template>

<script>
export default {
  
}
</script>


<style scoped>


.banner{
  height: 650px;
}

.bannerOverlay{
   height: 647px;
}

/* 
.blink-hard {
  animation: pulse 4s infinite;
  
}

.blink{
  background: transparent;
}
@keyframes pulse {
  50% {
    opacity: 0;
  }
}

.container {
  display:grid;
  justify-content: center;

}
img{
    width: 100%;
    height:100vh;
    object-fit: cover;
    -webkit-filter: blur(3px);
    filter: blur(3px);
    filter: brightness(0.5);
}

.border{
  display: inline-flex;
  justify-content:center;
  border: 1px solid;
  width: 300px
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
.spirit {
  padding-top:50px;
}

.paragraph p{
    font-size:22px;
    font-weight: 400;
    text-align: center;
    white-space: pre-wrap;
    padding-top: 50px;
}

@media only screen and (max-width: 600px) {
 .row{
   display:flex;
   flex-direction: column;
   align-items: center;
   
 }
 .col{
   padding: 10px;
 }
 .paragraph p{
    font-size:22px;
    font-weight: 400;
    text-align: center;
    white-space: pre-wrap;
    padding-top: 50px;
}
} */

</style>
