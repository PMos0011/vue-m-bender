<template>
  <div>
     <size-modal />
    <app-header></app-header>
    <app-paralax-top></app-paralax-top>
    <app-description></app-description>
    <app-offert></app-offert>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import ParalaxTop from "./components/ParalaxTop";
import Description from "./components/Description";
import Offert from "./components/Offert";
import Footer from "./components/Footer";

import SizeModal from "./components/CoockiesPolicy";

export default {
  components: {
    appHeader: Header,
    appParalaxTop: ParalaxTop,
    appDescription: Description,
    appOffert: Offert,
    appFooter:Footer,
    SizeModal
  }
};
</script>

<style>
</style>
