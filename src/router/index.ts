import { createRouter, createWebHistory } from "vue-router";
import { routes } from "@/router/routerConfig";
import nProgress from "nprogress";
import "nprogress/nprogress.css";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  nProgress.start();
  next();
});

router.afterEach((to, from) => {
  nProgress.done();
});

export default router;
