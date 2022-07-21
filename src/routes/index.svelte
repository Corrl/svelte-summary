<script context="module">
    import {loadMarkdown} from "../lib/loadMarkdown.js";

    export async function load({}) {
        const contents = await loadMarkdown()
        return {
            props: {
                contents
            }
        }
    }
</script>

<script>
    export let contents

    const sectionIds = [
        '---COMPONENT FORMAT',

        'component',

        'sub--<script>',
        'scriptComponentProp',
        'scriptReactiveAssignments',
        'scriptReactiveStatement',
        'scriptStorePrefix',

        'scriptContextModule',
        'style',

        '---TEMPLATE SYNTAX',

        'attributesAndProps',
        'if',
        'each',
        'await',
        'key',
        'html',
        'debug',
        'const',

        'sub--Element directives',
        'elemOnEventname',
        'elemBindProperty',
        'elemBindGroup',
        'elemBindThis',
        'elemClassName',
        'elemStyleProperty',
        'elemUseAction',
        'elemTransitionFn',
        'elemInFnOutFn',
        'elemAnimateFn',

        'sub--Component directives',
        'compOnEventname',
        'compStyleProps',
        'compBindProperty',
        'compBindThis',

        'sub--<slot>',
        'slot',
        'slotName',
        'slotSlotsObj',
        'slotKey',

        'svelteSelf',
        'svelteComponent',
        'svelteElement',
        'svelteWindow',
        'svelteBody',
        'svelteHead',
        'svelteOptions',
        'svelteFragment',

        '---RUN TIME',

        'sub--svelte',
        'onMount',
        'beforeAfterUpdate',
        'onDestroy',
        'tick',
        'context',
        'createEventDispatcher',

        'sub--svelte/store',
        'writable',
        'readable',
        'derived',
        'get',
        'customStores',

        'sub--svelte/motion',
        'tweened',
        'spring',

        'sub--svelte/transition',
        'transitions',
        'crossfade',

        'sub--svelte/animate',
        'flip',

        'sub--svelte/easing',
        'easing',

        'sub--svelte/register',
        'register',

        'sub--Client-side component API',
        'creatingAComponent',
        'setOnDestroy',
        'componentProps',

        'customElementApi',
        'serverSideComponentApi',

        '---COMPILE TIME',
        'svelteCompiler',

        '---ACCESSIBILITY WARNINGS',
        'a11y',
    ]
</script>

<div id="content">
    {#each sectionIds as id}
        {#if id.startsWith('---')}
            <div class="delimitor">{id.slice(3)}</div>
        {:else if id.startsWith('sub--')}
            <div class="sub">
                {id.slice(5)}
            </div>
        {:else}
            <svelte:component this={contents[id]}/>
        {/if}
    {/each}
</div>

<style>
    .delimitor {
        background: var(--back);
        margin: 1.4rem 0 .8rem -.3rem;
        padding: .6rem 0 .1rem .4rem;
        line-height: 1;
        font-size: .9rem;
    }

    .sub {
        position: relative;
        margin: .6rem 0 .2rem 0;
    }

    :global(.indent-section) + .sub {
        margin-top: 1.2rem;
    }

</style>