// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://david-poch-silva.vercel.app',
  vite: { plugins: [tailwindcss()] },
});
