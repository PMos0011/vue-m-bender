<template>
  <div>
    <app-header></app-header>
    <app-paralax-top></app-paralax-top>
    <router-view></router-view> 
  </div>
</template>

<script>
import Header from "./components/Header";
import ParalaxTop from "./components/ParalaxTop"

export default {
  components: {
    appHeader: Header,
    appParalaxTop: ParalaxTop  
  }
};
</script>

<style>
</style>
