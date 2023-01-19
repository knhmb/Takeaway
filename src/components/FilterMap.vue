<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="filter-map">
    <!-- <h3>Add a new address</h3> -->

    <GoogleMap
      api-key="AIzaSyA_C47k8nUTryyy5VSf-ddIIKVPyLrQ0R4"
      style="width: 100%; height: 500px"
      :center="center"
      :zoom="15"
    >
      <Marker :options="{ position: center }" />
    </GoogleMap>
    <template v-if="currentStep === 1">
      <div class="input-content">
        <p class="label">Restaurant Distance</p>
        <input type="text" placeholder="Enter your address" ref="origin" />
        <!-- <el-button @click="saveLocation">Add address details</el-button> -->
      </div>
      <div class="input-content">
        <p class="label">Restaurant Type</p>
        <el-select>
          <el-option label="Nice" value="nice"></el-option>
        </el-select>
        <el-button @click="filter">Apply</el-button>
      </div>
    </template>
    <!-- <template v-else>
      <el-row :gutter="15">
        <el-col :span="12">
          <el-input v-model="unit" placeholder="Floor / Unit"></el-input>
        </el-col>
        <el-col :span="12">
          <el-input
            v-model="block"
            placeholder="Phase / Block / State"
          ></el-input>
        </el-col>
        <el-col :span="24">
          <el-input v-model="addressName" placeholder="Address name"></el-input>
        </el-col>
      </el-row>
      <el-button @click="saveAddress">Save and continue</el-button>
    </template> -->
  </div>
</template>
  
  <script>
import { ElNotification } from "element-plus";
import { GoogleMap, Marker } from "vue3-google-map";

export default {
  components: {
    GoogleMap,
    Marker,
  },
  data() {
    return {
      search: "",
      map: null,
      coordinates: {
        lat: 0,
        lng: 0,
      },
      mapCoordinates: {
        lat: 0,
        lng: 0,
      },
      center: {
        lat: 10,
        lng: 10,
      },
      cuurentPlace: null,
      markers: [],
      places: [],
      streetRef: "",
      selectedLocation: null,
      selectedCity: null,
      currentStep: 1,
      unit: "",
      block: "",
      addressName: "",
      latitude: "",
      longtitude: "",
    };
  },
  methods: {
    dummy(location) {
      console.log(location);
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng(),
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    setPlace(place) {
      this.currentPlace = place;
      console.log(place);
    },
    geolocate() {
      navigator.geolocation.getCurrentPosition((position) => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      });
    },
    saveLocation() {
      if (!this.selectedLocation) {
        ElNotification({
          title: "Error",
          message: "Please Select a Location!",
          type: "error",
        });
        return;
      }
      this.currentStep = 2;
    },
    saveAddress() {
      if ([this.unit, this.block, this.addressName].includes("")) {
        ElNotification({
          title: "Error",
          message: "Please fill all the fields!",
          type: "error",
        });
        return;
      }
      const data = {
        name: this.selectedCity,
        unit: this.unit,
        building: this.block,
        longtitude: this.longtitude,
        latitude: this.latitude,
      };

      this.$store
        .dispatch("auth/checkAccessToken")
        .then(() => {
          this.$store.dispatch("profile/saveAddress", data).then(() => {
            this.$store.dispatch("profile/getAddresses");
            this.$emit("closedDialog", false);
            this.currentStep = 1;
            this.selectedCity = null;
            this.selectedLocation = null;
            this.unit = "";
            this.block = "";
            this.addressName = "";
            this.latitude = "";
            this.longtitude = "";
          });
        })
        .catch(() => {
          this.$store
            .dispatch("auth/checkRefreshToken")
            .then(() => {
              this.$store.dispatch("profile/saveAddress", data).then(() => {
                this.$store.dispatch("profile/getAddresses");
                this.$emit("closedDialog", false);
                this.currentStep = 1;
                this.selectedCity = null;
                this.selectedLocation = null;
                this.unit = "";
                this.block = "";
                this.addressName = "";
                this.latitude = "";
                this.longtitude = "";
              });
            })
            .catch(() => {
              ElNotification({
                title: "Error",
                message: "Token Expired! Please Login Again!",
                type: "Error",
              });
              this.$emit("closedDialog", false);
              this.$store.dispatch("auth/logout");
              this.$router.replace("/");
            });
        });
    },
  },
  mounted() {
    this.geolocate();
    const originAutocomplete = new window.google.maps.places.Autocomplete(
      this.$refs["origin"],
      {
        bounds: new window.google.maps.LatLngBounds(
          new window.google.maps.LatLng(45.4215296, -75.6971931)
        ),
      }
    );
    originAutocomplete.addListener("place_changed", () => {
      console.log(originAutocomplete.getPlace());
      this.currentPlace = originAutocomplete.getPlace();
      console.log(originAutocomplete);
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng(),
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
        this.selectedLocation = originAutocomplete.getPlace().formatted_address;
        this.selectedCity = originAutocomplete.getPlace().name;
        this.latitude = originAutocomplete.getPlace().geometry.location.lat();
        this.longtitude = originAutocomplete.getPlace().geometry.location.lng();
        console.log(this.selectedLocation);
        console.log(this.selectedCity);
      }
    });
  },

  // created() {
  //   this.$getLocation({})
  //     .then((coordinates) => {
  //       console.log(coordinates);
  //       this.coordinates = coordinates;
  //     })
  //     .catch((err) => alert(err));
  // },
  // mounted() {
  //   this.geolocate();

  // },
};
</script>
  
  <style scoped>
.filter-map h3 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #141414;
  margin-bottom: 1rem;
}

.filter-map :deep(.vue-map) {
  width: 100% !important;
  height: 600px !important;
  margin: 1rem 0;
}

.filter-map input {
  background: #f2f2f2;
  border-radius: 8px;
  border: none;
  box-shadow: 0 0 0 1px var(--el-input-border-color, var(--el-border-color))
    inset;
  padding: 0.7rem 1.5rem;
  outline: none;
  width: 100%;
  /* margin-top: 1rem; */
}

.filter-map .el-select {
  width: 100%;
}

.filter-map input:focus-visible {
  box-shadow: 0 0 0 1px #409eff inset;
  border: none;
}

.filter-map .location {
  display: flex;
  align-items: center;
  margin-top: 0.3rem;
}

.filter-map .location img {
  margin-right: 1rem;
  width: 1rem;
}

.filter-map .location p {
  font-family: "Inter";
  font-style: normal;
  letter-spacing: -0.02em;
}

.filter-map .location p:first-of-type {
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #141414;
  margin: 0.3rem 0;
}

.filter-map .location p:last-of-type {
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: rgba(20, 20, 20, 0.6);
}
.filter-map .el-button {
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
  width: 100%;
}

.filter-map .el-row .el-col .el-input {
  margin-top: 1rem;
}

.filter-map .el-row .el-col :deep(.el-input__wrapper) {
  background: #fff;
}

.filter-map p.label {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: rgba(20, 20, 20, 0.6);
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}
</style>
  
  <style>
.pac-container.pac-logo {
  z-index: 20006;
}
</style>