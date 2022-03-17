<template>
  <h1 class="head" style="font-weight: bold;color:#b18044">SERVICES</h1>
    <div class="container d-flex justify-content-center">
       <div class="row">
           <!-- <h1>HAIR</h1> -->
           <div class="col-6">
                <div class="content">
                   <router-link style="text-decoration: none" :to="{ name: 'BookingForm'}">
                     <div class="title" style="font-size:30px"><span style="color:#b68345"> CLASSIC CUT</span> | R100</div>
                    <div class="discription">Relax while your barber achieves your tailored look. If you’re looking for a bald fade or if your hair is currently longer than earlobe length please book from our other options.</div>
          
            
                   </router-link>
                    
                </div>
           </div>
            <div class="col-6">
                <div class="content">
                    <router-link style="text-decoration: none" :to="{ name: 'BookingForm'}">
                      <div class="title" style="font-size:30px"><span style="color:#b68345"> SKIN FADE</span> | R100</div>
                      <div class="discription">Also known as a bald fade or a zero fade, this service requires a little extra time. Hair is faded from skin or “0” length to your desired length on top.</div>
                    </router-link>
            
                </div>
           </div>
            <div class="col-6">
                <div class="content">
                    <router-link style="text-decoration: none" :to="{ name: 'BookingForm'}">
                      <div class="title" style="font-size:30px"><span style="color:#b68345"> SCISSOR CUT</span> | R100</div>
                      <div class="discription">Scissors all round or complete re-style.Washed and styled.</div>
                    </router-link>
          
            
                </div>
           </div>
            <div class="col-6">
                <div class="content">
                    <router-link style="text-decoration: none" :to="{ name: 'BookingForm'}">
                      <div class="title" style="font-size:30px"><span style="color:#b68345"> MACHINE CUT</span> | R100</div>
                      <div class="discription">Clippers all round at varied lengths.</div>
                    </router-link>
            
                </div>
           </div>
             <div class="col-6">
                <div class="content">
                    <router-link style="text-decoration: none" :to="{ name: 'BookingForm'}">
                      <div class="title" style="font-size:30px"><span style="color:#b68345"> COLOUR</span> | R100</div>
                      <div class="discription">If you looking to col-6our your hair then we offer semi-permanent or permanent col-6our.</div>
                    </router-link>
            
                </div>
           </div>
             <div class="col-6">
                <div class="content">
                    <router-link style="text-decoration: none" :to="{ name: 'BookingForm'}">
                      <div class="title" style="font-size:30px"><span style="color:#b68345"> HEAD SHAVE</span> | R100</div>
                      <div class="discription">Experience a traditional hot towel shave with a straight razor and warm shaving cream that will leave your face smooth to the touch.</div>
                    </router-link>
            
                </div>
           </div>
         <!-- <h1>BEARD</h1> -->
           <div class="col-6">
                <div class="content">
                    <router-link style="text-decoration: none" :to="{ name: 'BookingForm'}">
                      <div class="title" style="font-size:30px"><span style="color:#b68345"> BASIC BEARD TRIM & SHAPE</span> | R100</div>
                      <div class="discription"></div>
                    </router-link>
            
                </div>
           </div>
             <div class="col-6">
                <div class="content">
                    <router-link style="text-decoration: none" :to="{ name: 'BookingForm'}">
                      <div class="title" style="font-size:30px"><span style="color:#b68345"> HOT TOWEL TRIM AND SHAPE</span> | R100</div>
                       <div class="discription">Relax while your beard is trimmed or shaped with a razor or clipper. </div>
                    </router-link>
                </div>
           </div>
    
           
       </div>
    </div>
</template>

<script>
export default {
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

</style>