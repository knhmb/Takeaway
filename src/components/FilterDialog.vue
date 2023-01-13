<template>
  <div class="filter-dialog">
    <el-dialog @close="closeDialog" :model-value="filterDialog" width="55%">
      <div class="header">
        <h3>Filter</h3>
        <img src="../assets/close.png" alt="" />
      </div>

      <GoogleMap
        api-key="AIzaSyA_C47k8nUTryyy5VSf-ddIIKVPyLrQ0R4"
        style="width: 100%; height: 500px"
        :center="center"
        :zoom="15"
      >
        <Marker :options="{ position: center }" />
      </GoogleMap>
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
}
</style>