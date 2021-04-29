import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/user",
    name: "User",
    component: () => import("../views/User.vue"),
  },
  {
    path: "/user/:id",
    name: "UserUpdate",
    component: () => import("../views/UserUpdate.vue"),
  },
  {
    path: "/charts",
    name: "Charts",
    component: () => import("../views/Charts.vue"),
  },
  {
    path: "/charts-global",
    name: "Charts",
    component: () => import("../views/ChartsGlobal.vue"),
  },

];

const router = new VueRouter({
  routes,
});

export default router;
