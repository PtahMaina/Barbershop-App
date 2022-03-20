<template>
   <h1 class="head" style="font-weight: bold;color:#b18044">BOOKING</h1>
   <div class="border"></div>
          <div class="container" v-for="service of services" :key="service.title">
            
            <div class="row" v-if="service.showForm">
              <!-- <div class="service"> -->
                <div class="title" style="font-size:30px"><span style="color:#b68345">{{service.title}}</span> | R{{service.price}}</div>
                <div class="discription">{{service.discription}}</div>
              <!-- </div> -->
                       
                     <form @submit.prevent="handleSubmit(service.title)" id="contact-form" name="myForm" class="form"  role="form">

                <div class="form-group col">
                    <label for="barbers" ><span style="font-size:20px;color:#b68345">Choose your Barber:</span> </label>
                        <select id="barbers" name="barbers" required v-model="barberName">>
                        <option value="yaaseen">Yaaseen</option>
                        <option value="muneeb">Muneeb</option>
                        <option value="naaim">Naaim</option>
                      
                    </select>
                </div>
                    <div class="form-group col">
                    <label for="sessions" > <span style="font-size:20px;color:#b68345">Choose a session:</span> </label>
                      <select id="sessions" name="sessions" required v-model="sessionNumber">>
                          <option value="session1">Session 1</option>
                          <option value="session2">Session 2</option>
                          <option value="session3">Session 3</option>
                          <option value="session4">Session 4</option>
                          <option value="session5">Session 5</option>
                      </select>
                </div>
                <button class="btn">submit</button>

            </form>
            </div>
   
          </div>
   
      
       
</template>

<script>

export default {
  data() {
    return {
      barberName:'',
      sessionNumber:'',
    }
  },
  props:[
    "services"
  ],
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
   created() {
    if (!this.loggedIn) {
      this.$router.push("/Login");
    }
  },
   methods:{
    handleSubmit(style){
    
 
    fetch(`https://barber-shopbackend.herokuapp.com/barbers/${this.barberName}/bookings`, {
  method: 'POST',
  body: JSON.stringify({
    sessionNumber: this.sessionNumber, 
    style:style,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
    'Authorization' : `Bearer ${JSON.parse(localStorage.getItem("customer")).accessToken}`
  },
})
  .then((response) => response.json())
  .then((json) => alert("Thanks your booking has been processed"))
  .catch((error) => alert(error.msg));
    }
  }


}
</script>

<style scoped>
.head{
    padding-top:100px;
}
.container{
  display:flex;
  justify-content: center;
}
.form-group{
  display:grid;
  padding-top:10px;
}
.title{
  margin-top:70px;
}
.discription{
  margin-top:30px;
}
.form{
  margin-top:40px;
}
.btn{
  margin-top:30px;
}
.border{
    border-top: 1px solid;
    width: 100px;
    display:inline-flex;
    justify-content: center;
}

</style>