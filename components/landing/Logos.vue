<template>
  <div class="my-24">
    <div class="container p-8 mx-auto xl:px-0 flex w-full flex-col mt-4 items-center justify-center text-center">
      <h2 class="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
        Our Partners
      </h2>
      <p class="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
        Explore the partners and collaborators who make our journey exciting, bringing unique strengths and ideas to help us grow together.
      </p>
    </div>
    <div
      class="overflow-hidden w-full flex justify-center mt-10 relative"
      @mouseenter="pauseCarousel"
      @mouseleave="resumeCarousel"
    >
      <div
        class="flex items-center gap-3 transition-transform duration-500 ease-in-out"
        :style="{ transform: `translateX(-${currentSlide * 33.33}%)` }"
      >
        <div
          v-for="(logo, index) in extendedPartners"
          :key="index"
          class="flex-shrink-0 w-[30%] flex items-center justify-center transition-transform duration-300"
          :class="{
            'scale-100': isCenterSlide(index),
            'scale-75 opacity-70': !isCenterSlide(index),
          }"
        >
          <img
            class="transition-transform duration-300 hover:scale-110 hover:shadow-lg"
            :src="logo.src"
            alt="Partner Logo"
            loading="eager"
            width="150"
            height="150"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';

// Reactive state for partner logos
const partners = ref([]);

// Function to set default partner logos
const setDefaultPartners = () => {
  partners.value = [
    { src: '/images/logos/AGRA-Logo-Small.png' },
    { src: '/images/logos/cropped-tracex_160by36.png' },
    { src: '/images/logos/Farmex_logo-e1615548044856-768x281.png' },
    { src: '/images/logos/footer_logo-1024x235.png' },
    { src: '/images/logos/rsz_2rsz_1logo.png' },
  ];
};

// Fetch partner logos from backend or use defaults
onMounted(async () => {
  try {
    const response = await fetch('YOUR_API_ENDPOINT');
    const data = await response.json();

    // Ensure data contains at least 3 logos
    if (data && data.partners && data.partners.length >= 3) {
      partners.value = data.partners.map((partner: any) => ({
        src: partner.logoUrl, // Adjust to match API response structure
      }));
    } else {
      setDefaultPartners();
    }
  } catch (error) {
    console.error('Error fetching partner logos:', error);
    setDefaultPartners();
  }
});

// Extend the partners array for seamless looping
const extendedPartners = computed(() => [
  ...partners.value.slice(-3),
  ...partners.value,
  ...partners.value.slice(0, 3),
]);

const currentSlide = ref(3); // Start at the first real slide
const totalSlides = ref(() => partners.value.length);
let carouselInterval: number | null = null;

// Move to the next slide
const nextSlide = () => {
  currentSlide.value++;
  if (currentSlide.value === totalSlides.value + 3) {
    setTimeout(() => {
      currentSlide.value = 3; // Reset to the first real slide
    }, 500);
  }
};

// Start the automated carousel
const startCarousel = () => {
  carouselInterval = setInterval(nextSlide, 3000);
};

// Pause the carousel when hovered
const pauseCarousel = () => {
  if (carouselInterval) {
    clearInterval(carouselInterval);
    carouselInterval = null;
  }
};

// Resume the carousel when hover ends
const resumeCarousel = () => {
  if (!carouselInterval) {
    startCarousel();
  }
};

// Adjusted logic to center the scale/zoom effect
const isCenterSlide = (index: number) => {
  const normalizedIndex = (currentSlide.value - 3) % totalSlides.value;
  const visibleSlides = 3; // Number of visible logos
  const centerIndex = Math.floor(visibleSlides / 2) + 3; // Centered index in the carousel
  return index === (normalizedIndex + centerIndex) % extendedPartners.value.length;
};

// Lifecycle hooks
onMounted(() => {
  startCarousel();
});

onUnmounted(() => {
  pauseCarousel();
});
</script>