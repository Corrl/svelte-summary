---
layout: section
id: scriptContextModule
h: <script context="module">
docs: https://svelte.dev/docs#component-format-script-context-module
tutorials: ['https://svelte.dev/tutorial/sharing-code', 'https://svelte.dev/tutorial/module-exports']
---
A `<script>` tag with a `context="module"` attribute runs once when the module first evaluates, rather than for each component instance. Values declared in this block are accessible from a regular `<script>` (and the component markup) but not vice versa.
```html
<script context="module">
    // shared by all component instances
</script>

<script>
	// values above are accessible
</script>

<!-- HTML -->

<style>    
</style>
```