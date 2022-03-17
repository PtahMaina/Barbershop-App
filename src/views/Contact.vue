<template>
    <h1 class="head" style="font-weight: bold;color:#b18044">CONTACT US</h1>
    <div class="contaner">
      <div class="row">
        
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
  .catch((error) => alert(error.msg));
    }
  }
}
</script>

<style scoped>
*{
  scroll-behavior: smooth;
}
.head{
    padding-top:100px;
    
}

.form {
  align-items: left;
  display: flex;
  flex-direction: column;
}




textarea#message.form-control {
    height: 120px;
}




.containe {
  display:flex;
  padding: none;
  margin-bottom:50px;
}
/* contact */


.col-xs-12.col-sm-12.col-md-12.col-lg-12 {
  padding: 0 20% 0 20%;
}

.margin-top-25 {
  margin-top: 25px;
}

.form-title {
  padding: 25px;
  font-size: 30px;
  font-weight: 300;
  /* font-family: "Helvetica Neue",Helvetica,Arial,sans-serif; */
}

.form-group .form-control {
   display: block;
    /* width: 100%; */
    height: 48px;
    padding: 10px 24px;
    font-size: 15px;
    font-weight: 400;
    line-height: 1.6;
    color: #333;
    background-color: #fff;
    background-image: none;
    border: solid 1px #b68345;
    

}


.form-group .form-control:hover {
	border: solid 1px#b68345;
}


.btn-mod.btn-large {
    height: auto;
    padding: 13px 52px;
    font-size: 15px;
    
}

.btn-mod.btn-border {
    color: #fff;
    background: #b68345;
}



.btn-mod.btn-border:hover, .btn-mod.btn-border:active, .btn-mod.btn-border:focus, .btn-mod.btn-border:active:focus {
    color: black;
    background:white;
    outline: none;
    
}

@media only screen and (max-width: 500px) {
    .btn-mod.btn-large {
       padding: 11px 15px;
       font-size: 14px;
    }
  
    .form-title {
        font-size: 20px;
  }
  .containe{
    padding: 80px;
  }
}





.b{
  display:flex;
  justify-content:space-evenly;
  
  
}

</style>