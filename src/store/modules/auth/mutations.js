export default {
  LOGIN(state, payload) {
    state.currentUserDetails = payload;
    state.isLoggedIn = true;
  },
  LOGOUT(state) {
    state.currentUserDetails = [];
    state.isLoggedIn = null;
  },
};
