<template>
  <div class="w-full flex flex-col items-center py-8">
    <div
      v-for="(service, index) in services"
      :key="index"
      :class="[
        'xl:w-4/5 sm:w-[85%] w-[90%] mx-auto flex md:flex-row flex-col',
        index % 2 === 0 ? '' : 'flex-col-reverse md:flex-row',
        'lg:gap-4 gap-2 justify-center lg:items-stretch md:items-center',
        index === 0 ? 'mt-4' : 'mt-6'
      ]"
    >
      <template v-if="index % 2 === 0">
        <ServiceImage :imageUrl="service.imageUrl" :alt="service.title" />
        <ServiceContent 
          :service="service"
          :isHovered="hoveredIndex === index"
          @mouseEnter="hoveredIndex = index"
          @mouseLeave="hoveredIndex = null"
        />
      </template>
      <template v-else>
        <ServiceContent 
          :service="service"
          :isHovered="hoveredIndex === index"
          @mouseEnter="hoveredIndex = index"
          @mouseLeave="hoveredIndex = null"
        />
        <ServiceImage :imageUrl="service.imageUrl" :alt="service.title" />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Service {
  title: string
  description: string
  imageUrl: string
  helpPoints?: string[]
  link: string
}

const services: Service[] = [
  {
    title: "Ag-Tech Consulting",
    description: "Our Ag-Tech Consulting service equips you with cutting-edge platforms to enhance productivity and efficiency. Whether you're looking to reduce operational costs, improve farming techniques, or maximize yields per acre, our team is here to guide you.",
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxob21lfGVufDB8MHx8fDE3MTA0OTAwNjl8MA&ixlib=rb-4.0.3&q=80&w=1080",
    link: "/services/agtech"
  },
  {
    title: "Agribusiness Mapping",
    description: "We bring together all stakeholders in the agric ecosystem—smallholder farmers, input suppliers, financial institutions, and buyers—for seamless collaboration. Through our mapping service, we foster win-win partnerships that drive growth and sustainability.",
    imageUrl: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMXx8aG9tZXxlbnwwfDB8fHwxNzEwNDkwMDcwfDA&ixlib=rb-4.0.3&q=80&w=1080",
    helpPoints: [
      "Organizing farmer cooperatives for collective productivity.",
      "Linking farmers to quality inputs, financing, and guaranteed markets.",
      "Building a robust network for sustained success."
    ],
    link: "/services/mapping"
  },
  {
    title: "Export Aggregator",
    description: "For businesses aiming to export agricultural commodities, we ensure compliance with global standards and protocols. From Global-GAP certifications to traceability, we guide you through every step to access international markets with confidence.",
    imageUrl: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMXx8aG9tZXxlbnwwfDB8fHwxNzEwNDkwMDcwfDA&ixlib=rb-4.0.3&q=80&w=1080",
    helpPoints: [
      "Ensuring quality and compliance with export standards.",
      "Building traceability systems.",
      "Facilitating certifications like Global-GAP."
    ],
    link: "/services/export"
  }
]

const hoveredIndex = ref<number | null>(null)
</script>