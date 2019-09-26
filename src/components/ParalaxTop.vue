<template>
<app-paralax-image h="900px" imageSrc="../images/001.webp">
    <h1 slot="paragraph1">M B</h1>
    <h2 slot="paragraph2">Biuro usług księgowych</h2>
</app-paralax-image>
</template>

<script>
  import ParalaxImage from "./ParalaxImage";

export default {
  components: {
    appParalaxImage: ParalaxImage
  }
};
</script>

<style scoped>
h1 {
  font-size: 120px;
  font-weight: bolder;
  margin: auto;
  text-align: center;
  padding-top: 300px;
  font-family: "Cinzel", sans-serif;
}
h2 {
  font-size: 50px;
  margin: auto;
  text-align: center;
  font-family: "Cinzel", sans-serif;
}
</style>
