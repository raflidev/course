<template>
  <main>
    <div class="main-core d-none d-sm-block">
      <div class="container">
        <h4>Karya</h4>
        <p>Berikan karya terbaik anda, karya anda akan diletakan dimading</p>
        <div class="mt-4">
          <router-link to="karya/up" class="btn btn-primary font-weight-600">UPLOAD</router-link>
        </div>
        <h4 class="mt-5">Daftar Karyamu</h4>
        <div class="row">
          <div class="col-lg-3" v-for="kelas in madingku" :key="kelas.index">
            <div class="item-kelas border px-4">
              <!-- <img :src="kelas.image" class="img-fluid rounded mb-2" /> -->
              <p class="font-weight-600 mb-0">{{kelas.nama}}</p>
              <router-link
                :to="'/mading' + kelas.slug"
                class="btn btn-sm btn-primary text-center font-weight-600 form-control mt-3"
              >LIHAT</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      madingku: []
    };
  },
  computed: {
    ...mapState(["mading"]),
    user: {
      get() {
        return this.$store.state.user;
      }
    }
  },
  methods: {
    ...mapActions(["loadMading"]),
    cekmading() {
      this.$store.state.mading.find(post => {
        if (post.penulis.indexOf(this.user.username)) {
          this.madingku.push(post);
        }
      });
    }
  },
  mounted() {},
  created() {
    this.cekmading();
    this.loadMading();
  }
};
</script>

<style>
</style>