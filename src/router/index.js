import Vue from "vue";
import VueRouter from "vue-router";
import AuthRoutes from "./auth";
import DashboardRoutes from "./dashboard";
import PublicRoutes from "./public";

Vue.use(VueRouter);

const routes = [...PublicRoutes, AuthRoutes, DashboardRoutes];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
