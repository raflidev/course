<template>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <router-link class="navbar-brand" to="/">
      <!-- <img src="../assets/logo.png" active-class="active" width="60" height="60" alt /> -->
      <h4>Skill-Up></h4>
    </router-link>
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
      <ul class="navbar-nav ml-5">
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" to="/kelas">KELAS</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" to="/mading">MADING</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" to="/roadmap">ALUR BELAJAR</router-link>
        </li>
        <!-- <li class="nav-item">
          <router-link class="nav-link" active-class="active" to="/wishlist">
            <span class="material-icons">favorite_border</span>
            <span class="badge badge-notify">{{ wishlist.length }}</span>
            <span class="d-sm-none d-md-none">WISHLIST</span>
          </router-link>
        </li>-->
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" to="/cart">
            <span class="material-icons">shopping_cart</span>
            <span class="badge badge-notify">{{ cart.length }}</span>
            <span class="d-sm-none d-md-none">CART</span>
          </router-link>
        </li>
        <li class="nav-item login-nav">
          <router-link
            v-show="!login"
            class="nav-link btn btn-dark login"
            active-class="active"
            to="/login"
          >LOGIN</router-link>
          <router-link
            v-show="login"
            class="nav-link btn btn-link text-uppercase text-left"
            active-class="active"
            to="/dashboard"
          >
            <img src="@/assets/logo.png" width="30" class="mr-3" />
            hi, {{user.nama}}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["cart", "wishlist", "user", "login", "mading"])
  }
};
</script>

<style>
.badge-notify {
  color: white;
  background: red;
  position: relative;
  top: -20px;
  left: -35px;
}

/* .login-nav {
  flex: 1;
  margin: auto !important;
  display: flex;
  justify-content: space-between;
} */
</style>
