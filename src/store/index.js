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
      kelas: [
        {
          nama: "Full-Stack Javascript Developer",
          slug: "fullstack-javascript",
          desc:
            "Kelas ini akan membahas full tentang javascript, mulai dari frontend dan backendnya sampai deploy agar bisa di akses lewat internet.",
          harga: 500000,
          episode: 1,
          image:
            "https://storage.googleapis.com/fastwork-static/082dcee4-19a9-477b-ae5c-f703558764f2.jpg",
          tingkat: "Pemula",
          menit: 50,
          mentor: {
            nama: "Rafli Ramadhan",
            skill: "Full-Stack Developer",
          },
          journey: [],
          materi: [
            {
              judul: "Perkenalan",
              episode: "1",
              slug: "perkenalan",
              video: "CKeFLCdOaX4",
            },
            {
              judul: "Instalasi Software",
              episode: "2",
              slug: "instalasi-software",
              video: "zpOULjyy-n8",
            },
            {
              judul: "Persiapan Tool dan konfigurasi",
              episode: "3",
              slug: "perisiapan-tool-dan-konfigurasi",
              video: "CKeFLCdOaX4",
            },
            {
              judul: "Kita mulai dari dasar ya",
              episode: "4",
              slug: "kita-mulai-dari-dasar-ya",
              video: "CKeFLCdOaX4",
            },
            {
              judul: "Buat landing page dulu",
              episode: "5",
              slug: "buat-landing-page-dulu",
              video: "CKeFLCdOaX4",
            },
            {
              judul: "Integrasi ke component",
              episode: "6",
              slug: "integrasi-ke-component",
              video: "CKeFLCdOaX4",
            },
            {
              judul: "import ke view juga dong",
              episode: "7",
              slug: "import-ke-view-juga-dong",
              video: "CKeFLCdOaX4",
            },
            {
              judul: "mantapnya css scope",
              episode: "8",
              slug: "mantapnya-css-scope",
              video: "CKeFLCdOaX4",
            },
          ],
        },
        {
          nama: "Full-Stack Web Developer",
          slug: "fullstack-web-developer",
          desc:
            "Kelas ini akan membahas full tentang javascript, mulai dari frontend dan backendnya sampai deploy agar bisa di akses lewat internet.",
          harga: 360000,
          episode: 67,
          image:
            "https://storage.googleapis.com/fastwork-static/082dcee4-19a9-477b-ae5c-f703558764f2.jpg",
          tingkat: "Pemula",
          menit: 50,
          mentor: {
            nama: "David Santoso",
            skill: "Front-end Developer",
          },
          journey: [],

          materi: [
            {
              judul: "Perkenalan",
              episode: "1",
              slug: "perkenalan",
              video: "CKeFLCdOaX4",
            },
            {
              judul: "Instalasi Software",
              episode: "2",
              slug: "instalasi-software",
              video: "zpOULjyy-n8",
            },
            {
              judul: "Persiapan Tool dan konfigurasi",
              episode: "3",
              slug: "perisiapan-tool-dan-konfigurasi",
              video: "CKeFLCdOaX4",
            },
            {
              judul: "Kita mulai dari dasar ya",
              episode: "4",
              slug: "kita-mulai-dari-dasar-ya",
              video: "CKeFLCdOaX4",
            },
            {
              judul: "Buat landing page dulu",
              episode: "5",
              slug: "buat-landing-page-dulu",
              video: "CKeFLCdOaX4",
            },
            {
              judul: "Integrasi ke component",
              episode: "6",
              slug: "integrasi-ke-component",
              video: "CKeFLCdOaX4",
            },
            {
              judul: "import ke view juga dong",
              episode: "7",
              slug: "import-ke-view-juga-dong",
              video: "CKeFLCdOaX4",
            },
            {
              judul: "mantapnya css scope",
              episode: "8",
              slug: "mantapnya-css-scope",
              video: "CKeFLCdOaX4",
            },
          ],
        },
      ],
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
    setEpisodeKelas: (state, user) => state.user.kelas.push(user),
    setJourneyKelas(state, user) {
      state.user.kelas[user.index].journey = user;
    },
  },
  modules: {},
});
