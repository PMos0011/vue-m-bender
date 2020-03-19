<template>
<div>
    <app-description></app-description>
    <app-offert></app-offert>
    <app-footer></app-footer>
</div>
</template>

<script>
import Description from "./Description";
import Offert from "./Offert";
import Footer from "./Footer";


export default {
    components: {
    appDescription: Description,
    appOffert: Offert,
    appFooter:Footer}
}
</script>

<style>

</style>