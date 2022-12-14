<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="product">
    <base-container>
      <h2>Product</h2>
      <el-row :gutter="10">
        <el-col v-for="item in products" :key="item" :sm="12" :md="6">
          <div class="card" @click="addToCart(item)">
            <img src="@/assets/cuisine.png" alt="" />
            <p class="title">{{ item.name }}</p>
            <span>HK$ {{ item.price }}</span>
            <span>·</span>
            <span>{{ item.restaurant }}</span>
          </div>
        </el-col>
      </el-row>
    </base-container>
  </div>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.getters["dashboard/products"];
    },
  },
  methods: {
    addToCart(item) {
      this.$store.dispatch("dashboard/addToCart", item.slug);
    },
  },
  created() {
    this.$store.dispatch("dashboard/getProducts");
  },
};
</script>

<style scoped>
.product h2 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.02em;
  color: #141414;
  margin-bottom: 1rem;
}

.product .el-col {
  margin-bottom: 10px;
}

.product .card {
  background: #ffffff;
  border-radius: 8px;
  padding: 0.5rem;
}

.product img {
  width: 1.3rem;
}

.product .card p.title {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #141414;
  margin: 0.5rem 0;
}

.product .card span {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.02em;
  color: #141414;
}

.product .card span:nth-of-type(2) {
  margin: 0 0.5rem;
}
</style>