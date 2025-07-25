// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://smartlizardpy.github.io/remzikaygusuz',
  base: '/remzikaygusuz',
  vite: {
    plugins: [tailwindcss()]
  }
});