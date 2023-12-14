import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import { astroImageTools } from "astro-imagetools";
import react from "@astrojs/react";

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), astroImageTools, react(), compress()],
});
