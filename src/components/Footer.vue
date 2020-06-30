<template>
  <section class="footer py-5 bg-purple">
    <div class="container text-white">
      <div class="row">
        <div class="col-lg-4 col-6">
          <h4 class="text-600">Skill-Up></h4>
          <p class="text-gray-500" style="width:251px">
            Tingkatkan skill dengan belajar
            coding, design dan apapun
            dibalik teknologi terkini
          </p>
        </div>
        <div class="col-lg-4 offset-lg-4 col-6 text-right">
          <div class="social-media">
            <img src="@/assets/social-media/twitter.svg" alt srcset />
            <img src="@/assets/social-media/fb.svg" alt srcset />
            <img src="@/assets/social-media/ig.svg" alt srcset />
            <img src="@/assets/social-media/github.svg" alt srcset />
          </div>
          <p style="margin-top:60px" class="text-gray-500">ask@skill-up.com</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style>
.footer {
  background-color: #fff;
}
section.footer .sitemap a {
  color: inherit;
}
section.footer {
  background-color: #fafafa;
}
</style>