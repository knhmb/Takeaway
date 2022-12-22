import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

export default {
  namespaced: true,
  state() {
    return {
      currentUserDetails: [],
      isLoggedIn: sessionStorage.getItem("accessToken"),
    };
  },
  getters,
  mutations,
  actions,
};
