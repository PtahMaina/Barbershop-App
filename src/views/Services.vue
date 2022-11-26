<template>
<div class="flex flex-col items-center justify-center">
  <div class="">
  <img src="https://i.postimg.cc/fTdGcJf2/sevice-banner.png" alt="" class="object-cover banner">
  </div>
  <div class="absolute flex items-center pb-20 justify bottom-96">
    <div class="flex flex-col items-center justify-center">
      <h1 class="font-bold text-white uppercase text-7xl">OUR SERVICES & PRICES</h1>
       <!-- <h3 class="text-xl font-semibold text-white">Lets Your Hair Do The Talking...</h3> -->
       <!-- <router-link :to="{ name: 'Login'}"> <h1 style="font-weight: bold;"><button class="px-5 py-3">BOOK NOW</button></h1></router-link> -->
    </div>
  </div>
    <h1 class="text-3xl font-semibold">Hair </h1>

</div>
  <div class="px-4 mt-10 md:px-0">
            <div class="w-full mx-auto maxWidth"  v-for="(service,i) of services" :key="service.title" >
                      <div class="grid grid-cols-1 md:grid-cols-2">
                    <router-link class="no-underline " @click="toggleBookingFormHair(i)" :to="{ name: 'BookingForm'}">
                      <div class="flex flex-col mt-4 text-left">
                        <h1 class="text-3xl font-medium text-black">{{service.title}} </h1>
                      <h1 class="text-base font-normal text-black">{{service.discription}}</h1>
                      </div>
                    </router-link>
                      <div class="flex items-center mt-1 md:mt-0 md:items-end md:justify-end">
                      <h1 class="text-base font-normal">R{{service.price}}</h1>
                      </div>
                      </div>
            </div>
            <div class="mt-10">
           <h1>Beard</h1>
                <div class="w-full mx-auto maxWidth"  v-for="(beard,i) of beards" :key="beard.title" >
                      <div class="grid grid-cols-1 md:grid-cols-2">
                    <router-link class="no-underline " @click="toggleBookingFormBeard(i)" :to="{ name: 'BookingForm'}">
                      <div class="flex flex-col mt-4 text-left">
                        <h1 class="text-3xl font-medium text-black">{{beard.title}} </h1>
                      <h1 class="text-base font-normal text-black">{{beard.discription}}</h1>
                      </div>
                    </router-link>
                      <div class="flex items-center mt-1 md:mt-0 md:items-end md:justify-end">
                      <h1 class="text-base font-normal">R{{beard.price}}</h1>
                      </div>
                      </div>
            </div>
            </div>
    <div class="mt-10">
      <h1>Treatment</h1>
                     <div class="w-full mx-auto maxWidth"  v-for="(treatment,i) of treatments" :key="treatment.title" >
                      <div class="grid grid-cols-1 md:grid-cols-2">
                    <router-link class="no-underline "  @click="toggleBookingFormTreatment(i)" :to="{ name: 'BookingForm'}">
                      <div class="flex flex-col mt-4 text-left">
                        <h1 class="text-3xl font-medium text-black">{{treatment.title}} </h1>
                      <h1 class="text-base font-normal text-black">{{treatment.discription}}</h1>
                      </div>
                    </router-link>
                      <div class="flex items-center mt-1 md:mt-0 md:items-end md:justify-end">
                      <h1 class="text-base font-normal">R{{treatment.price}}</h1>
                      </div>
                      </div>
            </div>
    </div>
  </div>

      <h1>Pop</h1>
       <button @click="()=>TogglePopUp('btnTrigger')">Open</button>
      <PopUpBookingModal v-if="popupTriggers.btnTrigger" :togglePopUp="
      ()=>TogglePopUp('btnTrigger')">
  <BookingForm/> 
       </PopUpBookingModal>

<!-- s
      <PopUpBookingModal v-if="popupTriggers.timedTrigger"  :togglePopUp="
      ()=>TogglePopUp('timedTrigger')">
        <h1>timedTrigger</h1>
       </PopUpBookingModal> -->
</template>

<script>
import PopUpBookingModal from "../components/PopUpBookingModal.vue"
import BookingForm from "./BookingForm.vue"
import { ref } from "vue"
export default {
  setup() {
    const popupTriggers = ref ({
      btnTrigger:false,
      timedTrigger:false
    })

  const TogglePopUp = (trigger) => {
    popupTriggers.value[trigger] = !popupTriggers.value[trigger]
  }

setTimeout(() => {
  popupTriggers.value.timedTrigger = true
}, 3000)
   return {
    PopUpBookingModal,
    popupTriggers,
    TogglePopUp
   }
  },
  props:[
    "barberServices",
    "services",
    "beards",
    "treatments",
  ],
  methods: {
    toggleBookingFormHair(position){
      this.services.forEach(service => service.showForm = false)
      this.services[position].showForm = !this.services[position].showForm
    },

    toggleBookingFormBeard(position){
      this.beards.forEach(beard => beard.showForm = false)
      this.beards[position].showForm = !this.beards[position].showForm

    },

    toggleBookingFormTreatment(position){
      this.treatments.forEach(treatment => treatment.showForm = false)
      this.treatments[position].showForm = !this.treatments[position].showForm

    }
  },  components: { PopUpBookingModal,BookingForm } 
  
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
/* 
.content {
  border: none;
  height:200px;
  width:400px !important;
  border-radius:5px;
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
  margin-bottom:50px;

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

} */

</style>