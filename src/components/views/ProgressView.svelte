<script lang="ts">
    import type Controller from "../../controller/Controller";

    export let controller: Controller;
    // TODO: abstracts to a stats cotroller? or maybe util functions are sufficient
    // TODO: Graph?
</script>

<style>
    section {
        max-width: 30rem;

        display: grid;
        grid-template-areas: "lines lineslabel" "words wordslabel";
        grid-template-columns: auto 1fr;
        gap: 0.5rem;
        align-items: baseline;

        font-size: 1.5rem;
    }

    .stat {
        text-align: right;
    }

    .label {
        font-size: 1rem;
    }

    .lines.stat {
        grid-area: lines;
        text-align: right;
    }

    .lines.label {
        grid-area: lineslabel;
    }

    .words.stat {
        grid-area: words;
        text-align: right;
    }

    .words.label {
        grid-area: wordslabel;
    }
</style>

<section>
    <div class="lines stat">
        {`${$controller.currentIndex + 1}/${$controller.words.length}` || 'N/A'}
    </div>
    <div class="lines label">lines</div>
    <div class="words stat">
        {$controller.words
            .join(' ')
            .split(' ')
            .filter((x) => x).length}
    </div>
    <div class="words label">words</div>
</section>
