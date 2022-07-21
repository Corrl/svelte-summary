---
layout: section
id: const
h: "{@const ...}"
docs: https://svelte.dev/docs#template-syntax-const
---
The `{@const ...}` tag defines a local constant.
```html
<script>
	export let boxes;
</script>

{#each boxes as box}
	{@const area = box.width * box.height}
	{box.width} * {box.height} = {area}
{/each}
```