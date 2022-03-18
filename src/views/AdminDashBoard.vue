<template>
  <h1 class="head" style="font-weight: bold;color:#b18044">DASHBOARD</h1>
</template>

<script>
export default {
      computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
   
  },
  created() {
    if (this.currentUser.role !== "admin") {
      this.$router.push("/Profile")  
    }
  }
}
</script>

<style>
.head{
    padding-top:100px;
    
}
</style>