<template>
  <div class="benefit-item">
    <img :src="require('@/assets/icon/'+ icon +'.svg')" class="text-dark" alt srcset />

    <p>{{benefit}}</p>
  </div>
</template>

<script>
export default {
  name: "Benefit",
  props: {
    icon: String,
    benefit: String
  }
};
</script>

<style>
</style>