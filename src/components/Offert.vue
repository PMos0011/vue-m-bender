<template>
  <div class="offert-content">
    <h1>OFERTA</h1>
    <div class="offert row">
      <app-offert-option isCenter="false">
        <h2 slot="offert">Usługi Księgowe</h2>
      </app-offert-option>
      <app-offert-option isCenter="true">
        <h2 slot="offert">Usługa Kadrowo- płacowa</h2>
      </app-offert-option>
      <app-offert-option isCenter="false">
        <h2 slot="offert">Rozliczenia podatkowe</h2>
      </app-offert-option>
    </div>
  </div>
</template>

<script>
import OffertOption from "./OffertOption";

export default {
  components: {
    appOffertOption: OffertOption
  }
};
</script>

<style scoped>
.offert-content {
  text-align: center;
  margin-top: 40px;
}
.offert {
  padding: 3%;
}

h2 {
  font-size: 36px;
  color: whitesmoke;
  font-family: georgia, serif;
  padding-top: 40px;
}

h1 {
  font-size: 48px;
  color: #4d4b4b;
  font-family: "Anton", sans-serif;
}
.row{
  margin: 0px;
}
</style>
