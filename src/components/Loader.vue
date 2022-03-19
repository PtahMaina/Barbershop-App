<template>
<RotateLoader :color="white"/>
</template>

<script>
import RotateLoader from "vue-spinner/src/RotateLoader.vue"
export default {
    name: "Loader",
    props: {
        color: "",
    },
    components: {
        RotateLoader,
    }
}
</script>

<style>

</style>