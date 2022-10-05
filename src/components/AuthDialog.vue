<template>
  <div class="auth-dialog">
    <el-dialog :model-value="dialogVisible" width="30%" @close="closeDialog">
      <img
        v-if="authOption === 'login'"
        @click="closeDialog"
        src="../assets/close.png"
        class="close"
        alt=""
      />
      <Login v-if="authOption === 'login'" />
      <ForgotPassword v-if="authOption === 'forgot-password'" />
      <SignupOptions v-if="authOption === 'signup-options'" />
      <Signup v-if="authOption === 'signup'" />
    </el-dialog>
  </div>
</template>

<script>
import Login from "./Login.vue";
import ForgotPassword from "./ForgotPassword.vue";
import SignupOptions from "./SignupOptions.vue";
import Signup from "./Signup.vue";
export default {
  props: ["dialogVisible"],
  components: { Login, ForgotPassword, SignupOptions, Signup },
  computed: {
    authOption() {
      return this.$store.getters.authOption;
    },
  },
  methods: {
    closeDialog() {
      this.$emit("closedDialog", false);
      this.$store.commit("CHANGE_AUTH_OPTION", "login");
    },
  },
};
</script>

<style scoped>
.auth-dialog :deep(.el-dialog__header) {
  display: none;
}

.auth-dialog :deep(.el-dialog) {
  border-radius: 8px;
}

.auth-dialog img.close {
  width: 1rem;
  margin-left: auto;
  display: block;
  margin-bottom: 1rem;
  cursor: pointer;
}
</style>