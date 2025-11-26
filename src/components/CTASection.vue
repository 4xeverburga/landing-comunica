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
        <button type="submit">Quiero enterarme primero</button>
      </form>
      <span class="cta__hint">Prometemos enviar solo contenido relevante. Nada de spam.</span>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');

function onSubmit() {
  const value = email.value.trim();
  if (!value) {
    return;
  }
  alert(`Gracias por registrarte, pronto te escribiremos a ${value}`);
  email.value = '';
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
  border-radius: 999px;
  border: none;
  padding: 0.8rem 1.2rem;
  font-size: 1rem;
  box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.4);
  background: rgba(255, 255, 255, 0.12);
  color: #ffffff;
}

.cta__form input::placeholder {
  color: rgba(255, 255, 255, 0.7);
}

.cta__form button {
  border-radius: 999px;
  border: none;
  padding: 0.85rem 1.8rem;
  font-weight: 600;
  background: #ffffff;
  color: #c62828;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.cta__form button:hover {
  transform: translateY(-1px);
}

.cta__hint {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
}

@media (max-width: 540px) {
  .cta__form {
    flex-direction: column;
  }

  .cta__form button {
    width: 100%;
  }
}
</style>
