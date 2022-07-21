---
layout: section
id: attributesAndProps
h: Attributes & Props
docs: https://svelte.dev/docs#template-syntax-attributes-and-props
tutorials: ['https://svelte.dev/tutorial/spread-props']
---

- By default, attributes work exactly like their HTML counterparts. As in HTML, values may be unquoted.
- Attribute values can contain JavaScript expressions.
- *Boolean attributes* are included on the element if
  their value is *truthy* and excluded if it's *falsy*. All other attributes are included unless their value is *
  nullish (null
  or undefined)*.

```html
<input required={false} placeholder="This input field is not required">
<div title={null}>This div has no title attribute</div>
```

When the attribute or property name and its value match `name={name}`, the shorthand `{name}` can be used. These are equivalent:

```html
<button disabled={disabled}>...</button>
<button {disabled}>...</button>

<Comp value={value}/>
<Comp {value}/>
```

**Spread attributes** allow many attributes or properties to be passed to an element or component at once.

#### Parent.svelte

```html
<script>
    import Child from './Child.svelte'

    const props = {
        name: 'xxx',
        age: 42
    }
</script>

<Child {...props}/>
```

#### Child.svelte

```html
<script>
    export let name
    export let age
</script>
```

- **`$$props`** references all props that are passed to a component, including ones that are not declared with export. **It is not
generally recommended, as it is difficult for Svelte to optimise.** But it can be useful in rare cases – for example, when
you don't know at compile time what props might be passed to a component.
- **`$$restProps`** contains only the props which are not declared with export. **It shares the same optimisation problems as `$$props`**