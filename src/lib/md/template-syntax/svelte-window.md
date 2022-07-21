---
layout: section
id: svelteWindow
h: <svelte:window>
docs: https://svelte.dev/docs#template-syntax-svelte-window
tutorials: ['https://svelte.dev/tutorial/svelte-window', 'https://svelte.dev/tutorial/svelte-window-bindings']
---
The `<svelte:window>` element allows you to add event listeners to the window object without worrying about removing them when the component is destroyed, or checking for the existence of window when server-side rendering.  
It may only appear at the top level and must never be inside a block or element. It is also possible to bind to various properties. 
```html
<svelte:window on:keydown={handleKeydown}/>
```