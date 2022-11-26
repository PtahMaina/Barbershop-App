<template>
  <div class="popup">
    <div class="popupInner">
        <slot />
        <!-- <BookingForm/> -->
        <button class="popCLose" @click="togglePopUp()">Close</button>
    </div>
  </div>
</template>

<script>
import BookingForm from "../views/BookingForm.vue"
export default {
    props:[
        "togglePopUp"
    ],  components: {BookingForm } 
}
</script>

<style  scoped>
.popup{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
    background-color:rgba(0, 0, 0, 0.2) ;
    display: flex;
    align-items: center;
    justify-content: center;
}

.popupInner{
background: white;
width: 100%; 
height: fit-content;
}
</style>