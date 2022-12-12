<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script>
import TheHeader from "./components/common/TheHeader.vue";

export default {
  components: {
    TheHeader,
  },
  // created() {
  //   this.$store.commit("auth/LOGOUT");
  // },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
