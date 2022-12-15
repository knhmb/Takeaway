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
};
