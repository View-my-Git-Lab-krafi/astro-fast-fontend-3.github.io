import { defineConfig } from 'astro/config';

import netlify from "@astrojs/netlify";

//if you are using localhost PC
//export default defineConfig({}); 

//If you are using netlify
export default defineConfig({ site: 'https://fast-fontend-1.netlify.app', output: "server", adapter: netlify({ edgeMiddleware: true }) });
