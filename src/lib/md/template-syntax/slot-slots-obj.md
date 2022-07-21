---
layout: section
id: slotSlotsObj
indent: true
h: $$slots
docs: https://svelte.dev/docs#template-syntax-slot-$$slots
tutorials: ['https://svelte.dev/tutorial/optional-slots']
---
`$$slots` is an object whose keys are the names of the slots passed into the component by the parent. If the parent does not pass in a slot with a particular name, that name will not be present in `$$slots`.