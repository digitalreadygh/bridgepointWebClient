<script setup>
defineProps(['name', 'role', 'image'])
</script>

<template>
    <div class="border border-primary-green-light rounded-md p-3 sm:p-5 sm:py-8 text-center max-w-[300px]">
        <img :src="image" :alt="name" class="w w-20 sm:w-32 aspect-square rounded-full mx-auto object-cover">
        <h3 class="font-bold text-base sm:text-xl my-2">{{ name }}</h3>
        <p class="text-xs sm:text-[15px] text-grey-text">{{ role }}</p>
    </div>
</template>