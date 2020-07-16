import Vue from "vue";
import VueRouter from "vue-router";
// Landing Layout
import {
  Home,
  Mading,
  User,
  Mentor,
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
import {
  DetailKelas,
  DetailMading,
  DetailRoadmap,
  Video,
  successCart,
} from "../views/detail/";
// Dashboard Layout
import {
  HomeDashboard,
  KelasDashboard,
  KaryaDashboard,
  UserDashboard,
  WishlistDashboard,
  UpKaryaDashboard,
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
        path: "wishlist",
        component: WishlistDashboard,
        meta: { hideNavigation: true },
      },
      {
        path: "karya",
        component: KaryaDashboard,
        meta: { hideNavigation: true },
      },
      {
        path: "karya/up",
        component: UpKaryaDashboard,
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
    path: "/User/:username",
    name: "User",
    component: User,
  },
  {
    path: "/Mentor/:username",
    name: "Mentor",
    component: Mentor,
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
    path: "/kelas/:slug/episode/:video",
    name: "DetailVideo",
    component: Video,
    // props: (route) => {
    //   const video = Number.parseInt(route.params.video, 10);
    //   if (Number.isNaN(video)) {
    //     return 0;
    //   }
    //   return { video };
    // },
  },
  {
    path: "/mading/:slug",
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
    path: "/Cart/success",
    name: "successCart",
    component: successCart,
    meta: { hideNavigation: true },
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
