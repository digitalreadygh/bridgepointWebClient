<script setup>
defineProps({
  SectionImage: String
})
</script>
<template>
  <main class="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-8">
    <div class="p-24 md:order-1 hidden md:block">
    <slot name="image" >
      <NuxtImg
        class="rounded-full transition-transform transform hover:scale-125"
        :src="SectionImage"
        alt="Starship starts the engine"
        loading="eager"
        format="avif"
        width="512"
        height="512"
        v-slot="{ src }"
      >
        {{ src }}
      </NuxtImg>
    </slot>
      
    </div>

    <div>
      <h1 class="text-3xl lg:text-4xl xl:text-5xl font-bold lg:tracking-tight">
        <slot name="title">Empowering Agribusinesses in Ghana with Cutting-Edge Ag-Tech Solutions </slot>
      </h1>
      <p class="text-lg mt-4 text-slate-600 max-w-xl">
        <slot name="desc">
          Are you an agribusiness in Ghana looking to thrive in today's competitive market? 
          <br><br> We are here to support you with innovative Ag-tech platforms tailored to boost efficiency, productivity, and growth.
        </slot>
      </p>
       <div class="mt-6 flex flex-col sm:flex-row gap-3">
        <NuxtLink
          href="#"
          size="md"
          class="text-green-950 hover:text-green-700 font-semibold"
          target="_blank"
          rel="noopener"
          >Take the first step today!</NuxtLink>
          Contact us now and let’s grow together.
          </div>
        <!-- 
        <LandingLink
          size="lg"
          styleName="outline"
          rel="noopener"
          href="https://github.com/Gr33nW33n/nuxtship-template"
          target="_blank"
          >View Repo</LandingLink
        >
      </div> -->
    </div>
  </main>
</template>