---
layout: section
id: compBindProperty
indent: true
h: bind:property
docs: https://svelte.dev/docs#template-syntax-component-directives-bind-property
tutorials: ['https://svelte.dev/tutorial/component-bindings']
---
You can bind to component props using the same syntax as for elements.
```html
<Keypad bind:value={pin}/>
```