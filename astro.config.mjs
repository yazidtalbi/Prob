import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import { astroImageTools } from "astro-imagetools";
import react from "@astrojs/react";
import compress from "astro-compress";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://arlibera.ma",
  integrations: [tailwind(), astroImageTools, react(), compress(), sitemap()],
});
