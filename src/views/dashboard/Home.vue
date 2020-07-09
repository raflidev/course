<template>
  <main>
    <div class="main-core d-none d-sm-block">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <h5 class="font-weight-600">Progress Belajar</h5>
            <p class="text-muted">ini adalah progress kelas yang kamu ikuti</p>
            <div class="item-kelas border rounded px-4" v-for="kocag in 4" :key="kocag.index">
              <p class="mb-2 font-weight-600">Fullstack Web Developer</p>
              <div class="progress mb-3">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style="width: 25%;"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >25%</div>
              </div>
              <a href class="btn mr-2 btn-sm btn-primary font-weight-600">LANJUTKAN BELAJAR</a>
              <a
                href
                class="btn btn-sm btn-outline-primary disabled font-weight-600"
              >CETAK SERTIFIKAT</a>
            </div>
          </div>
          <div class="offset-lg-1 col-lg-5">
            <h5 class="font-weight-600">Terakhir Dipelajari</h5>
            <p class="text-muted">Ayo Selesaikan kelasmu</p>
            <div
              class="item-kelas history border rounded px-4"
              v-for="kocag in 4"
              :key="kocag.index"
            >
              <p class="font-weight-600 mb-0">Membuat Form Login</p>
              <p class="text-muted mb-2">Fullstack Web Developer</p>
              <a href class="btn mr-2 btn-sm btn-primary px-4 font-weight-600">LANJUT</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="d-block d-sm-none bg-white py-4 main-core-mobile">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h4 class="mb-0">Progress Belajar</h4>
            <p class="text-muted">Berikut ini adalah daftar kelas yang anda ikuti</p>
            <div class="item-kelas">
              <div class="row">
                <div class="col-12">
                  <div style="float:left;width:300px">
                    <p class="title">Fullstack Web Developer</p>
                    <div class="progress progress-mobile my-2">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        style="width: 50%;"
                        aria-valuenow="100"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >50%</div>
                    </div>
                    <p class="text-muted">4 dari 10 materi telah selesai</p>
                    <a href class="btn mr-2 btn-sm btn-outline-secondary">LANJUTKAN</a>
                    <a href class="btn btn-sm btn-success disabled">CETAK SERTIFIKAT</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="item-kelas">
              <div class="row">
                <div class="col-12">
                  <div style="float:left;width:300px">
                    <p class="title">Fullstack Web Developer</p>
                    <div class="progress progress-mobile my-2">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        style="width: 50%;"
                        aria-valuenow="100"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >50%</div>
                    </div>
                    <p class="text-muted">4 dari 10 materi telah selesai</p>
                    <a href class="btn mr-2 btn-sm btn-outline-secondary">LANJUTKAN</a>
                    <a href class="btn btn-sm btn-success disabled">CETAK SERTIFIKAT</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="item-kelas">
              <div class="row">
                <div class="col-12">
                  <div style="float:left;width:300px">
                    <p class="title">Fullstack Web Developer</p>
                    <div class="progress progress-mobile my-2">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        style="width: 50%;"
                        aria-valuenow="100"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >50%</div>
                    </div>
                    <p class="text-muted">4 dari 10 materi telah selesai</p>
                    <a href class="btn mr-2 btn-sm btn-outline-secondary">LANJUTKAN</a>
                    <a href class="btn btn-sm btn-success disabled">CETAK SERTIFIKAT</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-12 border-top">
            <h4 class="title mt-4">Terakhir Dipelajari</h4>
            <p class="text-muted m-0">Ayo, selesaikan kelas</p>
          </div>
          <div class="col-lg-12 my-2">
            <div class="item-kelas">
              <div class="float-left" style="width: 240px;">
                <p class="title m-0">Membuat Form Login</p>
                <p class="text-muted mb-0">Fullstack Web Developer</p>
              </div>
              <a href="#" class="btn btn-sm btn-outline-secondary mt-3 ml-2">LANJUT</a>
            </div>
          </div>
          <div class="col-lg-12 my-2">
            <div class="item-kelas">
              <div class="float-left" style="width: 240px;">
                <p class="title m-0">Membuat Form Login</p>
                <p class="text-muted mb-0">Fullstack Web Developer</p>
              </div>
              <a href="#" class="btn btn-sm btn-outline-secondary mt-3 ml-2">LANJUT</a>
            </div>
          </div>
          <div class="col-lg-12 my-2">
            <div class="item-kelas">
              <div class="float-left" style="width: 240px;">
                <p class="title m-0">Membuat Form Login</p>
                <p class="text-muted mb-0">Fullstack Web Developer</p>
              </div>
              <a href="#" class="btn btn-sm btn-outline-secondary mt-3 ml-2">LANJUT</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style>
.progress {
  width: 100% !important;
}
</style>
