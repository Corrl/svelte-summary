---
layout: section
id: readable
indent: true
h: readable
docs: https://svelte.dev/docs#run-time-svelte-store-readable
tutorials: ['https://svelte.dev/tutorial/readable-stores']
---
A `readable` store cannot be set from 'outside'.
```html
import { readable } from 'svelte/store';

const r1 = readable('value')

const r2 = readable('initialValue', set => set('newValue'))
```