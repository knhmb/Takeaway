<template>
  <div class="cart-left-section">
    <div class="card">
      <h2>{{ restaurantDetails.name }}</h2>
      <div class="top">
        <span>Delivery time</span>
        <span>ASAP ({{ cart.resources.deliveryTime }}min)</span>
      </div>
      <div v-for="item in cart.resources.products" :key="item" class="items">
        <div class="left">
          <el-select v-model="item.quantity"></el-select>
          <p>{{ item.name }}</p>
        </div>
        <div class="right">
          <p class="discount">HK$ {{ item.price }}</p>
          <p class="price">HK$ {{ item.price - item.discount }}</p>
        </div>
      </div>
      <p class="add-more">Add more items</p>
    </div>
    <div class="card">
      <div class="subtotal-content">
        <p class="subtotal">Subtotal</p>
        <p class="subtotal-price">HK$ {{ cart.resources.subtotal }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 1,
    };
  },
  computed: {
    restaurantDetails() {
      return this.$store.getters["dashboard/restaurantDetails"];
    },
    cart() {
      return this.$store.getters["cart/cart"];
    },
  },
};
</script>

<style scoped>
.cart-left-section .card {
  background: #ffffff;
  border-radius: 8px;
  padding: 1rem;
}

.cart-left-section .card:last-of-type {
  margin-top: 1rem;
}

.cart-left-section .card h2 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #141414;
  margin-bottom: 0.3rem;
}

.cart-left-section .card span {
  font-family: "Inter";
  font-style: normal;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.02em;
}

.cart-left-section .card .top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.cart-left-section .card span:first-of-type {
  font-weight: 400;
  color: rgba(20, 20, 20, 0.6);
}

.cart-left-section .card span:nth-of-type(2) {
  font-weight: 500;
  color: #fe5d1f;
}

.cart-left-section .card .items {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
  border-bottom: 1px solid #e6e6e6;
  padding-bottom: 0.5rem;
  margin-bottom: 0.5rem;
}

.cart-left-section .card .items .left .el-select {
  width: 3.5rem;
}

.cart-left-section .card .items .left .el-select :deep(.el-input__inner) {
  color: #fe5d1f;
}

.cart-left-section
  .card
  .items
  .left
  .el-select
  :deep(.el-icon.el-select__caret.el-select__icon) {
  color: #fe5d1f;
}

.cart-left-section .card .items .left p {
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

.cart-left-section .card .items .right p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: #9c9c9c;
}
.cart-left-section .card .items .right p.discount {
  text-decoration-line: line-through;
  color: #9c9c9c;
}
.cart-left-section .card .items .right p.price {
  color: #141414;
}

.cart-left-section .card .subtotal-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.cart-left-section .card p.subtotal {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: rgba(20, 20, 20, 0.6);
  display: inline-block;
}

.cart-left-section .card p.subtotal-price {
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

.cart-left-section .card p.add-more {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: #fe5d1f;
}
</style>