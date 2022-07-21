---
layout: section
id: elemOnEventname
indent: true
h: on:eventname
docs: https://svelte.dev/docs#template-syntax-element-directives-on-eventname
tutorials: ['https://svelte.dev/tutorial/dom-events', 'https://svelte.dev/tutorial/inline-handlers', 'https://svelte.dev/tutorial/dom-event-forwarding']
---
Listen to any event on an element with the `on:` directive.  
DOM event handlers can have modifiers that alter their behaviour.
```html
<script>
	function handleClick() {
		alert('no more alerts')
	}
</script>

<button on:click|once={handleClick}>
	Click me
</button>
```