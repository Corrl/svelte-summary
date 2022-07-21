---
layout: section
id: slotKey
indent: true
h: <slot key={value}>
docs: https://svelte.dev/docs#template-syntax-slot-slot-key-value
tutorials: ['https://svelte.dev/tutorial/slot-props']
---
Slots can pass values back to the parent using props. The parent exposes the values to the slot template using the `let: directive`. Named slots can also expose values.
```html
<!-- FancyList.svelte -->
<ul>
	{#each items as item}
		<li class="fancy">
			<slot prop={item}></slot>
		</li>
	{/each}
</ul>

<!-- App.svelte -->
<FancyList {items} let:prop={thing}>
	<div>{thing.text}</div>
</FancyList>
```