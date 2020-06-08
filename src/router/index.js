import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Mading from "../views/Mading.vue";
import Kelas from "../views/Kelas.vue";
import Roadmap from "../views/Roadmap.vue";
import Redirect from "../views/Redirect.vue";
import DetailMading from "../views/detail/Mading.vue";
import DetailKelas from "../views/detail/Kelas.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/mading",
    name: "Mading",
    component: Mading,
  },
  {
    path: "/kelas",
    name: "Kelas",
    component: Kelas,
  },
  {
    path: "/roadmap",
    name: "Roadmap",
    component: Roadmap,
  },
  {
    path: "/kelas/fullstack-web-developer",
    name: "Detailkelas",
    component: DetailKelas,
  },
  {
    path: "/mading/aplikasi-perbankan",
    name: "DetailMading",
    component: DetailMading,
  },
  {
    path: "*",
    component: Redirect,
  },
];
const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
