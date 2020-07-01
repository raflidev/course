<template>
  <div class="card-keunggulan shadow rounded mb-4">
    <div class="p-3 pt-4">
      <img src="@/assets/check.svg" class="float-left mr-3" alt srcset />
      <p style="width:320px">{{desc}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Unggul",
  props: {
    desc: String
  }
};
</script>

<style>
</style>