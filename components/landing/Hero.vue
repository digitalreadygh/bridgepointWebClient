<template>
  <main class="grid lg:grid-cols-2 place-items-center py-32 md:py-18">
    <div class="p-18 md:order-1 hidden md:block">
      <img
        class="rounded-lg transition-transform transform"
        src="~/assets/img/bridgepointagri-farmer-standing-his-growing-soybean.webp"
        alt="Empowered Agribusinesses in Ghana with Cutting-Edge Ag-Tech Solutions"
        loading="eager"
        format="webp"
        width="800"
        height="512"
      />
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
        Take the first step today!
        <NuxtLink
          href="#"
          size="md"
          class="text-green-950 hover:text-green-700 font-semibold hover:underline font-semibold"
          target="_blank"
          rel="noopener"
          >Contact Us</NuxtLink> now and let’s grow together.
          </div>
    </div>
  </main>
</template>
