<script lang="ts">
import Controller, { State } from "../../controller/Controller";
export let controller: Controller;

let grey = false;

</script>


<div class:grey={$controller.state !== State.IN_PROGRESS}>
{#if controller.state === State.READY}
    Press space to start
{:else if  controller.state === State.IN_PROGRESS}
    {$controller.currentLine}
{:else}
    Done
{/if}
</div>

<style>
    div {
        font-size: 2rem;
        text-align: center;

        padding: 2rem;
    }

    div.grey {
        color: rgb(56, 56, 55);
    }
</style>