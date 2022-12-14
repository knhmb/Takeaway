<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="restaurant-items">
    <base-container>
      <el-row :gutter="15">
        <el-col :sm="24" :lg="16">
          <div class="card">
            <div class="top">
              <h2>{{ restaurantDetails.name }}</h2>
              <p class="description">
                {{ restaurantDetails.description }}
              </p>
            </div>
            <div class="content">
              <div class="single-content">
                <img src="../assets/phone.png" alt="" />
                <div class="text">
                  <p>Phone</p>
                  <p>9876 1234</p>
                </div>
              </div>
              <div class="single-content">
                <img src="../assets/opening-hours.png" alt="" />
                <div class="text">
                  <p>Opening hours</p>
                  <p>{{ restaurantDetails.openingHours }}</p>
                </div>
              </div>
              <div class="single-content">
                <img src="../assets/address.png" alt="" />
                <div class="text">
                  <p>Address</p>
                  <p>
                    {{ restaurantDetails.address }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Popular @addProduct="addProduct($event)" />
        </el-col>
        <el-col :sm="24" :lg="8">
          <RightSection :products="products" />
        </el-col>
      </el-row>
    </base-container>
  </section>
</template>

<script>
import Popular from "@/components/restaurant/Popular.vue";
import RightSection from "@/components/restaurant/RightSection.vue";
export default {
  components: { Popular, RightSection },
  data() {
    return {
      products: [],
    };
  },
  computed: {
    restaurantDetails() {
      return this.$store.getters["dashboard/restaurantDetails"];
    },
  },
  methods: {
    addProduct(item) {
      item.quantity = 1;
      this.products.push(item);
      this.findOcc(this.products, "name");
    },
    findOcc(arr, key) {
      let arr2 = [];

      arr.forEach((x) => {
        // Checking if there is any object in arr2
        // which contains the key value
        if (
          arr2.some((val) => {
            return val[key] == x[key];
          })
        ) {
          // If yes! then increase the occurrence by 1
          arr2.forEach((k) => {
            if (k[key] === x[key]) {
              k["occurrence"]++;
            }
          });
        } else {
          // If not! Then create a new object initialize
          // it with the present iteration key's value and
          // set the occurrence to 1
          let a = {};
          a[key] = x[key];
          a["occurrence"] = 1;
          arr2.push(a);
        }
      });

      console.log(arr2);
      return arr2;
    },
  },
};
</script>

<style scoped>
.restaurant-items {
  background: #f2f2f2;
}

.restaurant-items .card {
  background: #ffffff;
  border-radius: 8px;
  /* padding: 1rem; */
}

.restaurant-items .card .top,
.restaurant-items .card .content {
  padding: 1rem;
}

.restaurant-items .card h2 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: -0.02em;
  color: #141414;
}

.restaurant-items .card p.description {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.02em;
  color: rgba(20, 20, 20, 0.6);
}

.restaurant-items .card .content {
  border-top: 0.5px solid #e6e6e6;
}

.restaurant-items .card .content .single-content {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.restaurant-items .card .content .single-content img {
  width: 1.5rem;
  margin-right: 0.5rem;
}

.restaurant-items .card .content .single-content .text p:first-of-type {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: rgba(20, 20, 20, 0.6);
}

.restaurant-items .card .content .single-content .text p:nth-of-type(2) {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.02em;
  color: #141414;
}
</style>