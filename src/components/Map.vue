<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="map">
    <h3>Add a new address</h3>
    <GMapAutocomplete @place_changed="setPlace" />
    <button @click="addMarker">Add</button>

    <GMapMap
      :center="center"
      :zoom="7"
      map-type-id="terrain"
      style="width: 100vw; height: 900px"
    >
      <GMapCluster :zoomOnClick="true">
        <GmapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          @click="center = m.position"
        />
      </GMapCluster>
    </GMapMap>

    <!-- <GoogleMap
      :draggable="true"
      @dragend="dummy"
      ref="mapRef"
      api-key="AIzaSyDrD7PzHIVuzkYl53K-W0qRVNybp5d61CA"
      style="width: 100%; height: 500px; margin: 1rem auto"
      :center="coordinates"
      :zoom="15"
    >
      <Marker :options="{ position: center }" />
    </GoogleMap> -->
  </div>
</template>

<script>
// import { GoogleMap, Marker } from "vue3-google-map";

export default {
  components: {
    // GoogleMap,
    // Marker,
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
  },

  // created() {
  //   this.$getLocation({})
  //     .then((coordinates) => {
  //       console.log(coordinates);
  //       this.coordinates = coordinates;
  //     })
  //     .catch((err) => alert(err));
  // },
  mounted() {
    this.geolocate();

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

.map :deep(.vue-map) {
  width: 100% !important;
  height: 600px !important;
  margin: 1rem 0;
}
</style>