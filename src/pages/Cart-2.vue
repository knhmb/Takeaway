<template>
  <section class="cart-2">
    <base-container>
      <h2>Cart</h2>
      <el-row :gutter="30">
        <el-col :sm="24" :lg="16">
          <div class="card">
            <div class="top">
              <div class="text">
                <img src="../assets/address.png" alt="" />
                <p class="address">Delivery address</p>
              </div>
              <img
                @click="addressDialog = true"
                src="../assets/edit.png"
                alt=""
              />
            </div>
            <p class="name">{{ addresses[0].name }}</p>
            <p class="detail">Address detail : {{ addresses[0].unit }}</p>
          </div>
          <PaymentMethod />
          <OrderSummary />
        </el-col>
        <el-col :sm="24" :lg="8">
          <RightSection />
        </el-col>
      </el-row>
    </base-container>
    <Addresses :address-dialog="addressDialog" />
  </section>
</template>

<script>
import PaymentMethod from "@/components/cart-2/PaymentMethod.vue";
import OrderSummary from "@/components/cart-2/OrderSummary.vue";
import RightSection from "@/components/cart-2/RightSection.vue";
import { ElNotification } from "element-plus";
import Addresses from "@/components/cart-2/Addresses.vue";
export default {
  components: { PaymentMethod, OrderSummary, RightSection, Addresses },
  data() {
    return {
      addressDialog: false,
    };
  },
  computed: {
    addresses() {
      return this.$store.getters["profile/addresses"];
    },
  },
  created() {
    this.$store
      .dispatch("auth/checkAccessToken")
      .then(() => {
        this.$store.dispatch("profile/getAddresses");
      })
      .catch(() => {
        this.$store
          .dispatch("auth/checkRefreshToken")
          .then(() => {
            this.$store.dispatch("profile/getAddresses");
          })
          .catch(() => {
            ElNotification({
              title: "Error",
              message: "Token Expired! Please Login Again!",
              type: "Error",
            });
            this.$store.dispatch("auth/logout");
            this.$router.replace("/");
          });
      });
  },
};
</script>


<style scoped>
.cart-2 {
  background: #f2f2f2;
  min-height: 100vh;
}

.cart-2 h2 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.02em;
  color: #141414;
  margin-bottom: 1rem;
}

.cart-2 .card {
  background: #ffffff;
  border-radius: 8px;
  padding: 1rem;
}

.cart-2 .card .top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}

.cart-2 .card .top img {
  width: 1.6rem;
}

.cart-2 .card .top .text p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #141414;
  display: inline-block;
  vertical-align: middle;
}
.cart-2 .card .top .text img {
  vertical-align: middle;
  margin-right: 0.5rem;
}

.cart-2 .card p.name {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: #141414;
}

.cart-2 .card p.detail {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.02em;
}
</style>