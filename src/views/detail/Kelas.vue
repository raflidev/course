<template>
  <main>
    <section class="deskripsi-kelas py-3 pb-5">
      <div class="container mt-5 text-left">
        <h2 class="font-weight-bold pb-3">{{ kelasDetail.nama }}</h2>
        <p>{{kelasDetail.desc}}</p>
        <a href="#materi" class="btn btn-outline-primary mt-3 mr-3">LIHAT MATERI</a>
        <a href="#beli" class="btn btn-primary mt-3">IKUTI KELAS</a>
      </div>
    </section>
    <section class="bg-white text-purple py-3" id="materi">
      <div class="container">
        <div class="row py-5">
          <div class="col-lg-8 video pb-5">
            <div class="materi-list">
              <ul class="list-group">
                <router-link
                  :to="kelasDetail.slug +'/episode/'+ kelas.slug"
                  class="list-group-item list-group-item-action"
                  v-for="(kelas, index) in kelasDetail.materi"
                  :key="kelas.index"
                >
                  <img src="@/assets/icon/play.svg" class="image pt-2 mr-3 float-left" alt srcset />
                  <p class="title mb-0">{{kelas.judul}}</p>
                  <div class="materi-desc text-gray-500">04:20 &middot; Episode {{index + 1}}</div>
                </router-link>
              </ul>
            </div>
          </div>
          <div class="col-lg-4">
            <h4 class="text-merri font-weight-bold">Persyaratan</h4>
            <h5 class="m-0">Perangkat Lunak</h5>
            <div class="mt-2">
              <a href="http://google.com" target="_blank">
                <img src="@/assets/logo.png" class="m-2" width="50" />
              </a>
              <a href="http://google.com" target="_blank">
                <img src="@/assets/logo.png" class="m-2" width="50" />
              </a>
              <a href="http://google.com" target="_blank">
                <img src="@/assets/logo.png" class="m-2" width="50" />
              </a>
              <a href="http://google.com" target="_blank">
                <img src="@/assets/logo.png" class="m-2" width="50" />
              </a>
              <a href="http://google.com" target="_blank">
                <img src="@/assets/logo.png" class="m-2" width="50" />
              </a>
              <a href="http://google.com" target="_blank">
                <img src="@/assets/logo.png" class="m-2" width="50" />
              </a>
            </div>
            <hr />
            <h5 class="m-0">Sistem Operasi</h5>
            <p>Windows, Linux, Mac OS</p>
            <h5 class="m-0">Ram</h5>
            <p>4 GB</p>
            <h5 class="m-0">Penyimpanan Kosong</h5>
            <p>5 GB</p>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-white text-purple py-5 border-top" id="mentor">
      <div class="row justify-content-center">
        <div class="col-lg-5 text-center">
          <h3 class="font-weight-bold mb-4">Dimentori Langsung Oleh</h3>
          <img class="rounded-circle" src="@/assets/profil/test.svg" width="200" />
          <h4 class="font-weight-600 mb-0 mt-4">{{kelasDetail.mentor.nama}}</h4>
          <p>{{kelasDetail.mentor.skill}}</p>
        </div>
      </div>
    </section>
    <BenefitSection />
    <KeunggulanSection />

    <section class="bg-purple text-purple my-4" id="beli">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-4 col-md-6">
            <div class="card p-3 my-3">
              <div class="card-body">
                <div class="text-center">
                  <span>Fullstack Web Developer</span>
                  <h1>Rp. 360.000</h1>
                </div>
                <hr />
                <div>
                  <div class="item-fitur">
                    <p class="fitur">Akses Kelas Selamanya</p>
                    <p class="icon">
                      <i class="material-icons">check_circle</i>
                    </p>
                  </div>
                  <div class="item-fitur">
                    <p class="fitur">Konsultasi Kapanpun</p>
                    <p class="icon">
                      <i class="material-icons">check_circle</i>
                    </p>
                  </div>
                  <div class="item-fitur">
                    <p class="fitur">Materi Update</p>
                    <p class="icon">
                      <i class="material-icons">check_circle</i>
                    </p>
                  </div>
                  <div class="item-fitur">
                    <p class="fitur">Source File Praktek</p>
                    <p class="icon">
                      <i class="material-icons">check_circle</i>
                    </p>
                  </div>
                  <div class="item-fitur">
                    <p class="fitur">Sertifikat Kelulusan</p>
                    <p class="icon">
                      <i class="material-icons">check_circle</i>
                    </p>
                  </div>
                </div>
                <hr />
                <button class="btn btn-primary form-control">BELI SEKARANG</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { BenefitSection, KeunggulanSection } from "@/components";
export default {
  components: { BenefitSection, KeunggulanSection },
  computed: {
    ...mapState(["kelas"]),
    kelasDetail: {
      get() {
        return this.$store.getters.allKelas.find(post => {
          return post.slug == this.$route.params.slug;
        });
      }
    }
  },
  methods: {
    ...mapActions(["loadKelas"])
  },
  mounted() {},
  created() {
    this.loadKelas();
  }
};
</script>

<style>
</style>
