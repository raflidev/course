<template>
  <main>
    <section class="g-color">
      <div class="container">
        <Navbar />
      </div>
      <div class="container pb-5 mt-5">
        <div class="row">
          <div class="col-lg-7">
            <h1 class="text-merri pb-3">Make Your Dreams Come True</h1>
            <h5 class="font-weight-light">
              Pelajari koding untuk membuat website dan aplikasi
              <br />ingin menjenjang karir programmer atau membuat karya?
              <br />kami tunggu dikelas!
            </h5>
            <input
              type="text"
              class="form-control col-lg-9 col-12 mt-5"
              placeholder="Cari kelas ex: Javascript"
              v-model="search"
            />
            <div class="col-lg-10 bg-white result-item text-purple rounded mt-2" v-show="search">
              <div
                class="box-item p-4 mb-0 border-bottom"
                v-for="kelas in kelas"
                :key="kelas.index"
              >
                <a
                  href="kelas/fullstack-web-developer"
                  class="stretched-link text-decoration-none text-purple"
                >
                  <img :src="kelas.image" width="130" class="img-fluid mr-3 float-left" />
                  <h5 class="m-0">{{ kelas.nama }}</h5>
                  <p class="font-weight-light">Dibuat oleh {{ kelas.mentor.nama }}</p>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="row justify-content-center">
              <div class="col-lg-9">
                <img src="@/assets/main.svg" width="314" class="img-fluid d-none d-sm-block" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="kelas-populer py-5 border-top">
      <div class="mt-5 container text-purple">
        <h1 class="pb-3 text-center">Kelas Populer</h1>
        <div class="row justify-content-center mt-5">
          <div class="col col-12 col-sm-5 col-md-12 col-lg-11">
            <div class="row justify-content-center">
              <div
                class="col-sm-6 col-md-6 col-lg-4 mb-4"
                v-for="kelas in populer"
                :key="kelas.index"
              >
                <Card
                  :image="kelas.image"
                  :nama="kelas.nama"
                  :menit="kelas.menit"
                  :materi="kelas.materi"
                  :level="kelas.level"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="kelas-populer py-5 border-top">
      <div class="mt-5 container text-purple">
        <h1 class="pb-3 text-center">Kelas Pilihan</h1>
        <div class="row justify-content-center mt-5">
          <div class="col col-12 col-md-12 col-lg-11">
            <div class="row justify-content-center">
              <div
                class="col-11 col-md-6 col-lg-4 mb-4"
                v-for="kelas in populer"
                :key="kelas.index"
              >
                <Card
                  :image="kelas.image"
                  :nama="kelas.nama"
                  :menit="kelas.menit"
                  :materi="kelas.materi"
                  :level="kelas.level"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="kenapa-kami py-5 bg-purple">
      <div class="container">
        <div class="mt-5 text-white">
          <div class="row">
            <div class="col-lg-6 col-sm-12 text-center">
              <h2>Benefit Belajar Bersama kami</h2>
              <p>Tingkatkan keahlian kodingmu</p>
              <div class="benefit row">
                <div class="col-4 mb-5" v-for="benefit in benefit" :key="benefit.index">
                  <img
                    :src="require('@/assets/icon/'+ benefit.icon +'.svg')"
                    class="text-dark"
                    alt
                    srcset
                  />

                  <p>{{benefit.isi}}</p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-sm-12">
              <div class="row justify-content-center">
                <div class="col-lg-6">
                  <img
                    src="@/assets/benefit.svg"
                    class="fluid-img d-none d-md-none d-lg-block"
                    height="451"
                    alt
                    srcset
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="keunggulan py-5 border-top">
      <div class="mt-5 container text-purple">
        <h1 class="pb-5 text-center">Keunggulan Belajar di Skill-Up</h1>
        <div class="row">
          <div class="col-lg-4 col-md-6" v-for="kelas in 9" :key="kelas.index">
            <div class="card-keunggulan shadow rounded mb-4">
              <div class="p-3 pt-4">
                <img src="@/assets/check.svg" class="float-left mr-3" alt srcset />
                <p style="width:340px">Kelas yang disediakan sudah paling terupdate untuk belajar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="ulasan-mereka py-5 border-top">
      <div class="container text-purple">
        <div class="mt-5 text-purple">
          <h1 class="text-merri pb-3 text-center">Ulasan Mereka</h1>
          <carousel
            class="mt-5"
            v-if="ulasanLoad"
            :margin="20"
            :dots="false"
            :nav="false"
            :autoplay="true"
            :responsive="{0:{items:1,nav:false,dots:true},600:{items:1,dots:true},800:{items:2,dots:true},1000:{items:3,dots:true}}"
          >
            <div
              class="card shadow-box card-carousel"
              style="min-width:300px"
              v-for="ulasan in ulasan"
              :key="ulasan.index"
            >
              <div class="card-body p-3" style="min-width:300px">
                <h6 class="line-height-1" style="min-height:70px">{{ulasan.pesan}}</h6>
                <hr />
                <h6 class="mb-0 line-height-1 text-600">{{ulasan.oleh}}</h6>
                <span class="text-gray-500">Tukang Bakso</span>
              </div>
            </div>
          </carousel>
        </div>
      </div>
    </section>
    <section class="cari-mentor py-5 border-top bg-purple">
      <div class="container">
        <div class="mt-5 container text-center">
          <h1 class="text-merri pb-3">Ingin Menjadi Mentor?</h1>
          <p>
            Diskusikan ide anda dan keahlian anda kepada kami, pasti kami sambut
            hangat
          </p>
          <img src="@/assets/mentor.svg" class="img-fluid" height="200" width="200" />
          <br />
          <a href class="btn btn-light font-weight-bold my-5">SAYA TERTARIK</a>
        </div>
      </div>
    </section>
    <Footer />
  </main>
</template>

<style>
.result-item {
  position: relative;
  z-index: 99;
}
</style>
<script>
import carousel from "v-owl-carousel";
import { Card, Footer, Navbar } from "@/components";
import { mapActions, mapState } from "vuex";
export default {
  name: "Home",
  components: { carousel, Footer, Navbar, Card },
  // data() {
  //   return {
  //     show: false,
  //     search: ""
  //   };
  // },
  methods: {
    ...mapActions(["loadUlasan", "loadKelas", "loadPopuler", "loadBenefit"])
  },
  created() {
    this.loadUlasan();
    this.loadKelas();
    this.loadPopuler();
    this.loadBenefit();
  },
  computed: {
    ...mapState(["populer", "ulasan", "ulasanLoad", "benefit"]),
    kelas: {
      get() {
        return this.$store.getters.allKelas.filter(post => {
          return post.nama
            .toLowerCase()
            .includes(this.$store.getters.getSearch.toLowerCase());
        });
      }
    },
    search: {
      get() {
        return this.$store.state.search;
      },
      set(value) {
        this.$store.commit("setSearch", value);
      }
    }
  }
};
</script>
