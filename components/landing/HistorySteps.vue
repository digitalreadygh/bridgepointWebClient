<template>
  <div class="px-5">
    <div class="relative max-w-7xl mx-auto my-16 overflow-x-auto">
      <div class="flex items-center space-x-12">
        <div
          v-for="(step, index) in steps"
          :key="index"
          class="relative flex-shrink-0 w-72 group"
        >
          <!-- Connector Line -->
          <div
            v-if="index !== steps.length - 1"
            class="absolute top-1/2 right-0 w-12 h-1 bg-green-300 transform -translate-y-1/2 group-hover:bg-green-500"
          ></div>

          <!-- Step Circle -->
          <div
            class="flex items-center justify-center w-10 h-10 mx-auto text-white bg-green-500 border-4 border-green-300 rounded-full shadow-lg group-hover:bg-green-600"
          >
            {{ index + 1 }}
          </div>

          <!-- Step Content -->
          <div class="mt-4 text-center">
            <p class="text-sm font-semibold text-green-600 uppercase">
              {{ step.date }}
            </p>
            <h4 class="mt-2 text-lg font-bold text-green-700">
              {{ step.title }}
            </h4>
            <p v-if="step.description" class="mt-1 text-gray-600">
              {{ step.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Dynamic steps data
const steps = ref([
  {
    date: "April 2022",
    title: "Project Concept",
    description: "The Crypto Group is established. Start of our project concept.",
  },
  {
    date: "May 2022",
    title: "Platform Launch",
    description: "Our trading platform is launched with full solutions in USA and Europe.",
  },
  {
    date: "June 2022",
    title: "Published Whitepaper",
    description:
      "Our Whitepaper is released to our investors, clients, and beta users.",
  },
  {
    date: "August 2022",
    title: "First Pre-Sale",
    description: "Start of the ICO token first pre-sale. Test advertising campaign.",
  },
  {
    date: "September 2022",
    title: "Mobile App Release",
    description:
      "Our Mobile App is released and is available on iOS and Android devices.",
  },
  {
    date: "Now",
    title: "ICO Launch",
    description: "",
  },
]);
</script>

<style scoped>
/* Horizontal scrolling enabled for small screens */
</style>
