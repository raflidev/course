import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(Vuex);
Vue.use(VueAxios, axios);

Vue.axios.defaults.baseURL = "http://localhost:8080/";

export default new Vuex.Store({
  state: {
    kelas: [],
    mading: [],
    roadmap: [],
    wishlist: [],
    cart: [],
    populer: [],
    search: "",
    ulasan: [],
    ulasanLoad: false,
  },
  getters: {
    allKelas: (state) => state.kelas,
    getSearch: (state) => state.search,
    getUlasan: (state) => state.ulasan,
    getPopuler: (state) => state.populer,
    getUlasanLoad: (state) => state.ulasanLoad,
  },
  actions: {
    loadMading({ commit }) {
      Vue.axios
        .get("api.json")
        .then((result) => {
          commit("ambilMading", result.data.mading);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    loadRoadmap({ commit }) {
      Vue.axios
        .get("api.json")
        .then((result) => {
          commit("ambilRoadmap", result.data.roadmap);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async loadKelas({ commit }) {
      const response = await axios.get("/api.json");

      commit("setKelas", response.data.kelas);
    },
    loadWishlist({ commit }) {
      Vue.axios
        .get("api.json")
        .then((result) => {
          commit("ambilWishlist", result.data.wishlist);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    loadCart({ commit }) {
      Vue.axios
        .get("api.json")
        .then((result) => {
          commit("ambilCart", result.data.cart);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async loadUlasan({ commit }) {
      const response = await axios.get("/api.json");
      commit("setUlasan", response.data.ulasan);
      commit("setUlasanLoad", true);
    },
    async loadPopuler({ commit }) {
      const response = await axios.get("/api.json");
      commit("setPopuler", response.data.populer);
    },
  },
  mutations: {
    ambilRoadmap: (state, roadmap) => (state.roadmap = roadmap),
    ambilMading: (state, mading) => (state.mading = mading),
    ambilWishlist: (state, wishlist) => (state.wishlist = wishlist),
    ambilCart: (state, cart) => (state.cart = cart),
    setKelas: (state, kelas) => (state.kelas = kelas),
    setSearch: (state, search) => (state.search = search),
    setUlasan: (state, ulasan) => (state.ulasan = ulasan),
    setUlasanLoad: (state, ulasanLoad) => (state.ulasanLoad = ulasanLoad),
    setPopuler: (state, populer) => (state.populer = populer),
  },
  modules: {},
});
