---
layout: section
id: compBindThis
indent: true
h: bind:this
docs: https://svelte.dev/docs#template-syntax-component-directives-bind-this
tutorials: ['https://svelte.dev/tutorial/component-this']
---
Just as you can bind to DOM elements, you can bind to component instances themselves.
```html
<script>
	let field;
</script>

<InputField bind:this={field} />
```