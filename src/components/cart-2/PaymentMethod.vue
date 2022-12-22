<template>
  <div class="payment-method">
    <div class="card">
      <img src="../../assets/profile-e-wallet.png" alt="" />
      <h2>Payment method</h2>
      <div class="box">
        <div
          @click="setOption('cash')"
          :class="{ 'is-active': currentOption === 'cash' }"
          class="item"
        >
          Cash
        </div>
        <div
          @click="setOption('stripe')"
          :class="{ 'is-active': currentOption === 'stripe' }"
          class="item"
        >
          Stripe
        </div>
        <div
          @click="setOption('e-wallet')"
          :class="{ 'is-active': currentOption === 'e-wallet' }"
          class="item"
        >
          E-Wallet
        </div>
      </div>
      <div class="promo-content">
        <img src="../../assets/coupon.png" alt="" />
        <p class="promo-code">Use promotion code</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentOption: "cash",
    };
  },
  methods: {
    setOption(option) {
      this.currentOption = option;
      this.$store.commit("cart/SET_PAYMENT_METHOD", option);
    },
  },
};
</script>

<style scoped>
.payment-method {
  margin-top: 1rem;
}

.payment-method .card {
  background: #ffffff;
  border-radius: 8px;
  padding: 1rem;
}

.payment-method img {
  width: 1.6rem;
  vertical-align: middle;
  margin-right: 0.5rem;
}

.payment-method h2 {
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

.payment-method .box {
  border: 1px solid #e6e6e6;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.payment-method .box .item {
  padding: 1rem;
  width: 100%;
  text-align: center;
  cursor: pointer;

  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #141414;
  border-radius: 6px;
  transition: 0.3s;
}

.payment-method .box .item.is-active,
.payment-method .box .item:hover {
  background: #fe5d1f;
  color: #fff;
  border-radius: 6px;
}

.payment-method .card .promo-content {
  border-top: 1px solid #e6e6e6;
  padding-top: 0.5rem;
}

.payment-method .card p.promo-code {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: #fe5d1f;
  display: inline-block;
  vertical-align: middle;
}
</style>