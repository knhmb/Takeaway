<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="cart">
    <base-container>
      <h2>Cart</h2>
      <el-row :gutter="30">
        <el-col :sm="24" :lg="16">
          <LeftSection />
        </el-col>
        <el-col :sm="24" :lg="8">
          <RightSection />
        </el-col>
      </el-row>
    </base-container>
  </section>
</template>

<script>
import LeftSection from "@/components/cart/LeftSection.vue";
import RightSection from "@/components/cart/RightSection.vue";
import { ElNotification } from "element-plus";
export default {
  components: { LeftSection, RightSection },
  created() {
    this.$store
      .dispatch("auth/checkAccessToken")
      .then(() => {
        this.$store.dispatch("cart/getCart");
      })
      .catch(() => {
        this.$store
          .dispatch("auth/checkRefreshToken")
          .then(() => {
            this.$store.dispatch("cart/getCart");
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
};
</script>

<style scoped>
.cart {
  background: #f2f2f2;
  min-height: 100vh;
}

.cart h2 {
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