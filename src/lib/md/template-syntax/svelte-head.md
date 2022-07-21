---
layout: section
id: svelteHead
h: <svelte:head>
docs: https://svelte.dev/docs#template-syntax-svelte-head
tutorials: ['https://svelte.dev/tutorial/svelte-head']
---
The `<svelte:head>` element allows you to insert elements inside the <head> of your document. It may only appear at the top level of your component and must never be inside a block or element.
```html
<svelte:head>
	<link rel="stylesheet" href="/tutorial/dark-theme.css">
</svelte:head>
```