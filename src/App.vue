<template>
  <div>
    <app-header></app-header>
    <app-paralax-top></app-paralax-top>
    <app-description></app-description>
    <app-offert></app-offert>
    <app-paralax-image h="500px" imageSrc="../images/003.webp"></app-paralax-image>
    <app-offert></app-offert>
  </div>
</template>

<script>
import Header from "./components/Header";
import ParalaxTop from "./components/ParalaxTop";
import Description from "./components/Description";
import Offert from "./components/Offert";
import ParalaxImage from "./components/ParalaxImage";

export default {
  components: {
    appHeader: Header,
    appParalaxTop: ParalaxTop,
    appDescription: Description,
    appOffert: Offert,
    appParalaxImage: ParalaxImage
  }
};
</script>

<style>
</style>
