// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://david-poch-silva.vercel.app',
  integrations: [react(), keystatic()],
  adapter: vercel(),
  vite: { plugins: [tailwindcss()] },
});
