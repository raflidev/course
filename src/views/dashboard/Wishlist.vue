<template>
  <main>
    <div class="main-core d-none bg-white py-4 d-sm-block">
      <div class="container">
        <h4>Wishlistku</h4>
        <p class="text-muted">Berikut ini adalah daftar wishlist anda</p>
        <div class="item-kelas border px-4" v-if="wishlist == ''">
          <p>Anda belum ada wishlist apapun</p>
        </div>
        <div class="row">
          <div class="col-lg-4" v-for="kelas in wishlist" :key="kelas.index">
            <div class="item-kelas">
              <img :src="kelas.image" class="img-fluid rounded mb-2" />
              <p class="font-weight-600 mb-0">{{kelas.nama}}</p>
              <p class="text-muted">{{kelas.mentor.nama}}</p>
              <div class="icon">
                <router-link :to="'/kelas/' + kelas.slug">
                  <span class="material-icons bg-dark text-white rounded-pill">play_arrow</span>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="d-block d-sm-none bg-white py-4 main-core-mobile">
      <div class="container">
        <h4>Wishlistku</h4>
        <p class="text-muted">Berikut ini adalah daftar wishlist anda</p>
        <div class="row">
          <div class="col-lg-12" v-for="kelas in wishlist" :key="kelas.index">
            <div class="item-kelas">
              <img :src="kelas.image" class="img-fluid rounded mb-2" />
              <p class="font-weight-600 mb-0">{{kelas.nama}}</p>
              <p class="text-muted">{{kelas.mentor.nama}}</p>
              <div class="icon">
                <router-link :to="'/kelas/' + kelas.slug">
                  <span class="material-icons bg-dark text-white rounded-pill">play_arrow</span>
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
export default {
  computed: {
    wishlist: {
      get() {
        return this.$store.getters.getWishlist;
      }
    }
  }
};
</script>

<style>
.item-kelas .icon {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 10%;
  left: 0;
  justify-content: center;
  display: flex;
  align-items: center;
  opacity: 0;
}
.item-kelas:hover img {
  opacity: 0.3;
}
.item-kelas:hover .icon {
  opacity: 1;
}
</style>