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
          <router-link active-class="active" to="/dashboard/user">Edit Profil</router-link>
          <router-link
            class="mt-3 font-weight-light text-decoration-none float-left text-white"
            to="/"
          >Logout</router-link>
        </div>
      </div>
    </aside>

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
            <router-link
              class="mt-3 font-weight-light text-decoration-none float-left text-white"
              to="/"
            >Logout</router-link>
            <!-- <a href class="mt-3 font-weight-light text-decoration-none float-left text-white">Logout</a> -->
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>
    <div class="d-block fixed-bottom d-sm-none pt-2 py-2 bg-purple">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-10">
            <div class="row">
              <div class="col-4">
                <router-link active-class="active" class="text-white" to="/dashboard/progress">
                  <div class="item-menu text-center">
                    <p class="mb-0 icon">
                      <i class="material-icons">assessment</i>
                    </p>
                    <p class="mb-0 mt-0">Progress</p>
                  </div>
                </router-link>
              </div>
              <div class="col-4">
                <router-link active-class="active" class="text-white" to="/dashboard/kelas">
                  <div class="item-menu text-center">
                    <p class="mb-0 icon">
                      <i class="material-icons">school</i>
                    </p>
                    <p class="mb-0 mt-0">Kelas</p>
                  </div>
                </router-link>
              </div>
              <div class="col-4">
                <router-link active-class="active" class="text-white" to="/dashboard/user">
                  <div class="item-menu text-center">
                    <p class="mb-0 icon">
                      <i class="material-icons">face</i>
                    </p>
                    <p class="mb-0 mt-0">Edit Profil</p>
                  </div>
                </router-link>
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
.sidebar .card {
  color: #fff;
  background-color: #150e20 !important;
}
a.active {
  color: #31de31 !important;
}
/* .item-menu {
  color: #fff;
} */
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
  color: #fff;
}

.menu a:hover {
  text-decoration: underline;
}
p.title {
  font-weight: 500;
}
</style>