import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Story from '../views/Story.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'
import Services from '../views/Services.vue'
import BookingForm from '../views/BookingForm'
// import Story from '../views/Story.vue'
import Contact from '../views/Contact.vue'
import Profile from '../views/Profile.vue'

// import { from } from 'core-js/core/array'

// const  = () => import("../views/Story.vue")
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  
 
  {
    path: '/Login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (Story.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Login
  },
  {
    path: '/Profile',
    name: 'Profile',
    // route level code-splitting
    // this generates a separate chunk (Story.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Profile
  },
  {
    path: '/SignUp',
    name: 'SignUp',
    // route level code-splitting
    // this generates a separate chunk (Story.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: SignUp
  },
  {
    path: '/Services',
    name: 'Services',
    // route level code-splitting
    // this generates a separate chunk (Story.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Services
  },
  {
    path: '/BookingForm',
    name: 'BookingForm',
    // route level code-splitting
    // this generates a separate chunk (Story.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: BookingForm
  },
  {
    path: '/Story',
    name: 'Story',
    // route level code-splitting
    // this generates a separate chunk (Story.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Story
  },
  {
    path: '/Contact',
    name: 'Contact',
    // route level code-splitting
    // this generates a separate chunk (Story.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
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
