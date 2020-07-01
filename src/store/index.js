import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
// import VueAxios from "vue-axios";

Vue.use(Vuex);

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
    benefit: [],
    keunggulan: [],
  },
  getters: {
    allKelas: (state) => state.kelas,
    getSearch: (state) => state.search,
    getUlasan: (state) => state.ulasan,
    getPopuler: (state) => state.populer,
    getUlasanLoad: (state) => state.ulasanLoad,
    getMading: (state) => state.mading,
    getBenefit: (state) => state.benefit,
    getKeunggulan: (state) => state.keunggulan,
  },
  actions: {
    async loadMading({ commit }) {
      const response = await axios.get("/api.json");

      commit("setMading", response.data.mading);
    },
    async loadRoadmap({ commit }) {
      const response = await axios.get("/api.json");

      commit("setRoadmap", response.data.roadmap);
    },
    async loadKelas({ commit }) {
      const response = await axios.get("/api.json");

      commit("setKelas", response.data.kelas);
    },
    async loadWishlist({ commit }) {
      const response = await axios.get("/api.json");

      commit("setWishlist", response.data.wishlist);
    },
    async loadCart({ commit }) {
      const response = await axios.get("/api.json");

      commit("setCart", response.data.cart);
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
    async loadBenefit({ commit }) {
      const response = await axios.get("/api.json");
      commit("setBenefit", response.data.benefit);
    },
    async loadKeunggulan({ commit }) {
      const response = await axios.get("/api.json");
      commit("setKeunggulan", response.data.keunggulan);
    },
  },
  mutations: {
    setRoadmap: (state, roadmap) => (state.roadmap = roadmap),
    setMading: (state, mading) => (state.mading = mading),
    setWishlist: (state, wishlist) => (state.wishlist = wishlist),
    setCart: (state, cart) => (state.cart = cart),
    setKelas: (state, kelas) => (state.kelas = kelas),
    setSearch: (state, search) => (state.search = search),
    setUlasan: (state, ulasan) => (state.ulasan = ulasan),
    setUlasanLoad: (state, ulasanLoad) => (state.ulasanLoad = ulasanLoad),
    setPopuler: (state, populer) => (state.populer = populer),
    setBenefit: (state, benefit) => (state.benefit = benefit),
    setKeunggulan: (state, keunggulan) => (state.keunggulan = keunggulan),
  },
  modules: {},
});
