import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT:
// If your repo is YOUR_USERNAME.github.io → use base: '/'
// If your repo is something like "my-portfolio" → use base: '/my-portfolio/'
export default defineConfig({
  plugins: [react()],
  base: '/', 
})
