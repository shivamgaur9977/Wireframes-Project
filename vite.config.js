import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  host: '0.0.0.0',
    port: process.env.PORT || 5173,  // Use the PORT variable from Render
  plugins: [react()],
})
