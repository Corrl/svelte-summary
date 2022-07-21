---
layout: section
id: spring
indent: true
h: spring
docs: https://svelte.dev/docs#run-time-svelte-motion-spring
tutorials: ['https://svelte.dev/tutorial/spring']
---
The spring function is an alternative to tweened that often works better for values that are frequently changing.
```html
store = spring(value: any, options)
```