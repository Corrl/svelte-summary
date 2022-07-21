---
layout: section
id: scriptReactiveStatement
indent: true
h: "$: reactive statement"
docs: https://svelte.dev/docs#component-format-script-3-$-marks-a-statement-as-reactive
tutorials: ['https://svelte.dev/tutorial/reactive-declarations', 'https://svelte.dev/tutorial/reactive-statements']
---
Any **top-level statement** (i.e. not inside a block or a function) can be made reactive by prefixing it with the `$:` JS label syntax.
```html
<script>
    export let title;

    // do sth whenever title changes
    $: document.title = title;
    $: if (title.length > 10) console.log('This is a long title!')
    $: modifyTitle(title)

    function modifyTitle() {
        title = title.trim()
    }

    // reactive block
    $: {
        console.log(`multiple statements can be combined`);
        console.log(`the current title is ${title}`);
    }

    let count

    // "reactive variable"
    // no previous declaration 'let double/half' necessary!
    $: double = count * 2
    $: half = count / 2
</script>
```