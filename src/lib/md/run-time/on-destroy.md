---
layout: section
id: onDestroy
indent: true
h: onDestroy
docs: https://svelte.dev/docs#run-time-svelte-ondestroy
tutorials: ['https://svelte.dev/tutorial/ondestroy']
---
To run code when your component is destroyed, use `onDestroy`.
```html
<script>
	import { onDestroy } from 'svelte';

	let counter = 0;
	const interval = setInterval(() => counter += 1, 1000);

	onDestroy(() => clearInterval(interval));
</script>
```