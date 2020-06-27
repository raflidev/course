<template>
  <main>
    <div class="container">
      <input type="text" v-model="search" id />
      <p>Search : {{search}}</p>
      <ul>
        <li v-for="kelas in mencariKelas" :key="kelas.index">{{kelas.nama}}</li>
      </ul>
    </div>
  </main>
</template>

<script>
export default {
  computed: {
    search: {
      get() {
        return this.$store.state.search;
      },
      set(value) {
        this.$store.dispatch("mencariKelas", value);
      }
    },
    mencariKelas() {
      let a = this.$store.getters.getKelas;
      return a;
    }
  }
};
</script>

<style>
</style>