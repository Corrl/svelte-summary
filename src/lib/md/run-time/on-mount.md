---
layout: section
id: onMount
indent: true
h: onMount
docs: https://svelte.dev/docs#run-time-svelte-onmount
tutorials: ['https://svelte.dev/tutorial/onmount']
---
The onMount function schedules a callback to run as soon as the component has been mounted to the DOM.
```html
<script>
	import { onMount } from 'svelte';

	onMount(() => {
		console.log('the component has mounted');
        
        return () => console.log("I'll run when the component is destroyed")
	});
</script>
```