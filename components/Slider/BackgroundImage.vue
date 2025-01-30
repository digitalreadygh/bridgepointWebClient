<template>
  <img :src='`/images/hero/${image}`' class="w-full h-full object-cover zoom ">
  <div class="absolute left-0 right-0 top-0 bottom-0 bg-black/80"></div>
</template>

<script setup>
defineProps(['image'])
</script>

<style scoped>
.zoom {
  animation: zoom-in 20s linear 1s infinite;
}

@keyframes zoom-in {
  0% {
      transform: scale(1, 1);
  }

  100% {
      transform: scale(1.5, 1.5);
  }
}
</style>