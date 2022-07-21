---
layout: section
id: elemInFnOutFn
indent: true
h: in:fn/out:fn
docs: https://svelte.dev/docs#template-syntax-element-directives-in-fn-out-fn
tutorials: ['https://svelte.dev/tutorial/in-and-out']
---
Unlike with `transition:`, transitions applied with `in:` and `out:` are not bidirectional.
```html
import { fade, fly } from 'svelte/transition';

<p in:fly out:fade>
	Flies in, fades out
</p>
```