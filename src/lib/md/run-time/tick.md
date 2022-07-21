---
layout: section
id: tick
indent: true
h: tick
docs: https://svelte.dev/docs#run-time-svelte-tick
tutorials: ['https://svelte.dev/tutorial/tick']
---
`tick` returns a promise that resolves once any pending state changes have been applied, or in the next microtask if there are none.
```html
import { tick } from 'svelte';

await tick();
```