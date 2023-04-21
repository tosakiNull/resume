import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'Components': fileURLToPath(new URL('./src/components', import.meta.url)),
      'Views': fileURLToPath(new URL('./src/views', import.meta.url)),
      'Stores': fileURLToPath(new URL('./src/stores', import.meta.url)),
    }
  }
})
