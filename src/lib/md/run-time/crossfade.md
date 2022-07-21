---
layout: section
id: crossfade
indent: true
h: crossfade
docs: https://svelte.dev/docs#run-time-svelte-transition-crossfade
tutorials: ['https://svelte.dev/tutorial/deferred-transitions']
---
The crossfade function creates a pair of transitions called send and receive. When an element is 'sent', it looks for a corresponding element being 'received', and generates a transition that transforms the element to its counterpart's position and fades it out. When an element is 'received', the reverse happens.