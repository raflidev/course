<template>
  <main>
    <div class="container">
      <input type="text" v-model="search" />
      <p>Search : {{ $store.state.search }}</p>
      <ul>
        <li v-for="kelas in getSearchKelas" :key="kelas.index">{{ kelas.nama }}</li>
      </ul>
    </div>
  </main>
</template>

<script>
import { mapActions } from "vuex";
export default {
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

<style></style>
