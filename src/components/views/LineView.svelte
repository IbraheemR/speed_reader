<script lang="ts">
    import Controller, { State } from "../../controller/Controller";
    export let controller: Controller;

    let grey = false;
</script>

<style>
    .main {
        width: 100%;
        height: 100%;

        font-size: 1.5rem;

        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 15rem auto 1fr;
    }

    .main :first-child {
        align-self: end;
    }

    .main .currentline {
        position: relative;
    }

    .main .currentline::before {
        /* Using em not rem so dot scales with changing parent font size */
        content: " ";
        position: absolute;
        left: -1em;
        top: 0.1em;

        background-color: red;

        width: 0.8em;
        height: 0.8em;

        border-radius: 50%;
    }
    .grey {
        color: rgb(56, 56, 55);
    }
</style>

<div class="main" class:grey={$controller.state !== State.IN_PROGRESS}>
    {#if controller.state === State.READY}
        <div>Press space to start</div>
    {:else if controller.state === State.IN_PROGRESS}
        <div class="grey">{$controller.prevLine ?? ''}</div>
        <div class="currentline">{$controller.currentLine}</div>
        <div class="grey">{$controller.nextLine ?? ''}</div>
    {:else}
        <div>Done</div>
    {/if}
</div>
