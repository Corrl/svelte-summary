---
layout: section
id: svelteBody
h: <svelte:body>
docs: https://svelte.dev/docs#template-syntax-svelte-body
tutorials: ['https://svelte.dev/tutorial/svelte-body']
---
This element allows you to add listeners to events on `document.body` which don't fire on window. It also lets you use actions on the `<body>` element. It may only appear at the top level of your component and must never be inside a block or element.
```html
<svelte:body
	on:mouseenter={handleMouseenter}
	on:mouseleave={handleMouseleave}
	use:someAction
/>
```