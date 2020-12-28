<script lang="ts">
    import type Controller from "../../controller/Controller";

    export let controller: Controller;
    let mins = 0,
        secs = 0,
        decimal = 0;

    function updateTime() {
        let diff = $controller.startTimestamp
            ? ($controller.finishTimestamp ?? Date.now()) -
              $controller.startTimestamp
            : 0;

        mins = Math.floor(diff / 1000 / 60);
        secs = Math.floor(diff / 1000) % 60;
        decimal = Math.floor(diff / 100) % 10;
    }

    setInterval(updateTime, 10);
</script>

<style>
    div {
        grid-area: stat;
        font-size: 4rem;
        text-align: center;
    }
</style>

<div>
    {mins
        .toString()
        .padStart(2, '0')}:{secs.toString().padStart(2, '0')}.{decimal}
</div>
