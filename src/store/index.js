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
    search: null,
  },
  mutations: {
    ambilKelas(state, kelas) {
      state.kelas = kelas;
    },
    ambilRoadmap(state, roadmap) {
      state.roadmap = roadmap;
    },
    ambilMading(state, mading) {
      state.mading = mading;
    },
    ambilWishlist(state, wishlist) {
      state.wishlist = wishlist;
    },
    ambilCart(state, cart) {
      state.cart = cart;
    },
    mencariKelas(state, word) {
      state.search = word;
      state.kelas.filter((kelas) => {
        return kelas.nama.toLowerCase().includes(word.toLowerCase());
      });
    },
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
    loadKelas({ commit }) {
      Vue.axios
        .get("api.json")
        .then((result) => {
          commit("ambilKelas", result.data.kelas);
        })
        .catch((err) => {
          console.log(err);
        });
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
    mencariKelas({ commit }, kelas) {
      commit("mencariKelas", kelas);
    },
  },
  modules: {},
  getters: {
    getKelas: (state) => state.kelas,
  },
});
