---
layout: section
id: slotName
indent: true
h: <slot name="name">
docs: https://svelte.dev/docs#template-syntax-slot-slot-name-name
tutorials: ['https://svelte.dev/tutorial/named-slots']
---
Named slots allow consumers to target specific areas. They can also have fallback content.
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
	<p slot="footer">Copyright (c) 2019 Svelte Industries</p>
</Widget>
```
Components can be placed in a named slot using the syntax `<Component slot="name" />`