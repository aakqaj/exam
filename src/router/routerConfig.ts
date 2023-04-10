import type { RouteRecordRaw } from "vue-router";

// 2. 配置路由
export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
  },

  {
    path: "/home",
    component: () => import("@/view/HomePage.vue"),
  },
];
