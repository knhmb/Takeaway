import axios from "axios";

export default {
  async getCmsContent() {
    const response = await axios.get("/api/v1/cms/groups");
    console.log(response);
  },
  async getProducts(context) {
    const response = await axios.get("/api/v1/platform/products");
    context.commit("SET_PRODUCTS", response.data.items);
  },
};
