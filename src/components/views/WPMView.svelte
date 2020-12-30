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
        grid-template-areas: "title avg avglabel" "title last lastlabel";
        grid-template-columns: auto 7rem 1fr;
        gap: 0.5rem;
        align-items: baseline;

        font-size: 1.5rem;
    }

    .title {
        grid-area: title;
        font-size: 2rem;

        align-self: center;
    }

    .stat {
        text-align: right;
    }

    .label {
        font-size: 1rem;
    }

    .avg.stat {
        grid-area: avg;
        text-align: right;
    }

    .avg.label {
        grid-area: avglabel;
    }

    .last.stat {
        grid-area: last;
        text-align: right;
    }

    .last.label {
        grid-area: lastlabel;
    }
</style>

<section>
    <div class="title">WPM</div>
    <div class="avg stat">{$controller.totalWpm?.toFixed(2) || 'N/A'}</div>
    <div class="avg label">total</div>
    <div class="last stat">{$controller.lastWpm?.toFixed(2) || 'N/A'}</div>
    <div class="last label">last</div>
</section>
