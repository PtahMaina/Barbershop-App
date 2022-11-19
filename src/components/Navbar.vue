<template>
  <nav id="nav" class="sticky top-0 z-50 " :class="{ active: isActive }">
    <div class="sticky top-0 grid items-center justify-center grid-cols-3 p-2 mx-auto maxWidth">
        <div class="flex items-center justify-start">
            <router-link class="navbar-brand" @click="toggleNav" to="/">
            <!-- <img src="https://i.postimg.cc/CxjcxMXZ/LOGO-BABERSHOP-removebg-preview.png" alt="" class="h-10"/> -->
            <h1>Logo</h1>
            </router-link>
        </div>

        <div class="flex items-center justify-center gap-10 no-underline">
            <router-link @click="toggleNav" to="/" class="text-black no-underline" >Home</router-link>
            <router-link @click="toggleNav" :to="{ name: 'Services'}" class="text-black no-underline">Services</router-link>
            <router-link @click="toggleNav" :to="{ name: 'Story'}" class="text-black no-underline">Story</router-link>
            <router-link @click="toggleNav" :to="{ name: 'Contact'}" class="text-black no-underline">Contact Us</router-link>
            <router-link v-if="currentUser" @click="toggleNav" :to="{ name: 'Login' }" class="text-black no-underline">Login</router-link>
            <router-link v-if="currentUser" @click="toggleNav" :to="{ name: 'Profile' }" class="text-black no-underline">Profile</router-link>
            <router-link v-if="showAdmin" @click="toggleNav" :to="{ name: 'AdminDashBoard'}" class="text-black no-underline">DashBoard</router-link>
        </div>

        <div class="flex items-center justify-end">
            <router-link :to="{ name: 'Login'}" > <h1 style="font-weight: bold;"><button class="">BOOK NOW</button></h1></router-link>
        </div>
        <button class="btn" v-if="currentUser" @click="logOut">Logout</button>

    </div>
  </nav>

  
  <button id="nav-btn" @click="toggleNav">
    <i style="font-size: 20px" class="fas fa-bars"></i>
  </button>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
      showAdmin: false,
    };
  },
  methods: {
    toggleNav() {
      this.isActive = !this.isActive;
    },
    logOut() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/login");
    },
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  created() {
    if (this.currentUser) {
      if (this.currentUser.role == "admin") {
        this.showAdmin = true;
      } else {
        this.showAdmin = false;
      }
    }
  },
};
</script>

<style scoped>
/* .fb {
  position: absolute;
  right: 200px;
  padding-top: 3px;
  padding-left: 10px;
  font-size: 20px;
  background: transparent;
}
.in {
  position: absolute;
  right: 170px;
  padding-top: 3px;
  padding-left: 10px;
  font-size: 20px;
  background: transparent;
}
.fab:hover {
  color: #b68345;
}
.links {
  display: flex;
  justify-content: center;
  gap: 50px;
} */
/* #nav {
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 75px;
  background: transparent;
  box-shadow:8px 8px 15px #e4e4e4;
} */

img {
  background: transparent;
}
#nav-btn {
  position: fixed;
  top: 10px;
  right: 30px;
  background: transparent;
  box-shadow:8px 8px 15px #e4e4e4;
  padding: 10px;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  border: none;
  outline: none;
  display: none;
  overflow-x: hidden;
}
/* 
.navbar-brand {
  position: fixed;
  left: 15px;
  top: -10px;
  background: transparent;
} */

/* img {
  height: 100px;
  width: 100px;
  object-fit: cover;
} */
@media screen and (max-width: 700px) {
  #nav {
    position: fixed;
    height: 100%;
    left: -200vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: left 0.7s linear;
    gap: 40px;
    background: black;
    z-index: 20;
  }
  #nav.active {
    left: 0;
  }
  #nav-btn {
    display: block;
    z-index: 100;
    /* margin-right:150px;
        overflow-y: hidden; */
  }
  /* .fb {
    position: absolute;
    right: 200px;
    padding-top: 3px;
    top: 100px;
    left: 140px;
    font-size: 20px;
    padding-left: 10px;
    background: transparent;
  }
  .in {
    position: absolute;
    right: 170px;
    padding-top: 3px;
    top: 100px;
    left: 200px;
    font-size: 20px;
    padding-left: 10px;
    background: transparent;
  } */
}
</style>
//
<a
  href="https://www.facebook.com/The-URBAN-SHAVE-102006302468680"
  target="_blank"
><i  class="fab fb fa-facebook-f"></i></a>
//
<a
  href="https://www.instagram.com/theurbanshave2022/"
  target="_blank"
><i   class="fab in fa-instagram"></i></a>
