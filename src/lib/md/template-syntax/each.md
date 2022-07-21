---
layout: section
id: each
h: "{#each ...}"
docs: https://svelte.dev/docs#template-syntax-each
tutorials: ['https://svelte.dev/tutorial/each-blocks', 'https://svelte.dev/tutorial/keyed-each-blocks']
---
Iterating over any **array or array-like value** (any object with a length property) can be done with an `{#each}`
block.

```html
{#each arr as a}
  {a}
{/each}

{#each arr as a, index}
  {index+1} - {a}
{/each}
```

Use a **`key`** if you want Svelte to diff the list when data changes, rather than adding or removing items at the end.
The key can be any object, but **strings and numbers are recommended** since they allow identity to persist when the
objects
themselves change.

```html
{#each arr as a (a.id)}
  {index+1} - {a}
{/each}

{#each arr as a, index (a.id)}
  {index+1} - {a}
{/each}
```
**Destructuring** and **rest patterns** are possible.
```html
{#each items as {id, foo, bar} } ... {/each}

{#each items as {id, ...rest}, index (id)} ... {/each}

{#each arr as [key, value]} ... {/each}
```
An each block can also have an **`{:else}`** clause, which is rendered if the list is empty.
```html
{#each todos as todo}
	<p>{todo.text}</p>
{:else}
	<p>No tasks today!</p>
{/each}
```