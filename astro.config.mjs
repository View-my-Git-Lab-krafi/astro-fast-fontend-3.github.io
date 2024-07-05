import { defineConfig } from 'astro/config';

import netlify from "@astrojs/netlify";

//if you are using localhost PC
// export default defineConfig({}); 

//If you are using netlify
//export default defineConfig({ output: "server", adapter: netlify() });


export default defineConfig({ site: 'https://View-my-Git-Lab-krafi.gitlab.io',  base: '/astro-fast-fontend-3.github.io',})














//Just To  keep some old default stuff

//export default defineConfig({ output: "server", adapter: netlify() });
/*
export default defineConfig({
    output: "server",
    adapter: netlify()
  });
*/