<script setup>
definePageMeta({
  layout: "landing",
});
</script>

<template>
  <HeroSlider/>
  <LandingContainer>
    <LandingHero />
    <!-- <LandingServicesSection /> -->
  </LandingContainer>
  <LandingFeatures></LandingFeatures>

  <TestimonialsSection></TestimonialsSection>
  <LandingContainer>
   
    <LandingLogos></LandingLogos>
    <LandingCta></LandingCta>
    <LandingFaqs></LandingFaqs>
  </LandingContainer>
</template>
