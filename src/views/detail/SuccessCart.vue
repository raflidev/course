<template>
  <div class="bg-white text-purple">
    <div class="row">
      <div class="col-md-12">
        <div class="d-flex justify-content-md-center align-items-center vh-100">
          <img
            src="@/assets/success.svg"
            width="200"
            style="position:absolute;top: 40%;left: 50%;transform: translate(-50%, -50%);"
          />
          <div style="z-index:99;margin-top:50px" class="text-center container">
            <h1 class="font-weight-600 mb-5 text-redhat">Berhasil Masuk Keranjang</h1>
            <router-link to="/kelas" class="success btn btn-lightpurple mr-3">BELI LAGI</router-link>
            <router-link to="/cart" class="success btn btn-outline-lightpurple">BAYAR SEKARANG</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
