<template>
  <main>
    <section class="py-3 pb-5">
      <div class="container mt-5 text-center">
        <h1 class="text-merri pb-3">{{mading.nama}}</h1>
        <h5>Rafli Ramadhan</h5>
      </div>
    </section>
    <section class="bg-white text-purple py-3">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-11">
            <div class="row justify-content-center">
              <div class="col-lg-8">
                <div class="card mb-4">
                  <div class="card-body">
                    <h4>{{mading.nama}}</h4>
                    <p class="text-muted">{{mading.waktu}}</p>
                    <p>{{mading.desc}}</p>
                    <p>
                      <span class="font-weight-bold">Link karya:</span>
                      <br />
                      <a :href="mading.link">{{mading.link}}</a>
                    </p>
                    <hr />
                    <div class="container">
                      <div class="row">
                        <div class="col-12">
                          <img src="@/assets/logo.png" class="float-left mr-4" width="50" />

                          <p class="float-left mb-0" href="/user/rafliram">Rafli Ramadhan</p>
                          <br />
                          <router-link to="/user/rafliram" class="btn-link">Lihat profil</router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      mading: []
    };
  },
  created() {
    axios
      .get("/api.json")
      .then(
        response => (this.mading = response.data.mading[this.$route.params.id])
      );
  }
};
</script>