<template>
  <header class="hero">
    <nav class="hero__nav">
      <div class="hero__brand">
        <img :src="logoUrl" alt="Comunica" class="hero__logo" />
        <span class="hero__brand-name">Comunica</span>
      </div>
      <a class="hero__cta" href="#experiencia">Ver experiencia</a>
    </nav>

    <div class="hero__content">
      <div class="hero__text">
        <span class="hero__pill">App móvil para estudiantes peruanos</span>
        <h1>Todo tu campus, organizado y a un toque de distancia.</h1>
        <p>
          Comunica te mantiene al día con lo que sí importa: aulas, eventos y servicios
          universitarios conectados en una sola app para Android.
        </p>
        <div class="hero__actions">
          <a class="hero__button hero__button--primary" href="#descarga">Únete a la lista de lanzamiento</a>
          <a class="hero__button hero__button--ghost" href="#mapa">Explorar mapa</a>
        </div>
        <ul class="hero__bullets">
          <li>Inicio inteligente con recordatorios clave</li>
          <li>Integración con tu cuenta institucional de Google</li>
          <li>Mapas didácticos con ubicaciones y rutas</li>
        </ul>
      </div>
      <div class="hero__visual" aria-hidden="true">
        <div class="mockup">
          <div class="mockup__status-bar">
            <span>09:42</span>
            <span>5G</span>
          </div>
          <div class="mockup__screen">
            <div class="mockup__google">
              <span>Inicia sesión con Google</span>
              <button type="button" class="mockup__google-btn">
                <span class="mockup__google-icon">G</span>
                <span>Continuar con Google</span>
              </button>
            </div>
            <div class="mockup__divider"></div>
            <div class="mockup__step">
              <span class="mockup__step-label">Tu ciclo de ingreso</span>
              <span class="mockup__step-value">2024-II</span>
            </div>
            <div class="mockup__step">
              <span class="mockup__step-label">Confirma tus datos</span>
              <span class="mockup__chip">Nombre institucional</span>
              <span class="mockup__chip">Correo @univ.edu.pe</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import logoUrl from '../../assets/images/comunica-app-main-logo.svg';
</script>

<style scoped>
.hero {
  background: linear-gradient(135deg, #ed4f4f 0%, #c62828 45%, #8b1d1d 100%);
  color: #ffffff;
  padding: clamp(2rem, 4vw, 4rem) clamp(1.5rem, 5vw, 6rem) clamp(3rem, 5vw, 6rem);
  border-bottom-left-radius: 48px;
  border-bottom-right-radius: 48px;
  position: relative;
  overflow: hidden;
}

.hero::after {
  content: '';
  position: absolute;
  inset: 10% 20% auto auto;
  width: 380px;
  height: 380px;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.26), transparent);
  filter: blur(1px);
  z-index: 0;
}

.hero__nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 1;
  margin-bottom: clamp(2rem, 3vw, 3.5rem);
}

.hero__brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 600;
  font-size: 1.1rem;
}

.hero__logo {
  width: 44px;
  height: 44px;
}

.hero__brand-name {
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.hero__cta {
  color: rgba(255, 255, 255, 0.88);
  border-bottom: 1px solid rgba(255, 255, 255, 0.32);
  padding-bottom: 0.25rem;
  font-weight: 500;
  transition: opacity 0.2s ease;
}

.hero__cta:hover {
  opacity: 0.72;
}

.hero__content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: clamp(2rem, 6vw, 5rem);
  align-items: center;
  position: relative;
  z-index: 1;
}

.hero__text h1 {
  font-size: clamp(2.4rem, 4.8vw, 3.8rem);
  margin: 1rem 0 1.25rem;
  max-width: 540px;
}

.hero__text p {
  font-size: clamp(1.05rem, 1.8vw, 1.25rem);
  line-height: 1.6;
  max-width: 520px;
  margin: 0 0 1.75rem;
  color: rgba(255, 255, 255, 0.88);
}

.hero__pill {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0.9rem;
  border-radius: 999px;
  background-color: rgba(255, 255, 255, 0.14);
  backdrop-filter: blur(6px);
  font-size: 0.95rem;
  letter-spacing: 0.02em;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.hero__button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 999px;
  padding: 0.75rem 1.6rem;
  font-weight: 600;
  font-size: 0.95rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.hero__button--primary {
  background-color: #ffffff;
  color: #c62828;
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.18);
}

.hero__button--primary:hover {
  transform: translateY(-2px);
}

.hero__button--ghost {
  border: 1px solid rgba(255, 255, 255, 0.6);
  color: #ffffff;
  background: transparent;
}

.hero__bullets {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.75rem;
  color: rgba(255, 255, 255, 0.82);
  font-size: 0.95rem;
}

.hero__bullets li {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
}

.hero__bullets li::before {
  content: '•';
  font-size: 1.4rem;
  line-height: 1;
  margin-top: -0.1rem;
}

.hero__visual {
  display: flex;
  justify-content: center;
}

.mockup {
  width: clamp(280px, 30vw, 320px);
  aspect-ratio: 9 / 19.5;
  border-radius: 28px;
  padding: 1.2rem 1rem;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.32);
  backdrop-filter: blur(12px);
  position: relative;
  box-shadow: 0 24px 40px rgba(0, 0, 0, 0.3);
}

.mockup::after {
  content: '';
  position: absolute;
  inset: 0.85rem;
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.22);
  pointer-events: none;
}

.mockup__status-bar {
  display: flex;
  justify-content: space-between;
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  color: rgba(255, 255, 255, 0.7);
}

.mockup__screen {
  margin-top: 1.4rem;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.82) 100%);
  border-radius: 18px;
  padding: 1.4rem 1.1rem;
  color: #c62828;
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
}

.mockup__google {
  display: grid;
  gap: 0.75rem;
}

.mockup__google span {
  font-weight: 600;
  color: #8b1d1d;
}

.mockup__google-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  justify-content: center;
  border-radius: 999px;
  border: none;
  padding: 0.6rem 1rem;
  background: #ffffff;
  color: #1f1f24;
  font-weight: 600;
  cursor: pointer;
  box-shadow: inset 0 0 0 1px rgba(198, 40, 40, 0.2);
}

.mockup__google-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background: #ffffff;
  color: #c62828;
  font-weight: 700;
}

.mockup__divider {
  height: 1px;
  background: rgba(198, 40, 40, 0.18);
}

.mockup__step {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.mockup__step-label {
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(139, 29, 29, 0.7);
}

.mockup__step-value {
  font-size: 1.25rem;
  font-weight: 700;
  color: #c62828;
}

.mockup__chip {
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  padding: 0.35rem 0.75rem;
  background: rgba(198, 40, 40, 0.12);
  font-size: 0.8rem;
  color: #8b1d1d;
  width: fit-content;
}

@media (max-width: 720px) {
  .hero {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .hero__content {
    grid-template-columns: 1fr;
  }

  .hero__visual {
    order: -1;
  }
}
</style>
