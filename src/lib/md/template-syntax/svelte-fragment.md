---
layout: section
id: svelteFragment
h: <svelte:fragment>
docs: https://svelte.dev/docs#template-syntax-svelte-fragment
tutorials: ['https://svelte.dev/tutorial/svelte-fragment']
---
The `<svelte:fragment>` element allows you to place content in a named slot without wrapping it in a container DOM element. This keeps the flow layout of your document intact.
```html
<!-- Widget.svelte -->
<div>
	<slot name="header">No header was provided</slot>
	<p>Some content between header and footer</p>
	<slot name="footer"></slot>
</div>

<!-- App.svelte -->
<Widget>
	<h1 slot="header">Hello</h1>
	<svelte:fragment slot="footer">
		<p>All rights reserved.</p>
		<p>Copyright (c) 2019 Svelte Industries</p>
	</svelte:fragment>
</Widget>
```