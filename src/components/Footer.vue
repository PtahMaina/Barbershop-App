<template>

 <div class="container" id="foot">
     <div class="row">
        <div class="footer">
        <h6 class="p fw-bold ">© <span style="font-size:13.5px;">2022 </span><span style="color:#b18044">The Urban Shave</span> </h6>
        <p>18 Chukker Road, Kenwyn, Cape Town 7780</p>
       
        <div class="col">
            <router-link style="text-decoration: none; color:white" :to="{ name: 'Services'}"><button class="btn" >Services</button> </router-link>
             <router-link style="text-decoration: none; color:white" :to="{ name: 'Story'}"><button class="btn">Story</button> </router-link>
        </div>

         <p>All Rights Reserved</p>
     </div>
     </div>
 </div>
 

 

</template>

<script scoped>
export default {

}
</script>

<style scoped>

/* *{
    background: #b68345;
} */

.p{
    padding-top: 100px;
}
.footer {
    position: relative;
    
   
}

.btn:hover{
    color:#b68345
}

.col{
    display:flex;
    justify-content: space-around
}

</style>