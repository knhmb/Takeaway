<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="search">
    <Restaurant />
    <Product />
  </section>
</template>

<script>
import Restaurant from "@/components/search/Restaurant.vue";
import Product from "@/components/search/Product.vue";
export default {
  components: { Restaurant, Product },
  // created() {
  //   this.$store.dispatch("dashboard/getRestuarants");
  // },
};
</script>

<style scoped>
.search {
  background: #f2f2f2;
  height: 100vh;
}
</style>