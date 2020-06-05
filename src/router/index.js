import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Mading from "../views/Mading.vue";
import Kelas from "../views/Kelas.vue";

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
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
