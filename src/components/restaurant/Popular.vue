<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="popular-items">
    <h2>Popular</h2>
    <div class="card">
      <div class="single-item" v-for="item in products" :key="item">
        <div class="top">
          <p class="name">{{ item.name }}</p>
          <p v-if="item.isHavePill">3</p>
        </div>
        <span class="price">HK$ {{ item.discount }}</span>
        <span class="discount">HK$ {{ item.price }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: [
        {
          isHavePill: false,
        },
        {
          isHavePill: false,
        },
        {
          isHavePill: false,
        },
        {
          isHavePill: false,
        },
        {
          isHavePill: false,
        },
        {
          isHavePill: true,
        },
        {
          isHavePill: false,
        },
        {
          isHavePill: false,
        },
        {
          isHavePill: false,
        },
      ],
    };
  },
  computed: {
    products() {
      return this.$store.getters["dashboard/products"];
    },
  },
};
</script>

<style scoped>
.popular-items {
  margin-top: 2rem;
}

.popular-items h2 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.02em;
  color: #141414;
  margin-bottom: 1rem;
}

.popular-items .card {
  background: #ffff;
  border-radius: 8px;
  padding: 1rem;
}

.popular-items .card .single-item {
  border-bottom: 1px solid #e6e6e6;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
}

.popular-items .card .top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.3rem;
}

.popular-items .card .top p.name {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: #141414;
}

.popular-items .card .top p:nth-of-type(2) {
  background: #fe5d1f;
  border-radius: 100%;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
  padding: 0.2rem;
  width: 1.3rem;
  height: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.popular-items .card span {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.02em;
}

.popular-items .card span.price {
  color: #141414;
  margin-right: 0.5rem;
}

.popular-items .card span.discount {
  text-decoration-line: line-through;
  color: #9c9c9c;
}
</style>