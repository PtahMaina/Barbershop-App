<template>
 
  <div class="container">
  <h1 class="jumbotron" style="font-weight: bold;color:#b18044">PROFILE</h1>
    
   
    <div class="row p-5">
      <div class="col">
         <img src="https://i.postimg.cc/q7zMKRBh/blank-profile-picture-973460-640.png" alt="">
      <div class="picInfo">
      <h6>{{ currentUser.customername }}</h6>
    </div>
     <div  class="picInfo">
      <h6>{{ currentUser.email}}</h6>
    </div>
    </div>
    <div class="col">
      <div class="about-profile">   
        <ul class="admin-profile">

          <li><span class="pro-title"> EMAIL </span> <span class="pro-detail">{{ currentUser.email}}</span></li>
          <li><span class="pro-title"> NAME </span> <span class="pro-detail">{{ currentUser.customername }}</span></li>
          <!-- <li><span class="pro-title"> TOKEN </span> <span class="pro-detail">{{ currentUser.accessToken.substring(0, 20) }} ...{{ currentUser.accessToken.substr(currentUser.accessToken.length - 20) }}</span></li> -->
          <!-- <li><span class="pro-title"> USER ID </span> <span class="pro-detail">{{ currentUser._id }}</span></li> -->
          <li><span class="pro-title"> PHONE </span> <span class="pro-detail">{{ currentUser.phone_number }}</span></li>
        </ul>
        <div class="buttons">
          <button class="btn">EDIT</button>
        <button class="btn">DELETE</button>
        </div>
        
      </div>
    </div>

      
    </div>
  
 
    
  </div>
</template>
<script>
export default {
  name: "Profile",
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push("/Login");
    }
  },
};
</script>

<style scoped>
.buttons{
  display: flex;
  padding-top: 20px;
}
.container {
    /* display:;
    justify-content:center; */
    text-align: center;
    padding-top: 100px;
   
}
.picInfo{
  padding-top:5px;
}
.name{
  color: #b68345;
  padding-right: 10px;
  font-size:20px;
}
.admin-profile{
    display: grid;
    justify-content: center;
    flex-wrap: wrap;
    /* padding-left: 30px;
    padding-bottom: 40px; */
}
.about-profile{
  padding-top: 10px;
}
.about-profile li{
    display: flex;
    /* justify-content:space-between; */
    width:300px;
    padding-top: 20px;
}
.about-profile .pro-title {
    font-weight: 700;
    background: transparent;
    position: relative;
    width: 120px;
    display: inline-block;
    margin-bottom: 5px;
    
}

.pro-title{
    margin-left: -183px;
}

.about-profile .pro-title:after {
    position: absolute;
    content: ':';
    color: #b68345;
    font-size: 14px;
    left: 100px;
   
}

ul li, ol li {
    list-style: none;
}
.jumbotron{
  display: flex;
  justify-content:center;
}
h6{ 
  padding-right: 10px;
}
/* .jumbotron{
   padding-top:100px;
} */
img{
  border-radius: 50%;
  width: 250px;
  height: 250px;
  /* border: 4px solid #b68345; */
}

</style>