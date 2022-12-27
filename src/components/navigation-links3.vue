<template>
  <nav class="navigation-links3-nav" v-bind:class="rootClassName">
    <span class="navigation-links3-text">{{ text }}</span>
    <span class="navigation-links3-text1">{{ text1 }}</span>
    <span class="navigation-links3-text2">{{ text2 }}</span>
  </nav>
</template>

<script>
export default {
  name: 'NavigationLinks3',
  props: {
    rootClassName: String,
    text: {
      type: String,
      default: 'About',
    },
    text2: {
      type: String,
      default: 'Pricing',
    },
    text1: {
      type: String,
      default: 'Features',
    },
  },
}
</script>

<style scoped>
.navigation-links3-nav {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  flex-direction: row;
}
.navigation-links3-text {
  color: var(--dl-color-primary-amarelo);
  font-family: Montserrat;
}
.navigation-links3-text1 {
  color: var(--dl-color-primary-amarelo);
  font-family: Montserrat;
  margin-left: var(--dl-space-space-twounits);
}
.navigation-links3-text2 {
  color: var(--dl-color-primary-amarelo);
  font-family: Montserrat;
  margin-left: var(--dl-space-space-twounits);
}










@media(max-width: 767px) {
  .navigation-links3-nav {
    align-items: flex-start;
    flex-direction: column;
  }
  .navigation-links3-text {
    margin-bottom: var(--dl-space-space-unit);
  }
  .navigation-links3-text1 {
    margin-left: 0;
    margin-bottom: var(--dl-space-space-unit);
  }
  .navigation-links3-text2 {
    margin-left: 0;
    margin-bottom: var(--dl-space-space-unit);
  }
}
</style>
