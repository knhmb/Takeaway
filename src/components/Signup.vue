<template>
  <div class="signup">
    <img
      @click="changeOption('signup-options')"
      class="arrow"
      src="../assets/back.png"
      alt=""
    />

    <h2>Sign up!</h2>
    <p class="note">Create your takeaway account</p>
    <el-form>
      <el-form-item>
        <el-input v-model="username" placeholder="Username"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="displayName" placeholder="Display Name"></el-input>
      </el-form-item>
      <el-form-item>
        <p class="request-otp">Request OTP</p>
        <el-input v-model="email" placeholder="Email"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="emailOtp" placeholder="Email OTP"></el-input>
      </el-form-item>
      <el-form-item>
        <img
          @click="changeType"
          class="show-password"
          src="../assets/pw-hide.png"
          alt=""
        />
        <el-input
          v-model="password"
          :type="passwordType"
          placeholder="Password"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <img
          @click="changeTypeConfirm"
          class="show-password"
          src="../assets/pw-hide.png"
          alt=""
        />
        <el-input
          v-model="confirmPassword"
          :type="confirmPasswordType"
          placeholder="Confirm Password"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="continue">Continue</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      username: "",
      password: "",
      displayName: "",
      email: "",
      emailOtp: "",
      confirmPassword: "",
      check: false,
      passwordType: "password",
      confirmPasswordType: "password",
    };
  },
  methods: {
    changeType() {
      if (this.passwordType === "password") {
        this.passwordType = "text";
      } else {
        this.passwordType = "password";
      }
    },
    changeTypeConfirm() {
      if (this.confirmPasswordType === "password") {
        this.confirmPasswordType = "text";
      } else {
        this.confirmPasswordType = "password";
      }
    },
    changeOption(option) {
      this.$store.commit("CHANGE_AUTH_OPTION", option);
    },
  },
};
</script>
  
  <style scoped>
.signup img.arrow {
  width: 1.3rem;
  cursor: pointer;
  margin-bottom: 1rem;
}

.signup h2 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.02em;
  color: #141414;
}

.signup p.note {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: rgba(20, 20, 20, 0.4);
  margin-bottom: 1rem;
}

.signup p.request-otp {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.03em;
  color: #fe5d1f;
  position: absolute;
  right: 1rem;
  z-index: 1;
  cursor: pointer;
}

.signup p.request-otp + .el-input :deep(.el-input__wrapper) {
  padding-right: 6.3rem;
}

.signup .el-form .el-input :deep(.el-input__wrapper) {
  background: #f5f5f5;
  border: 1px solid #ebebeb;
  border-radius: 8px;
  box-shadow: none;
  padding: 0.3rem 2.7rem 0.3rem 1rem;
}

.signup .el-form .el-form-item img.show-password {
  right: 1rem;
}
.signup .el-form .el-form-item img {
  width: 1.5rem;
  position: absolute;
  z-index: 1;
  cursor: pointer;
}

.signup .el-form .el-button {
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

.signup .el-form .el-button.continue {
  background: #fe5d1f;
  border-color: #fe5d1f;
}
</style>