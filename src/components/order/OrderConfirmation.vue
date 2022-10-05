<template>
  <div class="order-confirmation">
    <h4>Waiting for confirmation</h4>
    <carousel :breakpoints="breakpoints">
      <slide v-for="slide in 5" :key="slide">
        <div class="card">
          <img src="../../assets/restaurant.png" alt="" />
          <p class="name">Restaurant name restaurant name...</p>
          <span>#1234</span>
          <span>•</span>
          <span>2022-08-11 12:31</span>
          <p class="price">HK$ 98.00</p>
          <el-button>Cancel order</el-button>
        </div>
      </slide>

      <template #addons>
        <navigation />
      </template>
    </carousel>
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
          itemsToShow: 4,
          snapAlign: "start",
        },
      },
    };
  },
};
</script>

<style scoped>
.order-confirmation h4 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #141414;
  margin-bottom: 0.5rem;
}

.order-confirmation .card {
  background: #ffffff;
  border-radius: 8px;
  padding: 0.5rem;
  text-align: start;
  margin-right: 0.7rem;
  width: 100%;
}

.order-confirmation .card img {
  width: 1.3rem;
}

.order-confirmation .card p.name {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: #141414;
}

.order-confirmation .card span {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: rgba(20, 20, 20, 0.6);
  margin: 0.5rem 0;
  display: inline-block;
}

.order-confirmation .card span:nth-of-type(2) {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}

.order-confirmation .card p.price {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: #141414;
}

.order-confirmation .card .el-button {
  background: #e63939;
  border-radius: 4px;
  border-color: #e63939;

  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: #ffffff;
  display: flex;
  margin-left: auto;
  margin-top: 0.5rem;
}

/* .order-confirmation :deep(.carousel__track) {
  gap: 0.5rem;
} */

.order-confirmation :deep(.carousel__slide) {
  justify-content: flex-start;
}

.order-confirmation :deep(.carousel__next) {
  background: #ffffff;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.04);
  border-radius: 40px;
  color: #fe5d1f;
  right: -1.5rem;
}

.order-confirmation :deep(.carousel__prev) {
  background: #ffffff;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.04);
  border-radius: 40px;
  color: #fe5d1f;

  left: -1.5rem;
}

.order-confirmation
  :deep(.carousel__prev--in-active, .carousel__next--in-active) {
  display: none;
}

@media screen and (max-width: 991px) {
  .order-confirmation :deep(.carousel__next) {
    right: 0;
  }

  .order-confirmation :deep(.carousel__prev) {
    left: 0;
  }
}
</style>