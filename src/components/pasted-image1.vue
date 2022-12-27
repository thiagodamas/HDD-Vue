<template>
  <div class="pasted-image1-container">
    <img :alt="pastedImage_alt" :src="pastedImage_src" />
  </div>
</template>

<script>
export default {
  name: 'PastedImage1',
  props: {
    pastedImage_src: {
      type: String,
      default: '/playground_assets/pastedimage-4re-200h.png',
    },
    pastedImage_alt: {
      type: String,
      default: 'pastedImage',
    },
  },
}
</script>

<style scoped>
.pasted-image1-container {
  display: flex;
  position: relative;
}
</style>
