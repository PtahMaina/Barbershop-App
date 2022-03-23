<template>
  <h1 class="head" style="font-weight: bold;color:#b18044">DASHBOARD</h1>
  <div class="border"></div>
  <div class="container">
    <div class="content d-flex" style="width:100%; ">

      <div class="employees" style="width:50%;">
        <h1>Barbers</h1>
        <div v-for="barber in barbers" :key="barber.id">
      <div class="barberName" > 
        <div class="name" style="font-weight:bold;color:black;font-size:20px;">
           {{barber.barberName}}
           <button class="btn" id="edit" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap"><i class="fas fa-edit" style="font-size:20px;color:#b18044;"></i></button>
          <button class="btn" id="delete" data-bs-toggle="modal" data-bs-target="#deleteModal"><i class="fas fa-trash" style="font-size:20px;color:#b18044;"></i></button>
           
           
           <!-- <h6>Employee</h6> -->
        </div>
       
      </div>
    
        </div>
    </div>

      <div class="clients" style="width:50%;">
                <h1>Registered Users</h1>
        <div v-for="customer in customers" :key="customer.id">
      <div class="client" > 
        <div class="client_content" style="font-weight: 400;color:black">
           {{customer.customername}}
           {{customer.email}}
           <i class="fas fa-edit" style="font-size:20px;color:white;"></i>
           <i class="fas fa-trash" style="font-size:20px;color:white;"></i>
           <!-- <h6>Employee</h6> -->
        </div>
       
      </div>
    
        </div>
             <!-- <table >
    <tr>
      <th style="font-weight: bold;color:#b18044">Name</th>
      <th style="font-weight: bold;color:#b18044">Email</th>
      <th style="font-weight: bold;color:#b18044">Phone No.</th>
      <th style="font-weight: bold;color:#b18044">Role</th>
    </tr>
    <tr v-for="customer in customers" :key="customer.id">
      <td>{{customer.customername}}</td>
      <td>{{customer.email}}</td>
      <td>{{customer.phone_number}}</td>
      <td>{{customer.role}}</td>
    </tr>
</table> -->
      </div>

    </div>

    <div class="d-flex justify-content-center">
      <div class="bookings">

         <div v-for="barber in barbers" :key="barber.id">
        
         
      
    
        </div>
      </div>

    </div>
  </div>


 <!-- edit  -->
 <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"  >
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Edit your Profile</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form >
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Barber Name:</label>
            <input type="text" class="form-control" id="recipient-name" >
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">CLOSE</button>
        <button type="button" class="btn btn-primary"  >SAVE</button>
      </div>
    </div>
  </div>
</div>


<!-- delete modal -->
<div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
       Are you sure you want to delete this employee?
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">CLOSE</button>
        <button type="button" class="btn btn-primary" >YES</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
   data(){
            return {
                customers:[],
                barbers:[],
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
.fas{
  background: transparent;
}
.head{
    padding-top:100px;
    
}
.border{
    border-top: 1px solid;
    width: 100px;
    display:inline-flex;
    justify-content: center;
}
/* .container{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.name{
   display: block;
  width: 150px;
  height:100px;
    border: solid 1.5px white;
  border-radius: 5px;
  padding: 1em;
  background:white;
  color:black;
  font-size: 1.5em;
  font-weight: bold;
}

.barberName{
  margin: 15px;
}

table,tr,td,th{
  border: solid 1.5px white;
  width: 100%;
  padding: 0.5em;
  height: 100;
} */


@media only screen and (max-width: 600px) {
 .content{
   display:flex;
   flex-direction: column;
   align-items: center;
 }
}
/* table,tr,td,th{
  border: solid 1.5px white;
  width: 100%;
  padding: 0.5em;
  height: 100;
}  */

.barberName{
  /* border: solid 1.5px white; */
  padding: 0.5em;
  margin-bottom: 20px;
  background: white;
  border-radius:3px;
  margin-right: 5px;
}
.client{
  /* border: solid 1.5px white; */
  padding: 0.5em;
  margin-bottom: 20px;
  background: #b68345;
  border-radius:3px;
  margin-right: 5px;
  height: auto;
}
.name{
  background: transparent;
  padding: 0.5em;
  
}
.client_content{
  background: transparent;
  padding: 0.5em;
  
}


</style>