<template>
   <h1 class="head">BOOKING</h1>
   
</template>

<script>

export default {
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
   created() {
    if (!this.loggedIn) {
      this.$router.push("/Login");
    }
  }

}
</script>

<style scoped>
.head{
    padding-top:100px;
}
</style>