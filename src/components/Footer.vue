<template>

 <div class="container" id="foot">
     <div class="row">
        <div class="footer">
        <h6 class="p fw-bold ">© <span style="font-size:13.5px;">2022 </span>The Urban Shave</h6>
        <p>18 Chukker Road, Kenwyn, Cape Town 7780</p>
        </div>
        <div class="col">
            <router-link style="text-decoration: none; color:white" :to="{ name: 'Services'}"> Services</router-link>

        </div>
         <div class="col">
            <router-link style="text-decoration: none; color:white" :to="{ name: 'Story'}">Story</router-link>
        </div>
         <p>All Rights Reserved</p>
     </div>
 </div>
 

 

</template>

<script>
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




</style>