---
layout: section
id: if
h: "{#if ...}"
docs: https://svelte.dev/docs#template-syntax-if
tutorials: ['https://svelte.dev/tutorial/if-blocks', 'https://svelte.dev/tutorial/else-blocks', 'https://svelte.dev/tutorial/else-if-blocks']
---
To conditionally render content wrap it in an `{#if}` block. `{:else if}` and `{:else}` are optional. 
```html
{#if condition}
	...
{:else if otherCondition}
	...
{:else}
	...
{/if}
```