<script lang="ts">
    import Controller from "../../../controller/Controller";

    export let controller;

    export let shown = false;
    export const toggle = function () {
        shown = !shown;
    };

    function submit() {
        shown = false;

        controller = new Controller(text.split(/\n+/));
    }

    let text = "";
</script>

<style>
    #config {
        position: fixed;
        top: 0;
        bottom: 0;

        width: 100%;
        height: 100%;

        background: #000000c2;

        padding: 5rem;

        display: grid;
        grid-template-rows: auto 1fr auto;
        grid-template-areas: "title title" "textarea textarea" "_ submit";
    }

    #config:not(.shown) {
        display: none;
    }

    div {
        grid-area: title;
    }

    textarea {
        grid-area: textarea;
    }

    svg {
        grid-area: submit;

        justify-self: end;

        font-size: 1rem;
        width: 3rem;
    }
</style>

<section id="config" class:shown>
    <div>Enter text:</div>
    <textarea bind:value={text} cols="30" rows="10" />
    <svg on:click={submit} class="button" viewBox="0 0 32 32">
        <polygon
            points="13 24 4 15 5.414 13.586 13 21.171 26.586 7.586 28 9 13 24" />
    </svg>
</section>
