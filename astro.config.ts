import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { SITE } from "./src/config";

export default defineConfig({
  site: SITE.website,
  integrations: [react(), mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    },
  },
  scopedStyleStrategy: "where",
});
