<template>
  <main>
    <section class="bg-white text-purple py-4">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-11">
            <div class="row justify-content-center">
              <div class="col-lg-5">
                <div class="card">
                  <div class="card-body">
                    <form action method="post">
                      <h2 class="text-merri">Login</h2>
                      <p>masuk untuk mulai belajar</p>
                      <div class="form-group">
                        <label for>Email</label>
                        <input type="text" class="form-control" />
                      </div>
                      <div class="form-group">
                        <label for>Password</label>
                        <input type="text" class="form-control" />
                      </div>
                      <div class="form-group">
                        <button type="submit" class="btn btn-primary form-control">Masuk</button>
                      </div>
                      <p>
                        Belum punya akun?
                        <a href="/daftar">Daftar</a>
                      </p>
                    </form>
                  </div>
                </div>
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