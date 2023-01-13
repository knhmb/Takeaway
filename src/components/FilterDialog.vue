<template>
  <div class="filter-dialog">
    <el-dialog @close="closeDialog" :model-value="filterDialog" width="55%">
      <div class="header">
        <h3>Filter</h3>
        <img @click="closeDialog" src="../assets/close.png" alt="" />
      </div>
      <div class="map-content">
        <GoogleMap
          api-key="AIzaSyA_C47k8nUTryyy5VSf-ddIIKVPyLrQ0R4"
          style="width: 100%; height: 500px"
          :center="center"
          :zoom="15"
        >
          <Marker :options="{ position: center }" />
        </GoogleMap>
      </div>
      <el-form-item label="Restaurant Distance">
        <el-input v-model="restaurantDistance"></el-input>
      </el-form-item>
      <el-form-item label="Restaurant Type">
        <el-input
          placeholder="Select Restaurant Type"
          v-model="restaurantType"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button>Apply</el-button>
      </el-form-item>
    </el-dialog>
  </div>
</template>

<script>
import { GoogleMap, Marker } from "vue3-google-map";

export default {
  props: ["filterDialog"],
  components: {
    GoogleMap,
    Marker,
  },
  data() {
    return {
      center: {
        lat: 10,
        lng: 10,
      },
      restaurantDistance: "",
      restaurantType: "",
    };
  },
  methods: {
    closeDialog() {
      this.$emit("closedDialog", false);
    },
    geolocate() {
      navigator.geolocation.getCurrentPosition((position) => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      });
    },
  },
  mounted() {
    this.geolocate();
  },
};
</script>

<style scoped>
.filter-dialog :deep(.el-dialog) {
  border-radius: 8px;
}

.filter-dialog :deep(.el-dialog__header) {
  display: none;
}

.filter-dialog h3 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #141414;
}

.filter-dialog .header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  align-items: center;
}

.filter-dialog .header img {
  width: 1rem;
  cursor: pointer;
}

.filter-dialog .map-content {
  margin-bottom: 1rem;
}

.filter-dialog :deep(.el-form-item.asterisk-left) {
  flex-direction: column;
  align-items: flex-start;
}

.filter-dialog :deep(.el-form-item__content) {
  width: 100%;
}

.filter-dialog :deep(.el-form-item__label) {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  /* line-height: 20px; */
  color: rgba(20, 20, 20, 0.6);
}

.filter-dialog .el-button {
  background: #fe5d1f;
  border-radius: 8px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #ffffff;
  width: 100%;
  padding: 1.3rem;
  border-color: #fe5d1f;
}

.filter-dialog :deep(.el-input__wrapper) {
  background: #f5f5f5;
  /* border: 1px solid #ebebeb; */
  border-radius: 8px;
  padding: 0.3rem 1rem;
}
</style>