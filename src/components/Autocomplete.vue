<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="maps-form">
    <input type="text" placeholder="Origin" ref="origin" />
    <input type="text" placeholder="Destination" ref="destination" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      origin: "",
      destination: "",
    };
  },
  mounted() {
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
    });
  },
};
</script>

<style scoped>
.maps-form input {
  background: #f2f2f2;
  border-radius: 8px;
  border: none;
  box-shadow: 0 0 0 1px var(--el-input-border-color, var(--el-border-color))
    inset;
  padding: 0.5rem 1.5rem;
  outline: none;
}

.maps-form input:focus-visible {
  box-shadow: 0 0 0 1px #409eff inset;
  border: none;
}
</style>

<style>
.pac-container.pac-logo {
  z-index: 2006;
}
</style>