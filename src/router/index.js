import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Purchase from "../views/Purchase.vue";
import Cart from "../views/Cart.vue";
import Checkout from "../views/Checkout.vue";
import FAQ from "../views/FAQ.vue";
import Register from "../views/Register.vue";
// import { getAuth, onAuthStateChanged } from "firebase/auth";

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
    // meta: {
    //   requiresAuth: true,
    // },
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

// const getCurrentUser = () => {
// return new Promise ((resolve,reject) => {
//   const removeListener = onAuthStateChanged(
// getAuth(),
// (user) => {
// removeListener();
// resolve(user);
// },
// reject
//   );
// });
// };

// router.beforeEach(async (to, from, next) => {
//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     if (await getCurrentUser()) {
//       next();
//     }
//   } else {
//     alert("you don't have access");
//     next();
//   }
// });

export default router;
