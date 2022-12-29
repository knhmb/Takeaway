<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="order-dialog">
    <el-dialog v-model="dialogVisible">
      <p class="estimated-time" v-if="isFailed">Order Failed!</p>
      <div class="inner-box">
        <p class="estimated-time">Estimated delivery time</p>
        <p class="time">11:30 - 11:45</p>
        <div class="slider">
          <div class="process"></div>
        </div>
        <p class="food-picked">Your rider has picked up your food.</p>
      </div>
      <!-- {{ lastOrder }} -->
      {{ orderDetails }}
      <!-- <template v-for="item in lastOrder.products" :key="item"> -->
      <div class="inner-box">
        <h3>Order details</h3>
        <div class="items">
          <div class="single-item">
            <p class="text">Your order number:</p>
            <div class="pill">#1234</div>
          </div>
          <div class="single-item">
            <p class="text">Your order from:</p>
            <!-- <p class="answer">{{ lastOrder.restaurant }}</p> -->
            <p class="answer">Papadam Indian Authentic</p>
          </div>
          <div class="single-item">
            <p class="text">Delivery address</p>
            <p class="answer">
              Address detail lorem ipsum dolor sit amet, consectetur adipiscing
              elit...
            </p>
          </div>
          <div class="single-item">
            <div class="right">
              <!-- <span>1x</span> -->
              <span>{{ item.quantity }}x</span>
              <p class="text">Product name</p>
            </div>

            <!-- <p class="text">HK$ 100.00</p> -->
            <p class="text">HK$ {{ item.unitPrice * item.quantity }}</p>
          </div>
          <!-- <div class="single-item">
            <div class="right">
              <span>1x</span>
              <p class="text">Product name</p>
            </div>

            <p class="text">HK$ 58.0</p>
          </div>
          <div class="single-item">
            <div class="right">
              <span>1x</span>
              <p class="text">Product name</p>
            </div>

            <p class="text">HK$ 58.0</p>
          </div> -->
        </div>
        <div class="items">
          <div class="single-item">
            <p class="text">Subtotal</p>
            <!-- <p class="text">HK$ 100.00</p> -->
            <p class="text">HK$ {{ item.subtotal }}</p>
          </div>
          <div class="single-item">
            <p class="text">Delivery fee</p>
            <p class="text">HK$ 100.00</p>
            <!-- <p class="text">HK$ {{ lastOrder.deliveryFee }}</p> -->
          </div>
        </div>
        <div class="single-item">
          <p class="total">Total</p>
          <p class="total-price">HK$ 100.00</p>
          <!-- <p class="total-price">
              HK$ {{ item.subtotal * lastOrder.deliveryFee }}
            </p> -->
          <!-- <p class="total-price">HK$ 174.0</p> -->
        </div>
      </div>
      <!-- </template> -->
    </el-dialog>
  </div>
</template>


<script>
import { ElNotification } from "element-plus";
export default {
  data() {
    return {
      isFailed: false,
      dialogVisible: true,
    };
  },
  computed: {
    orderDetails() {
      return this.$store.getters["cart/orderDetails"];
    },
    // lastOrder() {
    //   return this.orderDetails.find(
    //     (item) => item.id === this.$route.params.id
    //   );
    // },
  },
  created() {
    if (this.$route.query.success === "false") {
      this.isFailed = true;
    } else {
      this.isFailed = false;
    }
    console.log(this.$route.query);
    console.log(this.$route.query.id);
    this.$store
      .dispatch("auth/checkAccessToken")
      .then(() => {
        this.$store.dispatch("cart/getOrderDetails", this.$route.query.id);
      })
      .catch(() => {
        this.$store
          .dispatch("auth/checkRefreshToken")
          .then(() => {
            this.$store.dispatch("cart/getOrderDetails", this.$route.query.id);
          })
          .catch(() => {
            ElNotification({
              title: "Error",
              message: "Token Expired! Please Login Again.",
              type: "error",
            });
            this.$store.dispatch("auth/logout");
            this.$router.push("/");
          });
      });
  },
};
</script>

<style scoped>
.order-dialog :deep(.el-dialog) {
  width: 40rem;
  border-radius: 8px;
}

.order-dialog
  :deep(.el-dialog .el-dialog__headerbtn .el-icon.el-dialog__close) {
  color: #fe5d1f;
}

.order-dialog .inner-box {
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  padding: 1rem;
  text-align: center;
  margin-top: 1rem;
}

.order-dialog .inner-box p.estimated-time {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: rgba(20, 20, 20, 0.6);
}

.order-dialog .inner-box p.time {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #141414;
}

.order-dialog .inner-box .slider {
  background: #e6e6e6;
  border-radius: 8px;
  width: 15rem;
  height: 0.5rem;
  margin: 0 auto;
  margin: 1rem auto;
  position: relative;
}

.order-dialog .inner-box .slider .process {
  width: 60%;
  height: 100%;
  border-radius: inherit;
  background: #fe5d1f;
}

.order-dialog .inner-box p.food-picked {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.02em;
  color: #141414;
}

.order-dialog .inner-box:last-of-type {
  text-align: start;
}

.order-dialog .inner-box h3 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: #141414;
}

.order-dialog .inner-box .items {
  margin-top: 1rem;
  border-bottom: 1px solid #e6e6e6;
}

.order-dialog .inner-box .single-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.7rem;
}

.order-dialog .inner-box .items .single-item p.text,
.order-dialog .inner-box .items .single-item span {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: rgba(20, 20, 20, 0.6);
  display: inline-block;
}

.order-dialog .inner-box .items .single-item span {
  margin-right: 1rem;
}

.order-dialog .inner-box .items .single-item p.answer {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  text-align: right;
  letter-spacing: -0.02em;
  color: #141414;
}

.order-dialog .inner-box .items .single-item .pill {
  background: rgba(254, 93, 31, 0.1);
  border-radius: 14px;
  padding: 0.2rem 0.4rem;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  text-align: right;
  letter-spacing: -0.02em;
  color: #fe5d1f;
  width: fit-content;
}

.order-dialog .inner-box .single-item p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.02em;
  margin-top: 1rem;
}

.order-dialog .inner-box .single-item p.total {
  color: rgba(20, 20, 20, 0.8);
}

.order-dialog .inner-box .single-item p.total-price {
  color: #141414;
}

@media screen and (max-width: 991px) {
  .order-dialog :deep(.el-dialog) {
    width: 35rem;
  }
}

@media screen and (max-width: 570px) {
  .order-dialog :deep(.el-dialog) {
    width: 25rem;
  }
}
@media screen and (max-width: 402px) {
  .order-dialog :deep(.el-dialog) {
    width: 20rem;
  }
}
</style>
