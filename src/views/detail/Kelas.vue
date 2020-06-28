<template>
  <main>
    <section class="py-3 pb-5">
      <div class="container mt-5 text-center">
        <h1 class="text-merri pb-3">{{ kelasDetail.nama }}</h1>
        <h5 class="text-muted">Dibuat oleh {{ kelasDetail.mentor.nama }}</h5>
        <a href="#beli" class="btn btn-outline-purple mt-3">BELI KELAS</a>
      </div>
    </section>
    <section class="bg-white text-purple py-3">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <div class="row">
              <div class="col-lg-12">
                <div class="card">
                  <div class="card-body">
                    <div class="embed-responsive embed-responsive-16by9">
                      <iframe
                        id="youtube-5481"
                        frameborder="0"
                        allowfullscreen="1"
                        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                        title="Player for 3  HTML Add Images"
                        width="875"
                        height="410"
                        src="https://www.youtube.com/embed/CKeFLCdOaX4?autoplay=0&amp;controls=0&amp;disablekb=1&amp;playsinline=1"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row py-5">
              <div class="col-lg-8">
                <h4 class="text-merri font-weight-bold">Tentang kelas</h4>
                <div class="mt-3">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolores nihil iusto impedit nam, id odit enim! Rerum,
                    aliquam nulla. Cumque, similique voluptatum dolorum adipisci
                    qui dolorem id sit delectus provident optio.
                  </p>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Totam quaerat tempora quae culpa accusantium voluptatum.
                    Quae harum quidem eaque totam ipsam quibusdam consectetur?
                    Temporibus porro, suscipit, quidem eaque consequatur dolorum
                    nulla vero ipsa dignissimos molestias ad voluptas atque, eum
                    veniam error.
                  </p>
                </div>
                <div class="my-5">
                  <h4 class="text-merri font-weight-bold">Materi kelas</h4>
                  <span class="text-muted">materi yang akan kamu pelajari</span>
                  <div class="overflow-auto" height="300">
                    <div
                      class="card mt-3"
                      id="accordionExample"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <div>
                        <div class="card-header shadow-box" id="headingOne">
                          <div>
                            Basic
                            <i class="accord-icon material-icons mt-1">keyboard_arrow_down</i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="collapseOne"
                      class="collapse show"
                      aria-labelledby="headingOne"
                      data-parent="#accordionExample"
                    >
                      <div class="card-body">
                        <div class="card my-2">
                          <div class="card-header shadow-box">
                            Instalasi Tools
                            <i class="accord-icon-item material-icons pr-2">lock</i>
                          </div>
                        </div>
                        <div class="card my-2">
                          <div class="card-header shadow-box">
                            Konfigurasi
                            <i class="accord-icon-item material-icons pr-2">lock</i>
                          </div>
                        </div>
                        <div class="card my-2">
                          <div class="card-header shadow-box">
                            Assets
                            <i class="accord-icon-item material-icons pr-2">lock</i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="card mt-3"
                      id="accordionExample"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="true"
                      aria-controls="collapseTwo"
                    >
                      <div>
                        <div class="card-header shadow-box" id="headingTwo">
                          <div>
                            HTML Basic
                            <i class="accord-icon material-icons mt-1">keyboard_arrow_down</i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="collapseTwo"
                      class="collapse"
                      aria-labelledby="headingTwo"
                      data-parent="#accordionExample"
                    >
                      <div class="card-body">
                        <div class="card my-2">
                          <div class="card-header shadow-box">
                            Add Table
                            <i class="accord-icon-item material-icons pr-2">lock</i>
                          </div>
                        </div>
                        <div class="card my-2">
                          <div class="card-header shadow-box">
                            Add Image
                            <i class="accord-icon-item material-icons pr-2">lock</i>
                          </div>
                        </div>
                        <div class="card my-2">
                          <div class="card-header shadow-box">
                            Form
                            <i class="accord-icon-item material-icons pr-2">lock</i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
        </div>
      </div>
    </section>
    <section class="bg-purple text-purple my-4" id="beli">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-4">
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
                    <p class="fitur">Source Code</p>
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
export default {
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
.accord-icon {
  float: right;
}
.accord-icon-item {
  float: left;
}
.accord-materi {
  float: right;
}
.item-fitur {
  width: 100%;
  overflow: hidden;
}
.item-fitur .fitur {
  float: left;
}
.item-fitur .icon {
  float: right;
}
</style>
