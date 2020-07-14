<template>
  <main>
    <div class="main-core d-none d-sm-block">
      <div class="container">
        <h4>Karya</h4>
        <p>Berikan karya terbaik anda, karya anda akan diletakan dimading</p>
        <div class="form-group">
          <label>
            Nama Project
            <input type="text" v-model="nama" class="form-control" />
          </label>
        </div>
        <div class="form-group">
          <label>
            Deskripsi
            <textarea type="text" v-model="desc" class="form-control"></textarea>
          </label>
        </div>
        <div class="form-group">
          <label>
            Link Karya
            <input type="text" v-model="link" class="form-control" />
          </label>
        </div>
        <button @click="submitKarya()" class="btn btn-primary">Submit</button>
      </div>
    </div>
  </main>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: mapState(["user", "mading"]),
  methods: {
    submitKarya() {
      const array = {
        nama: this.nama,
        slug: this.string_to_slug(this.nama) + "-" + this.user.username,
        desc: this.desc,
        link: this.link,
        penulis: this.user.username
      };
      this.$store.commit("addMading", array);
    },
    string_to_slug(str) {
      str = str.replace(/^\s+|\s+$/g, ""); // trim
      str = str.toLowerCase();

      // remove accents, swap ñ for n, etc
      var from = "åàáãäâèéëêìíïîòóöôùúüûñç·/_,:;";
      var to = "aaaaaaeeeeiiiioooouuuunc------";

      for (var i = 0, l = from.length; i < l; i++) {
        str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
      }

      str = str
        .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
        .replace(/\s+/g, "-") // collapse whitespace and replace by -
        .replace(/-+/g, "-"); // collapse dashes

      return str;
    }
  }
};
</script>

<style>
</style>