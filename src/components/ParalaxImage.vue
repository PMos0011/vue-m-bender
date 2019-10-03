<template>
  <div :style="{'min-height':h}" data-parallax="scroll" :data-image-src="imageSrc">
    <slot name="paragraph1"></slot>
    <slot name="paragraph2"></slot>
  </div>
</template>

<script>
export default {
    props : ['h','imageSrc']
};
</script>

<style scoped>
</style>
