<template>
  <div class="carousel">
    <base-container>
      <carousel :items-to-show="3">
        <slide v-for="slide in 5" :key="slide">
          <img src="../../assets/banner.png" alt="" />
        </slide>

        <template #addons>
          <navigation />
        </template>
      </carousel>
    </base-container>
  </div>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";

export default {
  name: "App",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
};
</script>

<style scoped>
.carousel {
  padding-top: 0.5rem;
}

.carousel :deep(.carousel__track) {
  gap: 0.5rem;
}

.carousel :deep(.carousel__next) {
  background: #ffffff;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.04);
  border-radius: 40px;
  color: #fe5d1f;
  right: -1.5rem;
}

.carousel :deep(.carousel__prev) {
  background: #ffffff;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.04);
  border-radius: 40px;
  color: #fe5d1f;

  left: -1.5rem;
}

.carousel :deep(.carousel__prev--in-active, .carousel__next--in-active) {
  display: none;
}
</style>