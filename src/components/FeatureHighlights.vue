<template>
  <section id="experiencia" class="features">
    <div class="features__intro">
      <span class="features__eyebrow">Panorama general</span>
      <h2 class="section-heading">La app que resume tu vida universitaria</h2>
      <p class="section-paragraph">
        Desde el primer toque, Comunica conecta tu cuenta institucional, tus cursos y las zonas del campus para que organices tu día con confianza.
      </p>
    </div>
    <div class="features__grid">
      <article v-for="feature in features" :key="feature.title" class="feature-card">
        <span class="feature-card__highlight">{{ feature.highlight }}</span>
        <h3>{{ feature.title }}</h3>
        <p>{{ feature.description }}</p>
      </article>
    </div>
  </section>
</template>

<script setup>
import { features } from '../data/features.js';
</script>

<style scoped>
.features {
  max-width: 1120px;
  margin: clamp(3rem, 7vw, 6rem) auto;
  padding: 0 clamp(1.5rem, 5vw, 2.5rem);
  display: grid;
  gap: clamp(2rem, 3vw, 3rem);
}

.features__intro {
  max-width: 640px;
}

.features__eyebrow {
  display: inline-block;
  font-size: 0.85rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #c62828;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.features__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: clamp(1.5rem, 3vw, 2.5rem);
}

.feature-card {
  background: linear-gradient(180deg, #ffffff 0%, #fff9f9 100%);
  border-radius: 20px;
  padding: clamp(1.5rem, 3vw, 2.25rem);
  box-shadow: 0 24px 48px rgba(198, 40, 40, 0.08);
  border: 1px solid rgba(198, 40, 40, 0.1);
  display: grid;
  gap: 0.85rem;
}

.feature-card__highlight {
  color: #c62828;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 0.14em;
}

.feature-card h3 {
  margin: 0;
  font-size: 1.35rem;
}

.feature-card p {
  margin: 0;
  color: var(--text-secondary);
  line-height: 1.5;
}

@media (max-width: 640px) {
  .features {
    margin: 2.5rem auto;
  }

  .features__intro {
    text-align: center;
  }

  .feature-card {
    padding: 1.25rem;
  }
}
</style>
