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
  async getRestuarants(context, payload) {
    const response = await axios.get("/api/v1/accounts/restaurants", {
      params: {
        search: payload,
      },
    });
    console.log(response);
    context.commit("SET_RESTUARANTS", response.data.items);
  },
  async filterRestaurants(context, payload) {
    const response = await axios.get("/api/v1/accounts/restaurants", {
      params: {
        filter: `category:${payload}`,
      },
    });
    console.log(response);
    context.commit("SET_RESTUARANTS", response.data.items);
  },
  async bookmark(_, payload) {
    const userToken = localStorage.getItem("accessToken");

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
  async getRestaurantDetails(context, payload) {
    const response = await axios.get(`/api/v1/accounts/restaurants/${payload}`);
    context.commit("SET_RESTAURANT_DETAILS", response.data.item);
  },
  async getProductDetails(context, payload) {
    const response = await axios.get(`/api/v1/platform/products/${payload}`);
    context.commit("SET_PRODUCT_DETAILS", response.data.item);
    context.dispatch("getRestaurantDetails", response.data.item.restaurant);
    // console.log(context);
  },
  async getOptions(context) {
    const response = await axios.get("/api/v1/options/items");
    context.commit("SET_OPTIONS", response.data.items);
  },
  // async addToCart(_, payload) {
  //   const userToken = sessionStorage.getItem("accessToken");
  //   const response = await axios.put(
  //     `/api/v1/platform/cart/@me/${payload}`,
  //     {
  //       quantity: 0,
  //     },
  //     {
  //       headers: {
  //         Authorization: `Bearer ${userToken}`,
  //       },
  //     }
  //   );
  //   console.log(response);
  // },
  // async getCart() {
  //   const userToken = sessionStorage.getItem("accessToken");

  //   const response = await axios.get("/api/v1/platform/cart/@me", {
  //     headers: {
  //       Authorization: `Bearer ${userToken}`,
  //     },
  //   });
  //   console.log(response);
  // },
};
