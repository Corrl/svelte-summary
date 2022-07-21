---
layout: section
id: style
h: <style>
docs: https://svelte.dev/docs#component-format-style
tutorials: ['https://svelte.dev/tutorial/styling']
---
CSS inside a `<style>` block will be scoped to that component.  
To apply styles to a selector globally, use the `:global(...)` modifier.
```html
<style>
	div {
        /* will only apply to div elements belonging to this component*/
	}
    div :global(.my-class) {
        /* will apply to all elements with 'my-class' inside a div belonging */
        /* to this component. Useful if the compiler doesn't know of the class, */
        /* but the styling should still be scoped */
    }
	:global(p) {
        /* will apply to all p elements in app*/
	}    
</style>
```
