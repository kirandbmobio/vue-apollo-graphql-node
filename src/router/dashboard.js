import DashboardView from "@/views/Dashboard/Index.vue";
import store from "../store";
export default {
  path: "/dashboard",
  name: "dashboard",
  component: DashboardView,
  redirect: "/dashboard/posts",
  children: [
    {
      path: "profile",
      name: "Profile",
      component: () => import("@/views/Dashboard/Profile.vue"),
    },
    {
      path: "posts",
      name: "Posts",
      component: () => import("@/views/Dashboard/Posts.vue"),
    },
    {
      path: "logout",
      name: "logout",
      beforeEnter: (to, from, next) => {
        store.dispatch("Auth/logoutUser");
        next("/auth/login");
      },
    },
  ],
};
