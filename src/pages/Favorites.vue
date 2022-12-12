<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="favorites">
    <base-card>
      <h3>Favorites</h3>
      <el-row :gutter="15">
        <el-col
          v-for="item in bookmarks.resources.restaurants"
          :key="item"
          :span="12"
        >
          <div class="inner-card">
            <div class="top">
              <img src="../assets/restaurant.png" alt="" />
              <img
                @click="removeBookmark(item.slug)"
                src="../assets/bookmark-on.png"
                alt=""
              />
            </div>
            <p class="name">{{ item.name }}</p>
            <p class="description">
              {{ item.description }}
            </p>
          </div>
        </el-col>
      </el-row>
    </base-card>
  </section>
</template>

<script>
import { ElNotification } from "element-plus";
export default {
  computed: {
    bookmarks() {
      return this.$store.getters["profile/bookmarks"];
    },
  },
  methods: {
    removeBookmark(slug) {
      this.$store
        .dispatch("auth/checkAccessToken")
        .then(() => {
          this.$store.dispatch("profile/removeBookmark", slug).then(() => {
            this.$store.dispatch("profile/getBookmarks");
          });
        })
        .catch(() => {
          this.$store
            .dispatch("auth/checkRefreshToken")
            .then(() => {
              this.$store.dispatch("profile/removeBookmark", slug).then(() => {
                this.$store.dispatch("profile/getBookmarks");
              });
            })
            .catch(() => {
              ElNotification({
                title: "Error",
                message: "Token Expired! Please Login again.",
                type: "error",
              });
              this.$store.dispatch("logout").then(() => {
                this.$router.replace("/");
              });
            });
        });
    },
  },
  created() {
    this.$store
      .dispatch("auth/checkAccessToken")
      .then(() => {
        this.$store.dispatch("profile/getBookmarks");
      })
      .catch(() => {
        this.$store
          .dispatch("auth/checkRefreshToken")
          .then(() => {
            this.$store.dispatch("profile/getBookmarks");
          })
          .catch(() => {
            ElNotification({
              title: "Error",
              message: "Token Expired! Please Login again.",
              type: "error",
            });
            this.$store.dispatch("logout");
            this.$router.replace("/");
          });
      });
  },
};
</script>

<style scoped>
.favorites h3 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #141414;
  margin-bottom: 1.5rem;
}

.favorites .inner-card {
  background: #ffffff;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  padding: 0.5rem;
}

.favorites .card .el-col {
  margin-bottom: 15px;
}

.favorites .inner-card .top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.favorites .inner-card img {
  width: 1.3rem;
}

.favorites .inner-card img:last-of-type {
  cursor: pointer;
}

.favorites .inner-card p.name {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 12px;
  color: #141414;
  margin: 0.5rem 0;
}

.favorites .inner-card p.description {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: rgba(20, 20, 20, 0.6);
}
</style>