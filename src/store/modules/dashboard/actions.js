import axios from "axios";

export default {
  async getCmsContent() {
    const response = await axios.get("/api/v1/cms/contents");
    console.log(response);
  },
  async getProducts(context) {
    const response = await axios.get("/api/v1/platform/products");
    context.commit("SET_PRODUCTS", response.data.items);
  },
  async getBanners(context) {
    const response = await axios.get("/api/v1/platform/banners");
    console.log(response);
    context.commit("SET_BANNERS", response.data.items);
  },
  async getRestuarants(context) {
    const response = await axios.get("/api/v1/accounts/restaurants");
    console.log(response);
    context.commit("SET_RESTUARANTS", response.data.items);
  },
  async bookmark(_, payload) {
    const userToken = sessionStorage.getItem("accessToken");

    const response = await axios.post(
      `/api/v1/accounts/favourites/@me/restaurant/${payload}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      }
    );
    console.log(response);
  },
};
