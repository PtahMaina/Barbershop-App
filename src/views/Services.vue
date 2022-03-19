<template>
  <h1 class="head" style="font-weight: bold;color:#b18044">SERVICES</h1>
    <div class="container d-flex justify-content-center">
       <div class="row">
           <!-- <h1>HAIR</h1> -->
           <div class="col-6"  v-for="(service,i) of services" :key="service.title" >
                <div class="content">
                   <router-link style="text-decoration: none" @click="toggleBookingForm(i)" :to="{ name: 'BookingForm'}">
                     <!-- <div class="image">     <img class="img" :src="service.img" /></div> -->
                     <div class="title" style="font-size:30px"><span style="color:#b68345">{{service.title}}</span> | R{{service.price}}</div>
                    <div class="discription">{{service.discription}}</div>
                   </router-link>
                </div>
           </div>
       </div>
    </div>
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
</style>