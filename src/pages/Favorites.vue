<template>
  <section class="favorites">
    <base-card>
      <h3>Favorites</h3>
      <el-row :gutter="15">
        <el-col v-for="item in 11" :key="item" :span="12">
          <div class="inner-card">
            <div class="top">
              <img src="../assets/restaurant.png" alt="" />
              <img src="../assets/bookmark-on.png" alt="" />
            </div>
            <p class="name">Restaurants name restaurants...</p>
            <p class="description">
              Lorem ipsum dolor sit amet consectetur adipiscing elit...
            </p>
          </div>
        </el-col>
      </el-row>
    </base-card>
  </section>
</template>

<style scoped>
.favorites h3 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #141414;
  margin-bottom: 1.5rem;
}

.favorites .inner-card {
  background: #ffffff;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  padding: 0.5rem;
}

.favorites .card .el-col {
  margin-bottom: 15px;
}

.favorites .inner-card .top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.favorites .inner-card img {
  width: 1.3rem;
}

.favorites .inner-card p.name {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 12px;
  color: #141414;
  margin: 0.5rem 0;
}

.favorites .inner-card p.description {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: rgba(20, 20, 20, 0.6);
}
</style>