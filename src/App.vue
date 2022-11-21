<template>
<Navbar />
<main>
  <router-view :key="$route.fullPath" :services="services" />
 </main>
 <Footer />
</template>
<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
export default {
  data() {
    return {
       services:[
      {
        showForm: false,
        title:"CLASSIC CUT",
        price: 100,
        img:"",
        discription:"Relax while your barber achieves your tailored look. If you’re looking for a bald fade or if your hair is currently longer than earlobe length please book from our other options.",
      },
       {
         showForm: false,
        title:"SKIN FADE",
        price: 90,
        img:"",
        discription:"Also known as a bald fade or a zero fade, this service requires a little extra time. Hair is faded from skin or “0” length to your desired length on top.",
      },
       {
         showForm: false,
        title:"SCISSOR CUT",
        price: 70,
        discription:"Scissors all round or complete re-style.Washed and styled.",
      },
       {
         showForm: false,
        title:"MACHINE CUT",
        price: 100,
        img:"",
        discription:"Clippers all round at varied lengths.",
      },
       {
         showForm: false,
        title:"COLOUR",
        price: 100,
        img:"",
        discription:"If you looking to col-6our your hair then we offer semi-permanent or permanent colour.",
      },
        {
          showForm: false,
        title:"HEAD SHAVE",
        price: 50,
        img:"",
        discription:"Experience a traditional hot towel shave with a straight razor and warm shaving cream that will leave your face smooth to the touch.",
      },
        {
          showForm: false,
        title:"BEARD TRIM & SHAPE",
        price: 95,
        img:"",
        discription:"If you looking to col-6our your hair then we offer semi-permanent or permanent col-6our.",
      },
         {
        showForm: false,
        title:"HOT TOWEL TRIM AND SHAPE",
        price: 85,
        img:"",
        discription:"Relax while your beard is trimmed or shaped with a razor or clipper.",
      },
        {
           showForm: false,
        title:"BUZZ",
        price: 100,
        img:"",
        discription:"Ask for a buzz cut if you're looking for a no-nonsense low maintenance look at a uniform length as close as you'd like.",
      },
    ]
    }
  },
  components: { Navbar, Footer } 
  };
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* font-family:"Nunito,sans-serif" ; */
  /* background-color:#f5f5f5; */
  /* overflow-x: hidden; */
  /* width:100vw; */
  /* background-color: black; */
  /* color: white; */
}

#app {
font-family: 'Oswald', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color:  #012966; */
  
  
}

/* #nav {
  padding: 30px;
  
} */

/* #nav a {
  font-weight: bold;
  color: white;
  text-decoration:none;
  background: transparent;
} */

#nav a.router-link-exact-active {
  color: #0C6CB9;
  text-decoration: none;
  
}

.btn {
  /* font-weight: bold; */
  /* color: white; */
  text-decoration:none; 
  margin-top: -7px;
}

.btn:hover{
  color: #0C6CB9;
}


.maxWidth{
  max-width:1220px
}


.bgGrey{
  background: #D9D9D9;
}


.bgBlack{
  background: #101010;
}

.textBlue{
  color: #0F77F0;
}

.banner{
  height: 650px;
  width: 100vw;
}

</style>
