<template>
  <section class="change-password">
    <base-card>
      <h3>Change password</h3>
      <el-form
        hide-required-asterisk
        :model="ruleForm"
        :rules="rules"
        ref="ruleFormRef"
        label-position="top"
      >
        <el-form-item prop="oldPassword" label="Old password">
          <el-input type="password" v-model="ruleForm.oldPassword"></el-input>
        </el-form-item>
        <el-form-item prop="newPassword" label="New password">
          <el-input type="password" v-model="ruleForm.newPassword"></el-input>
        </el-form-item>
        <el-form-item prop="confirmNewPassword" label="Confirm new password">
          <el-input
            type="password"
            v-model="ruleForm.confirmNewPassword"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="changePassword">Save</el-button>
        </el-form-item>
      </el-form>
    </base-card>
  </section>
</template>
  
  <script>
import { ElNotification } from "element-plus";
export default {
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Enter password!"));
      } else {
        if (this.ruleForm.confirmNewPassword !== "") {
          if (!this.$refs.ruleFormRef) return;
          this.$refs.ruleFormRef.validateField(
            "confirmNewPassword",
            () => null
          );
        }
        callback();
      }
    };
    const validateConfirmPass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please enter the password again."));
      } else if (value !== this.ruleForm.newPassword) {
        callback(new Error("Passwords do not match!"));
      } else {
        callback();
      }
    };

    return {
      ruleForm: {
        oldPassword: "",
        newPassword: "",
        confirmNewPassword: "",
      },
      rules: {
        oldPassword: [
          {
            required: true,
            message: "Old password is required!",
            trigger: "blur",
          },
        ],
        newPassword: [{ validator: validatePass, trigger: "blur" }],
        confirmNewPassword: [
          { validator: validateConfirmPass, trigger: "blur" },
        ],
      },
    };
  },
  computed: {
    currentUserDetails() {
      return this.$store.getters["auth/currentUserDetails"];
    },
  },
  methods: {
    changePassword() {
      this.$refs.ruleFormRef.validate((valid) => {
        // if (valid) {
        //   const data = {
        //     password: this.ruleForm.newPassword,
        //     password2: this.ruleForm.confirmNewPassword
        //   }
        //   this.$store.dispatch('auth/checkAccessToken').then(() => {
        //     this.$store.dispatch('profile/updateUserAccount', {data: data, id: this.currentUserDetails.id})
        //   })
        // }
        if (valid) {
          const data = {
            password: this.ruleForm.newPassword,
            password2: this.ruleForm.confirmNewPassword,
          };
          this.$store
            .dispatch("auth/checkAccessToken")
            .then(() => {
              this.$store
                .dispatch("profile/updateUserAccount", {
                  data: data,
                  id: this.currentUserDetails.id,
                })
                .then(() => {
                  ElNotification({
                    title: "Success",
                    message: "Password has been changed!",
                    type: "success",
                  });
                  this.$refs.ruleFormRef.resetFields();
                });
            })
            .catch(() => {
              this.$store
                .dispatch("auth/checkRefreshToken")
                .then(() => {
                  this.$store
                    .dispatch("profile/updateUserAccount", {
                      data: data,
                      id: this.currentUserDetails.id,
                    })
                    .then(() => {
                      ElNotification({
                        title: "Success",
                        message: "Password has been changed!",
                        type: "success",
                      });
                      this.$refs.ruleFormRef.resetFields();
                    });
                })
                .catch(() => {
                  ElNotification({
                    title: "Error",
                    message: "Token Expired! Please Login Again.",
                    type: "error",
                  });
                  this.$store.dispatch("auth/logout");
                });
            });
          // this.$store
          //   .dispatch("profile/updateUserAccount", {
          //     data: data,
          //     id: this.currentUserDetails.id,
          //   })
          //   .then(() => {
          //     ElNotification({
          //       title: "Success",
          //       message: "Password has been changed!",
          //       type: "success",
          //     });
          //     this.$refs.ruleFormRef.resetFields();
          //   });
        }
      });
    },
  },
};
</script>
  
  <style scoped>
.change-password h3 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #141414;
  margin-bottom: 1rem;
}

.change-password .el-form :deep(.el-form-item__label) {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: rgba(20, 20, 20, 0.6);
  margin: 0;
  margin-bottom: 0.3rem;
}

.change-password .el-form .el-input :deep(.el-input__wrapper) {
  background: #f5f5f5;
  border: 1px solid #ebebeb;
  border-radius: 8px;
  padding: 0.2rem 1rem;
  box-shadow: none;
}

.change-password .el-form .el-input :deep(.el-input__inner) {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #141414;
}

.change-password .el-form .el-button {
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
}
</style>