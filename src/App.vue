<template>
<Navbar />
<main>
  <router-view :key="$route.fullPath"/>
 </main>
 <!-- <Footer /> -->
</template>
<script>
import Navbar from "./components/Navbar.vue";
// import Footer from "./components/Footer.vue";
export default {
  components: { Navbar } 
  };
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Abel&family=Cuprum&family=Poppins:wght@100&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* font-family:"Nunito,sans-serif" ; */
  /* background-color:#f5f5f5; */
  /* overflow-x: hidden; */
  /* width:100vw; */
  background-color: black;
  color: white;
}

#app {
  font-family: 'Abel', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:  #012966;
  
  
}

#nav {
  padding: 30px;
  
}

#nav a {
  font-weight: bold;
  color: white;
  text-decoration:none;
  background: transparent;
}

#nav a.router-link-exact-active {
  color: #b68345;
  text-decoration: none;
}

.btn {
  font-weight: bold;
  color: white;
  text-decoration:none; 
  margin-top: -7px;
}



</style>
