<template>
  <main class="dashboard">
    <aside class="sidebar">
      <div class="card py-5">
        <div class="card-body text-center">
          <img src="@/assets/logo.png" width="100" class="img-fluid pb-4" />
          <h5>Rafli Ramadhan</h5>
          <p>Web Developer</p>
        </div>
        <div class="menu">
          <div class="list-menu-header">Progress Belajarku</div>
          <a href="http://">Kelasku</a>
          <a href="http://">Karyaku</a>
          <a href="http://">Semua Kelas</a>
        </div>
        <div class="menu">
          <div class="list-menu-header">Pengaturan Akun</div>
          <a href="http://">Edit Profil</a>
          <a href="http://">Logout</a>
        </div>
      </div>
    </aside>
    <div class="main-core">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <h4>Progress Belajar</h4>
            <p class="text-muted">Berikut ini adalah daftar kelas yang anda ikuti</p>
            <div class="item-kelas">
              <p class="title">Fullstack Web Development</p>
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
              <p class="title">Fullstack Javascript Developement</p>
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
                    width="100"
                    class="float-left"
                  />
                  <div class="float-left">
                    <div class="badge badge-secondary mr-2">All Level</div>
                    <div class="badge badge-warning mr-2">PREMIUM</div>
                    <p class="title m-0">Fullstack Web Designer</p>

                    <p
                      class="text-muted"
                      style="width:320px"
                    >Pelajari desain website yang apik dari awal dari mulai mendesain sampai membuat kodingnya</p>
                  </div>
                </div>
              </div>
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
div.progress {
  width: 350px;
}
.item-kelas {
  padding: 15px 0;
}
.main-core {
  background-color: #fff;
  margin-left: 300px;
  margin-right: auto;
  position: relative;
  padding: 50px 0;
}
.main-core .container {
  padding: 0 50px;
}
main.dashboard {
  color: #150e20;
}
.menu {
  margin-top: 60px;
  padding-left: 40px;
}
.menu .list-menu-header {
  font-family: "Red Hat Display", sans-serif;
  font-weight: 500;
  padding-bottom: 10px;
  font-size: 18px;
}
.menu a {
  font-weight: 400;
  display: block;
  padding: 5px 0;
  font-size: 15px;
  color: #150e20;
}

.menu a:hover {
  text-decoration: underline;
}
p.title {
  font-weight: 500;
}
</style>