<template>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <router-link class="navbar-brand" to="/">
      <img src="../assets/logo.png" active-class="active" width="60" height="60" alt />
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
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" to="/kelas">KELAS</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" to="/mading">MADING</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" to="/roadmap">ALUR BELAJAR</router-link>
        </li>
        <li class="nav-item">
          <span class="nav-divider"></span>
        </li>
        <li class="nav-item">
          <router-link class="nav-link btn btn-dark" active-class="active" to="/login">LOGIN</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
};
</script>