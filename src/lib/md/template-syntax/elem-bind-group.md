---
layout: section
id: elemBindGroup
indent: true
h: bind:group
docs: https://svelte.dev/docs#template-syntax-element-directives-bind-group
tutorials: ['https://svelte.dev/tutorial/group-inputs']
---
Inputs that work together can use `bind:group`
```html
<script>
	let tortilla = 'Plain';
	let fillings = [];
</script>

<!-- grouped radio inputs are mutually exclusive -->
<input type="radio" bind:group={tortilla} value="Plain">
<input type="radio" bind:group={tortilla} value="Whole wheat">
<input type="radio" bind:group={tortilla} value="Spinach">

<!-- grouped checkbox inputs populate an array -->
<input type="checkbox" bind:group={fillings} value="Rice">
<input type="checkbox" bind:group={fillings} value="Beans">
<input type="checkbox" bind:group={fillings} value="Cheese">
<input type="checkbox" bind:group={fillings} value="Guac (extra)">
```