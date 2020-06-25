<template>
  <main>
    <section class="py-3 pb-5">
      <div class="container mt-5 text-center">
        <h1 class="text-merri pb-3">
          Alur Belajar
          <br />
          {{roadmap.nama}}
        </h1>
        <p class="font-weight-light">Pelajari dan tuntaskan kelas</p>
      </div>
    </section>
    <section class="py-3 bg-white text-purple">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-11">
            <div class="row justify-content-center">
              <div class="col-lg-9 my-2" v-for="(kelas,index) in roadmap.kelas" :key="kelas.index">
                <div class="card shadow-box">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-lg-5 mb-3">
                        <img
                          src="https://storage.googleapis.com/fastwork-static/082dcee4-19a9-477b-ae5c-f703558764f2.jpg"
                          class="img-fluid"
                        />
                      </div>
                      <div class="col-lg-7">
                        <h4>{{index + 1}}. {{kelas.nama}}</h4>
                        <div>
                          <span class="text-muted">{{kelas.episode}} Episode</span>
                          <span class="mx-2">·</span>
                          <span class="text-muted">{{kelas.menit}} Menit</span>
                          <span class="mx-2">·</span>
                          <span class="text-muted">{{kelas.level}}</span>
                        </div>
                        <button class="btn btn-primary my-3">BELAJAR</button>
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
      roadmap: null
    };
  },
  created() {
    axios
      .get("/api.json")
      .then(
        response =>
          (this.roadmap = response.data.roadmap[this.$route.params.id])
      );
  }
};
</script>

<style>
</style>