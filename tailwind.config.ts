import type { Config } from 'tailwindcss';
import { blackA, green, grass, mauve } from '@radix-ui/colors';
/** @type {import('tailwindcss').Config} */
export default {
  content: [
      './src/**/*.{ts,tsx,vue}',
      './src/views/*.{ts,tsx,vue}',
      './**/*.vue'
  ],
  theme: {
    extend: {
      colors: {
        ...blackA,
        ...green,
        ...grass,
        ...mauve,
      },
    },
  },
  plugins: []
} satisfies Config;
