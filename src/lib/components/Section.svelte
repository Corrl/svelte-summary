<script context="module">
    import {writable} from 'svelte/store'

    export const currentSection = writable('')
</script>

<script>
    import {slide} from 'svelte/transition'
    import {quadInOut} from 'svelte/easing'
    import Docs from "../icons/Docs.svelte";
    import Tutorial from "../icons/Tutorial.svelte";

    export let layout = undefined // prevent warning in dev mode
    export let id
    export let h
    export let prefix = ""
    export let suffix = ""
    export let indent

    export let docs = ''
    export let tutorials = []

    $: current = $currentSection === id

    let dIn = 800
    let dOut = 200
    let delay

    function toggleSection() {
        delay = $currentSection ? dOut : 0
        $currentSection = current ? '' : id
    }

    function loadChecked(node) {
        node.checked = JSON.parse(localStorage.getItem(id))
    }

    function persistChecked(event) {
        localStorage.setItem(id, event.target.checked)
    }
</script>

<div class="section"
     class:indent-section={indent}
     class:no-indent-section={!indent}
>

    <div class="section-header" on:click={toggleSection}
         class:current-section={current}
         class:indent
    >
        <input type="checkbox"
               on:click|stopPropagation
               use:loadChecked
               on:change={persistChecked}
        >
        <h2>
            <span class="prefix">
                {prefix}
            </span>
            {h}
            <span style="font-weight: normal;">
                {suffix}
            </span>
        </h2>
        {#if docs}
            <a href={docs} on:click|stopPropagation title="The official docs' section" target="_blank">
                <Docs/>
            </a>
        {/if}
        {#if tutorials.length > 0}
            {#each tutorials as tutorial}
                <a href={tutorial} on:click|stopPropagation title="The tutorial lesson" target="_blank">
                    <Tutorial/>
                </a>
            {/each}
        {/if}
    </div>

    {#if id === $currentSection}
        <div class="section-content"
             in:slide={{duration: dIn, easing: quadInOut, delay}}
             out:slide={{duration: dOut, easing: quadInOut}}

        >
            <slot/>
        </div>
    {/if}

</div>

<style>
    .section {
        position: relative;
        padding-left: 1.4rem;
    }

    .indent {
        margin-left: .8rem;
    }

    .indent::before {
        position: absolute;
        content: '';
        background: #e6e6e6;
        width: 2px;
        top: -.2rem;
        bottom: -.2rem;
        left: -2.2rem;
    }

    .section + :global(.section) {
        margin-top: .4rem;
    }

    .indent-section + :global( .no-indent-section) {
        margin-top: 1rem;
    }

    .section-header {
        position: relative;
        display: flex;
        align-items: center;
    }

    .section-header a {
        line-height: 1;
        width: 1.4rem;
        height: 1.4rem;
        opacity: 0;
        transition: opacity 200ms;
    }

    .section-header a + a {
        margin-left: .4rem;
    }

    .section-header:hover a,
    .current-section a {
        opacity: 1;
    }

    .prefix {
        font-weight: normal;
        color: var(--grey);
        font-size: .5em;
    }

    h2 {
        cursor: pointer;
        user-select: none;
        margin: 0 .5rem 0 0;
        padding: .4rem .4rem .3rem .4rem;
        line-height: 1;
        border-radius: var(--border-r);
        transition: all 200ms;
    }

    .section-header:hover h2 {
        background: rgb(240, 240, 240);
    }

    .current-section h2 {
        background: rgb(240, 240, 240);
    }

    input {
        position: absolute;
        width: 1rem;
        height: 1rem;
        left: 0;
        top: .5rem;
        transform: translateX(-140%);
        accent-color: var(--prime);
        margin: 0;
        z-index: 1;
    }

    .section-content {
        padding: 1.5rem 0 1rem 0;
        margin-bottom: 2rem;
        border-bottom: 2px solid var(--prime);
    }
</style>