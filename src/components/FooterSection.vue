<template>
  <footer class="footer">
    <div class="footer__brand">
      <strong>Comunica</strong>
      <span>El campus en la palma de tu mano.</span>
    </div>
    <div class="footer__credits">
      <span>Hecho con ❤ desde Lima, Perú.</span>
      <span>© {{ currentYear }} Comunica. Todos los derechos reservados.</span>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>

<style scoped>
.footer {
  margin: clamp(3rem, 6vw, 5rem) auto 2rem;
  max-width: 960px;
  padding: 1.5rem 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 2rem;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid rgba(198, 40, 40, 0.16);
  color: var(--text-secondary);
}

.footer__brand {
  display: grid;
  gap: 0.25rem;
}

.footer__brand strong {
  font-size: 1.1rem;
  color: #c62828;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.footer__credits {
  display: grid;
  gap: 0.2rem;
  font-size: 0.9rem;
}

@media (max-width: 640px) {
  .footer {
    flex-direction: column;
    text-align: center;
    padding: 1.5rem 1rem;
  }
}
</style>
