<template>
  <header>
    <base-container>
      <el-row>
        <el-col :span="12">
          <p @click="$router.push('/')" class="logo-text">Takeaway</p>
          <el-input
            placeholder="Search Restaurant and Product"
            :prefix-icon="Search"
          ></el-input>
          <img src="../../assets/filter.png" alt="" />
        </el-col>
        <el-col :span="12"> <el-button>Sign in</el-button> </el-col>
      </el-row>
    </base-container>
  </header>
</template>

<script>
import { Search } from "@element-plus/icons-vue";

export default {
  data() {
    return {
      Search,
    };
  },
};
</script>

<style scoped>
header {
  background: #ffffff;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.08);
}

header .el-row .el-col:first-of-type {
  display: flex;
  align-items: center;
}

header p.logo-text {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: -0.04em;
  text-transform: lowercase;
  color: #fe5d1f;
  cursor: pointer;
}

header .el-input {
  width: 18rem;
  margin: 0 1rem;
}

header .el-input :deep(.el-input__wrapper) {
  background: #f2f2f2;
  border-radius: 8px;
  box-shadow: none;
}

header img {
  width: 1.7rem;
}

header .el-button {
  background: #fe5d1f;
  border-radius: 8px;
  border-color: #fe5d1f;

  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #ffffff;
  padding: 0.5rem 1rem;
  margin-left: auto;
  display: flex;
  /* width: 5rem; */
}
</style>