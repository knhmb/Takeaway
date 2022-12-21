<template>
  <div class="carousel">
    <base-container>
      <carousel v-if="banners.length > 0" :breakpoints="breakpoints">
        <slide v-for="slide in banners" :key="slide">
          <img :src="slide.thumbnail" alt="" />
          <!-- <img src="../../assets/banner.png" alt="" /> -->
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
  data() {
    return {
      breakpoints: {
        300: {
          itemsToShow: 1,
          snapAlign: "center",
        },
        // 700px and up
        700: {
          itemsToShow: 2,
          snapAlign: "center",
        },
        // 1024 and up
        1024: {
          itemsToShow: 3,
          snapAlign: "start",
        },
      },
    };
  },
  computed: {
    banners() {
      return this.$store.getters["dashboard/banners"];
    },
  },
  created() {
    this.$store.dispatch("dashboard/getBanners");
  },
};
</script>

<style scoped>
.carousel {
  padding-top: 0.5rem;
}

/* .carousel :deep(.carousel__slide.carousel__slide--visible) {
  margin-right: 0.5rem;
} */

.carousel img {
  width: 100%;
}

.carousel img {
  padding-right: 0.5rem;
}

/* .carousel :deep(.carousel__track) {
  gap: 0.5rem;
} */

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

@media screen and (max-width: 991px) {
  .carousel :deep(.carousel__next) {
    right: 0;
  }

  .carousel :deep(.carousel__prev) {
    left: 0;
  }
}
</style>