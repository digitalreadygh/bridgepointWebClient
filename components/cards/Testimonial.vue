<template>
    <div class="max-w-[500px] text-left">
        <!-- avatar -->
        <div class="flex items-center gap-3 avatar">
            <div class="w-16">
                <img :src="testimonial?.avatar" v-if="testimonial?.avatar">
                <img src="/images/logo.png" v-else>
            </div>
            <div>
                <p class="text-lg font-bold">{{ testimonial?.name }}</p>
                <p>{{ testimonial?.description }}</p>
            </div>
        </div>

        <div class="w-[80%] my-5 h-1 bg-gradient-to-r from-green-500 to-white"></div>

        <p>
            {{ testimonial?.comment }}
        </p>
    </div>
</template>

<script setup>
defineProps({
    testimonial: {
        required: true
    }
})
</script>

<style lang="scss" scoped></style>