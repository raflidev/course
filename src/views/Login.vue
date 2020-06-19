<template>
  <main>
    <section class="bg-white text-purple py-4">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-11">
            <div class="row justify-content-center">
              <div class="col-lg-5">
                <form action method="post">
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
                    <router-link class="btn btn-primary form-control" to="/dashboard/">Masuk</router-link>
                  </div>
                  <p>
                    Belum punya akun?
                    <router-link to="/daftar">Daftar</router-link>
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

<style></style>
