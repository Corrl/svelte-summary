---
layout: section
id: elemStyleProperty
indent: true
h: style:property
docs: https://svelte.dev/docs#template-syntax-element-directives-style-property
tutorials: ['https://svelte.dev/tutorial/style-directive']
---
The `style:` directive provides a shorthand for setting multiple styles on an element.
```html
<!-- These are equivalent -->
<div style:color="red">...</div>
<div style="color: red;">...</div>

<!-- Variables can be used -->
<div style:color={myColor}>...</div>

<!-- Shorthand, for when property and variable name match -->
<div style:color>...</div>

<!-- Multiple styles can be included -->
<div style:color
     style:width="12rem"
     style:background-color={darkMode ? "black" : "white"}>
...
</div>
```