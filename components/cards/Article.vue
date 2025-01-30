<script lang="ts">


</script>
<template>
    <div>

        <div class="w-full overflow-hidden rounded-sm aspect-w-13 aspect-h-9">

            <img class="object-cover" :src='`${article.cover}`' alt="image" />

        </div>

        <div class="flex mt-5 space-x-3">

            <span class="px-3 py-1 text-sm rounded-full bg-emerald-100 text-emerald-600">Engineering</span>

            <span class="px-3 py-1 text-sm rounded-full bg-amber-100 text-amber-600">Design</span>

        </div>

        <h3 class="mt-5 text-2xl font-bold">{{ article.name }}</h3>

        <p class="mt-3 text-gray-500">{{ article.description }}</p>

        <div class="flex mt-5 space-x-3">

            <div class="flex-shrink-0">

                <img class="object-cover w-12 h-12 rounded-full" :src='`${article.author.avatar}`' alt="image" />

            </div>

            <div class="flex flex-col">

                <span class="font-medium">{{ article.author.name }}</span>

                <span class="text-gray-500">{{ publishedAt }} • 6 min read</span>

            </div>

        </div>

    </div>
</template>