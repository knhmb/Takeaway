<template>
  <div class="maps-dialog">
    <el-dialog
      @close="$emit('closedDialog', false)"
      :model-value="dialogVisible"
      width="55%"
    >
      <!-- <Map /> -->
      <Autocomplete />
      <el-input
        placeholder="Enter your address"
        v-model="search"
        :prefix-icon="Search"
      ></el-input>
      <el-button>Add address details</el-button>
    </el-dialog>
  </div>
</template>

<script>
// import Map from "../Map.vue";
import Autocomplete from "@/components/Autocomplete.vue";
import { Search } from "@element-plus/icons-vue";

export default {
  components: {
    // Map,
    Autocomplete,
  },
  props: ["dialogVisible"],
  data() {
    return {
      Search,
    };
  },
};
</script>

<style scoped>
.maps-dialog :deep(.el-dialog) {
  border-radius: 8px;
}

.maps-dialog :deep(.el-dialog .el-dialog__headerbtn .el-icon) {
  color: #fe5d1f;
}

.maps-dialog :deep(.el-dialog__body) {
  padding: 1rem;
}

.maps-dialog :deep(.el-input__wrapper) {
  background: #f2f2f2;
  border-radius: 8px;
}

.maps-dialog .el-button {
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
  display: flex;
  margin-left: auto;
  padding: 1.2rem;
  margin-top: 1rem;
}

@media screen and (max-width: 991px) {
  .maps-dialog :deep(.el-dialog) {
    width: 95%;
  }
}
</style>