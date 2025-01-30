<template>
  <img 
    :src="imageUrl" 
    :alt="alt"
    class="md:w-1/2 w-full md:rounded-t-lg rounded-sm object-cover" 
  />
</template>

<script setup lang="ts">
defineProps<{
  imageUrl: string
  alt: string
}>()
</script>