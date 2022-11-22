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
<h1 class="font-semibold text-3xl mt-14">Chat with us</h1>
<p class="text-base font-normal mt-5">For any enquiries, additional information or special booking requests, feel free to get in touch with us by filling in the form below.</p>
<div class="flex w-full h-full mt-10 mx-auto maxWidth">
    <div class="w-full mt-10" id="contact">
          <form @submit.prevent="handleSubmit" id="contact-form" name="myForm" class="form  formWidth flex flex-col gap-6"  role="form">
                <div class="w-full">
                    <input type="text" class="w-full border-none py-4 p-2 rounded bgLightGrey" id="name" name="name" placeholder="Your Name" tabindex=""  required v-model="name">
                </div>
                <div class="w-full">
                    <input type="email" class="w-full border-none py-4 p-2 rounded bgLightGrey" id="email" name="email" placeholder="Your Email" tabindex="" required v-model="email">
                </div>
                <div class="w-full">
                    <input type="text" class="w-full border-none py-4 p-2 rounded bgLightGrey" id="phone" name="phone" placeholder="Your Phone Number" tabindex=""  required v-model="name">
                </div>
                <div class="w-full">
                    <textarea rows="6" cols="60" name="message" class="w-full border-none py-5 p-2  rounded bgLightGrey" id="message" placeholder="Your Message" tabindex="" v-model="message"></textarea >
                </div>
                <div class="">
                    <button type="submit" class="w-full border-none py-3 rounded bgBlack text-white">Send Message</button>
                    <!-- <button type="reset" value="Reset" class="btn btn-mod btn-border btn-large">reset</button> -->
                </div>
            </form>
    </div>
<div class="w-full mt-10">
        <div>
          <img src="https://i.postimg.cc/pLHSZ1kq/Rectangle-10.png" alt="" class="w-96">
        </div>
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

.formWidth{
  width: 80%;
}


</style>