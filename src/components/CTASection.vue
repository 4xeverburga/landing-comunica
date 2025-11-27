<template>
  <section id="descarga" class="cta">
    <div class="cta__content">
      <h2>Prepárate para el lanzamiento en Android</h2>
      <p>
        Únete a la lista de espera para ser de las primeras personas en probar Comunica. Recibirás actualizaciones de progreso, invitaciones a betas cerradas y recursos para tu ciclo.
      </p>
      <form class="cta__form" @submit.prevent="onSubmit">
        <input
          v-model="email"
          type="email"
          name="email"
          placeholder="Tu correo @univ.edu.pe"
          required
        />
        <button type="submit" :disabled="isSubmitting">
          <span v-if="isSubmitting">Guardando…</span>
          <span v-else>Quiero enterarme primero</span>
        </button>
      </form>
      <p v-if="feedbackMessage" :class="['cta__feedback', feedbackState]">
        {{ feedbackMessage }}
      </p>
      <span class="cta__hint">Prometemos enviar solo contenido relevante. Nada de spam.</span>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');
const isSubmitting = ref(false);
const feedbackMessage = ref('');
const feedbackState = ref('');

async function onSubmit() {
  const value = email.value.trim();
  if (!value || isSubmitting.value) {
    return;
  }

  isSubmitting.value = true;
  feedbackMessage.value = '';
  feedbackState.value = '';

  try {
    const response = await fetch('/api/waitlist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: value })
    });

    if (!response.ok) {
      throw new Error('Bad response');
    }

    email.value = '';
    feedbackMessage.value = '¡Listo! Te avisaremos apenas lancemos la beta.';
    feedbackState.value = 'cta__feedback--success';
  } catch (err) {
    feedbackMessage.value = 'No pudimos guardar tu correo. Inténtalo nuevamente en unos segundos.';
    feedbackState.value = 'cta__feedback--error';
  } finally {
    isSubmitting.value = false;
  }
}
</script>

<style scoped>
.cta {
  max-width: 960px;
  margin: clamp(3rem, 8vw, 6rem) auto;
  padding: clamp(2.5rem, 5vw, 3.5rem);
  border-radius: 32px;
  background: linear-gradient(130deg, #c62828 0%, #8b1d1d 100%);
  color: #ffffff;
  box-shadow: 0 28px 56px rgba(198, 40, 40, 0.32);
}

.cta__content {
  display: grid;
  gap: 1.4rem;
}

.cta h2 {
  margin: 0;
  font-size: clamp(2rem, 3.2vw, 2.8rem);
}

.cta p {
  margin: 0;
  font-size: 1.05rem;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.88);
}

.cta__form {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.cta__form input {
  flex: 1 1 280px;
  border-radius: 16px;
  border: none;
  padding: 0.85rem 1.2rem;
  font-size: 1rem;
  box-shadow: inset 0 0 0 1px rgba(198, 40, 40, 0.15), 0 8px 20px rgba(198, 40, 40, 0.18);
  background: #ffffff;
  color: #1f1f24;
  min-height: 52px;
}

.cta__form input::placeholder {
  color: rgba(31, 31, 36, 0.6);
}

.cta__form button {
  border-radius: 16px;
  border: none;
  padding: 0.95rem 1.8rem;
  font-weight: 600;
  background: #ffffff;
  color: #c62828;
  cursor: pointer;
  transition: transform 0.2s ease;
  min-height: 52px;
  box-shadow: 0 10px 26px rgba(198, 40, 40, 0.22);
}

.cta__form button:hover {
  transform: translateY(-1px);
}

.cta__form button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
}

.cta__hint {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
}

.cta__feedback {
  margin: 0;
  font-size: 0.9rem;
  padding: 0.6rem 0.9rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.16);
}

.cta__feedback--success {
  color: #d2ffdd;
}

.cta__feedback--error {
  color: #ffe1df;
}

@media (max-width: 640px) {
  .cta {
    margin: 2.25rem 1rem;
    padding: 2rem 1.5rem;
  }

  .cta__form {
    flex-direction: column;
  }

  .cta__form input,
  .cta__form button {
    width: 100%;
    flex: 0 0 auto;
  }

  .cta__hint {
    text-align: center;
  }
}
</style>
