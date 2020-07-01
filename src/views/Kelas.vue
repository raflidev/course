<template>
  <main>
    <section class="py-3 pb-5">
      <div class="container mt-5 text-center">
        <h1 class="text-merri pb-3">Kelas</h1>
        <p class="font-weight-light">Pelajari banyak teknologi di Skill-up</p>
        <div class="form-row justify-content-center pt-2 pb-4">
          <div class="col-lg-6 col-sm-12">
            <input type="text" class="form-control" v-model="search" placeholder="Cari kelas" />
          </div>
        </div>
      </div>
    </section>
    <section class="bg-white text-purple py-3">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-11 col-sm-12">
            <div class="row justify-content-center">
              <div class="col-lg-4 my-3" v-for="kelas in getSearchKelas" :key="kelas.index">
                <Card
                  :image="kelas.image"
                  :nama="kelas.nama"
                  :menit="kelas.menit"
                  :materi="kelas.episode"
                  :level="kelas.tingkat"
                  :link="kelas.slug"
                />
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
import { Card } from "@/components";
import { mapActions } from "vuex";
export default {
  components: { Card },
  computed: {
    getSearchKelas: {
      get() {
        return this.$store.getters.allKelas.filter(post => {
          return post.nama
            .toLowerCase()
            .includes(this.$store.getters.getSearch.toLowerCase());
        });
      }
    },
    search: {
      get() {
        return this.$store.state.search;
      },
      set(value) {
        this.$store.commit("setSearch", value);
      }
    }
  },
  methods: {
    ...mapActions(["loadKelas"])
  },
  created() {
    this.loadKelas();
  }
};
</script>
