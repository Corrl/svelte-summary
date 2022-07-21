---
layout: section
id: compStyleProps
indent: true
h: --style-props
docs: https://svelte.dev/docs#template-syntax-component-directives---style-props
---
You can also pass styles as props to components for the purposes of theming, using CSS custom properties.
```html
<Slider
  bind:value
  min={0}
  --rail-color="black"
  --track-color="rgb(0, 0, 255)"
/>
```
**An extra `<div>` wrapper element is added** - be mindful of that.