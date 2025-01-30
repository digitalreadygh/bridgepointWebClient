<script setup>
const services = [
  {
    title: " Agri-Tech Consulting",
    description:
      "We support Agribusinesses in Ghana with the right Ag-tech platforms.",
    icon: "bx:bxs-briefcase",
  },
  {
    title: "Agribusiness Mapping",
    description:
      "Agribusiness mapping is the situation whereby all the players in the agric value chain or ecosystem are brought together",
    icon: "bx:bxs-window-alt",
  },
  {
    title: "Export Aggregator",
    description:
    "This is similar to Agribusiness Mapping, but the focus or market for agricultural commodities here is export (that is, beyond Ghana's borders).",
    icon: "bx:bxs-data",
  },
  {
    title: "Business Support Services",
    description:
    "We provide business support services to our clients, such as legal advice, financial planning, and business development.",
    icon: "bx:bxs-data",
  },
];
</script>

<template>
  <section class="py-20 md:py-24 bg-green-950">
    <div class="container mx-auto px-5">
      <div class="my-16 md:mt-0 text-center">
        <h2 class="text-green-50 text-4xl lg:text-5xl font-bold lg:tracking-tight">
          Our Services
        </h2>
        <p class="text-lg mt-4 text-green-200">
          We offer a wide range of services to our clients, categorized as follows;
        </p>
      </div>
    
      <div class="grid sm:grid-cols-2 md:grid-cols-2 mt-16 gap-16">
        <div v-for="item of services" class="flex gap-4 items-start">
          <div class="mt-1 bg-green-500 rounded-full p-2 w-8 h-8 shrink-0">
            <Icon class="text-white" :name="item.icon" />
          </div>
          <div>
            <h3 class="font-semibold text-lg text-green-200">{{ item.title }}</h3>
            <p class="text-slate-200 mt-2 leading-relaxed">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
