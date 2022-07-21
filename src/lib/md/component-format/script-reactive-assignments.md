---
layout: section
id: scriptReactiveAssignments
indent: true
h: assignments are 'reactive'
docs: https://svelte.dev/docs#component-format-script-2-assignments-are-reactive
tutorials: ['https://svelte.dev/tutorial/reactive-assignments', 'https://svelte.dev/tutorial/updating-arrays-and-objects']
---

To change component state and trigger a re-render, just **assign** to a locally declared variable.
```html
<script>
    let count = 0;

    function modifyCount() {
        count = count + 1;
        // or
        count += 1
    }

    let arr = [0, 1];

    function modifyArr() {
        arr.push(2)
        arr = arr // important
        // or
        arr = [...arr, 2]
    }

    let obj = {a: 'a'}

    function modifyObj() {
        obj.a = 'A'
    }
</script>
```