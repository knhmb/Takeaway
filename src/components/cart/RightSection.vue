<template>
  <div class="cart-right-section">
    <div class="card">
      <p class="subtotal">Subtotal</p>
      <p class="price">HK$ {{ cart.resources.subtotal }}</p>
      <el-button @click="$router.push('/cart-2')"
        >Select address and payment
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    cart() {
      return this.$store.getters["cart/cart"];
    },
  },
};
</script>

<style scoped>
.cart-right-section .card {
  background: #ffffff;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
  padding: 1rem;
}

.cart-right-section .card p.subtotal {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: rgba(20, 20, 20, 0.8);
}

.cart-right-section .card p.price {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.02em;
  color: #fe5d1f;
  margin-bottom: 1rem;
}

.cart-right-section .card .el-button {
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
  padding: 1.3rem;
  border-color: #fe5d1f;
}

@media screen and (max-width: 1199px) {
  .cart-right-section {
    margin-top: 1rem;
  }
}
</style>