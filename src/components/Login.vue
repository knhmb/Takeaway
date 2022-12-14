<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="login">
    <h2>Let’s get you started!</h2>
    <p class="note">Continue to your takeaway account</p>
    <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules">
      <el-form-item prop="username">
        <el-input v-model="ruleForm.username" placeholder="Username"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <img
          @click="changeType"
          class="show-password"
          src="../assets/pw-hide.png"
          alt=""
        />
        <el-input
          v-model="ruleForm.password"
          :type="passwordType"
          placeholder="Password"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-checkbox v-model="check" label="Remember me"></el-checkbox>
        <p @click="changeOption('forgot-password')" class="forgot-password">
          Forgot password?
        </p>
      </el-form-item>
      <el-form-item>
        <el-button class="continue" @click="login">Continue</el-button>
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
      <el-form-item>
        <p class="account">
          Don’t have account yet?<span @click="changeOption('signup-options')"
            >Sign up</span
          >
        </p>
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
        password: "",
      },
      check: false,
      passwordType: "password",
      rules: {
        username: [
          { required: true, message: "Username is required!", trigger: "blur" },
        ],
        password: [
          { required: true, message: "Password is required!", trigger: "blur" },
        ],
      },
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
    changeOption(option) {
      this.$store.commit("CHANGE_AUTH_OPTION", option);
    },
    login() {
      this.$refs.ruleFormRef.validate((valid) => {
        if (valid) {
          const data = {
            username: this.ruleForm.username,
            password: this.ruleForm.password,
          };

          this.$store.dispatch("auth/login", data).then(() => {
            this.$emit("closeDialog");
            this.$refs.ruleFormRef.resetFields();
          });
        }
      });
    },
  },
};
</script>

<style scoped>
.login h2 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.02em;
  color: #141414;
}

.login p.note {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: rgba(20, 20, 20, 0.4);
  margin-bottom: 1rem;
}

.login .el-form .el-input :deep(.el-input__wrapper) {
  background: #f5f5f5;
  border: 1px solid #ebebeb;
  border-radius: 8px;
  box-shadow: none;
  padding: 0.3rem 2.7rem 0.3rem 1rem;
}

.login .el-form .el-form-item img.show-password {
  right: 1rem;
}
.login .el-form .el-form-item img {
  width: 1.5rem;
  position: absolute;
  z-index: 1;
  cursor: pointer;
}

.login .el-form .el-checkbox {
  vertical-align: middle;
}

.login .el-form .el-checkbox :deep(.el-checkbox__label) {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #141414;
}

.login .el-form .el-checkbox.is-checked :deep(.el-checkbox__inner) {
  background: #fe5d1f;
  border-color: #fe5d1f;
}

.login .el-form p.forgot-password {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #141414;
  margin-left: auto;
  vertical-align: middle;
  cursor: pointer;
}

.login .el-form .el-button {
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

.login .el-form .el-button.continue {
  background: #fe5d1f;
  border-color: #fe5d1f;
}

.login .el-form .el-button.facebook {
  background: #1c77ed;
  box-shadow: 4px 0px 8px rgba(0, 0, 0, 0.08);
}

.login .el-form .el-button.google {
  background: #ffffff;
  border: 1px solid rgba(87, 93, 102, 0.2);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08);
  color: #575d66;
}

.login .el-form .el-form-item img.facebook-icon {
  left: 1rem;
}

.login .el-form p.account {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #141414;
  text-align: center;
  width: 100%;
}

.login .el-form p.account span {
  font-weight: 500;
  color: #fe5d1f;
  margin-left: 0.5rem;
  cursor: pointer;
}

.login :deep(.el-divider__text.is-center) {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  color: #575d66;
}
</style>