<template>
  <section class="home">
    <Carousel />
    <Popular />
    <Favorites />
    <LowestDelivery />
  </section>
</template>

<script>
import Carousel from "@/components/home/Carousel.vue";
import Popular from "@/components/home/Popular.vue";
import Favorites from "@/components/home/Favorites.vue";
import LowestDelivery from "../components/home/LowestDelivery.vue";

export default {
  components: {
    Carousel,
    Popular,
    Favorites,
    LowestDelivery,
  },
  created() {
    this.$store.commit("CHANGE_AUTH_OPTION", "login");
  },
};
</script>

<style scoped>
.home {
  background: #f2f2f2;
}
</style>