---
layout: section
id: transitions
indent: true
h: transitions
docs: https://svelte.dev/docs#run-time-svelte-transition
tutorials: ['https://svelte.dev/tutorial/transition', 'https://svelte.dev/tutorial/adding-parameters-to-transitions', 'https://svelte.dev/tutorial/custom-css-transitions', 'https://svelte.dev/tutorial/custom-js-transitions', 'https://svelte.dev/tutorial/transition-events', 'https://svelte.dev/tutorial/local-transitions']
---
The `svelte/transition` module exports seven functions: `fade`, `blur`, `fly`, `slide`, `scale`, `draw` and `crossfade`.
[Here's a REPL](https://svelte.dev/repl/e5d82142b94548f3b1da0bdc00eeb252?version=3.49.0) comparing them.
```html
transition:xxx={params}

in:xxx={params}

out:xxx={params}
```