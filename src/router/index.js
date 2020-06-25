import Vue from "vue";
import VueRouter from "vue-router";
// Landing Layout
import Home from "../views/Home.vue";
import Mading from "../views/Mading.vue";
import User from "../views/User.vue";
import Kelas from "../views/Kelas.vue";
import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard.vue";
import Register from "../views/Register.vue";
import Roadmap from "../views/Roadmap.vue";
import Wishlist from "../views/Wishlist.vue";
import Cart from "../views/Cart.vue";
import Redirect from "../views/Redirect.vue";
// Detail Layout
import DetailRoadmap from "../views/detail/Roadmap.vue";
import DetailMading from "../views/detail/Mading.vue";
import DetailKelas from "../views/detail/Kelas.vue";
// Dashboard Layout
import HomeDashboard from "../views/dashboard/Home.vue";
import KelasDashboard from "../views/dashboard/Kelas.vue";
import KaryaDashboard from "../views/dashboard/Karya.vue";
import UserDashboard from "../views/dashboard/User.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
    meta: { hideNavigation: true },
  },
  {
    path: "/Daftar",
    name: "Register",
    component: Register,
    meta: { hideNavigation: true },
  },

  {
    path: "/Dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: { hideNavigation: true },
    children: [
      {
        path: "/",
        redirect: "progress",
      },
      {
        path: "progress",
        component: HomeDashboard,
        meta: { hideNavigation: true },
      },
      {
        path: "kelas",
        component: KelasDashboard,
        meta: { hideNavigation: true },
      },
      {
        path: "karya",
        component: KaryaDashboard,
        meta: { hideNavigation: true },
      },
      {
        path: "user",
        component: UserDashboard,
        meta: { hideNavigation: true },
      },
    ],
  },
  {
    path: "/mading",
    name: "Mading",
    component: Mading,
  },
  {
    path: "/User/rafliram",
    name: "User",
    component: User,
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
    path: "/roadmap/fullstack-web-developer",
    name: "DetailRoadmap",
    component: DetailRoadmap,
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
    path: "/wishlist",
    name: "Wishlist",
    component: Wishlist,
  },
  {
    path: "/Cart",
    name: "Cart",
    component: Cart,
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
