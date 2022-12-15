import axios from "axios";

export default {
  async getOtp(_, payload) {
    const response = await axios.post("/api/v1/accounts/otp", payload);
    console.log(response);
  },
  async signup(_, payload) {
    const response = await axios.post("/api/v1/accounts", payload);
    console.log(response);
  },
  async login(context, payload) {
    const response = await axios.post("/api/v1/authenticate", payload);
    console.log(response);
    context.commit("LOGIN", response.data.item);
    sessionStorage.setItem("accessToken", response.data.accessToken);
    sessionStorage.setItem("refreshToken", response.data.refreshToken);
  },
  async checkAccessToken() {
    const userToken = sessionStorage.getItem("accessToken");

    const response = await axios.get("/api/v1/authenticate/", {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
    console.log(response);
  },
  async checkRefreshToken(context) {
    const userToken = sessionStorage.getItem("refreshToken");

    const response = await axios.put(
      "/api/v1/authenticate/",
      {},
      {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      }
    );
    context.commit("LOGIN", response.data.item);
    sessionStorage.setItem("accessToken", response.data.accessToken);
    sessionStorage.setItem("refreshToken", response.data.refreshToken);
  },
  async logout(context) {
    const userToken = sessionStorage.getItem("accessToken");

    const response = await axios.delete("/api/v1/authenticate", {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
    console.log(response);
    context.commit("LOGOUT");
    sessionStorage.removeItem("accessToken");
    sessionStorage.removeItem("refreshToken");
  },
  async forgotPassword(_, payload) {
    const response = await axios.post(
      "/api/v1/accounts/forget-password",
      payload
    );
    console.log(response);
  },
};
