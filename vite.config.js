import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Relative paths so the build works on GitHub Pages or any sub-folder.
  base: './',
  // Allow temporary share links (Cloudflare quick tunnels) to reach `vite preview`.
  preview: { allowedHosts: ['.trycloudflare.com'] },
})
