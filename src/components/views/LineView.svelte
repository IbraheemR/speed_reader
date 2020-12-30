<script lang="ts">
    import Controller, { State } from "../../controller/Controller";
    export let controller: Controller;

    let grey = false;
</script>

<style>
    div {
        font-size: 1.5rem;

        padding: 0 0 0 30rem;
    }

    .grey {
        color: rgb(56, 56, 55);
    }
</style>

<div class:grey={$controller.state !== State.IN_PROGRESS}>
    {#if controller.state === State.READY}
        Press space to start
    {:else if controller.state === State.IN_PROGRESS}
        <span class="grey">{$controller.prevLine ?? ''}</span><br />
        {$controller.currentLine}<br />
        <!-- <span class="grey">{$controller.nextLine ?? ''}</span> -->
    {:else}Done{/if}
</div>
