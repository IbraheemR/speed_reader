<script lang="ts">
    import Controller, { State } from "../../controller/Controller";
    export let controller: Controller;

    let grey = false;
</script>

<style>
    .main {
        height: 100%;

        font-size: 1rem;

        padding: 0 10rem;

        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 15rem auto 1fr;
    }

    .main :nth-child(1) {
        align-self: end;
    }
    .grey {
        color: rgb(56, 56, 55);
    }
</style>

<div class="main" class:grey={$controller.state !== State.IN_PROGRESS}>
    {#if controller.state === State.READY}
        Press space to start
    {:else if controller.state === State.IN_PROGRESS}
        <div class="grey">{$controller.prevLine ?? ''}</div>
        <div>{$controller.currentLine}</div>
        <div class="grey">{$controller.nextLine ?? ''}</div>
    {:else}Done{/if}
</div>
