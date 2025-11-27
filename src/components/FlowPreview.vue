<template>
  <section class="flow" aria-labelledby="flow-title">
    <div class="flow__intro">
      <span class="flow__eyebrow">Experiencia guiada</span>
      <h2 id="flow-title" class="section-heading">Sign in, inicio y mapa con data mockeada</h2>
      <p class="section-paragraph">
        Diseñamos el flujo clave para que los estudiantes validen su cuenta institucional, reciban un inicio informativo y naveguen el campus sin fricción.
      </p>
    </div>

    <div class="flow__timeline">
      <article v-for="step in steps" :key="step.title" class="flow-card">
        <div class="flow-card__badge">{{ step.badge }}</div>
        <h3>{{ step.title }}</h3>
        <p>{{ step.description }}</p>
        <ul class="flow-card__details">
          <li v-for="detail in step.details" :key="detail">{{ detail }}</li>
        </ul>
      </article>
    </div>
  </section>
</template>

<script setup>
const steps = [
  {
    badge: 'Paso 1',
    title: 'Sign in con Google',
    description:
      'Un único botón para autenticarte con tu correo institucional. Nada de contraseñas adicionales ni formularios extensos.',
    details: [
      'OAuth con cuentas @univ.edu.pe',
      'Detección automática del nombre y programa',
      'Compatibilidad inmediata con Android'
    ]
  },
  {
    badge: 'Paso 2',
    title: 'Confirmación de ciclo',
    description:
      'Selecciona tu ciclo de ingreso de una lista pre cargada con los últimos ocho años, dos ingresos por año.',
    details: [
      'Selector tipo sheet con 16 opciones',
      'Validación antes de guardar preferencias',
      'Resumen editable de tus datos sincronizados'
    ]
  },
  {
    badge: 'Paso 3',
    title: 'Inicio con mapa dinámico',
    description:
      'Explora eventos, cursos y ubicaciones clave representadas en un mapa del campus con pins cercanos a -12.018, -77.052.',
    details: [
      'Tarjetas con horarios y recordatorios',
      'Pins enriquecidos con descripciones',
      'Atajos directos a rutas y agendas'
    ]
  }
];
</script>

<style scoped>
.flow {
  max-width: 1120px;
  margin: clamp(3rem, 7vw, 6rem) auto;
  padding: 0 clamp(1.5rem, 5vw, 2.5rem);
  display: grid;
  gap: clamp(2rem, 3vw, 3rem);
}

.flow__intro {
  max-width: 680px;
}

.flow__eyebrow {
  display: inline-block;
  font-size: 0.85rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #c62828;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.flow__timeline {
  display: grid;
  gap: clamp(1.5rem, 2.5vw, 2.25rem);
}

.flow-card {
  background: #ffffff;
  border-radius: 22px;
  padding: clamp(1.6rem, 3vw, 2.4rem);
  border: 1px solid rgba(198, 40, 40, 0.1);
  box-shadow: 0 18px 36px rgba(198, 40, 40, 0.08);
  display: grid;
  gap: 0.9rem;
}

.flow-card__badge {
  width: fit-content;
  border-radius: 999px;
  padding: 0.35rem 0.9rem;
  font-size: 0.75rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  background: rgba(198, 40, 40, 0.12);
  color: #c62828;
  font-weight: 600;
}

.flow-card h3 {
  margin: 0;
  font-size: 1.4rem;
}

.flow-card p {
  margin: 0;
  color: var(--text-secondary);
  line-height: 1.6;
}

.flow-card__details {
  margin: 0;
  padding-left: 1.1rem;
  color: var(--text-secondary);
  display: grid;
  gap: 0.45rem;
  font-size: 0.95rem;
}

.flow-card__details li {
  line-height: 1.5;
}

@media (max-width: 640px) {
  .flow {
    margin: 2.5rem auto;
  }

  .flow__intro {
    text-align: center;
  }

  .flow-card {
    padding: 1.25rem 1.4rem;
  }
}
</style>
