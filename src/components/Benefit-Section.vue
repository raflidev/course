<template>
  <section class="benefit-mu py-5 bg-purple">
    <div class="container">
      <div class="mt-5 text-white">
        <div class="row">
          <div class="col-lg-6 col-sm-12 text-center">
            <h2>Benefit Belajar Bersama kami</h2>
            <p>Tingkatkan skillmu apapun bidangmu</p>
            <div class="benefit row">
              <div class="col-4 mb-5" v-for="benefit in benefit" :key="benefit.index">
                <Benefit :icon="benefit.icon" :benefit="benefit.isi" />
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-sm-12">
            <div class="row justify-content-center">
              <div class="col-lg-6">
                <img
                  src="@/assets/benefit.svg"
                  class="fluid-img d-none d-md-none d-lg-block"
                  height="451"
                  alt
                  srcset
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Benefit } from "@/components";
import { mapState, mapActions } from "vuex";
export default {
  name: "BenefitSection",
  components: { Benefit },
  methods: {
    ...mapActions(["loadBenefit"])
  },
  created() {
    this.loadBenefit();
  },
  computed: {
    ...mapState(["benefit"])
  }
};
</script>

<style>
</style>