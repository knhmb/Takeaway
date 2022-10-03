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
};
</script>

<style scoped>
.search {
  background: #f2f2f2;
}
</style>