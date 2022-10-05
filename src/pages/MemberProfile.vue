<template>
  <section class="member-profile">
    <base-container>
      <el-row :gutter="30">
        <el-col :sm="24" :lg="8">
          <div class="card">
            <div class="top">
              <div class="avatar">
                <img src="../assets/navbar-profile-on.png" alt="" />
              </div>
              <p class="profile-name">Tai Man</p>
            </div>
            <div class="menu">
              <div
                @click="navigate('personal-information')"
                :class="{
                  'is-active':
                    $route.path === '/member-profile/personal-information',
                }"
                class="menu-list"
              >
                <img src="../assets/profile-personal-information.png" alt="" />
                <p>Personal information</p>
              </div>
              <div
                @click="navigate('change-password')"
                :class="{
                  'is-active':
                    $route.path === '/member-profile/change-password',
                }"
                class="menu-list"
              >
                <img src="../assets/profile-change-password.png" alt="" />
                <p>Change password</p>
              </div>
              <div
                @click="navigate('delivery-address')"
                :class="{
                  'is-active':
                    $route.path === '/member-profile/delivery-address',
                }"
                class="menu-list"
              >
                <img src="../assets/profile-address.png" alt="" />
                <p>Delivery address</p>
              </div>
              <div
                @click="navigate('e-wallet')"
                :class="{
                  'is-active': $route.path === '/member-profile/e-wallet',
                }"
                class="menu-list"
              >
                <img src="../assets/profile-e-wallet.png" alt="" />
                <p>E-Wallet</p>
              </div>
              <div
                @click="navigate('favorites')"
                :class="{
                  'is-active': $route.path === '/member-profile/favorites',
                }"
                class="menu-list"
              >
                <img src="../assets/profile-liked.png" alt="" />
                <p>Favorites</p>
              </div>
            </div>
          </div>
          <div class="card">
            <p class="delete" @click="dialogVisible = true">
              Delete my account
            </p>
          </div>
        </el-col>
        <el-col :sm="24" :lg="16">
          <router-view></router-view>
        </el-col>
      </el-row>
    </base-container>
    <DeleteDialog
      :dialog-visible="dialogVisible"
      @closedDialog="dialogVisible = $event"
    />
  </section>
</template>

<script>
import DeleteDialog from "@/components/DeleteDialog.vue";
export default {
  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    navigate(path) {
      this.$router.push({ name: path });
    },
  },
  components: { DeleteDialog },
};
</script>

<style scoped>
.member-profile {
  background: #f2f2f2;
}

.member-profile .card {
  background: #ffffff;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
  /* padding: 1rem; */
  margin-top: 1rem;
}

.member-profile .card .top {
  padding: 1rem;
}

.member-profile .card .avatar {
  border: 1px solid #e6e6e6;
  border-radius: 100%;
  width: 7rem;
  height: 7rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.member-profile .card .avatar img {
  width: 5rem;
}

.member-profile .card p.profile-name {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #141414;
  text-align: center;
  margin-top: 0.5rem;
}

.member-profile .card .menu {
  margin-top: 2rem;
}

.member-profile .card .menu .menu-list {
  padding: 1rem;
  border-bottom: 1px solid #e6e6e6;
  position: relative;
  cursor: pointer;
}

.member-profile .card .menu .menu-list.is-active::after {
  content: "";
  position: absolute;
  width: 0.4rem;
  height: 3rem;
  background: #fe5d1f;
  border-radius: 4px 0px 0px 4px;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

.member-profile .card .menu .menu-list img {
  width: 1.5rem;
  vertical-align: middle;
  margin-right: 0.6rem;
}

.member-profile .card .menu .menu-list p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #141414;
  vertical-align: middle;
  display: inline-block;
}

.member-profile .card:last-of-type {
  padding: 0.8rem;
}

.member-profile .card p.delete {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #fe5d1f;
  cursor: pointer;
}
</style>