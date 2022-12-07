<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="map">
    <h3>Add a new address</h3>

    <GoogleMap
      :draggable="true"
      @dragend="dummy"
      ref="mapRef"
      api-key="AIzaSyDrD7PzHIVuzkYl53K-W0qRVNybp5d61CA"
      style="width: 100%; height: 500px; margin: 1rem auto"
      :center="coordinates"
      :zoom="15"
    >
      <Marker :options="{ position: center }" />
    </GoogleMap>
  </div>
</template>

<script>
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
    };
  },
  methods: {
    dummy(location) {
      console.log(location);
    },
  },
  created() {
    this.$getLocation({})
      .then((coordinates) => {
        console.log(coordinates);
        this.coordinates = coordinates;
      })
      .catch((err) => alert(err));
  },
  mounted() {
    console.log(this.$refs.mapRef);
    // this.$refs.mapRef.$mapPromise.then((map) => (this.map = map));
  },
};
</script>

<style scoped>
.map h3 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #141414;
}
</style>