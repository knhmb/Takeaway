import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import router from "./route";
import Vue3Geolocation from "vue3-geolocation";
import * as Vue3GoogleMaps from "vue3-google-map";

import BaseContainer from "./ui/BaseContainer";
import BaseCard from "./ui/BaseCard";

const app = createApp(App);

app.component("base-container", BaseContainer);
app.component("base-card", BaseCard);

app.use(ElementPlus);
app.use(router);
app.use(Vue3Geolocation);

app.mount("#app");
