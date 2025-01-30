<template>
  <div class="md:w-1/2 w-full bg-gray-100 dark:bg-gray-900 dark:text-gray-400 md:p-4 p-6 rounded-md">
    <h2 class="text-3xl font-semibold text-gray-900 dark:text-white">
      {{ service.title }}
    </h2>
    <p class="text-md mt-4">
      {{ service.description }}
    </p>

    <template v-if="service.helpPoints">
      <h6 class="mt-4 font-semibold">How We Help:</h6>
      <ul class="text-md mt-2">
        <li 
          v-for="(point, index) in service.helpPoints" 
          :key="index"
          class="ml-4 list-disc"
        >
          {{ point }}
        </li>
      </ul>
    </template>

    <NuxtLink
      :to="service.link"
      class="inline-flex items-center mt-6 px-6 py-3 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors duration-200"
      @mouseenter="$emit('mouseEnter')"
      @mouseleave="$emit('mouseLeave')"
    >
      Learn More
      <span 
        class="ml-2 transition-transform duration-200"
        :class="{ 'transform translate-x-1': isHovered }"
      >
        →
      </span>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
interface Service {
  title: string
  description: string
  imageUrl: string
  helpPoints?: string[]
  link: string
}

defineProps<{
  service: Service
  isHovered: boolean
}>()

defineEmits<{
  mouseEnter: []
  mouseLeave: []
}>()
</script>
