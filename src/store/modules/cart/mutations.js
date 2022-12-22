export default {
  SET_CART(state, payload) {
    state.cart = payload;
  },
  SET_ORDERS(state, payload) {
    state.orders = payload;
  },
  SET_PAYMENT_METHOD(state, payload) {
    state.paymentMethod = payload;
  },
};
