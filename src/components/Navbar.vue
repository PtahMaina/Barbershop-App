<template>

<!-- https://i.postimg.cc/0jT0TT91/download.png -->
<nav id="nav" class="links" :class="{ active: isActive}">

        <router-link class="navbar-brand"  @click="toggleNav"  to="/">
     <img src="https://i.postimg.cc/CxjcxMXZ/LOGO-BABERSHOP-removebg-preview.png" alt="" srcset="">
        
        </router-link>   

    
    <router-link @click="toggleNav" to="/">Home</router-link>

    <!-- <router-link v-if="!currentUser" @click="toggleNav" :to="{ name: 'SignUp'}">Sign Up</router-link> -->
   
    <router-link   @click="toggleNav" :to="{ name: 'Services'}">Services</router-link>
    <router-link  @click="toggleNav" :to="{ name: 'Story'}">Story</router-link>
    <router-link @click="toggleNav" :to="{ name: 'Contact'}">Contact Us</router-link>
    <router-link v-if="!currentUser" @click="toggleNav" :to="{ name: 'Login'}">Login</router-link>
    <router-link v-if="currentUser" @click="toggleNav" :to="{ name: 'Profile'}">Profile</router-link>
     <router-link class="showAdmin"  v-if="showAdmin" @click="toggleNav" :to="{ name: 'AdminDashBoard'}">DashBoard</router-link>
    <button class="btn" v-if="currentUser" @click="logOut">Logout</button>
    <a href="https://www.facebook.com/The-URBAN-SHAVE-102006302468680"  target="_blank"><i style="color:white;" class="fab fb fa-facebook-f"></i></a> 
    <a href="https://www.instagram.com/theurbanshave2022/" target="_blank"><i  style="color:white;" class="fab in fa-instagram"></i></a>
 
 

    
</nav>    
<button id="nav-btn" @click="toggleNav">
    <i style="font-size:20px" class="fas fa-bars"></i>
</button>    

</template>

<script>
export default {
    data(){
        return {
            isActive: false,
            showAdmin: false
        };
    },
    methods:{
        toggleNav() {
            this.isActive = !this.isActive;
        },
        logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
    },
    computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
   
  },
  created() {
      if(this.currentUser){
          if(this.currentUser.role == 'admin'){
              this.showAdmin = true;
          }else{
            //   $('.showAdmin').css('visibility', 'hidden');
              this.showAdmin = false;
          }
      }
  }
};
</script>

<style scoped>
.fb{
    position: absolute;
    right: 200px;
    padding-top: 3px;
    padding-left: 10px;
     font-size: 20px;
    background: transparent;
}
.in{
    position: absolute;
    right: 170px;
    padding-top: 3px;
    padding-left: 10px;
     font-size: 20px;
    background: transparent;
}
.links{
    
    display:flex;
    justify-content: center;
    gap: 50px; 
         
}
#nav{
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 75px;
    background: transparent;
    /* box-shadow:8px 8px 15px #e4e4e4; */

    
}

img{
    background: transparent;
}
#nav-btn{
    position: fixed;
    top: 10px;
    right: 30px;
    background: transparent;
    /* box-shadow:8px 8px 15px #e4e4e4; */
    padding: 10px;
    border-radius: 50%;
    height: 50px;
    width: 50px;
    border: none;
    outline: none;
    display: none;
    overflow-x: hidden;
}

.navbar-brand {
    position: fixed;
    left: 15px;
    top: -10px;
    background: transparent;
}

img{
    height:100px;
    width:100px;
    object-fit:cover;
}
@media screen and (max-width:700px) {
    #nav{
        position: fixed;
        height:100%;
        left: -200vw;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transition:left 0.7s linear;
        gap: 40px;
        background: black;
    }
    #nav.active{
        left:0;
    }
    #nav-btn{
        display:block;
        z-index: 100;
        /* margin-right:150px;
        overflow-y: hidden; */

        
    }
    .fb{
    position: absolute;
    /* right: 200px; */
    /* padding-top: 3px; */
    top: 100px;
    left: 165px;
    font-size: 20px;
    padding-left: 10px;
    background: transparent;
}
.in{
    position: absolute;
    /* right: 170px; */
    /* padding-top: 3px; */
     top: 100px;
     left: 190px;
     font-size: 20px;
    padding-left: 10px;
    background: transparent;
}

}


</style>