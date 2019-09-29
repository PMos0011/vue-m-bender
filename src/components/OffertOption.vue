<template>
  <div class="col-sm-12 col-md-4">
    <div
      class="offert-opt"
      :style="[isCenter=='true' ? {'background-image':' url(images/light_squere.webp)'} : {'background-image':' url(images/dark_squere.webp)'}]"
      @click="sendMyId"
    >
      <slot name="offert"></slot>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    sendMyId() {
      this.$emit("getMyId", this.myId);
    }
  },
  props: ["isCenter", "myId"]
};
</script>

<style>
.offert-opt {
  height: 230px;
  width: 230px;
  margin: auto;
  margin-bottom: 30px;
  cursor: pointer;
}
</style>
