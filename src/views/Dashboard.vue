<template>
  <main class="dashboard">
    <aside class="sidebar d-none d-sm-block">
      <div class="card py-5">
        <div class="card-body text-center">
          <img src="@/assets/logo.png" width="100" class="img-fluid pb-4" />
          <h5>Rafli Ramadhan</h5>
          <p>Web Developer</p>
        </div>
        <div class="menu">
          <div class="list-menu-header">Progress Belajarku</div>
          <router-link active-class="active" to="/dashboard/progress">Kelasku</router-link>

          <router-link active-class="active" to="/dashboard/karya">Karyaku</router-link>

          <router-link active-class="active" to="/dashboard/kelas">Semua Kelas</router-link>
        </div>
        <div class="menu">
          <div class="list-menu-header">Pengaturan Akun</div>
          <a href="http://">Edit Profil</a>
          <a href="http://">Logout</a>
        </div>
      </div>
    </aside>
    <div class="main-core d-none d-sm-block">
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
    <!-- mobile layout -->
    <div class="header-mobile d-block d-sm-none">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <img src="@/assets/logo.png" width="60" class="float-left mr-3" />
            <div class="user-name">
              <p class="mb-0">Rafli Ramadhan</p>
              <p class="font-weight-light">Web Developer</p>
            </div>
            <a href class="mt-3 font-weight-light text-decoration-none float-left text-white">Logout</a>
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
    <div class="d-block fixed-bottom d-sm-none pt-2 py-2 bg-purple">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-10">
            <div class="row">
              <div class="col-4">
                <a href>
                  <div class="item-menu text-center">
                    <p class="mb-0 icon">
                      <i class="material-icons">assessment</i>
                    </p>
                    <p class="mb-0 mt-0">Progress</p>
                  </div>
                </a>
              </div>
              <div class="col-4">
                <a href>
                  <div class="item-menu text-center">
                    <p class="mb-0 icon">
                      <i class="material-icons">assessment</i>
                    </p>
                    <p class="mb-0 mt-0">Progress</p>
                  </div>
                </a>
              </div>
              <div class="col-4">
                <a href>
                  <div class="item-menu text-center">
                    <p class="mb-0 icon">
                      <i class="material-icons">assessment</i>
                    </p>
                    <p class="mb-0 mt-0">Progress</p>
                  </div>
                </a>
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
a.active {
  color: #218221 !important;
}
.main-core-mobile {
  padding-bottom: 80px !important;
}
.progress-mobile {
  width: 300px !important;
}
.header-mobile {
  color: #fff;
  padding: 15px;
}
.user-name {
  margin: 0;
  float: left;
  width: 160px;
}
.user-name .font-weight-light {
  font-size: 14px;
}
.item-menu {
  font-size: 12px;
}
.item-menu p {
  margin-top: 0 !important;
}
.item-menu p.icon {
  padding: 0;
  height: 24px;
}
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