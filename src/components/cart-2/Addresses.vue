<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="addresses">
    <el-dialog :model-value="addressDialog" title="Addresses" width="55%">
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="dialogVisible = false">
            Confirm
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { ElNotification } from "element-plus";

export default {
  props: ["addressDialog"],
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