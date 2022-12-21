import axios from "axios";

export default {
  async addToCart(_, payload) {
    const userToken = sessionStorage.getItem("accessToken");

    const response = await axios.put("/api/v1/platform/cart/@me", payload, {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
    console.log(response);
  },
  async getCart(context) {
    const userToken = sessionStorage.getItem("accessToken");

    const response = await axios.get("/api/v1/platform/cart/@me", {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
    console.log(response);
    context.commit("SET_CART", response.data);
  },
  async stripePayment() {
    const userToken = sessionStorage.getItem("accessToken");

    const response = await axios.post(
      "/api/v1/platform/checkout/stripe",
      {},
      {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      }
    );
    console.log(response);
    window.location.href = response.data.redirect;
  },
  async getStirpe(_, payload) {
    const userToken = sessionStorage.getItem("accessToken");

    const response = await axios.get("/api/v1/platform/checkout/stripe", {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
      params: {
        session: payload.session,
        success: payload.success,
      },
    });
    console.log(response);
  },
  async getOrder(context) {
    const userToken = sessionStorage.getItem("accessToken");

    const response = await axios.get("/api/v1/platform/orders", {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
    console.log(response);
    context.commit("SET_ORDERS", response.data.items);
  },
};
