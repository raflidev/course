<template>
  <section id="app" class="bg-purple">
    <div class="container">
      <Navbar />
    </div>
    <router-view />
    <Footer />
  </section>
</template>

<script>
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "material-icons/iconfont/material-icons.css";
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    Footer,
    Navbar
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,700;1,400&family=Montserrat:wght@300;400;600;700&family=Red+Hat+Display:wght@400;500;700&display=swap");
body {
  color: #fff;
}
.active > .nav-link,
.navbar-nav .nav-link.active {
  color: #31de31 !important;
}
.bg-purple {
  background-color: #150e20 !important;
}
.text-purple {
  color: #150e20 !important;
}
#app {
  overflow-x: hidden;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  line-height: 30px;
}
.text-merri {
  /* font-family: "Merriweather", serif; */
  font-family: "Red Hat Display", sans-serif;
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
