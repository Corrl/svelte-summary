---
layout: section
id: scriptStorePrefix
h: "$ store prefix"
indent: true
docs: https://svelte.dev/docs#component-format-script-4-prefix-stores-with-$-to-access-their-values
tutorials: ['https://svelte.dev/tutorial/auto-subscriptions']
---
**Inside a component** you can access the value of a store by prefixing its reference with the `$` character. This causes Svelte to declare the prefixed variable, subscribe to the store at component initialization and unsubscribe when appropriate.

#### store.js

```js
import {writable} from 'svelte/store';

export const count = writable(0);
```

#### *.svelte

```html
<script>
    import {count} from './store.js';

    function increase() {
        $count += 1 // count has to be writable store 
    }
</script>

count: {$count}

<button on:click={increase}>
    count++
</button>
```