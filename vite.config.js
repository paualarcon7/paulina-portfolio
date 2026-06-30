import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' keeps asset paths relative, so the same build works on both
// Vercel (served at /) and GitHub Pages (served at /<repo-name>/).
export default defineConfig({
  plugins: [react()],
  base: './',
})
