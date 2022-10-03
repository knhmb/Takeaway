<template>
  <div class="order-summary">
    <div class="card">
      <div class="top">
        <img src="../../assets/summary.png" alt="" />
        <h2>Order summary</h2>
      </div>
      <div class="items">
        <div class="single-item">
          <div class="left">
            <span>1x</span>
            <p class="name">Product name</p>
          </div>
          <p class="price">HK$ 58.0</p>
        </div>
        <div class="single-item">
          <div class="left">
            <span>1x</span>
            <p class="name">Product name</p>
          </div>
          <p class="price">HK$ 58.0</p>
        </div>
        <div class="single-item">
          <div class="left">
            <span>1x</span>
            <p class="name">Product name</p>
          </div>
          <p class="price">HK$ 58.0</p>
        </div>
      </div>
      <div class="items">
        <div class="single-item">
          <p class="subtotal">Subtotal</p>
          <p class="subtotal">HK$ 174.0</p>
        </div>
        <div class="single-item">
          <p class="subtotal">Delivery fee</p>
          <p class="subtotal">HK$ 15.0</p>
        </div>
      </div>
      <div class="items">
        <div class="single-item">
          <p class="total">Total</p>
          <p class="total">HK$ 189.0</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.order-summary {
  margin-top: 1rem;
}

.order-summary .card {
  background: #ffffff;
  border-radius: 8px;
  padding: 1rem;
}

.order-summary .card .top {
  margin-bottom: 1rem;
}

.order-summary img {
  width: 1.6rem;
  vertical-align: middle;
  margin-right: 0.5rem;
}

.order-summary h2 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #141414;
  vertical-align: middle;
  display: inline-block;
}

.order-summary .items:not(:last-of-type) {
  border-bottom: 1px solid #e6e6e6;
}

.order-summary .items .single-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
}

.order-summary .items p,
.order-summary .items .single-item span {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: #141414;
}

.order-summary .items .single-item p.name {
  display: inline-block;
}

.order-summary .items .single-item span {
  margin-right: 0.5rem;
}

.order-summary .items .single-item p.subtotal {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: rgba(20, 20, 20, 0.6);
}
</style>