import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
// import VueAxios from "vue-axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      username: "raflidev",
      nama: "RAFLI",
      kelas: ["fullstack-javascript"],
    },
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
    listkupon: [],
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
    getKupon: (state) => state.listkupon,
    getUser: (state) => state.user,
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
    async loadKupon({ commit }) {
      const response = await axios.get("/api.json");
      commit("setKupon", response.data.kupon);
    },
    async loadUser({ commit }) {
      const response = await axios.get("/api.json");
      commit("setUser", response.data.user);
    },
  },
  mutations: {
    setRoadmap: (state, roadmap) => (state.roadmap = roadmap),
    setMading: (state, mading) => (state.mading = mading),
    setWishlist: (state, wishlist) => (state.wishlist = wishlist),
    setKelas: (state, kelas) => (state.kelas = kelas),
    setSearch: (state, search) => (state.search = search),
    setUlasan: (state, ulasan) => (state.ulasan = ulasan),
    setUlasanLoad: (state, ulasanLoad) => (state.ulasanLoad = ulasanLoad),
    setPopuler: (state, populer) => (state.populer = populer),
    setBenefit: (state, benefit) => (state.benefit = benefit),
    setKeunggulan: (state, keunggulan) => (state.keunggulan = keunggulan),
    setKupon: (state, kupon) => (state.listkupon = kupon),
    setUser: (state, user) => (state.user = user),
    setUserKelas: (state, user) => state.user.kelas.push(user),
  },
  modules: {},
});
