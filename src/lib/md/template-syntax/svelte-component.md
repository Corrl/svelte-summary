---
layout: section
id: svelteComponent
h: <svelte:component>
docs: https://svelte.dev/docs#template-syntax-svelte-component
tutorials: ['https://svelte.dev/tutorial/svelte-component']
---
The `<svelte:component>` element renders a component dynamically, using the component constructor specified as the this property. When the property changes, the component is destroyed and recreated. If `this` is falsy, no component is rendered.
```html
<svelte:component this={expression}/>
```
Example with page navigation in <a href="https://svelte.dev/repl/b7af1da4f1ef491d93e7dace20bd9902?version=3.49.0" target="_blank">REPL</a>