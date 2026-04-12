import { defineConfig } from 'astro/config';
import solidJs from '@astrojs/solid-js';
import node from '@astrojs/node';

export default defineConfig({
  integrations: [solidJs()],
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
  vite: {
    ssr: {
      noExternal: ['@tracewebstudio/shared'],
    },
  },
});
