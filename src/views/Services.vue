<template>
<div class="flex flex-col items-center justify-center">
  <div class="">
  <img src="https://i.postimg.cc/fTdGcJf2/sevice-banner.png" alt="" class="object-cover  banner">
  </div>
  <div class="absolute flex items-center justify bottom-96">
    <div class="flex flex-col items-center justify-center">
      <h1 class="font-bold text-white uppercase text-7xl">OUR SERVICES & PRICES</h1>
       <!-- <h3 class="text-xl font-semibold text-white">Lets Your Hair Do The Talking...</h3> -->
       <!-- <router-link :to="{ name: 'Login'}"> <h1 style="font-weight: bold;"><button class="px-5 py-3">BOOK NOW</button></h1></router-link> -->
    </div>
  </div>
    <h1 class="text-3xl font-semibold">Hair </h1>
    <div class="grid grid-cols-2 w-full mx-auto maxWidth items-center">
        <div class=" h-full w-full flex flex-col items-start justify-start gap-5 mt-10">
          <div class="text-left">
            <h1 class="text-2xl font-semibold">Classic Gents Cut</h1>
            <p class="text-base font-normal">Short back and sides with a scissor cut top.</p>
          </div>
          <div class="text-left">
            <h1 class="text-2xl font-semibold">Skin Fade</h1>
            <p class="text-base font-normal">Blended down to zero/skin.</p>
          </div>
          <div class="text-left">
            <h1 class="text-2xl font-semibold">Scissor Cut</h1>
            <p class="text-base font-normal">Scissors all round or to your needs.</p>
          </div>
          <div class="text-left">
            <h1 class="text-2xl font-semibold">Machine Cut</h1>
            <p class="text-base font-normal">Clippers and round or to your needs.</p>
          </div>
          <div class="text-left">
            <h1 class="text-2xl font-semibold">Buzz Cut</h1>
            <p class="text-base font-normal">All round  eqaul length ,clipper cut.</p>
          </div>
          <div class="text-left">
            <h1 class="text-2xl font-semibold">Head Shave</h1>
            <p class="text-base font-normal">Head shave wiht hot towel and razor.</p>
          </div>
        </div>
        <div class=" h-full w-full flex flex-col  gap-10 justify-evenly">
            <div class="text-left flex flex-col  bg-red-300">
              <h1 class="text-2xl font-semibold"></h1>
            <p class="text-base font-normal">R 350</p>
          </div>
            <div class="text-left">
            <p class="text-base font-normal">R 350</p>
          </div>
            <div class="text-left">
            <p class="text-base font-normal">R 350</p>
          </div>
            <div class="text-left">
            <p class="text-base font-normal">R 350</p>
          </div>
            <div class="text-left">
            <p class="text-base font-normal">R 350</p>
          </div>
            <div class="text-left">
            <p class="text-base font-normal">R 350</p>
          </div>
        </div>
    </div>
</div>


  <!-- <h1 class="head" style="font-weight: bold;color:#b18044">SERVICES</h1>
  <div class="border"></div>
    <div class="container d-flex justify-content-center">
       <div class="row">
           <h1>HAIR</h1>
           <div class="col d-flex justify-content-center"  v-for="(service,i) of services" :key="service.title" >
                <div class="content">
                   <router-link style="text-decoration: none" @click="toggleBookingForm(i)" :to="{ name: 'BookingForm'}">
                     <div class="image">     <img class="img" :src="service.img" /></div>
                     <div class="title" style="font-size:30px"><span style="color:#b68345">{{service.title}}</span> | R{{service.price}}</div>
                    <div class="discription">{{service.discription}}</div>
                   </router-link>
                </div>
           </div>
       </div>
    </div> -->
</template>

<script>
export default {
  props:[
    "services"
  ],
  methods: {
    toggleBookingForm(position){
      this.services.forEach(service => service.showForm = false)
      this.services[position].showForm = !this.services[position].showForm
    }
  },
  
// name: "Services",
// computed: {
//   currentUser() {
//     return this.$store.state.auth.user
//   }
// },
// methods: {
//   toggleRedirect() {
//     if (!currentUser) {
//       return this.$router.push('/Login')
//     }
//   }
// }
}
</script>

<style scoped>

.content {
  border: none;
  height:200px;
  width:400px !important;
  /* border-radius:5px; */
  padding-top: 10px;
  text-decoration: none !important;
  
}
.col-6{
    display:flex ;
    justify-content:center;
    padding:15px;
}
.container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  /* margin-bottom:50px; */

}
.head{
    padding-top:100px;
}

.content:hover{
   transform: scale(1.1);
  transition:.5s;
}

.img{
  width: 100px;
  height: 100px;
  object-fit: cover;
}
.border{
    border-top: 1px solid;
    width: 100px;
    display:inline-flex;
    justify-content: center;
}
@media only screen and (max-width: 500px) {
   .content{
      font-size:15px;
     
   }

}

</style>