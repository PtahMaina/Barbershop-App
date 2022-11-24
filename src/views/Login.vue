<template>
<div class="flex flex-col items-center justify-center">
  <div class="">
  <img src="https://i.postimg.cc/fRKXZtHJ/contact-banner.png" alt="" class="object-cover banner">
  </div>
  <div class="absolute flex items-center justify bottom-96">
    <div class="flex flex-col items-center justify-center">
      <h1 class="font-bold text-white uppercase text-7xl">Login</h1>
       <!-- <h3 class="text-xl font-semibold text-white">Lets Your Hair Do The Talking...</h3> -->
    </div>
  </div>
</div>
 <h1 class="text-3xl font-semibold mt-14">Login to your account</h1>
 <!-- <p class="mt-5 text-base font-normal">For any enquiries, additional information or special booking requests, feel free to get in touch with us by filling in the form below.</p> -->
 <div class="flex items-center justify-center w-full h-full mx-auto mt-10 maxWidth">
      <Form @submit="handleLogin" :validation-schema="schema" class="flex flex-col w-full gap-6 px-4 md:w-1/2 md:px-0">
        <div class="form-group">
                    <label class="form-label" id="nameLabel" for="name"></label>
                    <!-- <Field type="text" class="form-control" id="name" name="customername"  tabindex="1" /> -->
                    <Field name="email" type="text" class="w-full p-2 py-4 border-none rounded bgLightGrey" placeholder="Email" />
                    <ErrorMessage name="email" class="flex justify-start text-sm font-normal text-red-600 error-feedback" />
                </div>
                <div class="form-group">
                    <label class="form-label" id="subjectLabel" for="sublect"></label>
                    <!-- <Field type="text" class="form-control" id="subject" name="password"  tabindex="3"/> -->
                    <Field name="password" type="password" class="w-full p-2 py-4 border-none rounded bgLightGrey" placeholder="Password" />
                    <ErrorMessage name="password" class="flex justify-start text-sm font-normal text-red-600 error-feedback"/>
                </div>
                <div class="form-group">
                    <button class="w-full py-3 text-white border-none rounded bgBlack" :disabled="loading">
                      <span class="log" v-show="!loading">LOGIN</span>
                      <span v-show="loading"><Loader/></span>
                    </button>
                          <div class="flex justify-start mt-5">
                          <h6 class="text-base font-normal"> Don't have an account yet?<router-link :to="{ name: 'SignUp'}">Sign Up</router-link></h6>
                          </div>
                </div>
                <div class="form-group">
            <div v-if="message" class="alert alert-danger" role="alert">
                {{message}}
            </div>
        </div>
  
      </Form>

 </div>


 
</template>

<script>
import Loader from "../components/Loader.vue"
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

export default {
  name: "Login",
  components: {
    Form,
    Field,
    ErrorMessage,
    Loader,
  },
  data() {
    const schema = yup.object().shape({
    email: yup.string().required("Email is required"),
    password: yup.string().required("Password is required")
    });
    return {
      loading: false,
      message: "",
      schema,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
   created() {
    if (this.loggedIn) {
      this.$router.push("/Profile");
    }
  },
  methods: {
    handleLogin(user) {
      this.loading = true;
      this.$store.dispatch("auth/login", user).then(
        (data) => {
          if(data.role === 'admin'){
              this.loading = false;
              this.$router.push("/AdminDashBoard");
          }
          else{
            this.loading = false;
            this.$router.push("/Profile");
          }
          
        },
        (error) => {
          this.loading = false;
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
        }
      );
    },
  },
};
</script>

<style scoped>
</style>