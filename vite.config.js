import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],

  server: {
    host: '0.0.0.0',
    allowedHosts: ['orionsat-frontend.9uo8j1.easypanel.host']
  },

  preview: {
    host: '0.0.0.0',
    allowedHosts: ['orionsat-frontend.9uo8j1.easypanel.host']
  }
})
