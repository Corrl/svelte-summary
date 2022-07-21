---
layout: section
id: slot
indent: true
h: <slot>
docs: https://svelte.dev/docs#template-syntax-slot
tutorials: ['https://svelte.dev/tutorial/slots', 'https://svelte.dev/tutorial/slot-fallbacks']
---
Components can have child content, in the same way that elements can.

The content is exposed in the child component using the `<slot>` element, which can contain fallback content that is rendered if no children are provided.
```html
<!-- Widget.svelte -->
<div>
	<slot>
		this fallback content will be rendered when no content is provided, like in the first example
	</slot>
</div>

<!-- App.svelte -->
<Widget></Widget> <!-- this component will render the default content -->

<Widget>
	<p>this is some child content that will overwrite the default slot content</p>
</Widget>
```