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
import OrderConfirmation from "@/components/order/OrderConfirmation.vue";
import Delivering from "../components/order/Delivering.vue";
import PastOrders from "@/components/order/PastOrders.vue";
import Dialog from "@/components/order/Dialog.vue";
export default {
  components: { OrderConfirmation, Delivering, PastOrders, Dialog },
};
</script>

<style scoped>
.order {
  background: #f2f2f2;
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