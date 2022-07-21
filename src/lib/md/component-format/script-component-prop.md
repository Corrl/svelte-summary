---
layout: section
id: scriptComponentProp
indent: true
h: component prop export
docs: https://svelte.dev/docs#component-format-script-1-export-creates-a-component-prop
tutorials: ['https://svelte.dev/tutorial/declaring-props', 'https://svelte.dev/tutorial/default-values']
---

- Svelte uses the `export` keyword to mark a variable declaration as a ***property*** or ***prop***.
- A **default value** can be set which is used if the prop wasn't specified on the component or if its initial value
  is `undefined`.
- Values that are passed in as props are **immediately available**.
```html
<script>
    export let foo = 'defaultValue';
    console.log(foo);
</script>
```
If you export a const, class or function, it is readonly from outside the component. Function expressions are valid props, however.
```html
<script>
    export const thisIs = 'readonly';

    export function readOnly() {
        alert(`I'm readonly`);
    }

    export let propFn = () => alert("I'm a prop")
</script>
```
You can use **reserved words** as prop names.
```html
<script>
    let className;

    export {className as class};
</script>
```