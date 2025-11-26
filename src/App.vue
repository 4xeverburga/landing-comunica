<template>
  <main class="app">
    <HeroSection />
    <FeatureHighlights />
    <FlowPreview />
    <MapSection />
    <CTASection />
    <FooterSection />
  </main>
</template>

<script setup>
import HeroSection from './components/HeroSection.vue';
import FeatureHighlights from './components/FeatureHighlights.vue';
import FlowPreview from './components/FlowPreview.vue';
import MapSection from './components/MapSection.vue';
import CTASection from './components/CTASection.vue';
import FooterSection from './components/FooterSection.vue';
</script>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  gap: 0;
}
</style>
