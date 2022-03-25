<template>
  <div class="container">
              <h4> Welcome to<span style="color:#b18044"> The Urban Shave</span> </h4>
        <p>
          Thank you for signing up to The Urban Shave Barbershop Website.
        </p>
        <p>
          Don't forget to check your email for your registration confirmation,
          however you can sign in immediately.
        </p>
      
      <div class="sign-up">
        <router-link :to="{ path: '/Login' }">
          <button class="btn">Login</button>
        </router-link>
  </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container {
    padding-top: 200px;
    height:100vh
}

</style>