<template>
  <div class="restaurant">
    <base-container>
      <h2>Restaurant</h2>
      <el-row :gutter="10">
        <el-col v-for="item in 15" :key="item" :sm="12" :md="6">
          <div class="card">
            <div class="top">
              <img src="@/assets/restaurant.png" alt="" />
              <img src="@/assets/bookmark-off.png" alt="" />
            </div>
            <p class="title">Restaurants name restaurants...</p>
            <p class="description">
              Lorem ipsum dolor sit amet consectetur adipiscing elit...
            </p>
          </div>
        </el-col>
      </el-row>
    </base-container>
  </div>
</template>

<style scoped>
.restaurant h2 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.02em;
  color: #141414;
  margin-bottom: 1rem;
}

.restaurant .el-row .el-col {
  margin-bottom: 10px;
}

.restaurant .card {
  background: #ffffff;
  border-radius: 8px;
  padding: 0.5rem;
  /* width: 12rem; */
  /* width: 100%; */
}

.restaurant .card .top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.8rem;
}

.restaurant .card .top img {
  width: 1rem;
}

.restaurant .card p.title {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 12px;
  color: #141414;
  text-align: start;
  margin-bottom: 0.5rem;
}

.restaurant .card p.description {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: rgba(20, 20, 20, 0.6);
  text-align: start;
}
</style>