---
layout: section
id: key
h: "{#key ...}"
docs: https://svelte.dev/docs#template-syntax-key
tutorials: ['https://svelte.dev/tutorial/key-blocks']
---
Key blocks destroy and recreate their contents when the value of an expression changes.

```html
{#key value}

<div>
    Recreated whenever 'value' changes
</div>

<Component>
    Reinstantiated and reinitialised whenever 'value' changes
</Component>

{/key}
```