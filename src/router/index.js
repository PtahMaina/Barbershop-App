import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Story from '../views/Story.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'
import Services from '../views/Services.vue'
import BookingForm from '../views/BookingForm'
import AdminDashBoard from '../views/AdminDashBoard.vue'

import Contact from '../views/Contact.vue'
import Profile from '../views/Profile.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  
 
  {
    path: '/Login',
    name: 'Login',
 
    component: Login
  },
  {
    path: '/Profile',
    name: 'Profile',

    component: Profile
  },
  {
    path: '/SignUp',
    name: 'SignUp',

    component: SignUp
  },
  {
    path: '/Services',
    name: 'Services',

    component: Services
  },
  {
    path: '/BookingForm',
    name: 'BookingForm',

    component: BookingForm
  },
  {
    path: '/AdminDashBoard',
    name: 'AdminDashBoard',

    component: AdminDashBoard
  },
  {
    path: '/Story',
    name: 'Story',

    component: Story
  },
  {
    path: '/Contact',
    name: 'Contact',

    component: Contact
  },

  
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})


// router.beforeEach((to,from,next) => {
//   const publicPages = ["/","/Login","/SignUp"];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = localStorage.getItem("user");

//   if (authRequired && !loggedIn) {
//     next("/Login");
//   }else {
//     next();
//   }
// });
export default router
