import { createStore } from "vuex";

import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";
import authModule from "./modules/auth";
import dashboardModule from "./modules/dashboard";

const store = createStore({
  state() {
    return {
      authOption: "login",
    };
  },
  getters,
  mutations,
  actions,
  modules: {
    auth: authModule,
    dashboard: dashboardModule,
  },
});

export default store;
