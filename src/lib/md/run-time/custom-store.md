---
layout: section
id: customStores
indent: true
h: Custom stores
tutorials: ['https://svelte.dev/tutorial/custom-stores']
---
As long as an object correctly implements the subscribe method, it's a store.
```js
function createCustomStore() {
    const {subscribe, set, update} = writable(0);

    return {
        subscribe,
        increment: () => update(n => n + 1),
        decrement: () => update(n => n - 1),
        reset: () => set(0)
    };
}

const customStore = createCustomStore()
```