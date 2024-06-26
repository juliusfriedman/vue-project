import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import tailwind from 'tailwindcss';
import VueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), vueJsx(), VueDevTools()],
    css: {
        postcss: {
            plugins: [tailwind()],
        },
    },
    build: {
        modulePreload: false,
        chunkSizeWarningLimit: 500,
        rollupOptions: {
            external: ['pinia', 'vue', 'vue-router'],
            output: {
                globals: {
                    vue: 'Vue'
                },
                paths: {
                    pinia: 'https://cdn.jsdelivr.net/npm/pinia@^2.1.7/+esm',
                    '@iconify/vue': 'https://cdn.jsdelivr.net/npm/@iconify/vue@^4.1.2/+esm',
                    'radix-vue': 'https://esm.sh/radix-vue@1.8.4?deps=vue@3.4.30',
                    '@radix-ui/colors': 'https://cdn.jsdelivr.net/npm/@radix-ui/colors@^3.0.0/+esm',
                    'tailwindcss': 'https://cdn.jsdelivr.net/npm/tailwind@^3.4.4/+esm',
                    vue: 'https://esm.sh/vue@3.4.30',
                    'vue-router': 'https://esm.sh/vue-router@4.4.0?deps=vue@3.4.30',
                }
            }
        }
    },
    resolve: {
        dedupe: ['pinia', 'vue', 'vue-router'],
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            pinia: 'https://cdn.jsdelivr.net/npm/pinia@^2.1.7/+esm',
            '@iconify/vue': 'https://cdn.jsdelivr.net/npm/@iconify/vue@^4.1.2/+esm',
            'radix-vue': 'https://esm.sh/radix-vue@1.8.4?deps=vue@3.4.30',
            '@radix-ui/colors': 'https://cdn.jsdelivr.net/npm/@radix-ui/colors@^3.0.0/+esm',
            'tailwindcss': 'https://cdn.jsdelivr.net/npm/tailwind@^3.4.4/+esm',
            vue: 'https://esm.sh/vue@3.4.30',
            'vue-router': 'https://esm.sh/vue-router@4.4.0?deps=vue@3.4.30',
        }
    }
});
