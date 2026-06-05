import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'url';
import path from 'path';

const root = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  site: 'https://kylenumann.github.io',
  base: '/openmined-brand-reference',
  vite: {
    resolve: {
      alias: {
        '@tokens': path.join(root, 'src/tokens'),
        '@brand':  path.join(root, 'src/components'),
      },
    },
  },
});
