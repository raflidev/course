<template>
  <main>
    <section class="py-3 pb-5">
      <div class="container mt-5 text-center">
        <h1 class="text-merri pb-3">Kelas</h1>
        <p class="font-weight-light">Pelajari banyak teknologi di Skill-up</p>
        <div class="form-row justify-content-center py-4">
          <div class="col-lg-6 col-sm-12">
            <input type="text" class="form-control" placeholder="Cari kelas" v-model="search" />
          </div>
        </div>
      </div>
    </section>
    <section class="bg-white text-purple py-3">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-11 col-sm-12">
            <div class="row justify-content-center">
              <div class="col-lg-4 my-3" v-for="kelas in mencariKelas" :key="kelas.index">
                <div class="card shadow-box">
                  <a :href="'kelas/' + kelas.slug" class="stretched-link custom-card">
                    <div class="card-body">
                      <img v-bind:src="kelas.image" class="card-img-top" />

                      <h5 class="line-height-1 mb-0 mt-3 text-600">{{ kelas.nama }}</h5>
                      <h6>Rp {{ kelas.harga }}</h6>
                      <span>{{ kelas.episode }} Episode</span>
                      <span class="mx-2">·</span>
                      <span>{{ kelas.tingkat }}</span>
                      <hr />
                      <div class="row">
                        <div class="col-auto">
                          <div class="mr-2">
                            <img src="../assets/logo.png" width="50" height="50" />
                          </div>
                        </div>
                        <div class="col pl-2">
                          <h6 class="mb-0 line-height-1 text-600">{{ kelas.mentor.nama }}</h6>
                          <p class="text-gray-500">{{ kelas.mentor.skill }}</p>
                        </div>
                      </div>
                    </div>
                  </a>
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
import axios from "axios";
export default {
  data() {
    return {
      search: "",
      kelas: []
    };
  },
  mounted() {
    axios.get("/api.json").then(response => (this.kelas = response.data.kelas));
  },
  computed: {
    mencariKelas() {
      return this.kelas.filter(post => {
        return post.nama.toLowerCase().includes(this.search.toLowerCase());
      });
    }
  }
};
</script>

<style></style>
