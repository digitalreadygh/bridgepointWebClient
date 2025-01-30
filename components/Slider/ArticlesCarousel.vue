<script setup>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import { useArticlesStore } from '@/stores/articles';

const articlesStore = useArticlesStore();

onMounted(async () => {
  await articlesStore.fetchArticles(); // Fetch all articles by default
});

const config = {
  itemsToShow: 2.5,
  gap: 5,
  wrapAround: true,
};
</script>

<template>
  <Carousel v-bind="config">
    <Slide v-for="slide in 10" :key="slide">
      <div class="carousel__item">{{ slide }}</div>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>