import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  vite: {
    resolve: {
      alias: {
        '@tokens': path.resolve(__dirname, '../tokens'),
        '@brand':  path.resolve(__dirname, '../components'),
      },
    },
  },
});
