---
layout: section
id: elemClassName
indent: true
h: class:name
docs: https://svelte.dev/docs#template-syntax-element-directives-class-name
tutorials: ['https://svelte.dev/tutorial/classes', 'https://svelte.dev/tutorial/class-shorthand']
---
A `class:` directive provides a shorter way of toggling a class on an element.
```html
<!-- These are equivalent -->
<div class="{active ? 'active' : ''}">...</div>
<div class:active={active}>...</div>

<!-- Shorthand, for when name and value match -->
<div class:active>...</div>

<!-- Multiple class toggles can be included -->
<div class:active class:inactive={!active} class:isAdmin>...</div>
```