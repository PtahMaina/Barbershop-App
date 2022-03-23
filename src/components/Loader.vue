<template>
<RingLoader :color="white"/>
</template>

<script>
import RingLoader from "vue-spinner/src/RingLoader.vue"
export default {
    name: "Loader",
    props: {
        color: "",
    },
    components: {
        RingLoader,
    }
}
</script>

<style>

</style>