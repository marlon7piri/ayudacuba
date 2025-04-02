// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from "@astrojs/vercel"

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  experimental: {
    svg: {
      mode:"sprite"
    },
    
  },adapter:vercel(),
  site:'https://www.hoysecome.org'
});