<template>
  <main>
    <section class="bg-white text-purple py-4">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-11">
            <div class="row justify-content-center">
              <div class="col-lg-5">
                <form action method="post">
                  <h2 class="text-merri">Daftar Akun</h2>
                  <p>Daftar untuk mulai belajar</p>
                  <div class="form-group">
                    <input type="text" class="form-control my-4" placeholder="Nama Lengkap" />
                  </div>
                  <div class="form-group">
                    <input type="text" class="form-control my-4" placeholder="Email Address" />
                  </div>
                  <div class="form-group">
                    <input type="text" class="form-control my-4" placeholder="Password" />
                  </div>
                  <div class="form-group">
                    <input type="text" class="form-control my-4" placeholder="Ulangi Password" />
                  </div>
                  <div class="form-group">
                    <input type="text" class="form-control my-4" placeholder="Keahlianmu" />
                  </div>
                  <div class="form-group">
                    <button type="submit" class="btn btn-primary form-control">Masuk</button>
                  </div>
                  <p>
                    Sudah punya akun?
                    <router-link active-class="active" to="/login">Login</router-link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {};
</script>

<style>
</style>