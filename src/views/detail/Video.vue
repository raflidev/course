<template>
  <main>
    <div class="row">
      <div class="col-lg-8 pr-0">
        <div class="bg-lightpurple">
          <div class="container">
            <div class="font-weight-600 nav-video text-white">
              <router-link to="/">Home</router-link>
              <span class="mx-1">></span>
              <router-link to="/kelas">Kelas</router-link>
              <span class="mx-1">></span>
              <router-link :to="'/kelas/'+kelasDetail.slug">{{kelasDetail.nama}}</router-link>
            </div>
          </div>
        </div>
        {{history.journey.video }}
        {{kelasDetail.materi[$route.params.video - 1].episode}}
        <div class="embed-responsive embed-responsive-16by9">
          <iframe
            class="embed-responsive-item"
            :src="'https://www.youtube.com/embed/'+materi.video+'?rel=0'"
            allowfullscreen
          ></iframe>
        </div>
        <div class="bg-purple text-white py-4 px-3 text-right">
          <router-link
            :to="nextVideos.toString()"
            @click.native="nextEpisode(kelasDetail)"
            class="btn btn-primary ml-3"
          >Tandai jika sudah selesai</router-link>
        </div>
      </div>
      <div class="col-lg-4 bg-white py-2 px-0">
        <div class="materi-list">
          <ul class="list-group px-2">
            <router-link
              :to="kelas.episode"
              active-class="active"
              class="list-group-item list-group-item-action"
              v-for="(kelas, index) in kelasDetail.materi"
              :key="kelas.index"
            >
              <img src="@/assets/icon/play.svg" class="image pt-2 mr-3 float-left" alt srcset />
              <p class="title mb-0">
                {{kelas.judul}}
                <span v-if="kelas.episode < history.journey.video ">&middot; selesai</span>
                <span v-else></span>
              </p>
              <div class="materi-desc text-gray-500">04:20 &middot; Episode {{index + 1}}</div>
            </router-link>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "video",
  computed: {
    ...mapState(["kelas"]),
    history: {
      get() {
        return this.$store.state.user.kelas.find(post => {
          return post.slug == this.$route.params.slug;
        });
      }
    },
    nextVideos: {
      get() {
        return parseInt(this.$route.params.video) + 1;
      }
    },
    kelasDetail: {
      get() {
        return this.$store.getters.allKelas.find(post => {
          return post.slug == this.$route.params.slug;
        });
      }
    },
    materi: {
      get() {
        return this.kelasDetail.materi.find(post => {
          return post.episode == this.$route.params.video;
        });
      }
    }
  },
  methods: {
    ...mapActions(["loadKelas"]),
    // centang() {
    //   const kelasku = [];
    //   this.$store.state.user.kelas.forEach(post => {
    //     kelasku.push(post.slug);
    //   });
    //   console.log(kelasku);

    //   const indexKelas = kelasku.indexOf(this.$route.params.slug);
    //   console.log(indexKelas);

    //   console.log(this.$store.state.user.kelas[indexKelas].journey);

    //   this.history.push(this.$store.state.user.kelas[indexKelas].journey);
    // },
    nextEpisode(kelas) {
      // const index = this.$route.params.video - 1;
      // console.log(kelas.materi[index]);
      const kelasku = [];
      this.$store.state.user.kelas.forEach(post => {
        kelasku.push(post.slug);
      });
      console.log(kelasku);

      const indexKelas = kelasku.indexOf(this.$route.params.slug);
      console.log(indexKelas);

      const array = {
        index: indexKelas,
        episode: this.materi.judul,
        slug: this.materi.slug,
        nama: kelas.nama,
        kelasslug: kelas.slug,
        video: this.$route.params.video
      };
      console.log(array);
      this.$store.state.user.kelas[indexKelas].journey = this.history;

      this.$store.commit("setJourneyKelas", array);
    }
  },
  mounted() {},
  created() {
    this.loadKelas();
    this.centang();
  }
};
</script>

<style></style>
