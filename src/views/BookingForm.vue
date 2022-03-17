<template>
   <h1 class="head" style="font-weight: bold;color:#b18044">BOOKING</h1>
   <label for="cars">Choose a car:</label>

<select name="cars" id="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="opel">Opel</option>
  <option value="audi">Audi</option>
</select>
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