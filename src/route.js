import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home";
import Search from "./pages/Search";
import Restaurant from "./pages/Restaurant";
import Cart from "./pages/Cart";
import Cart2 from "./pages/Cart-2";
import Order from "./pages/Order";
import MemberProfile from "./pages/MemberProfile";
import PersonalInformation from "./pages/PersonalInformation";
import ChangePassword from "./pages/ChangePassword";
import EWallet from "./pages/E-Wallet";
import Favorites from "./pages/Favorites";

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
    {
      path: "/order",
      component: Order,
    },
    {
      path: "/member-profile",
      component: MemberProfile,
      children: [
        {
          path: "personal-information",
          component: PersonalInformation,
          name: "personal-information",
        },
        {
          path: "change-password",
          component: ChangePassword,
          name: "change-password",
        },
        {
          path: "e-wallet",
          component: EWallet,
          name: "e-wallet",
        },
        {
          path: "favorites",
          component: Favorites,
          name: "favorites",
        },
      ],
    },
  ],
});

export default router;
