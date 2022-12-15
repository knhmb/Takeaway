<template>
  <div class="forgot-password">
    <img @click="changeAuth" src="../assets/back.png" alt="" />
    <h2>Reset password</h2>
    <p class="note">Enter your username and email to reset password</p>
    <el-form :rules="rules" :model="ruleForm" ref="ruleFormRef">
      <el-form-item prop="username">
        <el-input v-model="ruleForm.username" placeholder="Username"></el-input>
      </el-form-item>
      <el-form-item prop="email">
        <el-input v-model="ruleForm.email" placeholder="Email"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="validate">Continue</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      ruleForm: {
        username: "",
        email: "",
      },
      rules: {
        username: [
          { required: true, message: "Username is required!", trigger: "blur" },
        ],
        email: [
          { required: true, message: "Email is required!", trigger: "blur" },
          {
            type: "email",
            message: "Please enter a valid email!",
            trigger: ["change", "blur"],
          },
        ],
      },
    };
  },
  methods: {
    changeAuth() {
      this.$store.commit("CHANGE_AUTH_OPTION", "login");
    },
    validate() {
      this.$refs.ruleFormRef.validate((valid) => {
        if (valid) {
          this.$store
            .dispatch("auth/forgotPassword", this.ruleForm)
            .then(() => {
              this.$refs.ruleFormRef.resetFields();
            });
        }
      });
    },
  },
};
</script>
  
  <style scoped>
.forgot-password img {
  width: 1.3rem;
  cursor: pointer;
  margin-bottom: 1rem;
}

.forgot-password h2 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.02em;
  color: #141414;
}

.forgot-password p.note {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: rgba(20, 20, 20, 0.4);
  margin-bottom: 1rem;
}

.forgot-password .el-form .el-input :deep(.el-input__wrapper) {
  background: #f5f5f5;
  border: 1px solid #ebebeb;
  border-radius: 8px;
  box-shadow: none;
  padding: 0.3rem 2.7rem 0.3rem 1rem;
}

.forgot-password .el-form .el-button {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  border-radius: 8px;
  width: 100%;
  padding: 1.4rem;
  background: #fe5d1f;
  border-color: #fe5d1f;
}
</style>