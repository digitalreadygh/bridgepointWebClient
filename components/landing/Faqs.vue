<template>
  <div>
    <div class="bg-white dark:bg-gray-900 py-5">
      <div class="container p-8 mx-auto xl:px-0 flex w-full flex-col mt-4 items-center justify-center text-center">
        <!-- <div class="text-sm font-bold tracking-wider text-green-600 uppercase">FAQ</div> -->
        <h2 class="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
          Frequently Asked Questions
        </h2>
        <p class="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
          Our FAQ area is the best place to look to find answers to your questions. Our community and support team constantly updates the questions and answers. 
        </p>
      </div>

      <div class="container mx-auto xl:px-0 p-8">
        <div class="w-full max-w-2xl p-2 mx-auto rounded-2xl">
          <div v-for="faq in faqs" :key="faq.id" class="mb-5">
            <button
              class="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-green-900 rounded-lg bg-green-50 hover:bg-green-100 focus:outline-none focus-visible:ring focus-visible:ring-green-100 focus-visible:ring-opacity-75 dark:bg-gray-800 dark:text-gray-200"
              @click="toggleFaq(faq.id)"
              type="button"
            >
              <span>{{ faq.question }}</span>
              <svg
                :class="{ 'transform rotate-180': faq.isOpen }"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-5 h-5 text-green-700"
              >
                <path
                  fill-rule="evenodd"
                  d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <div
              v-if="faq.isOpen"
              class="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300"
            >
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

// Reactive FAQs data
const faqs = reactive([
  {
    id: 1,
    question: 'Is this component completely free to use?',
    answer: 'No, it should be purchased first.',
    isOpen: false,
  },
  {
    id: 2,
    question: 'Can I use it in a commercial project?',
    answer: 'Yes, once purchased, you can use it in any projects.',
    isOpen: false,
  },
  {
    id: 3,
    question: 'What is your refund policy?',
    answer: 'If you are unhappy with your purchase for any reason, email us within 90 days and we will refund you in full, no questions asked.',
    isOpen: false,
  },
  {
    id: 4,
    question: 'Do you offer technical support?',
    answer: "No, we don't offer technical support for components. Please purchase a support plan to get 6 months of support.",
    isOpen: false,
  },
]);

// Toggle FAQ visibility
const toggleFaq = (id: number) => {
  const faq = faqs.find((f) => f.id === id);
  if (faq) {
    faq.isOpen = !faq.isOpen;
  }
};
</script>