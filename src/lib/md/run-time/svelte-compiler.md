---
layout: section
id: svelteCompiler
h: Svelte compiler
docs: https://svelte.dev/docs#compile-time
---
Typically, you won't interact with the Svelte compiler directly, but will instead integrate it into your build system using a bundler plugin. The bundler plugin that the Svelte team most recommends and invests in is [vite-plugin-svelte](https://github.com/sveltejs/vite-plugin-svelte).  
Nonetheless, it's useful to understand how to use the compiler, since bundler plugins generally expose compiler options to you.  