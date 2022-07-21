---
layout: section
id: elemTransitionFn
indent: true
h: transition:fn
docs: https://svelte.dev/docs#template-syntax-element-directives-transition-fn
tutorials: ['https://svelte.dev/tutorial/transition', 'https://svelte.dev/tutorial/adding-parameters-to-transitions', 'https://svelte.dev/tutorial/custom-css-transitions', 'https://svelte.dev/tutorial/custom-js-transitions', 'https://svelte.dev/tutorial/transition-events', 'https://svelte.dev/tutorial/local-transitions']
---
A transition is triggered by an **element entering or leaving the DOM** as a result of a state change.
```html
{#if visible}
	<p transition:fly="{{ y: 200, duration: 2000 }}">
		Flies in and out
	</p>
{/if}
```
**Local** transitions only play when the block they belong to is created or destroyed, not when parent blocks are created or destroyed.
```html
{#if x}
	{#if y}
		<p transition:fade>
			fades in and out when x or y change
		</p>

		<p transition:fade|local>
			fades in and out only when y changes
		</p>
	{/if}
{/if}
```