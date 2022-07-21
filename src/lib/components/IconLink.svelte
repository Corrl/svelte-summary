<script>
    import Docs from "../icons/Docs.svelte";
    import Tutorial from "../icons/Tutorial.svelte";

    export let type
    export let link
</script>

<a href={link} target="_blank">

    {#if type === 'docs'}
        <Docs/>
    {:else}
        <Tutorial />
    {/if}

</a>

<style>
a {
    display: inline-block;
    width: 1.4rem;
    height: 1.4rem;
    transform: translateY(.3rem);
}
</style>