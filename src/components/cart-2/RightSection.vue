<template>
  <div class="cart-2-right-section">
    <div class="card">
      <p class="subtotal">Total</p>
      <p class="price">
        HK$ {{ cart.resources.subtotal + productDetails.deliveryFee }}
      </p>
      <el-button @click="checkout">Checkout </el-button>
    </div>
  </div>
</template>

<script>
import { ElNotification } from "element-plus";
export default {
  props: ["address"],
  computed: {
    cart() {
      return this.$store.getters["cart/cart"];
    },
    productDetails() {
      return this.$store.getters["dashboard/productDetails"];
    },
    paymentMethod() {
      return this.$store.getters["cart/paymentMethod"];
    },
    addresses() {
      return this.$store.getters["profile/addresses"];
    },
  },
  methods: {
    checkout() {
      if (this.address.name === "") {
        ElNotification({
          title: "Error",
          message: "Please Select an address",
          type: "error",
        });
        return;
      }
      console.log(this.cart.resources.products);
      this.$store
        .dispatch("auth/checkAccessToken")
        .then(() => {
          if (this.paymentMethod === "stripe") {
            this.$store.dispatch("cart/stripePayment", {
              address: this.address.id,
              cart: this.cart.resources.products,
            });
          } else if (this.paymentMethod === "cash") {
            this.$store.dispatch("cart/cashPayment", {
              address: this.address.id,
              cart: this.cart.resources.products,
            });
          } else {
            this.$store.dispatch("cart/eWalletPayment", {
              address: this.address.id,
              cart: this.cart.resources.products,
            });
          }
        })
        .catch(() => {
          this.$store
            .dispatch("auth/checkRefreshToken")
            .then(() => {
              if (this.paymentMethod === "stripe") {
                this.$store.dispatch("cart/stripePayment", {
                  address: this.address.id,
                  cart: this.cart.resources.products,
                });
              } else if (this.paymentMethod === "cash") {
                this.$store.dispatch("cart/cashPayment", {
                  address: this.address.id,
                  cart: this.cart.resources.products,
                });
              } else {
                this.$store.dispatch("cart/eWalletPayment", {
                  address: this.address.id,
                  cart: this.cart.resources.products,
                });
              }
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
.cart-2-right-section .card {
  background: #ffffff;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
  padding: 1rem;
}

.cart-2-right-section .card p.subtotal {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: rgba(20, 20, 20, 0.8);
}

.cart-2-right-section .card p.price {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.02em;
  color: #fe5d1f;
  margin-bottom: 1rem;
}

.cart-2-right-section .card .el-button {
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
  .cart-2-right-section {
    margin-top: 1rem;
  }
}
</style>