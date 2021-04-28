import DashboardView from "@/views/Dashboard/Index.vue";

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
  ],
};
