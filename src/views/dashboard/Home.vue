<template>
  <main>
    <div class="main-core d-none d-sm-block">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <h4>Progress Belajar</h4>
            <p class="text-muted">
              Berikut ini adalah progress belajar pada kelas
              <br />yang anda ikuti
            </p>
            <div class="item-kelas">
              <p class="title">Fullstack Web Developer</p>
              <div class="progress my-2">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style="width: 25%;"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >25%</div>
              </div>
              <p class="text-muted">4 dari 10 materi telah selesai</p>
              <a href class="btn mr-2 btn-sm btn-outline-secondary">LANJUTKAN BELAJAR</a>
              <a href class="btn btn-sm btn-success disabled">CETAK SERTIFIKAT</a>
            </div>
            <div class="item-kelas">
              <p class="title">HTML dan CSS Pemula</p>
              <div class="progress my-2">
                <div
                  class="progress-bar bg-success"
                  role="progressbar"
                  style="width: 100%;"
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >100%</div>
              </div>
              <p class="text-muted">8 dari 8 materi telah selesai</p>
              <a href class="btn mr-2 btn-sm btn-outline-secondary">LANJUTKAN BELAJAR</a>
            </div>
            <div class="item-kelas">
              <p class="title">Fullstack Javascript Developer</p>
              <div class="progress my-2">
                <div
                  class="progress-bar bg-success"
                  role="progressbar"
                  style="width: 100%;"
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >100%</div>
              </div>
              <p class="text-muted">15 dari 15 materi telah selesai</p>
              <a href class="btn mr-2 btn-sm btn-outline-secondary">LANJUTKAN BELAJAR</a>
              <a href class="btn btn-sm btn-success">CETAK SERTIFIKAT</a>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="item-kelas">
              <p class="title">Rekomendasi Kelas</p>
              <div class="row">
                <div class="col-lg-12 border-bottom">
                  <img
                    src="https://storage.googleapis.com/fastwork-static/082dcee4-19a9-477b-ae5c-f703558764f2.jpg"
                    width="140"
                    class="float-left mr-3 pt-5"
                  />
                  <div class="float-left">
                    <div class="badge badge-secondary mr-2">All Level</div>
                    <div class="badge badge-warning mr-2">PREMIUM</div>
                    <p class="title m-0">
                      <a
                        href="/kelas/fullstack-web-developer"
                        class="text-decoration-none text-purple"
                      >Fullstack Web Designer</a>
                    </p>

                    <p
                      class="text-muted"
                      style="width:300px"
                    >Pelajari desain website yang apik dari awal dari mulai mendesain sampai membuat kodingnya</p>
                  </div>
                  <a href="#" class="btn btn-secondary btn-sm form-control mb-3">KELAS LAINNYA</a>
                </div>
                <div class="col-lg-12">
                  <h4 class="title mt-4">Terakhir Dipelajari</h4>
                  <p class="text-muted m-0">Ayo, selesaikan kelas</p>
                </div>
                <div class="col-lg-12 my-2">
                  <div class="item-kelas">
                    <img
                      src="https://storage.googleapis.com/fastwork-static/082dcee4-19a9-477b-ae5c-f703558764f2.jpg"
                      width="140"
                      class="float-left mr-3"
                    />
                    <div class="float-left" style="width: 200px;">
                      <p class="title m-0">Membuat Form Login</p>
                      <p class="text-muted mb-0">Fullstack Web Developer</p>
                    </div>
                    <a href="#" class="btn btn-sm btn-outline-secondary mt-3 ml-2">LANJUT</a>
                  </div>
                </div>
                <div class="col-lg-12 my-2">
                  <div class="item-kelas">
                    <img
                      src="https://storage.googleapis.com/fastwork-static/082dcee4-19a9-477b-ae5c-f703558764f2.jpg"
                      width="140"
                      class="float-left mr-3"
                    />
                    <div class="float-left" style="width: 200px;">
                      <p class="title m-0">Tipe data</p>
                      <p class="text-muted mb-0">Python Pemula</p>
                    </div>
                    <a href="#" class="btn btn-sm btn-outline-secondary mt-3 ml-2">LANJUT</a>
                  </div>
                </div>
                <div class="col-lg-12 my-2">
                  <div class="item-kelas">
                    <img
                      src="https://storage.googleapis.com/fastwork-static/082dcee4-19a9-477b-ae5c-f703558764f2.jpg"
                      width="140"
                      class="float-left mr-3"
                    />
                    <div class="float-left" style="width: 200px;">
                      <p class="title m-0">Mendeploy Ke Heroku</p>
                      <p class="text-muted mb-0">Fullstack Javascript Developer</p>
                    </div>
                    <a href="#" class="btn btn-sm btn-outline-secondary mt-3 ml-2">LANJUT</a>
                  </div>
                </div>
              </div>
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
</style>