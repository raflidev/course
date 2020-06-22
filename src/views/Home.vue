<template>
  <main>
    <section>
      <div class="wave-container">
        <div class="container mt-5">
          <div class="row">
            <div class="col-lg-7">
              <h1 class="text-merri pb-3">Make Your Dreams Come True</h1>
              <h5 class="font-weight-light">
                Pelajari koding untuk membuat website dan aplikasi
                <br />ingin menjenjang karir programmer atau membuat karya?
                <br />kami tunggu dikelas!
              </h5>
              <input
                type="text"
                class="form-control col-lg-9 col-12 mt-4"
                placeholder="Cari kelas ex: Javascript"
                v-model="search"
              />
              <div class="col-lg-10 bg-white result-item text-purple rounded mt-2" v-show="search">
                <div
                  class="box-item p-4 mb-0 border-bottom"
                  v-for="kelas in tampilData"
                  :key="kelas.index"
                >
                  <img
                    src="https://storage.googleapis.com/fastwork-static/082dcee4-19a9-477b-ae5c-f703558764f2.jpg"
                    width="130"
                    class="img-fluid mr-3 float-left"
                  />
                  <h5 class="m-0">{{kelas.nama}}</h5>
                  <p class="font-weight-light">Dibuat oleh {{kelas.mentor}}</p>
                </div>
              </div>
            </div>
            <div class="col-lg-5">
              <div class="row justify-content-center">
                <div class="col-lg-9">
                  <img src="@/assets/browser.svg" class="img-fluid d-none d-sm-block" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <img id="wave" class src="@/assets/waves.svg" alt srcset />
      </div>
    </section>
    <section class="kenapa-kami py-5">
      <div class="container">
        <div class="mt-5 text-purple">
          <h1 class="text-merri pb-3 text-center">Kenapa Skill-up?</h1>
          <div class="row mt-5 justify-content-center">
            <div class="col-12 col-lg-6">
              <div class="row mt-4">
                <div class="col-6 col-lg-3 my-2 mb-4 text-center">
                  <span class="material-icons big-icon">android</span>
                  <br />Lifetime Akses kelas
                </div>
                <div class="col-6 col-lg-3 my-2 mb-4 text-center">
                  <span class="material-icons big-icon">chat</span>
                  <br />Lifetime Konsultasi
                </div>
                <div class="col-6 col-lg-3 my-2 mb-4 text-center">
                  <span class="material-icons big-icon">save_alt</span>
                  <br />Materi Dapat Didownload
                </div>
                <div class="col-6 col-lg-3 my-2 mb-4 text-center">
                  <span class="material-icons big-icon">timeline</span>
                  <br />Pemula Sampai Mahir
                </div>
                <div class="col-6 col-lg-3 my-2 mb-4 text-center">
                  <span class="material-icons big-icon">translate</span>
                  <br />Berbahasa Indonesia
                </div>
                <div class="col-6 col-lg-3 my-2 mb-4 text-center">
                  <span class="material-icons big-icon">assignment_turned_in</span>
                  <br />Sertifikat
                </div>
                <div class="col-6 col-lg-3 my-2 mb-4 text-center">
                  <span class="material-icons big-icon">update</span>
                  <br />Materi Terupdate
                </div>
                <div class="col-6 col-lg-3 my-2 mb-4 text-center">
                  <span class="material-icons big-icon">insert_emoticon</span>
                  <br />Gampang Dipahami
                </div>
              </div>
            </div>
            <div class="col-lg-6 d-none d-sm-block">
              <div class="row justify-content-center">
                <div class="col-9">
                  <img src="@/assets/feature.svg" class="img-fluid" width="400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="kelas-populer py-5 border-top">
      <div class="mt-5 container text-purple">
        <h1 class="text-merri pb-3 text-center">Kelas Populer</h1>
        <div class="row justify-content-center mt-5">
          <div class="col col-12 col-lg-11">
            <div class="row justify-content-center">
              <div class="col-11 col-lg-4 mb-4">
                <div class="card shadow-box">
                  <div class="card-body">
                    <img
                      src="https://storage.googleapis.com/fastwork-static/082dcee4-19a9-477b-ae5c-f703558764f2.jpg"
                      class="card-img-top"
                    />
                    <h6 class="line-height-1 mb-0 mt-3 text-600">Full-Stack Web Developer</h6>
                    <span class="text-gray-500">Rp. 360.000</span>
                    <hr />
                    <div class="row">
                      <div class="col-auto">
                        <div class="mr-2">
                          <img src="../assets/logo.png" width="50" height="50" />
                        </div>
                      </div>
                      <div class="col pl-2">
                        <h6 class="mb-0 line-height-1 text-600">Rafli Ramadhan</h6>
                        <p class="text-gray-500">Full-Stack Developer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-11 col-lg-4 mb-4">
                <div class="card shadow-box">
                  <div class="card-body">
                    <img
                      src="https://www.buildwithangga.com/storage/assets/thumbnails/thumbnail_kelas_fullstack_web_developer_buildwithangga.png"
                      class="card-img-top"
                    />
                    <h6 class="line-height-1 mb-0 mt-3 text-600">Full-Stack Web Developer</h6>
                    <span class="text-gray-500">Rp. 360.000</span>
                    <hr />
                    <div class="row">
                      <div class="col-auto">
                        <div class="mr-2">
                          <img src="../assets/logo.png" width="50" height="50" />
                        </div>
                      </div>
                      <div class="col pl-2">
                        <h6 class="mb-0 line-height-1 text-600">Rafli Ramadhan</h6>
                        <p class="text-gray-500">Full-Stack Developer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-11 col-lg-4 mb-4">
                <div class="card shadow-box">
                  <div class="card-body">
                    <img
                      src="https://www.buildwithangga.com/storage/assets/thumbnails/thumbnail_kelas_fullstack_web_developer_buildwithangga.png"
                      class="card-img-top"
                    />
                    <h6 class="line-height-1 mb-0 mt-3 text-600">Full-Stack Web Developer</h6>
                    <span class="text-gray-500">Rp. 360.000</span>
                    <hr />
                    <div class="row">
                      <div class="col-auto">
                        <div class="mr-2">
                          <img src="../assets/logo.png" width="50" height="50" />
                        </div>
                      </div>
                      <div class="col pl-2">
                        <h6 class="mb-0 line-height-1 text-600">Rafli Ramadhan</h6>
                        <p class="text-gray-500">Full-Stack Developer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="ulasan-mereka py-5 border-top">
      <div class="container text-purple">
        <div class="mt-5 text-purple">
          <h1 class="text-merri pb-3 text-center">Ulasan Mereka</h1>
          <div class="row justify-content-center mt-5">
            <div class="col col-12 col-lg-12">
              <div class="row justify-content-center">
                <div class="col-11 col-lg-4 mb-4">
                  <div class="card shadow-box">
                    <div class="card-body p-3">
                      <h6 class="line-height-1">
                        Mentornya keren cara menyampaikan setiap materinya juga
                        detail dan mudah dipahami.
                      </h6>
                      <hr />
                      <div class="row">
                        <div class="col-auto">
                          <div class="mr-2">
                            <img src="../assets/logo.png" width="50" height="50" />
                          </div>
                        </div>
                        <div class="col pl-2">
                          <h6 class="mb-0 line-height-1 text-600">Rafli Ramadhan</h6>
                          <span class="text-gray-500">Tukang Bakso</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-11 col-lg-4 mb-4">
                  <div class="card shadow-box">
                    <div class="card-body p-3">
                      <h6 class="line-height-1">
                        Kelas yang paling recommended pokoknya buat investasi
                        ilmu di era revolusi industri 4.0.
                      </h6>
                      <hr />
                      <div class="row">
                        <div class="col-auto">
                          <div class="mr-2">
                            <img src="../assets/logo.png" width="50" height="50" />
                          </div>
                        </div>
                        <div class="col pl-2">
                          <h6 class="mb-0 line-height-1 text-600">Rafli Ramadhan</h6>
                          <span class="text-gray-500">Tukang Bakso</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-11 col-lg-4 mb-4">
                  <div class="card shadow-box">
                    <div class="card-body p-3">
                      <h6 class="line-height-1">
                        Kelas yang sangat bermanfaat dan ilmu up-to-date sekali
                        dan yang paling penting biayanya sangat terjangkau.
                      </h6>
                      <hr />
                      <div class="row">
                        <div class="col-auto">
                          <div class="mr-2">
                            <img src="../assets/logo.png" width="50" height="50" />
                          </div>
                        </div>
                        <div class="col pl-2">
                          <h6 class="mb-0 line-height-1 text-600">Rafli Ramadhan</h6>
                          <span class="text-gray-500">Tukang Bakso</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center">
            <a href="#" class="btn btn-outline-secondary">REVIEW LAINNYA</a>
          </div>
        </div>
      </div>
    </section>
    <section class="cari-mentor py-5 border-top bg-purple">
      <div class="container">
        <div class="mt-5 container text-center">
          <h1 class="text-merri pb-3">Ingin Menjadi Mentor?</h1>
          <p>
            Diskusikan ide anda dan keahlian anda kepada kami, pasti kami sambut
            hangat
          </p>
          <img src="@/assets/moment.svg" class="img-fluid" height="200" width="200" />
          <br />
          <a href class="btn btn-outline-purple my-5">SAYA TERTARIK</a>
        </div>
      </div>
    </section>
  </main>
</template>

<style>
.result-item {
  position: relative;
  z-index: 99;
}
</style>

<script>
export default {
  name: "Home",
  data() {
    return {
      show: false,
      search: "",
      kelas: [
        {
          nama: "Fullstack Javascript",
          mentor: "Rafli Ramadhan",
          premium: true
        },
        {
          nama: "HTML Dasar",
          mentor: "Rafli Ramadhan",
          premium: false
        },
        {
          nama: "Codegniter 4",
          mentor: "Rafli Ramadhan",
          premium: false
        }
      ]
    };
  },
  computed: {
    tampilData() {
      return this.kelas.filter(post => {
        return post.nama.toLowerCase().includes(this.search.toLowerCase());
      });
    }
  }
};
</script>

