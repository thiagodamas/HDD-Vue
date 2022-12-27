<template>
  <div class="pasted-image-container" v-bind:class="rootClassName">
    <img :alt="pastedImage_alt" :src="pastedImage_src" />
  </div>
</template>

<script>
export default {
  name: 'PastedImage',
  props: {
    pastedImage_src: {
      type: String,
      default: '/playground_assets/pastedimage-mwf-200h.png',
    },
    pastedImage_alt: {
      type: String,
      default: 'pastedImage',
    },
    rootClassName: String,
  },
}
</script>

<style scoped>
.pasted-image-container {
  display: flex;
  position: relative;
}
</style>
