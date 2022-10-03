import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home";
import Search from "./pages/Search";
import Restaurant from "./pages/Restaurant";
import Cart from "./pages/Cart";
import Cart2 from "./pages/Cart-2";

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
    {
      path: "/restaurant",
      component: Restaurant,
    },
    {
      path: "/cart",
      component: Cart,
    },
    {
      path: "/cart-2",
      component: Cart2,
    },
  ],
});

export default router;
