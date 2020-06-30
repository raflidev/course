<template>
  <div class="card shadow-box">
    <div class="card-body">
      <img :src="image" class="card-img-top" />
      <h6 class="line-height-1 mb-0 mt-3 font-weight-bold">{{ nama }}</h6>
      <div class="text-gray-500">{{menit}} Menit &middot; {{materi}} Materi &middot; {{level}}</div>
      <button class="mt-2 btn btn-sm btn-outline-dark font-weight-bold">LIHAT KELAS</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    image: String,
    nama: String,
    menit: Number,
    materi: Number,
    level: String,
    link: String
  }
};
</script>

<style>
</style>