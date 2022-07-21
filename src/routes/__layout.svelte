<script>
    import '../lib/styles/app.css'
    import '../lib/styles/colors.css'
    import '../lib/styles/font.css'
    import '../lib/styles/prism.css'
    import SvelteLogoHorizontal from "../lib/SvelteLogoHorizontal.svelte";
    import IconLink from "../lib/components/IconLink.svelte";
</script>

<div id="page">

    <div id="logo">
        <SvelteLogoHorizontal width="300"/>
        <div id="summary">Summary</div>
    </div>

    <div id="intro">
        <p>
            This page contains a table of contents of the official <a href="https://svelte.dev/docs" target="_blank">Svelte
            docs</a>, providing both links to the corresponding sections, the <a href="https://svelte.dev/tutorial/" target="_blank">tutorial</a> lessons
            and a short summary. It might come in handy for Svelte learners to track their learning progress, mark already 'mastered' features and quickly discover yet unknown ones.
        </p>
        <ul>
            <li>
                <b>Click on the title</b> to open a section
            </li>
            <li>
                <IconLink type="docs" link="https://svelte.dev/docs"/> &thinsp;links to its counterpart in the <a
                    href="https://svelte.dev/docs" target="_blank">official docs</a>
            </li>
            <li>
                <IconLink type="tutorial" link="https://svelte.dev/tutorial/"/> &thinsp;will bring you to the <a
                    href="https://svelte.dev/tutorial/" target="_blank">tutorial</a> lesson
            </li>
            <li>
                <b>Track your progress</b> via the checkboxes<input type="checkbox" checked>
            </li>
        </ul>

        <h1>
            Enjoy <span style="font-style: italic; font-weight: normal;">(learning)</span> Svelte 🖤️
        </h1>
    </div>

    <slot/>

</div>

<style>

    #page {
        background: white;
        padding: 1rem 3rem 3rem 3rem;
        margin: 0 auto;
        width: min(800px, 90%);
        border-radius: var(--border-r);
    }

    #logo {
        position: relative;
        margin: 1rem 0 2rem 0;
        width: min-content;
    }

    #summary {
        position: absolute;
        top: 60%;
        right: 4%;
        font-size: 1.4rem;
        color: var(--prime);
        font-style: italic;
    }

    #intro {
        /*padding-bottom: .4rem;*/
        margin-bottom: 2rem;
        /*border-bottom: .6rem solid var(--back);*/
    }

    input {
        accent-color: var(--prime);
        margin: 0 .25rem;
        width: 1rem;
        height: 1rem;
        transform: translateY(.15rem);
    }

    ul {
        list-style: revert;
        padding: 0 0 0 2rem;
        margin: 1.5rem 0;
    }

    li {
        font-size: 1rem;
    }

    li + li {
        margin-top: .8rem;
    }

    h1 {
        font-size: 1.2rem;
        color: var(--prime);
        margin: 2rem 0 1rem 0;
    }

</style>