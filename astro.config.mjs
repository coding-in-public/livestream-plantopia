import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";
import db from "@astrojs/db";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), db(), icon()],
  image: {
    domains: ["unsplash.com"],
  },
  output: "server",
  adapter: vercel(),
});
