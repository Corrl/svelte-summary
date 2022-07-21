---
layout: section
id: get
indent: true
h: get
docs: https://svelte.dev/docs#run-time-svelte-store-get
---
`get` allows to retrieve the value of a store to which there's no active subscription. It works by creating a subscription, reading the value, then unsubscribing. It's therefore not recommended in hot code paths. 
```html
import { get } from 'svelte/store';

const value = get(store);
```