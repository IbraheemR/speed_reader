<script lang="ts">
    import type { tick } from "svelte";
    import Controller from "../../../controller/Controller";
    import { smartSplit, splitLines } from "../../../util/lineSplitter";

    export let controller;

    export let shown = false;
    export const toggle = function () {
        shown = !shown;
    };

    let text = "";

    function doSmartSplit() {
        text = smartSplit(text).join("\n");
    }

    function submit() {
        shown = false;

        controller = new Controller(splitLines(text));
    }
</script>

<style>
    #config {
        position: fixed;
        top: 0;
        bottom: 0;

        width: 100%;
        height: 100%;

        background: #000000c2;

        padding: 5rem 20vw;

        display: grid;
        grid-template-rows: auto 1fr auto;
        grid-template-areas: "title title" "textarea textarea" "smart submit";
    }

    #config:not(.shown) {
        display: none;
    }

    .title {
        grid-area: title;
    }

    textarea {
        grid-area: textarea;
    }

    .smart {
        grid-area: smart;
    }

    .submit {
        grid-area: submit;

        justify-self: end;

        font-size: 1rem;
        width: 3rem;
    }
</style>

<section id="config" class:shown>
    <div class="title">Enter text:</div>
    <textarea bind:value={text} cols="30" rows="10" />

    <div class="smart button" on:click={doSmartSplit}>Smart Split</div>

    <svg class="submit button" on:click={submit} viewBox="0 0 32 32">
        <polygon
            points="13 24 4 15 5.414 13.586 13 21.171 26.586 7.586 28 9 13 24" />
    </svg>
</section>
