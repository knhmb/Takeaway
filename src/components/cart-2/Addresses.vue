<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="addresses">
    <el-dialog
      @close="$emit('closedDialog', false)"
      :model-value="addressDialog"
      title="Addresses"
      width="55%"
    >
      <el-row :gutter="15">
        <template v-if="addresses.length > 0">
          <el-col v-for="item in addresses" :key="item" :span="12">
            <div class="inner-card" @click="selectAddress(item)">
              <div class="top">
                <p>{{ item.name }}</p>
                <div class="more">
                  <img
                    @click="openMore(item)"
                    src="../../assets/more.png"
                    alt=""
                  />
                  <div v-if="item.isVisible" class="more-content">
                    <p>Edit</p>
                    <p>Delete</p>
                  </div>
                </div>
              </div>
              <p>Address detail : {{ item.unit }}</p>
            </div>
          </el-col>
        </template>
        <template v-else>
          <h4>Please Add An Address from your profile</h4>
        </template>
      </el-row>
      <!-- <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="dialogVisible = false">
            Confirm
          </el-button>
        </span>
      </template> -->
    </el-dialog>
  </div>
</template>

<script>
import { ElNotification } from "element-plus";

export default {
  props: ["addressDialog"],
  computed: {
    addresses() {
      return this.$store.getters["profile/addresses"];
    },
  },
  methods: {
    selectAddress(item) {
      const { name, unit, id } = item;
      this.$emit("selectedAddress", { name, unit, id });
      this.$emit("closedDialog", false);
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
            this.$router.replace("/");
          });
      });
  },
};
</script>

<style scoped>
.addresses .el-col {
  margin-bottom: 15px;
}

.addresses .inner-card {
  background: #ffffff;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  padding: 1rem;
  cursor: pointer;
}

.addresses .inner-card .top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.addresses .inner-card .top p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: #141414;
}

.addresses .inner-card .top img {
  width: 1.3rem;
  cursor: pointer;
}

.addresses .inner-card p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.02em;
  color: rgba(20, 20, 20, 0.6);
}

.addresses .inner-card .more {
  position: relative;
}

.addresses .inner-card .more .more-content {
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

.addresses .inner-card .more .more-content p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #141414;
  text-align: center;
  cursor: pointer;
}
</style>