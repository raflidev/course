<template>
  <main class="bg-white text-purple" style="min-height:300px">
    <div class="container">
      <h1 class="text-merri py-3">Keranjang</h1>
      <div class="row">
        <div class="col-lg-9">
          <table class="table table-striped table-responsive">
            <tr>
              <th>No</th>
              <th>Kelas</th>
              <th>Harga</th>
              <th>Aksi</th>
            </tr>
            <tr v-if="cart.length == 0">
              <td colspan="4" class="text-center">tidak ada pesanan</td>
            </tr>
            <tr v-for="(kelas, index) in cart" :key="kelas.slug">
              <td>{{ index + 1 }}</td>
              <td>{{ kelas.nama }} - {{ kelas.mentor.nama }}</td>
              <td>Rp. {{ kelas.harga }}</td>
              <td>
                <button class="btn btn-danger" @click="hapusKelas(kelas.slug)">
                  Hapus
                </button>
              </td>
            </tr>
            <tr v-show="cart.length > 0">
              <td colspan="3" class="text-right">Total Semua</td>
              <td class="font-weight-bold">
                Rp.{{ formatPrice(totalHarga()) }}
              </td>
            </tr>
            <tr>
              <td colspan="4" class="text-right" v-show="cart.length > 0">
                <button class="btn btn-lg btn-success">Beli Sekarang</button>
              </td>
            </tr>
          </table>
        </div>
        <div class="col-lg-3">
          <h4 class="mb-4">Detail Client</h4>
          <div class="pb-2">
            <p class="mb-0 font-weight-bold">Nama Lengkap</p>
            <span>Rafli Ramadhan</span>
          </div>
          <div class="pb-2">
            <p class="mb-0 font-weight-bold">Username</p>
            <span>@rafliram</span>
          </div>
          <div class="pb-2">
            <p class="mb-0 font-weight-bold">Email</p>
            <span>rafliramdhn@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
// import { mapActions } from "vuex";
export default {
  computed: {
    cart: {
      get() {
        return this.$store.state.cart;
      },
    },
  },
  methods: {
    // ...mapActions(["loadCart"]),
    hapusKelas(index) {
      this.cart.splice(index, 1);
      console.log(this.cart);
    },
    totalHarga() {
      let harga = 0;
      this.cart.forEach(function(item) {
        harga += item.harga;
      });
      return harga;
    },
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
  },
  created() {
    // this.loadCart();
  },
};
// import axios from "axios";
// export default {
//   data() {
//     return {
//       cart: []
//     };
//   },
//   mounted() {
//     axios.get("/api.json").then(response => (this.cart = response.data.cart));
//   },
//   methods: {
//     hapusKelas(index) {
//       this.cart.splice(index, 1);
//       console.log(this.cart);
//     },
//     totalHarga() {
//       let harga = 0;
//       this.cart.forEach(function(item) {
//         harga += item.harga;
//       });
//       return harga;
//     },
//     formatPrice(value) {
//       let val = (value / 1).toFixed(2).replace(".", ",");
//       return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
//     }
//   }
// };
</script>

<style></style>
