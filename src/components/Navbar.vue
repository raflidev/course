<template>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <router-link class="navbar-brand" to="/">
      <img
        src="../assets/logo.png"
        active-class="active"
        width="60"
        height="60"
        alt
      />
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
          <router-link class="nav-link" active-class="active" to="/kelas"
            >KELAS</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" to="/mading"
            >MADING</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" to="/roadmap"
            >ALUR BELAJAR</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" to="/wishlist">
            <span class="material-icons">favorite_border</span>
            <span class="badge badge-notify">{{ wishlist.length }}</span>
            <span class="d-sm-none">WISHLIST</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" to="/cart">
            <span class="material-icons">shopping_cart</span>
            <span class="badge badge-notify">{{ cart.length }}</span>
            <span class="d-sm-none">CART</span>
          </router-link>
        </li>
        <li class="nav-item">
          <span class="nav-divider"></span>
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link btn btn-dark"
            active-class="active"
            to="/login"
            >LOGIN</router-link
          >
          <!-- <router-link
            v-show="login == true"
            class="nav-link btn btn-link text-uppercase"
            active-class="active"
            to="/dashboard"
          >
            <img src="@/assets/logo.png" width="30" class="mr-3" />
            hi, Rafli
          </router-link>-->
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: mapState(["cart", "wishlist"]),
  methods: mapActions(["loadCart", "loadWishlist"]),
  created() {
    this.loadCart();
    this.loadWishlist();
  },
};
// import axios from "axios";
// export default {
//   name: "Navbar",
//   data() {
//     return {
//       login: true,
//       countWishlist: null,
//       countCard: []
//     };
//   },
//   mounted() {
//     axios
//       .get("/api.json")
//       .then(
//         response => (
//           (this.countWishlist = response.data.wishlist.length),
//           (this.countCard = response.data.cart)
//         )
//       );
//   }
// };
</script>

<style>
.badge-notify {
  color: white;
  background: red;
  position: relative;
  top: -20px;
  left: -35px;
}
</style>
