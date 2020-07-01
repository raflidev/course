<template>
  <section class="keunggulan py-5 border-top">
    <div class="mt-5 container text-purple">
      <h1 class="pb-5 text-center">Keunggulan Belajar di Skill-Up</h1>
      <div class="row">
        <div class="col-lg-4 col-md-6" v-for="unggul in keunggulan" :key="unggul.index">
          <Unggul :desc="unggul.isi" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Unggul } from "@/components";
import { mapActions, mapState } from "vuex";
export default {
  name: "KeunggulanSection",
  components: { Unggul },
  methods: {
    ...mapActions(["loadKeunggulan"])
  },
  created() {
    this.loadKeunggulan();
  },
  computed: {
    ...mapState(["keunggulan"])
  }
};
</script>

<style>
</style>