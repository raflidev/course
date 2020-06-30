import Vue from "vue";
import VueRouter from "vue-router";
// Landing Layout
import {
  Home,
  Mading,
  User,
  Kelas,
  Login,
  Dashboard,
  Register,
  Roadmap,
  Wishlist,
  Cart,
  Redirect,
  Testing,
} from "@/views/";
// Detail Layout
import { DetailKelas, DetailMading, DetailRoadmap } from "../views/detail/";
// Dashboard Layout
import {
  HomeDashboard,
  KelasDashboard,
  KaryaDashboard,
  UserDashboard,
} from "../views/dashboard/";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { hideNavigation: true },
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
    path: "/dashboard",
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
    path: "/roadmap/:id",
    name: "DetailRoadmap",
    component: DetailRoadmap,
  },
  {
    path: "/kelas/:slug",
    name: "Detailkelas",
    component: DetailKelas,
  },
  {
    path: "/mading/:id",
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
    path: "/test",
    name: "test",
    component: Testing,
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
