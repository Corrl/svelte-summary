---
layout: section
id: context
indent: true
h: context
docs: https://svelte.dev/docs#run-time-svelte-setcontext
tutorials: ['https://svelte.dev/tutorial/context-api']
---
The context API provides a mechanism for components to 'talk' to each other without passing around data and functions as props, or dispatching lots of events.
```html
<!-- App.svelte -->
<script>
	import { setContext } from 'svelte';

	setContext('answer', 42);
</script>
```
Context is not inherently reactive. If you need reactive values in context then you can pass a store into context, which will be reactive.
```html
<!-- ChildComp.svelte -->
<script>
	import { getContext } from 'svelte';

	const answer = getContext('answer');
</script>
```