<script setup lang="ts">
  useHead({
    link: [
      { 
        rel: 'icon', 
        type: 'image/x-icon', 
        href: '/favicon.ico' 
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap',
        crossorigin: 'anonymous'
      }
    ]
  })
</script>
<template>
  <div>
   <NuxtLayout>
    <NuxtPage />
   </NuxtLayout>
  </div>
</template>
