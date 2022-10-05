<template>
  <div class="signup-options">
    <img @click="changeAuth('login')" src="../assets/back.png" alt="" />
    <h2>Sign up</h2>
    <p class="note">Create your takeaway account</p>
    <el-form>
      <el-form-item>
        <img class="email" src="../assets/email.png" alt="" />
        <el-button @click="changeAuth('signup')" class="continue"
          >Email</el-button
        >
      </el-form-item>
      <el-form-item>
        <el-divider content-position="center">Or</el-divider>
      </el-form-item>
      <el-form-item>
        <img class="facebook-icon" src="../assets/facebook.png" alt="" />
        <el-button class="facebook">Continue with Facebook</el-button>
      </el-form-item>
      <el-form-item>
        <img class="facebook-icon" src="../assets/facebook.png" alt="" />
        <el-button class="google">Continue with Google</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
    
    <script>
export default {
  data() {
    return {
      username: "",
      email: "",
    };
  },
  methods: {
    changeAuth(option) {
      this.$store.commit("CHANGE_AUTH_OPTION", option);
    },
  },
};
</script>
    
    <style scoped>
.signup-options img {
  width: 1.3rem;
  cursor: pointer;
  margin-bottom: 1rem;
}

.signup-options h2 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.02em;
  color: #141414;
}

.signup-options p.note {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: rgba(20, 20, 20, 0.4);
  margin-bottom: 1rem;
}

.signup-options .el-form .el-form-item img {
  width: 1.5rem;
  position: absolute;
  z-index: 1;
  cursor: pointer;
}

.signup-options .el-form .el-button {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  border-radius: 8px;
  width: 100%;
  padding: 1.4rem;
}

.signup-options .el-form .el-button.continue {
  background: #fe5d1f;
  border-color: #fe5d1f;
}

.signup-options .el-form .el-button.facebook {
  background: #1c77ed;
  box-shadow: 4px 0px 8px rgba(0, 0, 0, 0.08);
}

.signup-options .el-form .el-button.google {
  background: #ffffff;
  border: 1px solid rgba(87, 93, 102, 0.2);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08);
  color: #575d66;
}

.signup-options .el-form .el-form-item img.facebook-icon,
.signup-options .el-form .el-form-item img.email {
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
}

.signup-options :deep(.el-divider__text.is-center) {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  color: #575d66;
}
</style>