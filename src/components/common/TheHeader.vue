<template>
  <header>
    <base-container>
      <el-row>
        <el-col :span="12">
          <p @click="$router.push('/')" class="logo-text">Takeaway</p>
          <el-input
            placeholder="Search Restaurant and Product"
            :prefix-icon="Search"
          ></el-input>
          <img src="../../assets/filter.png" alt="" />
        </el-col>
        <el-col :span="12">
          <el-button v-if="!isLoggedIn" @click="dialogVisible = true"
            >Sign in</el-button
          >
          <div v-else class="login-content">
            <div class="box" @click="$router.push('/cart')">
              <img src="../../assets/navbar-cart-off.png" alt="" />
            </div>
            <div class="box" @click="toggleMenu">
              <img src="../../assets/profile-personal-information.png" alt="" />
            </div>
            <div class="menu-list" v-if="isMenuDisplayed">
              <div class="single-item" @click="navigate('/member-profile')">
                <img
                  src="../../assets/profile-personal-information.png"
                  alt=""
                />
                <p>Profile</p>
              </div>
              <div class="single-item" @click="navigate('/order')">
                <img src="../../assets/summary.png" alt="" />
                <p>Order</p>
              </div>
              <div class="single-item" @click="logout">
                <img src="../../assets/profile-logout.png" alt="" />
                <p>Logout</p>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </base-container>
    <AuthDialog
      :dialog-visible="dialogVisible"
      @closedDialog="dialogVisible = $event"
    />
  </header>
</template>

<script>
import { Search } from "@element-plus/icons-vue";
import AuthDialog from "../AuthDialog.vue";
import { ElNotification } from "element-plus";

export default {
  components: { AuthDialog },
  data() {
    return {
      Search,
      dialogVisible: false,
      isMenuDisplayed: false,
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters["auth/isLoggedIn"];
    },
  },
  methods: {
    toggleMenu() {
      this.isMenuDisplayed = !this.isMenuDisplayed;
    },
    logout() {
      this.$store
        .dispatch("auth/checkAccessToken")
        .then(() => {
          this.$store.dispatch("auth/logout").then(() => {
            this.$router.replace("/");
          });
        })
        .catch(() => {
          this.$store
            .dispatch("auth/checkRefreshToken")
            .then(() => {
              this.$store.dispatch("auth/logout").then(() => {
                this.$router.replace("/");
              });
            })
            .catch(() => {
              ElNotification({
                title: "Error",
                message: "Token Expired! Please Login Again.",
                type: "error",
              });
              this.$store.dispatch("auth/logout").then(() => {
                this.$router.replace("/");
              });
            });
        });
    },
    navigate(path) {
      this.$router.push(path);
      this.isMenuDisplayed = false;
    },
  },
};
</script>

<style scoped>
header {
  background: #ffffff;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.08);
}

header .el-row .el-col:first-of-type {
  display: flex;
  align-items: center;
}

header p.logo-text {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: -0.04em;
  text-transform: lowercase;
  color: #fe5d1f;
  cursor: pointer;
}

header .el-input {
  width: 18rem;
  margin: 0 1rem;
}

header .el-input :deep(.el-input__wrapper) {
  background: #f2f2f2;
  border-radius: 8px;
  box-shadow: none;
}

header img {
  width: 1.7rem;
}

header .el-button {
  background: #fe5d1f;
  border-radius: 8px;
  border-color: #fe5d1f;

  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #ffffff;
  padding: 0.5rem 1rem;
  margin-left: auto;
  display: flex;
  /* width: 5rem; */
}

header .login-content {
  display: flex;
  justify-content: end;
  position: relative;
  width: fit-content;
  margin-left: auto;
}

header .login-content .box {
  background: #ffffff;
  border: 1px solid #e6e4e4;
  border-radius: 8px;
  width: fit-content;
  padding: 0.2rem;
  cursor: pointer;
}

header .login-content .box:first-of-type {
  margin-right: 1rem;
}

header .login-content .box img {
  width: 1.5rem;
}

header .login-content .menu-list {
  background: #ffffff;
  border: 1px solid #e6e4e4;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.08), 0px 4px 16px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
  padding: 1rem;
  position: absolute;
  bottom: -9.5rem;
  left: -4rem;
  min-width: 9rem;
  z-index: 1;
}

header .login-content .menu-list .single-item {
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;
}

header .login-content .menu-list .single-item:hover {
  padding-left: 0.5rem;
}

header .login-content .menu-list .single-item:not(:last-of-type) {
  margin-bottom: 1rem;
}

header .login-content .menu-list .single-item p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #141414;
  margin-left: 0.5rem;
}
</style>