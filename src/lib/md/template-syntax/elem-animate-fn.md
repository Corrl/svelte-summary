---
layout: section
id: elemAnimateFn
indent: true
h: animate:fn
docs: https://svelte.dev/docs#template-syntax-element-directives-animate-fn
tutorials: ['https://svelte.dev/tutorial/animate']
---
- An animation is triggered when the contents of a keyed each block are re-ordered.
- Animations do not run when an element is added or removed, only when the index of an existing data item within the each block changes.
- Animate directives must be on an element that is an immediate child of a keyed each block.
```html
<!-- When `list` is reordered the animation will run-->
{#each list as item, index (item)}
	<li animate:flip>{item}</li>
{/each}
```