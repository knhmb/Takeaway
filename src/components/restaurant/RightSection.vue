<template>
  <div class="right-section">
    <div class="card">
      <h2>{{ restaurantDetails.name }}</h2>
      <div class="top">
        <span>Delivery time</span>
        <span>ASAP ({{ deliveryTime }}min)</span>
      </div>
      <template v-if="products.length > 0">
        <div v-for="item in products" :key="item" class="items">
          <div class="left">
            <el-select v-model="item.quantity"></el-select>
            <p>{{ item.name }}</p>
          </div>
          <div class="right">
            <p class="discount">HK$ {{ item.price }}</p>
            <p class="price">HK$ {{ item.price - item.discount }}</p>
          </div>
        </div>
        <div class="subtotal-content">
          <p class="subtotal">Subtotal</p>
          <p class="subtotal-price">HK$ {{ sum }}</p>
        </div>
      </template>
      <el-button @click="addToCart()">Add to cart</el-button>
    </div>
  </div>
</template>

<script>
import { ElNotification } from "element-plus";
export default {
  props: ["products"],
  data() {
    return {
      value: 1,
    };
  },
  computed: {
    restaurantDetails() {
      return this.$store.getters["dashboard/restaurantDetails"];
    },
    productDetails() {
      return this.$store.getters["dashboard/productDetails"];
    },
    deliveryTime() {
      return (
        +this.productDetails.cookingTime +
        +this.productDetails.courierAcceptanceResponseTime +
        +this.productDetails.restaurantAcceptanceResponseTime
      );
    },

    sum() {
      let sum = 0;

      this.products.forEach((item) => {
        sum += item.price;
      });

      console.log(sum);
      return sum;
    },
    quantity() {
      const counts = {};
      // const sampleArray = ['a', 'a', 'b', 'c'];
      this.products.forEach(function (x) {
        counts[x] = (counts[x] || 0) + 1;
      });
      console.log(counts);
      return counts;
    },
  },
  methods: {
    addToCart() {
      console.log(this.products);
      let finalArr = [];
      this.products.forEach((product) => {
        finalArr.push({
          product: product.slug,
          quantity: product.quantity,
        });
      });
      console.log(finalArr);
      const isLoggedIn = localStorage.getItem("accessToken");
      if (!isLoggedIn) {
        ElNotification({
          title: "Error",
          message: "Please Login First!",
          type: "error",
        });
        return;
      }
      this.$store
        .dispatch("auth/checkAccessToken")
        .then(() => {
          this.$store.dispatch("cart/addToCart", finalArr).then(() => {
            ElNotification({
              title: "Success",
              message: "Items Added To Cart!",
              type: "success",
            });
            this.$router.push("/cart");
          });
        })
        .catch(() => {
          this.$store
            .dispatch("auth/checkRefreshToken")
            .then(() => {
              this.$store.dispatch("cart/addToCart", finalArr).then(() => {
                ElNotification({
                  title: "Success",
                  message: "Items Added To Cart!",
                  type: "success",
                });
                this.$router.push("/cart");
              });
            })
            .catch(() => {
              ElNotification({
                title: "Error",
                message: "Token Expired! Please Login Again.",
                type: "error",
              });
              this.$store.dispatch("auth/logout");
              this.$router.replace("/");
            });
        });
    },
  },
};
</script>

<style scoped>
.right-section .card {
  background: #ffffff;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
  padding: 1rem;
}

.right-section .card h2 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #141414;
  margin-bottom: 0.3rem;
}

.right-section .card span {
  font-family: "Inter";
  font-style: normal;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.02em;
}

.right-section .card .top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.right-section .card span:first-of-type {
  font-weight: 400;
  color: rgba(20, 20, 20, 0.6);
}

.right-section .card span:nth-of-type(2) {
  font-weight: 500;
  color: #fe5d1f;
}

.right-section .card .items {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
  border-bottom: 1px solid #e6e6e6;
  padding-bottom: 0.5rem;
  margin-bottom: 0.5rem;
}

.right-section .card .items .left .el-select {
  width: 3.5rem;
}

.right-section .card .items .left .el-select :deep(.el-input__inner) {
  color: #fe5d1f;
}

.right-section
  .card
  .items
  .left
  .el-select
  :deep(.el-icon.el-select__caret.el-select__icon) {
  color: #fe5d1f;
}

.right-section .card .items .left p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: #141414;
  display: inline;
  vertical-align: super;
  margin-left: 0.3rem;
}

.right-section .card .items .right {
  width: 50%;
  text-align: end;
}

.right-section .card .items .right p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: #9c9c9c;
}
.right-section .card .items .right p.discount {
  text-decoration-line: line-through;
  color: #9c9c9c;
}
.right-section .card .items .right p.price {
  color: #141414;
}

.right-section .card .subtotal-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.right-section .card p.subtotal {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: rgba(20, 20, 20, 0.6);
  display: inline-block;
}

.right-section .card p.subtotal-price {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: #141414;
  display: inline-block;
  text-align: end;
  width: 14.78rem;
}

.right-section .card .el-button {
  background: #fe5d1f;
  border-radius: 8px;
  width: 100%;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #ffffff;
  border-color: #fe5d1f;
  padding: 1.2rem;
  margin-top: 1rem;
}

@media screen and (max-width: 1199px) {
  .right-section {
    margin-top: 1rem;
  }
}
</style>