<template>
<div class="flex flex-col items-center justify-center">
  <div class="">
  <img src="https://i.postimg.cc/fRKXZtHJ/contact-banner.png" alt="" class="object-cover  banner">
  </div>
  <div class="absolute flex items-center justify bottom-96">
    <div class="flex flex-col items-center justify-center">
      <h1 class="font-bold text-white uppercase text-7xl">Contact Us</h1>
       <!-- <h3 class="text-xl font-semibold text-white">Lets Your Hair Do The Talking...</h3> -->
    </div>
  </div>
</div>
<h1 class="font-semibold text-3xl">Chat with us</h1>
<p class="text-base font-normal">For any enquiries, additional information or special booking requests, feel free to get in touch with us by filling in the form below.</p>
<div class="flex w-full ">
    <div class="bg-red-300 w-full" id="contact">
          <form @submit.prevent="handleSubmit" id="contact-form" name="myForm" class="form"  role="form">

                <div class="form-group">
                    <label class="form-label" id="nameLabel" for="name"></label>
                    <input type="text" class="form-control" id="name" name="name" placeholder="Your Name" tabindex="1"  required v-model="name">
                </div>

                <div class="form-group">
                    <label class="form-label" id="emailLabel" for="email"></label>
                    <input type="email" class="form-control" id="email" name="email" placeholder="Your Email" tabindex="2" required v-model="email">
                </div>

                <div class="form-group">
                    <label class="form-label" id="messageLabel" for="message"></label>
                    <textarea rows="6" cols="60" name="message" class="form-control" id="message" placeholder="Your Message" tabindex="4" v-model="message"></textarea >
                </div>

                <div class=" b text-center margin-top-25">
                    <button type="submit" class="btn btn-mod btn-border btn-large">Send Message</button>
                    <button type="reset" value="Reset" class="btn btn-mod btn-border btn-large">reset</button>
                </div>

            </form>
    </div>
<div class="bg-red-200 w-full">

</div>
</div>
</template>

<script>
export default {
  data(){
    return {
      name:"",
      email: "",
      message: "",

    }
  },
  methods:{
    handleSubmit(){
    console.log(this.name, this.email, this.message)
    let contact = {
    name: this.name,
    email: this.email,
    message: this.message,
  }
    fetch('https://barber-shopbackend.herokuapp.com/contact', {
  method: 'POST',
  body: JSON.stringify(contact),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => alert(json.msg))
  .catch((e) => alert(e.msg));
    }
  }
}
</script>

<style scoped>

</style>