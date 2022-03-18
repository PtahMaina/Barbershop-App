<template>
   <h1 class="head" style="font-weight: bold;color:#b18044">BOOKING</h1>
          <div class="container" v-for="service of services" :key="service.title">
            <div v-if="service.showForm">
                       <div class="title" style="font-size:30px"><span style="color:#b68345">{{service.title}}</span> | R{{service.price}}</div>
                     <form @submit.prevent="handleSubmit(service.title)" id="contact-form" name="myForm" class="form"  role="form">

                <div class="form-group">
                    <label for="barbers">Choose a baber:</label>
                        <select id="barbers" name="barbers" required v-model="barberName">>
                        <option value="yaaseen">Yaaseen</option>
                        <option value="muneeb">Muneeb</option>
                        <option value="naaim">Naaim</option>
                      
                    </select>
                </div>
                    <div class="form-group">
                    <label for="sessions">Choose a session:</label>
                      <select id="sessions" name="sessions" required v-model="sessionNumber">>
                          <option value="session1">session 1</option>
                          <option value="session2">session 2</option>
                          <option value="session3">session 3</option>
                          <option value="session4">session 4</option>
                          <option value="session5">session 5</option>
                      </select>
                </div>
                <button>submit</button>

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
  .then((json) => alert(json.msg))
  .catch((error) => alert(error.msg));
    }
  }


}
</script>

<style scoped>
.head{
    padding-top:100px;
}
</style>