<template>
  <div class="right-section">
    <div class="card">
      <h2>Papadam Indian Authentic</h2>
      <div class="top">
        <span>Delivery time</span>
        <span>ASAP (40min)</span>
      </div>
      <div v-for="item in 3" :key="item" class="items">
        <div class="left">
          <el-select v-model="value"></el-select>
          <p>Product name</p>
        </div>
        <div class="right">
          <p class="discount">HK$ 97.0</p>
          <p class="price">HK$ 58.0</p>
        </div>
      </div>
      <div class="subtotal-content">
        <p class="subtotal">Subtotal</p>
        <p class="subtotal-price">HK$ 174.0</p>
      </div>
      <el-button>Add to cart</el-button>
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
};
</script>

<style scoped>
.right-section .card {
  background: #ffffff;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
  padding: 1rem;
}

.right-section .card h2 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #141414;
  margin-bottom: 0.3rem;
}

.right-section .card span {
  font-family: "Inter";
  font-style: normal;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.02em;
}

.right-section .card .top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.right-section .card span:first-of-type {
  font-weight: 400;
  color: rgba(20, 20, 20, 0.6);
}

.right-section .card span:nth-of-type(2) {
  font-weight: 500;
  color: #fe5d1f;
}

.right-section .card .items {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
  border-bottom: 1px solid #e6e6e6;
  padding-bottom: 0.5rem;
  margin-bottom: 0.5rem;
}

.right-section .card .items .left .el-select {
  width: 3.5rem;
}

.right-section .card .items .left .el-select :deep(.el-input__inner) {
  color: #fe5d1f;
}

.right-section
  .card
  .items
  .left
  .el-select
  :deep(.el-icon.el-select__caret.el-select__icon) {
  color: #fe5d1f;
}

.right-section .card .items .left p {
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

.right-section .card .items .right p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: #9c9c9c;
}
.right-section .card .items .right p.discount {
  text-decoration-line: line-through;
  color: #9c9c9c;
}
.right-section .card .items .right p.price {
  color: #141414;
}

.right-section .card .subtotal-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.right-section .card p.subtotal {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: rgba(20, 20, 20, 0.6);
  display: inline-block;
}

.right-section .card p.subtotal-price {
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

.right-section .card .el-button {
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
  border-color: #fe5d1f;
  padding: 1.2rem;
  margin-top: 1rem;
}

@media screen and (max-width: 1199px) {
  .right-section {
    margin-top: 1rem;
  }
}
</style>