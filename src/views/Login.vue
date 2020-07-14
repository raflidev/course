<template>
  <main>
    <section class="bg-white text-purple py-4">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-11">
            <div class="row justify-content-center">
              <div class="col-lg-5">
                <h2 class="text-merri">Masuk</h2>
                <p>masuk untuk mulai belajar</p>
                <div class="form-group">
                  <label for>Email Address</label>
                  <input type="text" class="form-control" placeholder="Email Address" />
                </div>
                <div class="form-group">
                  <label for>Password</label>
                  <input type="text" class="form-control" placeholder="Password" />
                </div>
                <div class="form-group">
                  <button class="btn btn-primary form-control" @click="aktifUser()">Masuk</button>
                </div>
                <p>
                  Belum punya akun?
                  <router-link to="/daftar">Daftar</router-link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  computed: {
    ...mapState(["user"])
  },
  methods: {
    ...mapActions(["loadUser"]),
    aktifUser() {
      this.$store.commit("setLogin", true);
      this.$router.push({ path: "/" });
    }
  },
  created() {
    this.loadUser();
  }
};
</script>
<style></style>
