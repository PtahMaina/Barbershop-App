<template>
<Navbar />
<main>
  <router-view :key="$route.fullPath" :services="services"  :beards="beards" :treatments="treatments"/>
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
        title:"Classic Gents Cut",
        price: 100,
        discription:"Short back and sides with a scissor cut top.",
      },
       {
         showForm: false,
        title:"Skin Fade",
        price: 90,
        discription:"Blended down to zero/skin.",
      },
       {
         showForm: false,
        title:"Scissor Cut",
        price: 70,
        discription:"Scissors all round or to your needs",
      },
       {
         showForm: false,
        title:"Machine Cut",
        price: 100,
        discription:"Clippers all round at varied lengths.",
      },
        {
           showForm: false,
        title:"Buzz Cut",
        price: 100,
        discription:"All round  eqaul length ,clipper cut ",
      },
        {
           showForm: false,
        title:"Head Shave",
        price: 100,
        discription:"Head shave wiht hot towel and razor",
      },
    ],
       beards:[
      {
        showForm: false,
        title:"Cut-Throat Shave",
        price: 100,
        discription:"Cut-Throat with full shave with hot towel and razor",
      },
       {
         showForm: false,
        title:"Basic Beard Shape",
        price: 90,
        img:"",
        discription:"Clipper or scissor shape for longer beards",
      },
       {
         showForm: false,
        title:"Hot Towel Shape",
        price: 70,
        discription:"Clipper or scissor for longer bears with  hot towel and razor",
      },
       {
         showForm: false,
        title:"Hot Towel Trim",
        price: 100,
        discription:"Clipper or scissor for shorter bears with  hot towel and razor",
      },
       {
         showForm: false,
        title:"Basic Beard Trim",
        price: 100,
        discription:"Clipper or scissor trim for short beards",
      }
    ],
         treatments:[
      {
        showForm: false,
        title:"Moisture Treatment",
        price: 100,
        discription:"Deep conditioning to rejuvenate and moiture hair and sculp",
      },
       {
         showForm: false,
        title:"Mycro Keratin",
        price: 90,
        discription:"Soothing gel based treatment to replace natural keratin proteins",
      },
       {
         showForm: false,
        title:"Colour",
        price: 100,
        img:"",
        discription:"Semi-permanent or permanent colour.",
      },
       {
         showForm: false,
        title:"Proskin Shave",
        price: 100,
        img:"",
        discription:"Flagskin hybrid between the Dermologica ProSkin treatment.",
      }
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
.Logobanner{
  height: 350px;
  width: 100vw;
}


.bgLightGrey{
  background: #1010101A;
}
</style>
