export default {
  SET_PRODUCTS(state, payload) {
    state.products = payload;
  },
  SET_BANNERS(state, payload) {
    state.banners = payload;
  },
  SET_RESTUARANTS(state, payload) {
    state.restuarants = payload;
  },
  SET_RESTAURANT_DETAILS(state, payload) {
    state.restaurantDetails = payload;
  },
  SET_PRODUCT_DETAILS(state, payload) {
    state.productDetails = payload;
  },
  SET_OPTIONS(state, payload) {
    state.options = payload;
  },
};
