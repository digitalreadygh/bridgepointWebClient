<script setup lang="ts">
import { useArticlesStore } from '@/stores/articles';
import { useCategoriesStore } from '@/stores/categories';
import { ref, onMounted, watch } from 'vue';

definePageMeta({ layout: "landing"});

const articlesStore = useArticlesStore();
const categoriesStore = useCategoriesStore();
const selectedCategory = ref<string | null>(null);

// Fetch categories on mount
onMounted(async () => {
  await categoriesStore.fetchCategories();
  await articlesStore.fetchArticles(); // Fetch all articles by default
});

// Fetch articles when the category changes
watch(selectedCategory, async (category) => {
  await articlesStore.fetchArticles(category);
});
</script>

<template>
  <div class="bg-white">
    <div class="container flex flex-col justify-center px-6 py-6 mx-auto sm:py-12">
    <FeaturedArticle />
    <div class="mt-16 md:mt-0">
    <h2 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">
      Discover Interesting Insights from Our Community
    </h2>
    <p class="text-lg mt-4 text-slate-600">
      Nuxt comes batteries included. It takes the best parts of state-of-the-art
      tools and adds its own innovations.
    </p>
    <div class="flex flex-wrap mb-20">
        <a @click="selectedCategory = null" class="sm:px-6 py-3 w-1/2 sm:w-auto justify-start border-b-2 title-font font-medium hover:bg-gray-100 inline-flex items-center leading-none border-indigo-500 text-indigo-500 tracking-wider rounded-t">
        All Categories
        </a>
        <a @click="selectedCategory = category.slug" class="sm:px-6 py-3 w-1/2 sm:w-auto justify-start border-b-2 title-font font-medium hover:bg-gray-100 inline-flex items-center leading-none border-indigo-500 text-indigo-500 tracking-wider rounded-t"
            v-for="category in categoriesStore.categories"
            :key="category.id"
            :value="category.slug"
        >
        {{ category.name }}
        </a>
    </div>
  </div>
      
      <div class="grid mt-5 lg:grid-cols-4 gap-y-14 lg:gap-10">
          <div v-if="articlesStore.isLoading">Loading articles...</div>
          <div v-else-if="articlesStore.error" class="text-red-500">{{ articlesStore.error }}</div>
          <div v-else></div>
            <div
            v-for="article in articlesStore.articles"
            :key="article.id"
            class="border p-4 mb-4 rounded"
            >
                <div class="w-full overflow-hidden rounded-sm aspect-w-13 aspect-h-9">
                    <NuxtImg :src="article.cover?.url" class="object-cover w-full h-full" :alt="article.slug" />
                </div>
                <div class="flex mt-5 space-x-3">
                    <span class="px-3 py-1 text-sm rounded-full bg-emerald-100 text-emerald-600">{{ article.category?.name }}</span>
                    <span class="px-3 py-1 text-sm rounded-full bg-amber-100 text-amber-600">Design</span>
                </div>
                <h3 class="mt-5 text-2xl text-gray-900 font-bold">{{ article?.name }}</h3>
                <p class="mt-3 text-gray-500">{{ article.description }}</p><div class="flex mt-5 space-x-3">
                    <!-- <div class="flex-shrink-0">
                        <NuxtImg :src="article.author?.avatar?.url" class="object-cover w-12 h-12 rounded-full" alt="no-image" />
                        <img class="object-cover w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80" alt="image" />
                    </div> -->
                    <div class="flex flex-col">
                        <span class="font-medium">{{ article.author?.name }}</span>
                        <span class="text-gray-500">{{ new Date(article.publishedAt).toLocaleDateString() }} • 6 min read</span>
                    </div>
                </div>
            </div>
      </div>
  </div>
  </div>
</template>