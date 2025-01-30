<template> 
  <div class="testimonial-section py-20 px-5  overflow-hidden">
      <div class="my-16 md:mt-0 text-center">
        <h2 class="text-green-950 text-4xl lg:text-5xl font-bold lg:tracking-tight">
          What Our Customers Are Saying
        </h2>
        <p class="text-lg mt-4 text-green-800">
          Here are some testimonials from our satisfied customers
        </p>
      </div>
    <div class="carousel">
      <div class="carousel-track">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="testimonial bg-white p-8 border-[0.1px]"
        >
          <!-- Image (with fallback) -->
          <img
            class=""
            :src="testimonial.image || '/images/icons/default-image.png'"
            alt="Testimonial Image"
          >
          <!-- Testimonial Content (with fallback) -->
          <p class="text-left text-gray-600 leading-relaxed -mt-8 mb-4">
            {{ testimonial.content || 'This is a default testimonial message.' }}
          </p>
          <!-- Apostrophe Image (with fallback) -->
          <img
            class="ml-auto mb-4"
            :src="testimonial.apostrophe || '/icons/apostrophe-2.png'"
            alt="Apostrophe"
          >
          <p class="border-b -mb-4"></p>
          <div class="flex items-center -mt-4">
            <!-- Avatar (with fallback) -->
            <img
              class="w-16 h-16 rounded-full mr-3"
              :src="testimonial.avatar || '/images/icons/default-avatar.png'"
              alt="Testimonial Avatar"
            >
            <div>
              <!-- Name and Position (with fallback) -->
              <p class="text-sm text-left font-bold">
                {{ testimonial.name || 'John Doe' }}
              </p>
              <!-- <p class="text-sm text-gray-500">
                {{ testimonial.position || 'Position Unknown' }}
              </p> -->
            </div>
            <div class="ml-auto">
              <span class="text-yellow-500 text-xl">★★★★★</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>




<script setup>
import { ref, onMounted } from 'vue';

const testimonials = ref([]);

onMounted(async () => {
  try {
    // Fetch data from the backend
    const response = await fetch('');
    const data = await response.json();

    // If data exists, assign it to testimonials, else use default placeholders
    if (data && data.testimonials && data.testimonials.length >= 6) {
      testimonials.value = data.testimonials;
    } else {
      setDefaultTestimonials();
    }
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    // If there's an error, use default testimonials
    setDefaultTestimonials();
  }
});

// Function to set default testimonials when data is unavailable
const setDefaultTestimonials = () => {
  testimonials.value = [
    {
      image: '/images/icons/apostrophe-1.png',
      content: 'On successful completion, you will receive a Data Analysis Certification from Litt Digital Academy, validating your expertise in Excel, SQL, and Power BI. This certification serves as a formal recognition of your skills, boosting your professional credibility and career prospects.',
      apostrophe: '/images/icons/apostrophe-2.png',
      avatar: '/images/Ellipse 82.png',
      name: 'John Doe',
      position: 'Position Unknown',
    },
    {
      image: '/images/icons/apostrophe-1.png',
      content: 'On successful completion, you will receive a Data Analysis Certification from Litt Digital Academy, validating your expertise in Excel, SQL, and Power BI. This certification serves as a formal recognition of your skills, boosting your professional credibility and career prospects.',
      apostrophe: '/images/icons/apostrophe-2.png',
      avatar: '/images/Ellipse 82.png',
      name: 'Jane Smith',
      position: 'Marketing Manager',
    },
    {
      image: '/images/icons/apostrophe-1.png',
      content: 'On successful completion, you will receive a Data Analysis Certification from Litt Digital Academy, validating your expertise in Excel, SQL, and Power BI. This certification serves as a formal recognition of your skills, boosting your professional credibility and career prospects.',
      apostrophe: '/images/icons/apostrophe-2.png',
      avatar: '/images/Ellipse 82.png',
      name: 'Alex Johnson',
      position: 'Software Engineer',
    },
    {
      image: '/images/icons/apostrophe-1.png',
      content: 'On successful completion, you will receive a Data Analysis Certification from Litt Digital Academy, validating your expertise in Excel, SQL, and Power BI. This certification serves as a formal recognition of your skills, boosting your professional credibility and career prospects.',
      apostrophe: '/images/icons/apostrophe-2.png',
      avatar: '/images/Ellipse 82.png',
      name: 'Emily Davis',
      position: 'Product Manager',
    },
    {
      image: '/images/icons/apostrophe-1.png',
      content: 'On successful completion, you will receive a Data Analysis Certification from Litt Digital Academy, validating your expertise in Excel, SQL, and Power BI. This certification serves as a formal recognition of your skills, boosting your professional credibility and career prospects.',
      apostrophe: '/images/icons/apostrophe-2.png',
      avatar: '/images/Ellipse 82.png',
      name: 'Chris Lee',
      position: 'Designer',
    },
    {
      image: '/images/icons/apostrophe-1.png',
      content: 'On successful completion, you will receive a Data Analysis Certification from Litt Digital Academy, validating your expertise in Excel, SQL, and Power BI. This certification serves as a formal recognition of your skills, boosting your professional credibility and career prospects.',
      apostrophe: '/images/icons/apostrophe-2.png',
      avatar: '/images/Ellipse 82.png',
      name: 'Patricia Garcia',
      position: 'HR Specialist',
    },
  ];
};
</script>

<style scoped>
/* General styling for the carousel */
.carousel {
  display: flex;
  overflow: hidden;
  width: 100%;
}

/* The track that holds the testimonials */
.carousel-track {
  display: flex;
  gap: 2rem;
  animation: scroll 40s linear infinite;
}

/* Individual testimonial styling */
.testimonial {
  flex: 0 0 33%; /* Adjust to control the number of items visible at a time */
  background-color: white;
  padding: 1.5rem;
  border-radius: 1rem;
  /* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); */
}

/* Styling for testimonial text and images */
.testimonial img {
  margin-bottom: 1rem;
}

.testimonial p {
  color: #4a5568;
  line-height: 1.6;
}

/* .testimonial .border-b {
  border-bottom: 2px solid #e2e8f0;
  margin-bottom: 1rem;
} */

.testimonial .flex {
  display: flex;
  align-items: center;
}

.testimonial img.rounded-full {
  width: 4rem;
  height: 4rem;
  border-radius: 9999px;
  margin-right: 1rem;
}

.testimonial .text-sm {
  font-size: 0.875rem;
}

.testimonial .font-bold {
  font-weight: 700;
}

.testimonial .text-gray-500 {
  color: #a0aec0;
}

.text-yellow-500 {
  color: #ecc94b;
}

.text-xl {
  font-size: 1.25rem;
}

/* Infinite scroll animation */
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

/* Pauses the animation on hover */
.carousel:hover .carousel-track {
  animation-play-state: paused; /* Pauses the animation */
}

/* Duplicate content to enable the infinite loop effect */
.carousel-track::after {
  content: '';
  display: inline-block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 100%;
  background: inherit;
  animation: inherit;
}

@media (max-width: 768px) {
   
   .testimonial {
       width: 160px; 
   }
}

@media (max-width: 296px) {
   
   .testimonial {
       width: 140px;
       padding: 0.5rem; 
   }
}
</style>