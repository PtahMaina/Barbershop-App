<template>

    <h1 class="head">OUR STORY</h1>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h5>Established in 2022 The Urban Shave Barbershop is a full-service barbershop that is dedicated to providing exponential customer service to our clients alongside trendy haircuts with specified grooming. Our shop is a client-driven relaxing atmosphere in which we want every person who walks through the door feeling delighted upon leaving after giving them what they were looking for. We take great pride in our craft and know what to deliver to one and every client, due to Vancouver being a very diverse city we have people coming through our doors from the ages of one getting that first cut up to the eldest clients that have come in up to 100. In addition to haircuts, the shop offers all the traditional barbershop services including Straight-razor shaves, Beard trims, Beard Fades, Old School Razor Skin Fades, Classic Cut, Buzz Cut. </h5>
            </div>
   
    <h1 class="p-5">Meet The Team</h1>
                 <!-- pics of babers -->
    <div class="col">
        <div class="image">
           <img  src="https://i.postimg.cc/1tXgNbV3/naaim.jpg" alt="">
           <h6 class="centered">Naaim Fredericks, Barber</h6>              
        </div>
    </div>             
    <div class="col">
         <div class="image">
            <img  src="https://i.postimg.cc/kgCvtXJM/owner.jpg" alt="">
            <h6 class="centered">M.Muneeb Davids, Owner</h6>
        </div>
    </div>        
                     
    <div class="col">
         <div class="image">
            <img  src="https://i.postimg.cc/L6tzRKzc/yaaseen.jpg" alt="">
            <h6 class="centered">Yaaseen Davids, Barber</h6>
        </div>
    </div>       
               
    <div class="col">
        <div class="image">
            <img  src="https://i.postimg.cc/d3MyP4DQ/nadeem1.jpg" alt="">
            <h6 class="centered">Nadeem Johnson, Barber</h6>
        </div>
    </div>                  
           
              
            </div>
        </div>
        
       
   
</template>

<script>
export default {

}
</script>

<style scoped>
.head{
    padding-top:100px;
    
}
/* .centered {
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
} */
.image {
  position: relative;
  /* text-align: center; */
  color: white;
    max-width: 800px; 
  margin: 0 auto; 
}
.image .centered {
  position: absolute;
  bottom: 0; 
  background: rgb(0, 0, 0); 
  background: rgba(0, 0, 0, 0.5); 
  width: 100%;
  padding: 20px; 
  margin-bottom: 0;
}
.container{
    display:grid;
    justify-content:center;
}
h5{
    padding-top: 50px;
}

img{
    width:300px;
    height:350px;
    object-fit:cover;
    /* padding:5px */
}
</style>