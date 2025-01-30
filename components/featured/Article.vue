<script lang="ts" setup>
defineProps({
    id: String,
    slug: String,
    title: String,
    description: String,
    publishedAt: String,
    cover: String,
    category: Array,
    author: Array
})
 
</script>
<template>
   <div class="grid gap-10 lg:grid-cols-2">
            <div class="w-full overflow-hidden rounded-sm aspect-w-16 aspect-h-9">
                <img class="object-cover" :src="`${cover}`" alt="image" />
            </div>
            <div class="flex flex-col justify-center">
                <div class="flex space-x-3">
                    <span class="px-3 py-1 text-sm rounded-full bg-emerald-100 text-emerald-600">Case Studies</span>
                    <span class="px-3 py-1 text-sm rounded-full bg-amber-100 text-amber-600">Design</span>
                </div>
                <h3 class="mt-5 text-2xl font-bold">{{ title }}</h3>
                <p class="mt-3 text-gray-500">{{ description }}</p>
                <div class="flex mt-5 space-x-3">
                    <div class="flex-shrink-0">
                        <img class="object-cover w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80" alt="image" />
                    </div>
                    <div class="flex flex-col">
                        <span class="font-medium">Ronald Matthews</span>
                        <span class="text-gray-500">{{ publishedAt }} • 6 min read</span>
                    </div>
                </div>
            </div>
        </div>
</template>

<style>

</style>