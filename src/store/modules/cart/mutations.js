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
  SET_ORDER_DETAILS(state, payload) {
    state.orderDetails = payload;
  },
};
