<template>
  <div class="popular">
    <base-container>
      <h2>Popular Near You</h2>

      <carousel v-if="restaurants.length > 0" :breakpoints="breakpoints">
        <slide v-for="slide in restaurants" :key="slide">
          <el-row :gutter="10">
            <el-col v-for="rest in restaurants" :key="rest" :sm="12" :md="6">
              <div class="card">
                <div class="top">
                  <img src="../../assets/restaurant.png" alt="" />
                  <img src="../../assets/bookmark-off.png" alt="" />
                </div>
                <p class="title">{{ rest.name }}</p>
                <p class="description">
                  {{ rest.description }}
                </p>
              </div>
            </el-col>
            <!-- <el-col :sm="12" :md="6">
              <div class="card">
                <div class="top">
                  <img src="../../assets/restaurant.png" alt="" />
                  <img src="../../assets/bookmark-off.png" alt="" />
                </div>
                <p class="title">Restaurants name restaurants...</p>
                <p class="description">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit...
                </p>
              </div>
            </el-col>
            <el-col :sm="12" :md="6">
              <div class="card">
                <div class="top">
                  <img src="../../assets/restaurant.png" alt="" />
                  <img src="../../assets/bookmark-off.png" alt="" />
                </div>
                <p class="title">Restaurants name restaurants...</p>
                <p class="description">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit...
                </p>
              </div>
            </el-col>
            <el-col :sm="12" :md="6">
              <div class="card">
                <div class="top">
                  <img src="../../assets/restaurant.png" alt="" />
                  <img src="../../assets/bookmark-off.png" alt="" />
                </div>
                <p class="title">Restaurants name restaurants...</p>
                <p class="description">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit...
                </p>
              </div>
            </el-col>
            <el-col :sm="12" :md="6">
              <div class="card">
                <div class="top">
                  <img src="../../assets/restaurant.png" alt="" />
                  <img src="../../assets/bookmark-off.png" alt="" />
                </div>
                <p class="title">Restaurants name restaurants...</p>
                <p class="description">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit...
                </p>
              </div>
            </el-col>
            <el-col :sm="12" :md="6">
              <div class="card">
                <div class="top">
                  <img src="../../assets/restaurant.png" alt="" />
                  <img src="../../assets/bookmark-off.png" alt="" />
                </div>
                <p class="title">Restaurants name restaurants...</p>
                <p class="description">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit...
                </p>
              </div>
            </el-col>
            <el-col :sm="12" :md="6">
              <div class="card">
                <div class="top">
                  <img src="../../assets/restaurant.png" alt="" />
                  <img src="../../assets/bookmark-off.png" alt="" />
                </div>
                <p class="title">Restaurants name restaurants...</p>
                <p class="description">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit...
                </p>
              </div>
            </el-col>
            <el-col :sm="12" :md="6">
              <div class="card">
                <div class="top">
                  <img src="../../assets/restaurant.png" alt="" />
                  <img src="../../assets/bookmark-off.png" alt="" />
                </div>
                <p class="title">Restaurants name restaurants...</p>
                <p class="description">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit...
                </p>
              </div>
            </el-col> -->
          </el-row>
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
          itemsToShow: 1,
          snapAlign: "center",
        },
        // 1024 and up
        1024: {
          itemsToShow: 1,
          snapAlign: "start",
        },
      },
    };
  },
  computed: {
    restaurants() {
      return this.$store.getters["dashboard/restuarants"];
    },
  },
  created() {
    this.$store.dispatch("dashboard/getRestuarants");
  },
};
</script>

<style scoped>
/* .popular {
  background: #f2f2f2;
} */

.popular h2 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.02em;
  color: #141414;
  margin-bottom: 1rem;
}

.popular .el-row .el-col {
  margin-bottom: 10px;
}

.popular
  :deep(.carousel__slide.carousel__slide--active.carousel__slide--visible) {
  display: block;
  margin: 0 2rem;
}

.popular .card {
  background: #ffffff;
  border-radius: 8px;
  padding: 0.5rem;
  /* width: 12rem; */
  /* width: 100%; */
}

.popular .card .top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.8rem;
}

.popular .card .top img {
  width: 1rem;
}

.popular .card p.title {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 12px;
  color: #141414;
  text-align: start;
  margin-bottom: 0.5rem;
}

.popular .card p.description {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: rgba(20, 20, 20, 0.6);
  text-align: start;
}

.popular :deep(.carousel__next) {
  background: #ffffff;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.04);
  border-radius: 40px;
  color: #fe5d1f;
  right: -1.5rem;
}

.popular :deep(.carousel__prev) {
  background: #ffffff;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.04);
  border-radius: 40px;
  color: #fe5d1f;

  left: -1.5rem;
}

.popular :deep(.carousel__prev--in-active, .carousel__next--in-active) {
  display: none;
}

.popular
  :deep(.carousel__slide.carousel__slide--active.carousel__slide--visible) {
  margin: 0;
}

@media screen and (max-width: 991px) {
  .popular :deep(.carousel__next) {
    right: 0;
  }

  .popular :deep(.carousel__prev) {
    left: 0;
  }
}
</style>