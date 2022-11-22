<template>
<div class="flex flex-col items-center justify-center">
  <div class="">
  <img src="https://i.postimg.cc/yY98bncV/Group-1.png" alt="" class="object-cover  banner">
  </div>
  <div class="absolute flex items-center justify bottom-96">
    <div class="flex flex-col items-center justify-center">
      <h1 class="font-bold text-white uppercase text-7xl">Masters of Barbering</h1>
       <h3 class="text-xl font-semibold text-white">Lets Your Hair Do The Talking...</h3>
        <div class="flex items-center justify-end mt-5">
            <router-link :to="{ name: 'Login'}" ><button class="py-3 px-7">BOOK NOW</button></router-link>
        </div>
       <!-- <router-link :to="{ name: 'Login'}"> <h1 style="font-weight: bold;"><button class="px-5 py-3">BOOK NOW</button></h1></router-link> -->
    </div>
  </div>
  <div class="w-full h-40 -m-2 bg-black">
    <div class="grid items-start grid-cols-3 mx-auto mt-5 text-white maxWidth ">
      <div class="flex flex-col gap-2  text-left">
        <h1 class="text-2xl font-semibold">HOURS</h1>
        <p class="text-base font-normal">Tues-Saturday 9:00am-6:00pm</p>
        <p class="text-base font-normal">Closed Sun & Mon</p>
      </div>
      <div class="">
        <h1 class="text-2xl font-semibold">LOCATION</h1>
        <p  class="text-base font-normal">18 Chukker Road, Kenwyn, Cape Town 7780</p>
      </div>
      <div class="text-right">
        <h1 class="text-2xl font-semibold">CONTACT US</h1>
        <p class="text-base font-normal">0761621649</p>
      </div>
    </div>
  </div>

    <div class="flex flex-col w-full mt-10 sectionHeight maxWidth">
      <div class="flex flex-col">
        <h1 class="text-3xl font-semibold">Our Core Focus</h1>
      </div>
      <div class="grid grid-cols-4 gap-4 mt-20">
      <div class="px-10 py-10 bgGrey" >
        <h1>Men's Haircut</h1>
        <p>Full style and cut to suit your needs, done by our professionals.</p>
      </div>
      <div class="px-10 py-10 bgGrey">
        <h1>Treatment</h1>
        <p>Get advice and treatment methods to keep your hair in that healthy state.</p>
      </div>
      <div class="px-10 py-10 bgGrey">
        <h1>Beard Trim</h1>
        <p>Keeping your beard in full shape and style, keeeping as silk and precise as you like it.</p>
      </div>
      <div class="px-10 py-10 bgGrey">
        <h1>Wash</h1>
        <p>Nouring your hair and sculp with a full wash and blow if need be.</p>
      </div>
      </div>
    </div>

    <div class="w-full h-full mx-auto -mt-32 maxWidth">
      <h1 class="text-3xl font-semibold">Our Gallery</h1>
      <div class="grid items-start w-full grid-cols-3 mt-20">
          <div class="flex items-center justify-center w-full ">
            <img src="https://i.postimg.cc/Wp0qDvyM/Rectangle-4.png" alt="" class="object-cover rounded-sm image1">
          </div>

          <div class="flex items-center justify-center w-full ">
              <img src="https://i.postimg.cc/Mp3nkKc8/Rectangle-5.png" alt=""  class="object-cover rounded-sm image2">
          </div>

          <div class="flex items-center justify-center w-full">
              <img src="https://i.postimg.cc/MGcvz2Rf/Rectangle-6.png" alt="" class="object-cover rounded-sm image3">
          </div>
      </div>
      <div class="grid items-end grid-cols-3 -mt-20">
          <div class="flex items-center justify-center w-full">
              <img src="https://i.postimg.cc/YSJj9nfn/Rectangle-7.png" alt="" class="object-cover rounded-sm image4">
          </div>

          <div class="flex items-center justify-center w-full mt-28 ">
              <img src="https://i.postimg.cc/7ZZ5QTZV/Rectangle-8.png" alt="" class="object-cover rounded-sm image5">
          </div>

          <div class="flex items-center justify-center w-full -mt-7">
              <img src="https://i.postimg.cc/xCM8bv60/Rectangle-9.png" alt="" class="object-cover rounded-sm image6">
          </div>
      </div>
    </div>

</div>
  <!-- <img src="https://gentlemen-barberclubs.de/images/big/3.jpg" alt=""> -->
    <!-- <div class="spirit">
      <h1 class="energy d-flex justify-content-center" >THE ENERGY</h1>
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
        <h2 >HOURS</h2>
        <h6>Tues-Saturday 9:00am-6:00pm</h6>
        <h6>Sat 9:00am-3:00p</h6>
        <h6>Closed Sun & Mon</h6>
      </div>
      <div class="col">
        <h2 >CONTACT US</h2>
        <h6>0761621649</h6>
      </div>
      <div class="col">
        <h2 >LOCATION</h2>
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




/* .bannerOverlay{
   height: 647px;
} */

.sectionHeight{
  height: 500px;
}


.image1{
  width: 410px;
  height: 374px;
}

.image2{
  width: 360px;
  height: 488px;
}

.image3{
    width: 410px;
  height: 343px;
}

.image4{
  width: 410px;
  height: 347px;
}

.image5{
  width: 360px;
  height: 237px;
}

.image6{
    width: 410px;
  height: 377px;
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
