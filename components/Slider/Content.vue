<template>
  <div class="max-w-3xl py-16 md:py-40 text-white">
      <h1 class="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight">{{ content.title }}</h1>
      <p class="text-lg mt-4 text-white max-w-xl"> {{ content.description }}</p>
      <!-- <div class="mt-6 flex flex-col sm:flex-row gap-3">
        <LandingLink
          href="https://github.com/Gr33nW33n/nuxtship-template"
          target="_blank"
          rel="noopener"
          >Get Started</LandingLink
        >
        <LandingLink
          size="lg"
          styleName="outline"
          rel="noopener"
          href="https://github.com/Gr33nW33n/nuxtship-template"
          target="_blank"
          >View Repo</LandingLink
        >
      </div> -->
  </div>
</template>

<script setup>
defineProps(['content'])
</script>

<style scoped></style>