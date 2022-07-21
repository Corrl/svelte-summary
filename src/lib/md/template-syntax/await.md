---
layout: section
id: await
h: "{#await ...}"
docs: https://svelte.dev/docs#template-syntax-await
tutorials: ['https://svelte.dev/tutorial/await-blocks']
---
Await the value of promises directly in your markup
```html
{#await promise}
	<!-- promise is pending -->	
{:then value}
	<!-- promise was fulfilled -->	
{:catch error}
	<!-- promise was rejected -->	
{/await}
```
```html
{#await promise then value}
	<!-- pending state doesn't matter -->	
{/await}
```
```html
{#await promise catch error}
	<!-- only an error should be handled -->	
{/await}
```