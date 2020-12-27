
<script lang="ts">
	import LineView from "./components/LineView.svelte";
import TimeView from "./components/TimeView.svelte";
import WpmView from "./components/WPMView.svelte";
	import Controller, { State } from "./controller/Controller";

	export let controller: Controller;
</script>

<main>
	<div class="line">
		<LineView {controller}></LineView>
	</div>
	<div class="time" class:grey={$controller.state !== State.FINISHED}>
		<TimeView {controller}></TimeView>
	</div>
	<div class="wpm" class:grey={$controller.state !== State.FINISHED}>
		<WpmView {controller}></WpmView>
	</div>

</main>

<style>
	main {
		height: 100%;

		display: grid;
		grid-template-areas: "line line" "time wpm";
		grid-template-rows: 1fr auto;
		align-items: center;
		gap: 5rem;
	}

	.line {
		grid-area: line;
	}

	.time {
		grid-area: time;
	}

	.wpm {
		grid-area: wpm;
	}

	.grey {
		color: var(--theme-mid);
	}
</style>