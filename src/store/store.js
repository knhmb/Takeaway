import { createStore } from "vuex";

import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";
import authModule from "./modules/auth";
import dashboardModule from "./modules/dashboard";
import profileModule from "./modules/profile";
import cartModule from "./modules/cart";

import createPersistedState from "vuex-persistedstate";

const store = createStore({
  plugins: [createPersistedState()],

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
    profile: profileModule,
    cart: cartModule,
  },
});

export default store;
