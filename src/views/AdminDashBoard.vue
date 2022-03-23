<template>
  <h1 class="head" style="font-weight: bold;color:#b18044">DASHBOARD</h1>
  <div class="border"></div>
  <div class="container">
 
   
         <!-- <h1>Barbers</h1> -->
      <div v-for="barber in barbers" :key="barber.id" class="barber">
        <div class="content">
          <div class="barberName">
            <h5>{{barber.barberName}}</h5>
          </div>
          <!-- <div class="customerInfo">
              <h5>{{barber.customerInfo[0].sessionNumber}}</h5>
          </div> -->
           

  
      <!-- <div class="col">
            <h1>User Details</h1>
  <table  >
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Phone No.</th>
      <th>Role</th>
    </tr>
    <tr v-for="customer in customers" :key="customer.id">
      <td>{{customer.customername}}</td>
      <td>{{customer.email}}</td>
      <td>{{customer.phone_number}}</td>
      <td>{{customer.role}}</td>
    </tr>
</table>
      </div> -->
 
      
    </div>

  </div>
  </div>
</template>

<script>
export default {
   data(){
            return {
                customers:[],
                barbers:[]
            }
        },
        mounted(){
            fetch("https://barber-shopbackend.herokuapp.com/customers")
            .then(res => res.json())
            .then(data => this.customers = data)
            .catch(err => console.log(err.message))

            fetch("https://barber-shopbackend.herokuapp.com/barbers")
            .then(res => res.json())
            .then(data => this.barbers = data)
            .catch(err => console.log(err.message))

        },
      computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
   
  },
  created() {
    if (this.currentUser.role !== "admin") {
      this.$router.push("/Profile")  
    }
  }
}
</script>

<style scoped>
.head{
    padding-top:100px;
    
}
.border{
    border-top: 1px solid;
    width: 100px;
    display:inline-flex;
    justify-content: center;
}
.container{
  display:flex;
  justify-content: center;
}
/* .customer{
  border: 1px solid;
  width: 200px;
  height: 200px;
} */

.barber{
  /* border: 1px solid;
  height: 200px;
  width: 200px;
  border-radius:25px; */
  display:flex;
  
  
}


table, th, td {
  border:1px solid white;
}

/* table{
  width:100% !important;
} */
td{
  padding:25px;
}
</style>