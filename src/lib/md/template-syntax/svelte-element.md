---
layout: section
id: svelteElement
h: <svelte:element>
docs: https://svelte.dev/docs#template-syntax-svelte-element
tutorials: ['https://svelte.dev/tutorial/svelte-element']
---
The `<svelte:element>` element lets you render an element of a dynamically specified type.
```html
<script>
	let tag = 'div';
	export let handler;
</script>

<svelte:element this={tag} on:click={handler}>Foo</svelte:element>
```