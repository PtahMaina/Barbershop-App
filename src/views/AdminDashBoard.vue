<template>
  <h1 class="head" style="font-weight: bold;color:#b18044">DASHBOARD</h1>
  <div class="border"></div>
  <div class="container">
    <div class="row">
      <div class="col-6">
         <h1>CUSTOMERS</h1>
      <div v-for="customer in customers" :key="customer.id" class="customer">
          <div class="content">
           <div class="name">{{customer.customername}}</div>
           <div class="email">{{customer.email}}</div>
           <div class="role">{{customer.role}}</div>
          </div>

      </div>
      </div>
    </div>
   
      
  </div>
</template>

<script>
export default {
   data(){
            return {
                customers:[]
            }
        },
        mounted(){
            fetch("https://barber-shopbackend.herokuapp.com/customers")
            .then(res => res.json())
            .then(data => this.customers = data)
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
</style>