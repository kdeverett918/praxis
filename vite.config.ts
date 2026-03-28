import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('react-dom') || id.includes('react-router-dom')) return 'react-vendor'
          if (id.includes('recharts') || id.includes('lucide-react')) return 'ui-vendor'
          if (id.includes('gsap') || id.includes('motion')) return 'animation-vendor'
          if (id.includes('@supabase')) return 'supabase'
        },
      },
    },
  },
})
