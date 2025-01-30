<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap -m-4">
        <ProjectCard
          v-for="(project, index) in projects"
          :key="index"
          :image="project.image"
          :category="project.category"
          :title="project.title"
          :description="project.description"
          :linkText="project.linkText"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const projects = [
  {
    image: "https://dummyimage.com/720x400",
    category: "Web Development",
    title: "Custom Websites",
    description: "We build responsive and scalable websites tailored to your needs.",
    linkText: "Learn More",
  },
  {
    image: "https://dummyimage.com/720x400",
    category: "Graphic Design",
    title: "Creative Designs",
    description: "Get stunning and modern designs for your branding needs.",
    linkText: "Explore Now",
  },
  {
    image: "https://dummyimage.com/720x400",
    category: "SEO",
    title: "SEO Optimization",
    description: "Improve your website's visibility and rank higher on search engines.",
    linkText: "Discover More",
  },
];
</script>