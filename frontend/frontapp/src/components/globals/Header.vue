<template>
  <header class="header">
    <AppLogo class="header_logo" />
  </header>
</template>

<script>
import AppLogo from "../atoms/AppLogo.vue";
export default {
  components: {
    AppLogo,
  },
};
</script>

<style lang="scss" scoped>
.header {
  background: #2b4075;
  height: 100px;
}
</style>>