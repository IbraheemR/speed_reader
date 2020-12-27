<script lang="ts">
    import type Controller from "../controller/Controller";


    export let controller: Controller;
    let mins = 0, secs = 0, cents = 0;

    function updateTime() {
        let diff = $controller.startTimestamp ? ($controller.finishTimestamp ?? Date.now()) - $controller.startTimestamp : 0;

        mins = Math.floor(diff / 1000 / 60);
        secs = Math.floor(diff / 1000) % 1000;
        cents = Math.floor(diff / 10) % 100;
    }

    setInterval(updateTime, 10)
</script>


<div>{mins.toString().padStart(2, "0")}:{secs.toString().padStart(2, "0")}.{cents.toString().padStart(2, "0")}</div>

<style>
    div {
        grid-area: stat;
        font-size: 4rem;
        text-align: center;
    }
</style>
