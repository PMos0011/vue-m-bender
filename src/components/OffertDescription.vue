<template>
  <div class="col-12">
    <div class="row">
      <div
        class="col-sm-12 col-md-5 description-title"
        :style="[isCenter=='true' ? {'color': '#A69374'} : {'color':' #757575'}]"
      >
        <slot name="description-title"></slot>
      </div>
      <div class="col-sm-12 col-md-7">
        <slot name="offert-description"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["isCenter"]
};
</script>

<style>
.description-title {
  font-size: 72px;
  font-family: anton, sans-serif;
}
</style>