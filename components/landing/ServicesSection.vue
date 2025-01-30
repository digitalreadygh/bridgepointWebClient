<template>
  <section class="text-gray-400 dark:bg-gray-900 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap -m-4">
        <ServicesCard
          v-for="(service, index) in services"
          :key="index"
          :title="service.title"
          :description="service.description"
          :linkText="service.linkText"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const services = [
  {
    // category: "CATEGORY",
    title: "Agri-Tech Consulting",
    description:
      "We support Agribusinesses in Ghana with the right Ag-tech platforms.",
    linkText: "Learn More",
  },
  {
    // category: "CATEGORY",
    title: "Agribusiness Mapping",
    description:
      "Agribusiness mapping is the situation whereby all the players in the agric value chain or ecosystem are brought together",
    linkText: "Learn More",
  },
  {
    // category: "CATEGORY",
    title: "Export Aggregator",
    description:
      "Export Aggregator is similar to Agribusiness Mapping, but the focus or market for agricultural commodities here is export (that is, beyond Ghana's borders).",
    linkText: "Learn More",
  },
  {
    // category: "CATEGORY",
    title: "Business Support",
    description:
      "We provide a platform for farmers to connect with their community and gain insights into their business.",
    linkText: "Learn More",
  },
];
</script>
