<!-- eslint-disable vue/multi-word-component-names -->
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
    <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules">
      <el-form-item prop="username">
        <el-input v-model="ruleForm.username" placeholder="Username"></el-input>
      </el-form-item>
      <el-form-item prop="displayName">
        <el-input
          v-model="ruleForm.displayName"
          placeholder="Display Name"
        ></el-input>
      </el-form-item>
      <el-form-item prop="email">
        <p class="request-otp" @click="checkEmail">Request OTP</p>
        <el-input v-model="ruleForm.email" placeholder="Email"></el-input>
      </el-form-item>
      <el-form-item prop="emailOtp">
        <el-input
          v-model="ruleForm.emailOtp"
          placeholder="Email OTP"
        ></el-input>
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
      <el-form-item prop="confirmPassword">
        <img
          @click="changeTypeConfirm"
          class="show-password"
          src="../assets/pw-hide.png"
          alt=""
        />
        <el-input
          v-model="ruleForm.confirmPassword"
          :type="confirmPasswordType"
          placeholder="Confirm Password"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="continue" @click="submit">Continue</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
  
  <script>
import { ElNotification } from "element-plus";

export default {
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Enter password!"));
      } else {
        if (this.ruleForm.confirmPassword !== "") {
          if (!this.$refs.ruleFormRef) return;
          this.$refs.ruleFormRef.validateField("confirmPassword", () => null);
        }
        callback();
      }
    };
    const validateConfirmPass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please enter the password again."));
      } else if (value !== this.ruleForm.password) {
        callback(new Error("Passwords do not match!"));
      } else {
        callback();
      }
    };

    return {
      ruleForm: {
        username: "",
        password: "",
        displayName: "",
        email: "",
        emailOtp: "",
        confirmPassword: "",
        check: false,
      },
      passwordType: "password",
      confirmPasswordType: "password",
      rules: {
        username: [
          { required: true, message: "Username is required!", trigger: "blur" },
        ],
        password: [{ validator: validatePass, trigger: "blur" }],
        confirmPassword: [{ validator: validateConfirmPass, trigger: "blur" }],
        displayName: [
          { required: true, message: "Name is required!", trigger: "blur" },
        ],
        email: [
          { required: true, message: "Email is required!", trigger: "blur" },
          {
            type: "email",
            message: "Please input correct email address",
            trigger: ["blur", "change"],
          },
        ],
        emailOtp: [
          { required: true, message: "OTP is required!", trigger: "blur" },
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
    checkEmail() {
      this.$refs.ruleFormRef.validateField("email", (valid) => {
        if (valid) {
          this.$store.dispatch("auth/getOtp", { email: this.ruleForm.email });
        }
      });
    },
    submit() {
      this.$refs.ruleFormRef.validate((valid) => {
        if (valid) {
          const data = {
            displayName: this.ruleForm.displayName,
            email: this.ruleForm.email,
            username: this.ruleForm.username,
            password: this.ruleForm.password,
            password2: this.ruleForm.confirmPassword,
            otp: this.ruleForm.emailOtp,
          };

          this.$store.dispatch("auth/signup", data).then(() => {
            ElNotification({
              title: "Success",
              message: "Account has been created!",
              type: "success",
            });
            this.$store.commit("CHANGE_AUTH_OPTION", "login");
          });
        }
      });
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