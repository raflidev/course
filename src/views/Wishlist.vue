<template>
  <main>
    <section class="py-3 pb-5">
      <div class="container mt-5 text-center">
        <h1 class="text-merri pb-3">Wishlist</h1>
        <p class="font-weight-light">Daftar kelas keinginanmu ada disini.</p>
      </div>
    </section>
    <section class="bg-white text-purple py-3">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-11 col-sm-12">
            <div class="row justify-content-center">
              <div
                class="col-lg-4 my-3"
                v-for="kelas in wishlist"
                :key="kelas.index"
              >
                <div class="card shadow-box">
                  <div class="card-body">
                    <img v-bind:src="kelas.image" class="card-img-top" />

                    <h5 class="line-height-1 mb-0 mt-3 text-600">
                      {{ kelas.nama }}
                    </h5>
                    <h6>Rp {{ kelas.harga }}</h6>
                    <span>{{ kelas.episode }} Episode</span>
                    <span class="mx-2">·</span>
                    <span>{{ kelas.tingkat }}</span>
                    <hr />
                    <button class="btn btn-dark form-control text-uppercase">
                      masukan keranjang
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <nav class="text-center">
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">1</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">2</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">3</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  </main>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: mapState(["wishlist"]),
  created() {
    this.$store.dispatch("loadWishlist");
  },
  // methods: {
  //   addCart(kelas) {
  //     this.cart.push(kelas);
  //     console.log(this.cart);
  //   },
  // },
};
</script>

<style></style>
