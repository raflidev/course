<template>
  <main class="bg-white text-purple" style="min-height:300px">
    <div class="container">
      <h1 class="text-merri py-3">Cart</h1>
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
            <tr v-for="(kelas, index) in cart" :key="kelas.index">
              <td>{{ index + 1 }}</td>
              <td>{{ kelas.nama }} - {{ kelas.mentor.nama }}</td>
              <td>Rp. {{ kelas.harga }}</td>
              <td>
                <button v-on:click="hapusKelas(index)" class="btn btn-danger">
                  hapus
                </button>
              </td>
            </tr>
            <tr v-show="cart.length > 0">
              <td colspan="3" class="text-right">Total Semua</td>
              <td class="font-weight-bold">
                Rp.{{ formatPrice(totalHarga()) }}
              </td>
            </tr>
          </table>
        </div>
        <div class="col-lg-3">
          <h4>Detail Pesanan</h4>

          <p class="mb-0 font-weight-bold">Nama Klien</p>
          Rafli Ramadhan
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      cart: [],
    };
  },
  mounted() {
    axios.get("/api.json").then((response) => (this.cart = response.data.cart));
  },
  methods: {
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
};
</script>

<style></style>
