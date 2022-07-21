---
layout: section
indent: true
id: componentProps
h: Component props
docs: https://svelte.dev/docs#run-time-client-side-component-api-component-props
---
If a component is compiled with `accessors: true`, each instance will have getters and setters corresponding to each of the component's props.  
Setting a value will cause a synchronous update.
```html
component.prop = value
```