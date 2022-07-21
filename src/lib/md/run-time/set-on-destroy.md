---
layout: section
id: setOnDestroy
indent: true
h: $set, $on, $destroy
docs: https://svelte.dev/docs#run-time-client-side-component-api-$set
---
`.$set()` programmatically sets props on an instance. An update for the next microtask is scheduled — the DOM is not updated synchronously.
```html
component.$set({ answer: 42 });
```
`.$on()` Causes the callback function to be called whenever the component dispatches an event. A function is returned that will remove the event listener when called.
```html
const off = app.$on('selected', event => {
	console.log(event.detail.selection);
});

off();
```
`.$destroy()` removes a component from the DOM and triggers any onDestroy handlers.
```html
component.$destroy()
```