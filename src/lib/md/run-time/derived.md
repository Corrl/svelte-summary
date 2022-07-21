---
layout: section
id: derived
indent: true
h: derived
docs: https://svelte.dev/docs#run-time-svelte-store-derived
tutorials: ['https://svelte.dev/tutorial/derived-stores']
---
Derives a store from one or more other stores.
```html
import { derived } from 'svelte/store';

const d1 = derived(store, $store => 'modified $store')

const d2 = derived([store1, store2], ([$store1, $store2]) => 'value based on both stores')
```