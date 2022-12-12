<template>
  <section class="delivery-address">
    <base-card>
      <h3>Delivery address</h3>
      <el-row :gutter="15">
        <el-col v-for="item in addresses" :key="item" :span="12">
          <div class="inner-card">
            <div class="top">
              <p>Address name</p>
              <div class="more">
                <img @click="openMore(item)" src="../assets/more.png" alt="" />
                <div v-if="item.isVisible" class="more-content">
                  <p>Edit</p>
                  <p>Delete</p>
                </div>
              </div>
            </div>
            <p>
              Address detail : lorem ipsum dolor sit amet consectetur adipiscing
              elit
            </p>
          </div>
        </el-col>
        <el-button @click="dialogVisible = true">Add new address</el-button>
      </el-row>
    </base-card>
    <MapsDialog
      @closedDialog="dialogVisible = $event"
      :dialog-visible="dialogVisible"
    />
  </section>
</template>

<script>
import MapsDialog from "@/components/delivery-address/MapsDialog.vue";
import { ElNotification } from "element-plus";
export default {
  components: { MapsDialog },
  data() {
    return {
      dialogVisible: false,
      info: [
        {
          isVisible: false,
        },
        {
          isVisible: false,
        },
        {
          isVisible: false,
        },
        {
          isVisible: false,
        },
      ],
    };
  },
  compted: {
    addresses() {
      return this.$store.getters["profile/addresses"];
    },
  },
  methods: {
    openMore(item) {
      item.isVisible = !item.isVisible;
    },
  },
  created() {
    this.$store
      .dispatch("auth/checkAccessToken")
      .then(() => {
        this.$store.dispatch("profile/getAddresses");
      })
      .catch(() => {
        this.$store
          .dispatch("auth/checkRefreshToken")
          .then(() => {
            this.$store.dispatch("profile/getAddresses");
          })
          .catch(() => {
            ElNotification({
              title: "Error",
              message: "Token Expired! Please Login Again!",
              type: "Error",
            });
            this.$store.dispatch("auth/logout");
          });
      });
  },
};
</script>

<style scoped>
.delivery-address h3 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #141414;
  margin-bottom: 1.5rem;
}

.delivery-address .el-col {
  margin-bottom: 15px;
}

.delivery-address .inner-card {
  background: #ffffff;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  padding: 1rem;
}

.delivery-address .inner-card .top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.delivery-address .inner-card .top p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: #141414;
}

.delivery-address .inner-card .top img {
  width: 1.3rem;
  cursor: pointer;
}

.delivery-address .inner-card p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.02em;
  color: rgba(20, 20, 20, 0.6);
}

.delivery-address .inner-card .more {
  position: relative;
}

.delivery-address .inner-card .more .more-content {
  position: absolute;
  background: #fff;
  width: 7rem;
  /* height: 3rem; */
  border-radius: 8px;
  box-shadow: 2px 2px 4px #f2f2f2;
  padding: 1rem;
  top: 1.7rem;
  left: 50%;
  transform: translateX(-50%);
}

.delivery-address .inner-card .more .more-content p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #141414;
  text-align: center;
  cursor: pointer;
}

.delivery-address .inner-card .more .more-content p:first-of-type {
  margin-bottom: 0.5rem;
}

.delivery-address .el-button {
  background: #fe5d1f;
  border-radius: 8px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #ffffff;
  border-color: #fe5d1f;
  padding: 1.2rem;
  margin-left: 7.5px;
}
</style>