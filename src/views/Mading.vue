<template>
  <main>
    <section class="py-3 pb-5">
      <div class="container mt-5 text-center">
        <h1 class="text-merri pb-3">Mading</h1>
        <p class="font-weight-light">Kumpulan karya member yang telah belajar di Skill-up</p>
        <div class="form-row justify-content-center">
          <div class="col-lg-6 col-sm-12">
            <input type="text" class="form-control" v-model="search" placeholder="Cari karya" />
          </div>
        </div>
      </div>
    </section>
    <section class="bg-white text-purple py-3">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-9">
            <div class="row justify-content-center">
              <div class="col-lg-6 my-3" v-for="mading in mading" :key="mading.index">
                <div class="card shadow-box">
                  <a :href="'mading/' + mading.slug" class="stretched-link custom-card">
                    <div class="card-body mading">
                      <h3 class="card-title line-height-1 mb-0 font-weight-600">{{ mading.nama }}</h3>
                      <p class="card-text">{{ mading.desc }}</p>
                      <span>@{{ mading.penulis }}</span>
                      <span class="mx-2">&middot;</span>
                      <span>{{ mading.waktu }}</span>
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
import { mapActions, mapState } from "vuex";
export default {
  computed: {
    ...mapState(["mading"]),
    mading: {
      get() {
        return this.$store.getters.getMading.filter(post => {
          return post.nama
            .toLowerCase()
            .includes(this.$store.getters.getSearch);
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
    ...mapActions(["loadMading"])
  },
  created() {
    this.loadMading();
  }
};
// import axios from "axios";
// export default {
//   data() {
//     return {
//       search: "",
//       mading: []
//     };
//   },
//   mounted() {
//     axios
//       .get("/api.json")
//       .then(response => (this.mading = response.data.mading));
//   },
//   computed: {
//     mencariMading() {
//       return this.mading.filter(post => {
//         return post.nama.toLowerCase().includes(this.search.toLowerCase());
//       });
//     }
//   }
// };
</script>
