import AuthView from "@/views/Auth/Index.vue";

export default {
  path: "/auth",
  name: "authentication",
  component: AuthView,
  redirect: "/auth/login",
  children: [
    {
      path: "login",
      name: "login",
      component: () => import("@/views/Auth/Login.vue"),
    },
    {
      path: "register",
      name: "register",
      component: () => import("@/views/Auth/Register.vue"),
    },
  ],
};
