<template>
  <div class="delete-dialog">
    <el-dialog
      :model-value="dialogVisible"
      title="Are you sure you want to delete your account"
      width="27%"
      @close="$emit('closedDialog', false)"
    >
      <p class="note">
        Deleting your account is permanent and you'll be logged out immediately
      </p>
      <el-button class="delete">Yes, I’m sure</el-button>
      <el-button @click="$emit('closedDialog', false)" class="cancel"
        >No, Don’t delete it</el-button
      >
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: ["dialogVisible"],
};
</script>

<style scoped>
.delete-dialog :deep(.el-dialog) {
  border-radius: 8px;
}

.delete-dialog :deep(.el-dialog__title) {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #141414;
}

.delete-dialog :deep(.el-dialog__headerbtn .el-icon) {
  color: #fe5d1f;
}

.delete-dialog p.note {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: #141414;
  margin-bottom: 1rem;
}

.delete-dialog .el-button {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.02em;
  padding: 1.3rem;
  width: 100%;
}

.delete-dialog .el-button.delete {
  background: #fe5d1f;
  border-radius: 8px;
  color: #fff;
  border-color: #fe5d1f;
  margin-bottom: 1rem;
}

.delete-dialog .el-button.cancel {
  background: #ffffff;
  border: 1px solid rgba(87, 93, 102, 0.2);
  border-radius: 8px;
  color: #141414;
}

.delete-dialog :deep(.el-button + .el-button) {
  margin-left: 0;
}

@media screen and (max-width: 991px) {
  .delete-dialog :deep(.el-dialog) {
    width: 40%;
  }
}

@media screen and (max-width: 803px) {
  .delete-dialog :deep(.el-dialog) {
    width: 55%;
  }
}
@media screen and (max-width: 590px) {
  .delete-dialog :deep(.el-dialog) {
    width: 65%;
  }
}
</style>