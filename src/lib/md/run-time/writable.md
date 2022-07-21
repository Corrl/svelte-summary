---
layout: section
id: writable
indent: true
h: writable
docs: https://svelte.dev/docs#run-time-svelte-store-writable
tutorials: ['https://svelte.dev/tutorial/writable-stores', 'https://svelte.dev/tutorial/store-bindings']
---
Not all application state belongs inside your application's component hierarchy. Sometimes, you'll have values that need to be accessed by multiple unrelated components, or by a regular JavaScript module.
In Svelte, we do this with stores.
```html
import { writable } from 'svelte/store';

export const count = writable('startValue');
```