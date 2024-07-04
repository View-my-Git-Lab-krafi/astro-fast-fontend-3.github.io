
import { defineConfig } from 'astro/config';

import netlify from "@astrojs/netlify";

//if you are using localhost PC
//export default defineConfig({}); 

//If you are using netlify
//export default defineConfig({ output: "server", adapter: netlify() });



















//Just To  keep some old default stuff

//export default defineConfig({ output: "server", adapter: netlify() });

export default defineConfig({
    output: "server",
    adapter: netlify()
  });

  
/*
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'http://localhost', // Use a placeholder URL
  // other configuration options
});


*/