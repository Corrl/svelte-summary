---
layout: section
id: elemBindThis
indent: true
h: bind:this
docs: https://svelte.dev/docs#template-syntax-element-directives-bind-this
tutorials: ['https://svelte.dev/tutorial/bind-this']
---
The readonly `this` binding allows you to obtain a reference to rendered elements.
```html
<canvas
	bind:this={canvas}
	width={32}
	height={32}
></canvas>
```