import { createApp } from "vue";
import App from "./App.vue";
import router from "./route";
import store from "./store/store";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import Vue3Geolocation from "vue3-geolocation";
import VueGoogleMaps from "@fawmi/vue-google-maps";
// import * as Vue3GoogleMaps from "vue3-google-map";

import BaseContainer from "./ui/BaseContainer";
import BaseCard from "./ui/BaseCard";

const app = createApp(App);

app.component("base-container", BaseContainer);
app.component("base-card", BaseCard);

app.use(ElementPlus);
app.use(router);
app.use(store);
app.use(Vue3Geolocation);
app.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDrD7PzHIVuzkYl53K-W0qRVNybp5d61CA",
    libraries: "places",
    // language: 'de',
  },
});

app.mount("#app");
