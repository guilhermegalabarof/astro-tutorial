// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://guilhermgalabarof-astro-tutorial.netlify.app",
  integrations: [react()],
});