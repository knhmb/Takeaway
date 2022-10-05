<template>
  <section class="restaurant-items">
    <base-container>
      <el-row :gutter="15">
        <el-col :sm="24" :lg="16">
          <div class="card">
            <div class="top">
              <h2>Papadam Indian Authentic</h2>
              <p class="description">
                Restaurant description : Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </p>
            </div>
            <div class="content">
              <div class="single-content">
                <img src="../assets/phone.png" alt="" />
                <div class="text">
                  <p>Phone</p>
                  <p>9876 1234</p>
                </div>
              </div>
              <div class="single-content">
                <img src="../assets/opening-hours.png" alt="" />
                <div class="text">
                  <p>Opening hours</p>
                  <p>Monday - Sunday 08:30 - 21:00</p>
                </div>
              </div>
              <div class="single-content">
                <img src="../assets/address.png" alt="" />
                <div class="text">
                  <p>Address</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    Fusce vulputate gravida est
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Popular />
        </el-col>
        <el-col :sm="24" :lg="8">
          <RightSection />
        </el-col>
      </el-row>
    </base-container>
  </section>
</template>

<script>
import Popular from "@/components/restaurant/Popular.vue";
import RightSection from "@/components/restaurant/RightSection.vue";
export default {
  components: { Popular, RightSection },
};
</script>

<style scoped>
.restaurant-items {
  background: #f2f2f2;
}

.restaurant-items .card {
  background: #ffffff;
  border-radius: 8px;
  /* padding: 1rem; */
}

.restaurant-items .card .top,
.restaurant-items .card .content {
  padding: 1rem;
}

.restaurant-items .card h2 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: -0.02em;
  color: #141414;
}

.restaurant-items .card p.description {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.02em;
  color: rgba(20, 20, 20, 0.6);
}

.restaurant-items .card .content {
  border-top: 0.5px solid #e6e6e6;
}

.restaurant-items .card .content .single-content {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.restaurant-items .card .content .single-content img {
  width: 1.5rem;
  margin-right: 0.5rem;
}

.restaurant-items .card .content .single-content .text p:first-of-type {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: rgba(20, 20, 20, 0.6);
}

.restaurant-items .card .content .single-content .text p:nth-of-type(2) {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.02em;
  color: #141414;
}
</style>