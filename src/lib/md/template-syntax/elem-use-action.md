---
layout: section
id: elemUseAction
indent: true
h: use:action
docs: https://svelte.dev/docs#template-syntax-element-directives-use-action
tutorials: ['https://svelte.dev/tutorial/actions', 'https://svelte.dev/tutorial/adding-parameters-to-actions']
---
Actions are functions that are called when an element is created. Optionally they can have a parameter or return an
object with an update method which is called whenever the paramter changes or a destroy method that is called after the
element is unmounted.

```html
<script>
    function action(node, param) {
        // the node has been mounted in the DOM
        return {
            update(param) {
                // `param` has changed
            },
            destroy() {
                // the node has been removed from the DOM
            }
        };
    }
</script>

<div use:action="{param}"></div>
```