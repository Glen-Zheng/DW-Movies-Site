import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Purchase from "../views/Purchase.vue";
import Cart from "../views/Cart.vue";
import Checkout from "../views/Checkout.vue";
import FAQ from "../views/FAQ.vue";
import Register from "../views/Register.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
  },
  {
    path: "/Purchase",
    name: "Purchase",
    component: Purchase,
  },
  {
    path: "/Cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/Checkout",
    name: "Checkout",
    component: Checkout,
  },
  {
    path: "/FAQ",
    name: "FAQ",
    component: FAQ,
  },
  {
    path: "/Register",
    name: "Register",
    component: Register,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ left: 0, top: 0 });
      }, 175);
    });
  },
});

export default router;
