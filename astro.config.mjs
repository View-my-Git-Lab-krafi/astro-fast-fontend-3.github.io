import { defineConfig } from 'astro/config';

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: netlify()
});


/*import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'http://localhost', // Use a placeholder URL
  // other configuration options
});
*/