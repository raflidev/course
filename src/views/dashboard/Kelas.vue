<template>
  <main>
    <div class="main-core d-none bg-white py-4 d-sm-block">
      <div class="container">
        <h4>Kelasku</h4>
        <p class="text-muted">Berikut ini adalah daftar kelas yang anda ikuti</p>
        <div class="row">
          <div class="col-lg-4">
            <div class="item-kelas">
              <img
                src="https://storage.googleapis.com/fastwork-static/082dcee4-19a9-477b-ae5c-f703558764f2.jpg"
                class="img-fluid rounded mb-2"
              />
              <p class="title mb-0">Fullstack Web Developer</p>
              <p class="text-muted">Rafli Ramadhan</p>
              <div class="icon">
                <a href="http://">
                  <span class="material-icons">play_arrow</span>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="item-kelas">
              <img
                src="https://storage.googleapis.com/fastwork-static/082dcee4-19a9-477b-ae5c-f703558764f2.jpg"
                class="img-fluid rounded mb-2"
              />
              <p class="title mb-0">Fullstack Web Developer</p>
              <p class="text-muted">Rafli Ramadhan</p>
              <div class="icon">
                <a href="http://">
                  <span class="material-icons">play_arrow</span>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="item-kelas">
              <img
                src="https://storage.googleapis.com/fastwork-static/082dcee4-19a9-477b-ae5c-f703558764f2.jpg"
                class="img-fluid rounded mb-2"
              />
              <p class="title mb-0">Fullstack Web Developer</p>
              <p class="text-muted">Rafli Ramadhan</p>
              <div class="icon">
                <a href="http://">
                  <span class="material-icons">play_arrow</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="d-block d-sm-none bg-white py-4 main-core-mobile">
      <div class="container">
        <h4>Kelasku</h4>
        <p class="text-muted">Berikut ini adalah daftar kelas yang anda ikuti</p>
        <div class="row">
          <div class="col-lg-12">
            <div class="item-kelas">
              <img
                src="https://storage.googleapis.com/fastwork-static/082dcee4-19a9-477b-ae5c-f703558764f2.jpg"
                class="img-fluid rounded mb-2"
                width="250"
              />
              <p class="title mb-0">Fullstack Web Developer</p>
              <p class="text-muted">Rafli Ramadhan</p>
              <div class="icon">
                <a href="http://">
                  <span class="material-icons">play_arrow</span>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-12">
            <div class="item-kelas">
              <img
                src="https://storage.googleapis.com/fastwork-static/082dcee4-19a9-477b-ae5c-f703558764f2.jpg"
                class="img-fluid rounded mb-2"
                width="250"
              />
              <p class="title mb-0">Fullstack Web Developer</p>
              <p class="text-muted">Rafli Ramadhan</p>
              <div class="icon">
                <a href="http://">
                  <span class="material-icons">play_arrow</span>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-12">
            <div class="item-kelas">
              <img
                src="https://storage.googleapis.com/fastwork-static/082dcee4-19a9-477b-ae5c-f703558764f2.jpg"
                class="img-fluid rounded mb-2"
                width="250"
              />
              <p class="title mb-0">Fullstack Web Developer</p>
              <p class="text-muted">Rafli Ramadhan</p>
              <div class="icon">
                <a href="http://">
                  <span class="material-icons">play_arrow</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
.item-kelas .icon {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 25%;
  left: 0;
  justify-content: center;
  display: flex;
  align-items: center;
  opacity: 0;
}
.item-kelas:hover img {
  opacity: 0.3;
}
.item-kelas:hover .icon {
  opacity: 1;
}
</style>