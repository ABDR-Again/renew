import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import { cpSync, existsSync } from 'node:fs';

function copyStaticAssets() {
  return {
    name: 'copy-static-assets',
    closeBundle() {
      cpSync(resolve(__dirname, 'assets'), resolve(__dirname, 'dist', 'assets'), { recursive: true });

      const cnamePath = resolve(__dirname, 'CNAME');
      if (existsSync(cnamePath)) {
        cpSync(cnamePath, resolve(__dirname, 'dist', 'CNAME'));
      }
    },
  };
}

export default defineConfig({
  root: __dirname,
  base: './',
  appType: 'mpa',
  plugins: [copyStaticAssets()],
  css: {
    transformer: 'lightningcss',
  },
  build: {
    cssMinify: 'lightningcss',
    target: 'esnext', // Ensure esbuild uses modern target
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        thankYou: resolve(__dirname, 'thank-you.html'),
      },
    },
  },
});
