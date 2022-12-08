<template>
  <section class="personal-information">
    <base-card>
      <h3>Personal information</h3>
      <el-form
        :model="ruleForm"
        ref="ruleFormRef"
        :rules="rules"
        label-position="top"
      >
        <el-form-item prop="username" label="Username">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item prop="displayName" label="Display name">
          <el-input v-model="ruleForm.displayName"></el-input>
        </el-form-item>
        <el-form-item prop="email" label="Email">
          <el-input v-model="ruleForm.email"></el-input>
        </el-form-item>
        <el-form-item label="Phone">
          <el-input v-model="ruleForm.phone"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="updateInfo">Save</el-button>
        </el-form-item>
      </el-form>
    </base-card>
  </section>
</template>

<script>
import { ElNotification } from "element-plus";
export default {
  data() {
    return {
      ruleForm: {
        username: "chantaiman1234",
        displayName: "Tai Man",
        email: "chantaiman@email.com",
        phone: "98761234",
      },
      rules: {
        username: [
          { required: true, message: "Username is required!", trigger: "blur" },
        ],
        displayName: [
          { required: true, message: "Name is required!", trigger: "blur" },
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
  computed: {
    currentUserDetails() {
      return this.$store.getters["auth/currentUserDetails"];
    },
  },
  methods: {
    updateInfo() {
      this.$refs.ruleFormRef.validate((valid) => {
        if (valid) {
          const data = {
            username: this.ruleForm.username,
            email: this.ruleForm.email,
            displayName: this.ruleForm.displayName,
            phone: this.ruleForm.phone,
          };
          this.$store
            .dispatch("profile/updateUserAccount", {
              data: data,
              id: this.currentUserDetails.id,
            })
            .then(() => {
              ElNotification({
                title: "success",
                message: "Data has been updated!",
                type: "success",
              });
              this.$store.dispatch(
                "profile/getUserDetails",
                this.currentUserDetails.id
              );
            });
        }
      });
    },
  },
  created() {
    this.ruleForm.username = this.currentUserDetails.username;
    this.ruleForm.displayName = this.currentUserDetails.displayName;
    this.ruleForm.email = this.currentUserDetails.email;
    this.ruleForm.phone = this.currentUserDetails.phone;
  },
};
</script>

<style scoped>
.personal-information h3 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #141414;
  margin-bottom: 1rem;
}

.personal-information .el-form :deep(.el-form-item__label) {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: rgba(20, 20, 20, 0.6);
  margin: 0;
  margin-bottom: 0.3rem;
}

.personal-information .el-form .el-input :deep(.el-input__wrapper) {
  background: #f5f5f5;
  border: 1px solid #ebebeb;
  border-radius: 8px;
  padding: 0.2rem 1rem;
  box-shadow: none;
}

.personal-information .el-form .el-input :deep(.el-input__inner) {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #141414;
}

.personal-information .el-form .el-button {
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