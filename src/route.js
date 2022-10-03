import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home";
import Search from "./pages/Search";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      component: Home,
    },
    {
      path: "/search",
      component: Search,
    },
  ],
});

export default router;
