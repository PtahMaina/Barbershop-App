<template>
<div class="flex flex-col items-center justify-center">
  <div class="">
  <img src="https://i.postimg.cc/yY98bncV/Group-1.png" alt="" class="object-cover banner">
  </div>
  <div class="absolute flex items-center justify bottom-96">
    <div class="flex flex-col items-center justify-center">
      <h1 class="font-bold text-white uppercase text-7xl">Masters of Barbering</h1>
       <h3 class="text-xl font-semibold text-white">Lets Your Hair Do The Talking...</h3>
        <div class="flex items-center justify-end mt-5">
            <router-link :to="{ name: 'Login'}" ><button class="py-3 text-xl font-medium cursor-pointer px-7">Book Now</button></router-link>
        </div>
       <!-- <router-link :to="{ name: 'Login'}"> <h1 style="font-weight: bold;"><button class="px-5 py-3">BOOK NOW</button></h1></router-link> -->
    </div>
  </div>
  <div class="hidden w-full h-40 -m-2 bg-black md:block">
    <div class="grid items-start grid-cols-3 mx-auto mt-5 text-white maxWidth ">
      <div class="flex flex-col gap-2 text-left">
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

    <div class="block w-full h-full pt-10 pb-10 -m-2 bg-black md:hidden">
    <div class="flex flex-col gap-10 mx-auto mt-5 text-white ">
      <div class="flex flex-col gap-2 ">
        <h1 class="text-2xl font-semibold">HOURS</h1>
        <p class="text-base font-normal">Tues-Saturday 9:00am-6:00pm</p>
        <p class="text-base font-normal">Closed Sun & Mon</p>
      </div>
      <div class="">
        <h1 class="text-2xl font-semibold">LOCATION</h1>
        <p  class="text-base font-normal">18 Chukker Road, Kenwyn, Cape Town 7780</p>
      </div>
      <div class="">
        <h1 class="text-2xl font-semibold">CONTACT US</h1>
        <p class="text-base font-normal">0761621649</p>
      </div>
    </div>
  </div>

      <div class="flex-col hidden mt-10 md:flex">
        <h1 class="text-3xl font-semibold">Our Core Focus</h1>
      </div>
    <div class="hidden mx-auto mt-10 md:block sectionHeight maxWidth ">
      <div class="flex w-full gap-4 mt-20 overflow-auto md:grid md:grid-cols-4">
      <div class="flex flex-col items-center justify-center h-52 bgGrey w-72">
        <h1>Men's Haircut</h1>
        <p>Full style and cut to suit your needs, done by our professionals.</p>
      </div>
      <div class="flex flex-col items-center justify-center h-52 bgGrey w-72">
        <h1>Treatment</h1>
        <p>Get advice and treatment methods to keep your hair in that healthy state.</p>
      </div>
      <div class="flex flex-col items-center justify-center h-52 bgGrey w-72">
        <h1>Beard Trim</h1>
        <p>Keeping your beard in full shape and style, keeeping as silk and precise as you like it.</p>
      </div>
      <div class="flex flex-col items-center justify-center h-52 bgGrey w-72">
        <h1>Wash</h1>
        <p>Nouring your hair and sculp with a full wash and blow if need be.</p>
      </div>
      </div>
    </div>
</div>

  <div class="flex flex-col mt-10 md:hidden">
        <h1 class="text-3xl font-semibold">Our Core Focus</h1>
      </div>
<div class="flex w-full mt-10 overflow-x-auto overflow-y-hidden md:hidden">
  <div class="flex gap-4 px-3 snap-center">
         <div class="grid justify-center w-56 grid-cols-1 bgGrey h-52 ">
             <h1 class="flex items-end justify-center">Men's Haircut</h1>
          <p>Full style and cut to suit your needs, done by our professionals.</p>
         </div>
         <div class="grid justify-center w-56 grid-cols-1 bgGrey h-52 ">
             <h1  class="flex items-end justify-center">Treatment</h1>
          <p>Get advice and treatment methods to keep your hair in that healthy state.</p>
         </div>
         <div class="grid justify-center w-56 grid-cols-1 bgGrey h-52 ">
             <h1  class="flex items-end justify-center">Beard Trim</h1>
          <p>Keeping your beard in full shape and style, keeeping as silk and precise as you like it.</p>
         </div>
         <div class="grid justify-center w-56 grid-cols-1 bgGrey h-52 ">
             <h1  class="flex items-end justify-center">Wash</h1>
          <p>Nouring your hair and sculp with a full wash and blow if need be.</p>
         </div>
  </div>
</div>

    <div class="hidden w-full h-full mx-auto -mt-32 maxWidth md:block">
      <h1 class="text-3xl font-semibold">Our Gallery</h1>
      <div class="items-start hidden w-full grid-cols-3 mt-20 md:grid">
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
      <div class="items-end hidden grid-cols-3 -mt-20 md:grid">
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

    <div class="flex flex-col items-center justify-center w-full gap-2 px-3 mb-10 md:hidden ">
            <h1 class="mt-10 mb-10 text-3xl font-semibold ">Our Gallery</h1>
      <div class="flex justify-center w-full gap-2">
        <img src="https://i.postimg.cc/mrVPxSHj/Rectangle-4.png" alt="" class="w-48">
        <img src="https://i.postimg.cc/B6VtbQN1/Rectangle-5.png" alt="" class="w-48">
      </div>
      <div class="flex justify-center w-full ">
          <img src="https://i.postimg.cc/FFYVZYM8/Rectangle-6.png" alt="" class="w-96">
      </div>
      <div class="flex justify-center w-full gap-2 ">
        <img src="https://i.postimg.cc/NF2FHqPC/Rectangle-7.png" alt="" class="w-48">
        <img src="https://i.postimg.cc/bdXJ0C7y/Rectangle-9.png" alt="" class="w-48">
      </div>
      <div class="flex justify-center w-full ">
        <img src="https://i.postimg.cc/Vs2BHY16/Rectangle-8.png" alt="" class="w-96">
      </div>
    </div>
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
