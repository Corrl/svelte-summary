---
layout: section
id: elemBindProperty
indent: true
h: bind:property
docs: https://svelte.dev/docs#template-syntax-element-directives-bind-property
tutorials: ['https://svelte.dev/tutorial/text-inputs', 'https://svelte.dev/tutorial/numeric-inputs', 'https://svelte.dev/tutorial/checkbox-inputs', 'https://svelte.dev/tutorial/textarea-inputs', 'https://svelte.dev/tutorial/select-bindings', 'https://svelte.dev/tutorial/multiple-select-bindings', 'https://svelte.dev/tutorial/contenteditable-bindings', 'https://svelte.dev/tutorial/each-block-bindings', 'https://svelte.dev/tutorial/media-elements']
---
There are various specific bindings to particular elements. If the variable name matches the value, you can use a shorthand.
```html
<input bind:value={value}>
<input bind:value>

<input type="checkbox" bind:checked="{checked}">
<input type="checkbox" bind:checked>
```
```html
<input bind:value={name}>

<textarea bind:value={text}></textarea>

<input type="checkbox" bind:checked={yes}>

<select bind:value={selected}>
	<option value={a}>a</option>
	<option value={b}>b</option>
	<option value={c}>c</option>
</select>
```
Elements with a `contenteditable="true"` attribute support `textContent` and `innerHTML` bindings.
```html
<div
	contenteditable="true"
	bind:innerHTML={html}
></div>
```
The `<audio>` and `<video>` elements have several properties that you can bind to. [This example demonstrates a few of them](https://svelte.dev/tutorial/media-elements)
```html
<video ...
	bind:currentTime={time}
	bind:duration
	bind:paused
>
</video>
```
Every block-level element has clientWidth, clientHeight, offsetWidth and offsetHeight bindings.
```html
<div bind:clientWidth={w} bind:clientHeight={h}>
	...
</div>
```