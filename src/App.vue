<template>
  <section id="app" class="bg-purple">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-dark">
        <a class="navbar-brand" href="#">
          <img src="./assets/logo.png" width="60" height="60" alt="" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">KELAS</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">MADING</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">ALUR BELAJAR</a>
            </li>
            <li class="nav-item">
              <span class="nav-divider"></span>
            </li>
            <li class="nav-item">
              <a class="nav-link btn btn-dark" href="#">LOGIN</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <Home />
  </section>
</template>

<script>
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/Home.vue";

export default {
  name: "App",
  components: {
    Home,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,700;1,400&family=Montserrat:wght@300;400;600;700&display=swap");
body {
  color: #fff;
}
.active > .nav-link {
  color: #31de31 !important;
}
.bg-purple {
  background-color: #150e20 !important;
}
.text-purple {
  color: #150e20 !important;
}
#app {
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  line-height: 30px;
}
.text-merri {
  font-family: "Merriweather", serif;
}
.navbar {
  padding-top: 30px;
  padding-right: 1rem;
  padding-bottom: 30px;
  padding-left: 1rem;
}
.navbar-nav .nav-divider {
  width: 1px;
  height: calc(100% - 8px);
  display: inline-block;
  margin: 4px 1.25rem;
}
.navbar-dark .navbar-nav .nav-divider {
  background-color: #282646;
}
.navbar-expand-lg .navbar-nav .nav-link {
  padding-right: 1.25rem;
  padding-left: 1.25rem;
}
.font-weight-light {
  font-weight: 300;
}
.btn-outline-purple {
  color: #fff;
  border-color: #fff;
}
.btn-outline-purple:hover {
  color: #fff;
  background-color: #491d8c;
  border-color: #491d8c;
}
.text-gray-500 {
  color: #a8a8a8 !important;
}
.text-600 {
  font-weight: 600;
}
.line-height-1 {
  line-height: 1.5;
}
</style>
