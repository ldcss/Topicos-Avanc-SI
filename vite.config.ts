import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths"
import mkcert from 'vite-plugin-mkcert'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), mkcert(),tailwindcss(),],
  server: process.env.NODE_ENV === 'development' ? {
    proxy: {
      '/api': {
        target: 'https://openrouter.ai/api',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
    }
  } : undefined,
  base: '/',
},
)