---
layout: section
id: compOnEventname
indent: true
h: on:eventname
docs: https://svelte.dev/docs#template-syntax-component-directives-on-eventname
tutorials: ['https://svelte.dev/tutorial/event-forwarding']
---
Components can emit events using createEventDispatcher, or by forwarding DOM events. Listening for component events looks the same as listening for DOM events:
```html
<SomeComponent on:whatever={handler}/>
```