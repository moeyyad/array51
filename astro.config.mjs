import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://moeyyad.github.io",
  base: "courses",
  integrations: [tailwind(), mdx(), sitemap()],
});