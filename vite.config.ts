import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    VueDevTools(),
  ],
  build:{
    "modulePreload": false,
    "chunkSizeWarningLimit": 500,
    "rollupOptions": {
      "external": [
        "pinia",
        "vue",
        "vue-router"
      ],
      "output": {
        "paths": {
          "pinia": "https://cdn.jsdelivr.net/npm/pinia@^2.1.7/+esm",
          "vue": "https://cdn.jsdelivr.net/npm/vue@^3.4.29/+esm",
          "vue-router": "https://cdn.jsdelivr.net/npm/vue-router@^4.3.3/+esm"
        }
      }
    },
  },  
  resolve: {
    "dedupe": [
      "pinia",
      "vue",
      "vue-router"
    ],
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
