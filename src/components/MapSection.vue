<template>
  <section id="mapa" class="map">
    <div class="map__intro">
      <span class="map__eyebrow">Vista de mapa</span>
      <h2 class="section-heading">Encuentra aulas, zonas y eventos sin perderte</h2>
      <p class="section-paragraph">
        Mock de la pantalla de mapa con puntos clave cercanos a -12.0181045, -77.0522822. Cada pin muestra información relevante para decidir tu próximo destino en segundos.
      </p>
    </div>
    <div class="map__content">
      <div class="map__canvas" role="img" aria-label="Mapa del campus con ubicaciones destacadas">
        <div class="map__grid"></div>
        <div
          v-for="(pin, index) in mapPins"
          :key="pin.name"
          class="map__pin"
          :style="pinStyle(index)"
        >
          <span class="map__pin-dot"></span>
          <div class="map__pin-card">
            <strong>{{ pin.name }}</strong>
            <p>{{ pin.description }}</p>
            <span class="map__coordinates">{{ pin.coordinates.lat.toFixed(4) }}, {{ pin.coordinates.lng.toFixed(4) }}</span>
          </div>
        </div>
      </div>
      <aside class="map__list">
        <h3>Ubicaciones destacadas</h3>
        <ul>
          <li v-for="pin in mapPins" :key="pin.name">
            <div>
              <strong>{{ pin.name }}</strong>
              <p>{{ pin.description }}</p>
            </div>
            <span class="map__list-coord">
              {{ pin.coordinates.lat.toFixed(4) }}, {{ pin.coordinates.lng.toFixed(4) }}
            </span>
          </li>
        </ul>
      </aside>
    </div>
  </section>
</template>

<script setup>
import { mapPins } from '../data/mapPins.js';

const pinStyle = (index) => {
  const angle = (index / mapPins.length) * Math.PI * 2;
  const radius = 32 + index * 5;
  const x = 50 + Math.cos(angle) * radius;
  const y = 50 + Math.sin(angle) * (radius * 0.6);

  return {
    left: `${x}%`,
    top: `${y}%`
  };
};
</script>

<style scoped>
.map {
  background: radial-gradient(circle, #fff6f6 0%, #ffffff 55%);
  border-top: 1px solid rgba(198, 40, 40, 0.12);
  border-bottom: 1px solid rgba(198, 40, 40, 0.12);
  padding: clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5vw, 2.5rem);
  display: grid;
  gap: clamp(2rem, 3vw, 3.5rem);
}

.map__intro {
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
}

.map__eyebrow {
  display: inline-block;
  font-size: 0.85rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #c62828;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.map__content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: clamp(1.5rem, 3vw, 2.5rem);
  align-items: stretch;
}

.map__canvas {
  position: relative;
  border-radius: 32px;
  background: linear-gradient(160deg, #fbe3e3 0%, #ffe9e9 40%, #ffffff 100%);
  box-shadow: 0 30px 64px rgba(198, 40, 40, 0.12);
  min-height: 420px;
  overflow: hidden;
  border: 1px solid rgba(198, 40, 40, 0.18);
}

.map__grid {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(rgba(198, 40, 40, 0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(198, 40, 40, 0.08) 1px, transparent 1px);
  background-size: 42px 42px;
}

.map__pin {
  position: absolute;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.55rem;
}

.map__pin-dot {
  width: 1.1rem;
  height: 1.1rem;
  border-radius: 50%;
  background: #c62828;
  box-shadow: 0 0 0 6px rgba(198, 40, 40, 0.22);
}

.map__pin-card {
  background: #ffffff;
  color: var(--text-primary);
  border-radius: 16px;
  padding: 0.85rem 1rem;
  box-shadow: 0 22px 36px rgba(198, 40, 40, 0.12);
  border: 1px solid rgba(198, 40, 40, 0.12);
  width: 220px;
  text-align: left;
  display: grid;
  gap: 0.45rem;
}

.map__pin-card p {
  margin: 0;
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.map__coordinates {
  font-family: 'Space Mono', monospace;
  font-size: 0.75rem;
  color: #c62828;
  letter-spacing: 0.04em;
}

.map__list {
  background: #ffffff;
  border-radius: 24px;
  padding: clamp(1.5rem, 3vw, 2.25rem);
  border: 1px solid rgba(198, 40, 40, 0.12);
  box-shadow: 0 24px 48px rgba(198, 40, 40, 0.08);
  display: grid;
  gap: 1.25rem;
}

.map__list h3 {
  margin: 0;
  font-size: 1.35rem;
}

.map__list ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 1.2rem;
}

.map__list li {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  border-bottom: 1px dashed rgba(198, 40, 40, 0.18);
  padding-bottom: 1rem;
}

.map__list li:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.map__list p {
  margin: 0.35rem 0 0;
  font-size: 0.95rem;
  color: var(--text-secondary);
}

.map__list-coord {
  font-family: 'Space Mono', monospace;
  font-size: 0.75rem;
  color: #8b1d1d;
  white-space: nowrap;
}

@media (max-width: 960px) {
  .map__pin-card {
    width: 180px;
  }
}

@media (max-width: 760px) {
  .map__pin-card {
    width: 160px;
  }

  .map__list li {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 640px) {
  .map {
    padding: 2.5rem 1.25rem;
  }

  .map__canvas {
    min-height: 360px;
  }

  .map__pin-card {
    width: min(180px, 70vw);
  }

  .map__list {
    padding: 1.25rem 1.4rem;
  }
}
</style>
