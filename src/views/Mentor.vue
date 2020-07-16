<template>
  <main>
    <section class="py-3 pb-5">
      <div class="container mt-5 text-center">
        <img
          src="https://lh6.googleusercontent.com/proxy/u0kqVJJi3bazlEgS_n1-mAyc02cZbG2u-xMdT-LPnLWyyvEt2fPSvVZDqzGoidfyMsml296tvOkmLgWA2BXq4PlIrHPlEyudj659uszD_ALLfP3GDZHgPh-ojUYrKPufZhOCDAirhU--i5xsTGqQmvn1qg"
          width="150"
          class="rounded-pill mb-4"
        />
        <h3 class="font-weight-600 pb-3 mb-0">Rafli Ramadhan</h3>
        <p class="mb-0">Fullstack Developer</p>
        <p class="text-muted">Bergabung dari agustus 2019</p>
        <p></p>
      </div>
    </section>
    <section class="bg-white text-purple py-3">
      <div class="container">
        <h4 class="text-center font-weight-600 py-4">Kelas yang dibuat</h4>
        <div class="row justify-content-center">
          <div class="col-lg-9">
            <div class="row justify-content-center">
              <div class="col-lg-6 my-3" v-for="kelas in kelas" :key="kelas.index">
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
    </section>
  </main>
</template>

<script>
import { Card } from "@/components";

import { mapActions, mapState } from "vuex";
export default {
  components: { Card },
  computed: {
    ...mapState(["kelas"])
  },
  methods: {
    ...mapActions(["loadKelas"])
  },
  created() {
    this.loadKelas();
  }
};
</script>
