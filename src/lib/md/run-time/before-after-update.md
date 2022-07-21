---
layout: section
id: beforeAfterUpdate
indent: true
h: before/afterUpdate
docs: https://svelte.dev/docs#run-time-svelte-beforeupdate
tutorials: ['https://svelte.dev/tutorial/update']
---
```html
<script>	
	import { beforeUpdate, afterUpdate } from 'svelte';
    
	beforeUpdate(() => {
		// runs immediately before the DOM is updated		
	});

	afterUpdate(() => {
		// runs once the DOM is in sync with new data
	});
```