import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  compressHTML: false,
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "src/assets/styles/global.scss";`
        }
      }
    }
  }
});
