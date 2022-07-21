---
layout: section
id: createEventDispatcher
indent: true
h: createEventDispatcher
docs: https://svelte.dev/docs#run-time-svelte-createeventdispatcher
tutorials: ['https://svelte.dev/tutorial/component-events']
---
Components can dispatch events by creating an event dispatcher.
```html
<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function sayHello() {
		dispatch('message', {
			text: 'Hello!'
		});
	}
</script>
```