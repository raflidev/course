<template>
  <main>
    <section class="py-3 pb-5">
      <div class="container mt-5 text-center">
        <h1 class="text-merri pb-3">Roadmap</h1>
        <p class="font-weight-light">Tuntunan cara kamu belajar paling efektif</p>
      </div>
    </section>
    <section class="bg-white text-purple py-3 roadmap">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-11" v-for="(roadmap,index) in roadmap" :key="roadmap.index">
            <div class="row justify-content-center">
              <div class="col-lg-6 my-3">
                <div class="card shadow-box">
                  <a :href="'roadmap/' +index " class="stretched-link custom-card">
                    <div class="card-body">
                      <div class="row">
                        <div class="col-lg-6">
                          <img
                            src="https://buildwithangga.com//storage/assets/images/thumbnail%20kelas%20react%20web%20front%20end%20developer%20buildwith%20angga.png"
                            class="card-img-top"
                          />
                        </div>
                        <div class="col-lg-6">
                          <h5 class="card-title line-height-1 mb-0 text-600 pt-2">{{roadmap.nama}}</h5>
                          <div class="card-text">
                            <span>{{roadmap.level}}</span>
                            <span class="mx-2">·</span>
                            <span>{{roadmap.kelas.length}} Kelas</span>
                          </div>
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
      roadmap: null
    };
  },
  created() {
    axios
      .get("/api.json")
      .then(response => (this.roadmap = response.data.roadmap));
  }
};
</script>