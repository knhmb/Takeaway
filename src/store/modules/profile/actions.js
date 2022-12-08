import axios from "axios";

export default {
  async updateUserAccount(_, payload) {
    const userToken = sessionStorage.getItem("accessToken");

    const response = await axios.put(
      `/api/v1/accounts/${payload.id}`,
      payload.data,
      {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      }
    );
    console.log(response);
  },
  async getUserDetails(context, payload) {
    const userToken = sessionStorage.getItem("accessToken");

    const response = await axios.get(`/api/v1/accounts/${payload}`, {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
    context.commit("auth/LOGIN", response.data.item, { root: true });
  },
};
