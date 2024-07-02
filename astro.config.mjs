
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://<user>.gitlab.io',
  base: '/<project-name>',
  outDir: 'public',
  publicDir: 'static',
});


