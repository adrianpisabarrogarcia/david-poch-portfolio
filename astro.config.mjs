// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://david-poch-portfolio.vercel.app',
  vite: { plugins: [tailwindcss()] },
});
