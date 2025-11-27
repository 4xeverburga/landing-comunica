import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 5173,
    host: true,
    proxy: {
      '/api': {
        target: process.env.WORKER_URL || 'http://127.0.0.1:8787',
        changeOrigin: true,
        secure: false
      }
    }
  }
});
