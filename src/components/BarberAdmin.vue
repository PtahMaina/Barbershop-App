<template>
    <h1>Barbers</h1>
      <div class="barberName" > 
        <div class="name" style="font-weight:bold;color:black;font-size:20px;">
           {{barber.barberName}}
           <button class="btn" id="edit" data-bs-toggle="modal" :data-bs-target="`edit-${barber._id}`" data-bs-whatever="@getbootstrap"><i class="fas fa-edit" style="font-size:20px;color:#b18044;"></i></button>
          <button class="btn" id="delete" data-bs-toggle="modal" :data-bs-target="`delete-${barber._id}`"><i class="fas fa-trash" style="font-size:20px;color:#b18044;"></i></button>
           
        </div>
       
      </div>

        <!-- edit barber -->
 <div class="modal fade" :id="`edit-${barber._id}`" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" v-if="this.currentUser" >
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
            <input type="text" class="form-control" id="recipient-name" v-model="barber.barberName" >
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">CLOSE</button>
        <button type="button" class="btn btn-primary" @click.prevent="updateBarber()" >SAVE</button>
      </div>
    </div>
  </div>
</div>


<!-- delete modal barber -->
<div class="modal fade" :id="`delete-${barber._id}`" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"  v-if="this.currentUser">
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
        <button type="button" class="btn btn-primary"  @click.prevent="deleteBarber()" >YES</button>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
    props: ["barber"],
    computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
   
  },
    methods:{
      async updateBarber() {
       try {
      fetch('https://barber-shopbackend.herokuapp.com/barbers/',{
        method: "PUT",
        body: JSON.stringify({
          barberName: this.barber.barberName,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("customer")).accessToken
          }`,
        },
      })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if(data.message) return alert(data.message)
        alert("Barber Name Updated!");
        this.$store.dispatch("auth/logout");
        // this.$router.push("/Login")
      });
    } catch (err) {
      console.error(err)
      }
    },
       async deleteBarber(){
      const headers = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("customer")).accessToken
          }`,
          },
      };
      const new_url = "https://barber-shopbackend.herokuapp.com/barbers/";
      try {
        await axios.delete(new_url, headers, this.currentUser).then(() => {
          alert("Profile has been deleted successfully");
          this.$store.dispatch("auth/logout");
          this.$router.push("/Login")
        });
      } catch(err) {
        console.error(err);
      }
    },
  }
}
</script>
<style>
    
</style>