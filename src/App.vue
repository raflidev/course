<template>
  <section id="app" class="bg-purple">
    <div class="container">
      <Navbar :class="$route.meta.class" v-if="!$route.meta.hideNavigation " />
    </div>
    <router-view />
    <Footer v-if="!$route.meta.hideNavigation" />
  </section>
</template>

<script>
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "material-icons/iconfont/material-icons.css";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "@/assets/css/style.css";
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
