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
        <h6>Progress Belajar</h6>
      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>
<style>
.main-core {
  background-color: #fff;
  margin-left: 300px;
  margin-right: auto;
  position: relative;
  padding: 50px 0;
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
</style>