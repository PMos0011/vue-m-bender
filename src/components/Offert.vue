<template>
  <div class="offert row">
      <app-offert-option isCenter=false>
          <h1 slot="offert">Usługi Księgowe</h1>
      </app-offert-option>
       <app-offert-option isCenter=true>
          <h1 slot="offert">Usługa Kadrowo- płacowa</h1>
      </app-offert-option>
       <app-offert-option isCenter=false>
          <h1 slot="offert">Rozliczenia podatkowe</h1>
      </app-offert-option>
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
.offert {
  padding: 3%;
  margin-top: 20px;
  margin-bottom: 30px;
}

h1{
    font-size: 36px;
    text-align: center;
    color: whitesmoke;
    font-family: georgia,serif;
    padding-top: 40px;
}

</style>
