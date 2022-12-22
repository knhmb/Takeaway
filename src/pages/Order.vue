<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="order">
    <base-container>
      <h2>Order</h2>
      <OrderConfirmation />
      <Delivering />
      <PastOrders />
    </base-container>
    <Dialog />
  </section>
</template>

<script>
import { ElNotification } from "element-plus";
import OrderConfirmation from "@/components/order/OrderConfirmation.vue";
import Delivering from "../components/order/Delivering.vue";
import PastOrders from "@/components/order/PastOrders.vue";
import Dialog from "@/components/order/Dialog.vue";
export default {
  components: { OrderConfirmation, Delivering, PastOrders, Dialog },
  created() {
    this.$store
      .dispatch("auth/checkAccessToken")
      .then(() => {
        this.$store.dispatch("cart/getOrder");
      })
      .catch(() => {
        this.$store
          .dispatch("auth/checkRefreshToken")
          .then(() => {
            this.$store.dispatch("cart/getOrder");
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
.order {
  background: #f2f2f2;
  height: 100vh;
  overflow-y: hidden;
}

.order h2 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.02em;
  color: #141414;
  margin-bottom: 1rem;
}
</style>