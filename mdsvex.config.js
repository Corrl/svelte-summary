import { defineMDSveXConfig as defineConfig } from "mdsvex";

const config = defineConfig({
  extensions: [".svelte.md", ".md", ".svx"],

  smartypants: {
    dashes: "oldschool",
  },

  layout: {
    section: './src/lib/components/Section.svelte'
  },

  remarkPlugins: [],
  rehypePlugins: [],
});

export default config;
