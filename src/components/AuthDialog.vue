<template>
  <div class="auth-dialog">
    <el-dialog
      :model-value="dialogVisible"
      width="30%"
      @close="$emit('closedDialog', false)"
    >
      <img
        @click="$emit('closedDialog', false)"
        src="../assets/close.png"
        class="close"
        alt=""
      />
      <Login />
    </el-dialog>
  </div>
</template>

<script>
import Login from "./Login.vue";
export default {
  props: ["dialogVisible"],
  components: { Login },
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