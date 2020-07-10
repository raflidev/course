<template>
  <main>
    <div class="main-core d-none d-sm-block">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <h5 class="font-weight-600">Progress Belajar</h5>
            <p class="text-muted">ini adalah progress kelas yang kamu ikuti</p>

            <div class="item-kelas border rounded px-4" v-if="userKelas.kelas.length < 1">
              <p>Anda belum mengikuti kelas apapun</p>
            </div>
            <div
              class="item-kelas border rounded px-4"
              v-for="user in userKelas.kelas"
              :key="user.index"
            >
              <p class="mb-2 font-weight-600">{{user.nama}}</p>
              <!-- {{user.journey}} -->
              <div class="progress mb-3">
                <div
                  v-if="user.journey != ''"
                  class="progress-bar"
                  role="progressbar"
                  :style="'width:' +  (user.journey.video/user.materi.length) * 100+'%'"
                  :aria-valuenow="(user.journey.video/user.materi.length) * 100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >{{(user.journey.video/user.materi.length) * 100}}%</div>
                <div
                  v-else
                  class="progress-bar"
                  role="progressbar"
                  :style="'width:5%'"
                  :aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >0%</div>
              </div>
              <router-link
                :to="'/kelas/' + user.slug"
                class="btn mr-2 btn-sm btn-primary font-weight-600"
              >LANJUTKAN BELAJAR</router-link>
              <router-link
                to
                class="btn btn-sm btn-outline-primary font-weight-600"
                v-if="4 == userKelas.kelas.length"
              >CETAK SERTIFIKAT</router-link>
              <router-link
                to
                class="btn btn-sm btn-outline-primary disabled font-weight-600"
                v-else
              >CETAK SERTIFIKAT</router-link>
            </div>
          </div>
          <div class="offset-lg-1 col-lg-5">
            <div>
              <h5 class="font-weight-600">Terakhir Dipelajari</h5>
              <p class="text-muted">Ayo Selesaikan kelasmu</p>
            </div>
            <div v-for="(history,index) in journey" :key="history.index">
              <div
                v-if="journey[index].journey != ''"
                class="item-kelas history border rounded px-4"
              >
                <p class="font-weight-600 mb-0">{{history.journey.episode}}</p>
                <p class="text-muted mb-2">{{history.journey.nama}}</p>
                <router-link
                  :to="'/kelas/'+ history.journey.kelasslug +'/episode/'+history.journey.video"
                  class="btn mr-2 btn-sm btn-primary px-4 font-weight-600"
                >LANJUT</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="d-block d-sm-none bg-white py-4 main-core-mobile">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h4 class="mb-0">Progress Belajar</h4>
            <p class="text-muted">Berikut ini adalah daftar kelas yang anda ikuti</p>
            <div class="item-kelas border rounded px-4" v-if="userKelas.kelas.length < 1">
              <p>Anda belum mengikuti kelas apapun</p>
            </div>
            <div
              class="item-kelas border rounded px-4"
              v-for="user in userKelas.kelas"
              :key="user.index"
            >
              <p class="mb-2 font-weight-600">{{user.nama}}</p>
              <!-- {{user.journey}} -->
              <div class="progress mb-3">
                <div
                  v-if="user.journey != ''"
                  class="progress-bar"
                  role="progressbar"
                  :style="'width:' +  (user.journey.video/user.materi.length) * 100+'%'"
                  :aria-valuenow="(user.journey.video/user.materi.length) * 100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >{{(user.journey.video/user.materi.length) * 100}}%</div>
                <div
                  v-else
                  class="progress-bar"
                  role="progressbar"
                  :style="'width:5%'"
                  :aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >0%</div>
              </div>
              <router-link
                :to="'/kelas/' + user.slug"
                class="btn mr-2 btn-sm btn-primary form-control mb-2 font-weight-600"
              >LANJUTKAN BELAJAR</router-link>
              <router-link
                to
                class="btn btn-sm btn-outline-primary form-control mb-2 font-weight-600"
                v-if="4 == userKelas.kelas.length"
              >CETAK SERTIFIKAT</router-link>
              <router-link
                to
                class="btn btn-sm btn-outline-primary disabled form-control mb-2 font-weight-600"
                v-else
              >CETAK SERTIFIKAT</router-link>
            </div>
          </div>
          <div class="col-lg-12 border-top">
            <h4 class="title mt-4">Terakhir Dipelajari</h4>
            <p class="text-muted m-0">Ayo, selesaikan kelas</p>
          </div>
          <div v-for="(history,index) in journey" :key="history.index">
            <div v-if="journey[index].journey != ''" class="item-kelas history border rounded px-4">
              <p class="font-weight-600 mb-0">{{history.journey.episode}}</p>
              <p class="text-muted mb-2">{{history.journey.nama}}</p>
              <router-link
                :to="'/kelas/'+ history.journey.kelasslug +'/episode/'+history.journey.video"
                class="btn mr-2 btn-sm btn-primary px-4 font-weight-600"
              >LANJUT</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  computed: {
    userKelas: {
      get() {
        return this.$store.getters.getUser;
      }
    },
    journey: {
      get() {
        return this.$store.state.user.kelas;
      }
    }
  }
};
</script>

<style>
.progress {
  width: 100% !important;
}
</style>
