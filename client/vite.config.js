import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import Sitemap from 'vite-plugin-sitemap'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    Sitemap({
      hostname: 'https://flashcabcables.com',
      dynamicRoutes: [
        '/',
        '/about',
        '/services',
        '/cable',
        '/blog',
        '/contact',
        '/cookie-policy'
      ]
    })
  ],
  css: {
    lightningcss: {
      errorRecovery: true
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true
      }
    }
  }
})
