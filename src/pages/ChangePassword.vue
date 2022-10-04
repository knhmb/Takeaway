<template>
  <section class="change-password">
    <base-card>
      <h3>Change password</h3>
      <el-form :model="ruleForm" label-position="top">
        <el-form-item label="Old password">
          <el-input v-model="ruleForm.oldPassword"></el-input>
        </el-form-item>
        <el-form-item label="New password">
          <el-input v-model="ruleForm.newPassword"></el-input>
        </el-form-item>
        <el-form-item label="Confirm new password">
          <el-input v-model="ruleForm.confirmNewPassword"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button disabled>Save</el-button>
        </el-form-item>
      </el-form>
    </base-card>
  </section>
</template>
  
  <script>
export default {
  data() {
    return {
      ruleForm: {
        username: "chantaiman1234",
        displayName: "Tai Man",
        email: "chantaiman@email.com",
        phone: "98761234",
      },
    };
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