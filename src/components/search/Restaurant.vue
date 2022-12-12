<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="restaurant">
    <base-container>
      <h2>Restaurant</h2>
      <el-row :gutter="10">
        <el-col v-for="item in restuarants" :key="item" :sm="12" :md="6">
          <div class="card">
            <div class="top">
              <img src="@/assets/restaurant.png" alt="" />
              <img
                v-if="item.isBookmarked"
                @click="removeBookmark(item)"
                src="@/assets/bookmarked.png"
                alt=""
              />
              <img
                v-else
                @click="bookmark(item)"
                src="@/assets/bookmark-off.png"
                alt=""
              />
              <!-- <img @click="toggleBookmark(item)" :src="bookmarkImg" alt="" /> -->
            </div>
            <p class="title">{{ item.name }}</p>
            <p class="description">
              {{ item.description }}
            </p>
          </div>
        </el-col>
      </el-row>
    </base-container>
  </div>
</template>

<script>
import { ElNotification } from "element-plus";
export default {
  data() {
    return {
      bookmarkImg: require("@/assets/bookmark-off.png"),
    };
  },
  computed: {
    restuarants() {
      return this.$store.getters["dashboard/restuarants"];
    },
    isLoggedIn() {
      return this.$store.getters["auth/isLoggedIn"];
    },
  },
  methods: {
    bookmark(item) {
      if (!this.isLoggedIn) {
        ElNotification({
          title: "Error",
          message: "Please Login First!",
          type: "error",
        });
        return;
      }
      this.$store
        .dispatch("auth/checkAccessToken")
        .then(() => {
          this.$store.dispatch("dashboard/bookmark", item.slug);
        })
        .catch(() => {
          this.$store
            .dispatch("auth/checkRefreshToken")
            .then(() => {
              this.$store.dispatch("dashboard/bookmark", item.slug);
            })
            .catch(() => {
              ElNotification({
                title: "Error",
                message: "Token Expired! Please Login Again.",
                type: "error",
              });
              this.$store.dispatch("auth/logout");
              this.$router.replace("/");
            });
        });
      item.isBookmarked = true;
    },
    removeBookmark(item) {
      if (!this.isLoggedIn) {
        ElNotification({
          title: "Error",
          message: "Please Login First!",
          type: "error",
        });
        return;
      }
      item.isBookmarked = false;
    },
  },
};
</script>

<style scoped>
.restaurant h2 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.02em;
  color: #141414;
  margin-bottom: 1rem;
}

.restaurant .el-row .el-col {
  margin-bottom: 10px;
}

.restaurant .card {
  background: #ffffff;
  border-radius: 8px;
  padding: 0.5rem;
  /* width: 12rem; */
  /* width: 100%; */
}

.restaurant .card .top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.8rem;
}

.restaurant .card .top img {
  width: 1rem;
}

.restaurant .card .top img:last-of-type {
  cursor: pointer;
}

.restaurant .card p.title {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 12px;
  color: #141414;
  text-align: start;
  margin-bottom: 0.5rem;
}

.restaurant .card p.description {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: rgba(20, 20, 20, 0.6);
  text-align: start;
}
</style>