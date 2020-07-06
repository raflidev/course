<template>
  <main class="bg-white text-purple" style="min-height:300px">
    <div class="container py-5">
      <!-- <h1 class="text-merri py-3">Keranjang</h1> -->
      <div class="row">
        <div class="col-lg-9">
          <p>Pilih metode pembayaran</p>

          <!-- <button class="btn btn-cart btn-primary mr-3">Pembayaran Otomatis</button> -->
          <!-- <button class="btn btn-cart btn-primary mr-3">Pembayaran Manual</button> -->

          <hr class="m-0 p-0" />
          <div class="row pt-3">
            <div class="col-lg-3 mb-4">
              <div class="border p-2 text-center">
                <img
                  src="https://avatars0.githubusercontent.com/u/1754174?s=280&v=4"
                  width="70"
                  class="img-fluid"
                />
                <p class>Midtrans</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div v-for="(kelas,index) in cart" :key="kelas.slug">
            <div class="row">
              <div class="col-8 pr-0">
                <p class="mb-0">Kelas online</p>
              </div>
              <div class="col-3 pr-0">
                <button @click="hapusKelas(index)" class="material-icons btn float-right p-0">close</button>
              </div>
            </div>
            <div class="row">
              <div class="col-7 pr-0">
                <p class="cart-nama-kelas">{{kelas.nama}}</p>
              </div>
              <div class="col-5">
                <p class="text-right cart-harga-kelas">Rp.{{kelas.harga}}</p>
              </div>
            </div>
          </div>
          <div class="input-group mb-3" v-show="formkupon">
            <input type="text" class="form-control" v-model="kupon" placeholder="Kode kupon" />
            <div class="input-group-append">
              <button class="input-group-text" @click="getkupon()">Pakai</button>
            </div>
          </div>
          <div class="row" v-show="!formkupon">
            <div class="col-9">
              Kupon anda
              <span class="font-weight-600">{{inikupon}}</span>
            </div>
            <div class="col-3">
              <button @click="hapuskupon()" class="material-icons btn float-right p-0">close</button>
            </div>
          </div>
          <p :class="classkupon" v-show="notifkupon">{{notifkupon}}</p>
          <div class="row">
            <div class="col-3 pr-0">
              <p class="font-weight-600">TOTAL</p>
            </div>
            <div class="col-8 pr-0">
              <p class="text-right harga font-weight-bold">Rp.{{ formatPrice(harga) }}</p>
            </div>
          </div>
          <div class="cart-metode">
            <p class="mb-0">Metode Pembayaran</p>
            <p class="font-weight-600">Midtrans</p>
          </div>
          <button
            v-show="this.$store.state.cart.length > 0"
            class="btn form-control btn-success font-weight-600"
          >Beli Sekarang</button>
          <hr />
          <!-- <h4 class="my-4">Detail Client</h4>
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
          </div>-->
        </div>
      </div>
    </div>
  </main>
</template>

<script>
// import { mapActions } from "vuex";
export default {
  data() {
    return {
      inikupon: "",
      harga: "",
      notifkupon: "",
      classkupon: "",
      formkupon: true
    };
  },
  computed: {
    cart: {
      get() {
        return this.$store.state.cart;
      }
    },
    listkupon: {
      get() {
        return this.$store.state.listkupon;
      }
    }
  },
  methods: {
    hapuskupon() {
      this.formkupon = true;
      this.inikupon = "";
      this.kupon = "";
      this.notifkupon = false;
      this.totalHarga();
    },
    // ...mapActions(["loadCart"]),
    hapusKelas(index) {
      this.cart.splice(index, 1);
      // console.log(index);
      this.getkupon();

      if (this.$store.state.cart.length == 0) {
        this.$swal.fire({
          icon: "warning",
          title: "Waduh...",
          text: "Keranjang anda masih kosong"
        });

        this.$router.push({ path: "/" });
      }
    },
    getkupon() {
      this.inikupon = this.kupon;
      this.listkupon.find(post => {
        if (post.kode == this.kupon) {
          if (post.kode.includes(this.kupon)) {
            post.then(
              (this.harga = this.harga - (this.harga * post.reward) / 100),
              (this.notifkupon = `anda dapat potongan ${post.reward}`),
              (this.classkupon = "mb-0 mt-1 text-success"),
              (this.formkupon = false),
              console.log(this.harga)
            );
          }
        } else {
          this.notifkupon = "kode kupon tidak tersedia";
          this.classkupon = "mb-0 mt-1 text-danger";
        }

        // new Promise(resolve => setTimeout(resolve, 1)).then(
        //   () =>
        // );

        // else if (!post.kode.includes(this.kupon)) {
        //   console.log(post.kode);

        //   this.totalHarga();
        //   this.notifkupon = "kode kupon tidak tersedia";
        //   this.classkupon = "mb-0 mt-1 text-danger";
        // }
        // } else {
        //   this.totalHarga();
        //   this.notifkupon = "kode kupon tidak tersedia";
        //   this.classkupon = "mb-0 mt-1 text-danger";
        // }
        // if (post.kode.includes(this.kupon)) {
        //   this.harga = this.harga - potong;
        //   const potong = (this.harga * post.reward) / 100;
        //   this.kupon.then(
        //     (this.notifkupon = "anda dapat potongan 10"),
        //     (this.classkupon = "mb-0 mt-1 text-success")
        //   );
        // } else {
        //   this.totalHarga();
        //   this.notifkupon = "kode kupon tidak tersedia";
        //   this.classkupon = "mb-0 mt-1 text-danger";
        // }
      });
      // this.listkupon.find(post => {

      // });
    },
    totalHarga() {
      let harga = 0;
      this.cart.forEach(function(item) {
        harga += item.harga;
      });
      return (this.harga = harga);
    },
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
  },
  created() {
    // this.loadCart();\
    this.totalHarga();
    if (this.$store.state.cart.length == 0) {
      this.$swal.fire({
        icon: "warning",
        title: "Waduh...",
        text: "Keranjang anda masih kosong"
      });

      this.$router.push({ path: "/" });
    }
  }
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

<style scoped>
.harga {
  font-size: 18px;
}
.cart-nama-kelas,
.cart-harga-kelas {
  font-size: 14px;
  font-weight: 600;
}
.cart-metode {
  font-size: 14px;
}
</style>
