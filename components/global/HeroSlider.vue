<template>
  <header class="bg-cover bg-center px-4 h-[calc(80vh-64px)] lg:px-[40px] xl:px-[120px] relative">
      <div class="absolute left-0 right-0 top-0 bottom-0 overflow-hidden">
          <SliderBackgroundImage :image="content[index].image" :key="index" />
      </div>
      <div class="relative z-10">
          <Transition name="fade" mode="out-in">
              <SliderContent :content="content[index]" :key="index" />
          </Transition>
      </div>
  </header>
</template>

<script setup>

const timeout = ref()
const index = ref(0)
const content = [
{
      title: 'Your Growth, Our Mission',
      description: 'Extend your agribusiness operations with our personalized strategies and exclusive global partnerships.',
      image: 'bridgepoint_farms_slider_banner-1.webp',
      button: 'Get Started',
      to: '/contact',
  },
  {
      title: 'Connecting Stakeholders for Sustainable Growth',
      description: 'Through our Agribusiness Mapping services, we bring farmers, input providers, financiers, and buyers together for lasting success.',
      image: 'bridgepoint_farms_slider_banner-2.webp',
      button: 'Get Started',
      to: '/contact',
  },
  {
      title: 'Empowering Farmers, Growing Futures',
      description: 'At BridgePoint, we provide innovative solutions to help agribusinesses thrive. From Ag-Tech platforms to export opportunities, we’re your trusted partner for success.',
      image: 'bridgepoint_farms_slider_banner-3.webp',
      button: 'Get Started',
      to: '/contact',
  },
  {
      title: 'Unlock Global Markets',
      description: "With our Seamless Export Solutions for Agribusinesses. Expand beyond borders with our expert guidance on export compliance, traceability, and certifications.",
      image: 'bridgepoint_farms_slider_banner-4.webp',
      button: 'Get Started',
      to: '/contact',
  },
]

const switchComponent = () => {
  index.value === 3 ? index.value = 0 : index.value = index.value + 1
}

onMounted(() => {
  timeout.value = setInterval(() => switchComponent(), 8000)
})

onUnmounted(() => {
  clearInterval(timeout.value)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>