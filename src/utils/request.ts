import axios from "axios";
import { ElNotification } from "element-plus";
import "element-plus/theme-chalk/el-notification.css";
import router from "@/router";

const service = axios.create({
  timeout: 500,
});

service.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) config.headers["token"] = token;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    if (error.response.status === 401) {
      ElNotification.error("登录过期");
      localStorage.removeItem("token");
      router.push("/login");
    }

    if (error.response.status === 404) ElNotification.error("访问资源找不到");

    if (error.response.status === 500) ElNotification.error("服务器内部错误");

    if (error.response.status === 503) ElNotification.error("服务器临时超载");

    // 404 500 503 从服务端返回异常
    return Promise.reject(error);
  }
);

export { service };
