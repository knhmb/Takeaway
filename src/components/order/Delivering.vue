<template>
  <div class="delivering">
    <h4>Delivering</h4>
    <carousel v-if="orders.length > 0" :breakpoints="breakpoints">
      <template v-for="order in orders" :key="order">
        <slide v-if="order.status === 'Delivering'">
          <div class="card">
            <img src="../../assets/restaurant.png" alt="" />
            <p class="name">Restaurant name restaurant name...</p>
            <span>#1234</span>
            <span>•</span>
            <span>2022-08-11 12:31</span>
            <p class="price">HK$ 98.00</p>
          </div>
        </slide>
      </template>

      <template #addons>
        <navigation />
      </template>
    </carousel>
    {{ orders }}
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
  computed: {
    orders() {
      return this.$store.getters["cart/orders"];
    },
    orderDetails() {
      return this.$store.getters["cart/orderDetails"];
    },
    lastOrder() {
      return this.orderDetails.find(
        (item) => item.id === this.$route.params.id
      );
    },
  },
};
</script>
  
  <style scoped>
.delivering {
  margin-top: 2.5rem;
}

.delivering h4 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #141414;
  margin-bottom: 0.5rem;
}

.delivering .card {
  background: #ffffff;
  border-radius: 8px;
  padding: 0.5rem;
  text-align: start;
  margin-right: 0.7rem;
  width: 100%;
}

.delivering .card img {
  width: 1.3rem;
}

.delivering .card p.name {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: #141414;
}

.delivering .card span {
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

.delivering .card span:nth-of-type(2) {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}

.delivering .card p.price {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: #141414;
}

.delivering :deep(.carousel__slide) {
  justify-content: flex-start;
}

.delivering :deep(.carousel__next) {
  background: #ffffff;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.04);
  border-radius: 40px;
  color: #fe5d1f;
  right: -1.5rem;
}

.delivering :deep(.carousel__prev) {
  background: #ffffff;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.04);
  border-radius: 40px;
  color: #fe5d1f;

  left: -1.5rem;
}

.delivering :deep(.carousel__prev--in-active, .carousel__next--in-active) {
  display: none;
}

@media screen and (max-width: 991px) {
  .delivering :deep(.carousel__next) {
    right: 0;
  }

  .delivering :deep(.carousel__prev) {
    left: 0;
  }
}
</style>