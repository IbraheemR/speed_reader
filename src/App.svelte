<script lang="ts">
	import { onMount } from "svelte";

	import LineView from "./components/views/LineView.svelte";
	import ProgressView from "./components/views/ProgressView.svelte";
	import SetupButton from "./components/views/setup/SetupButton.svelte";
	import SetupScreen from "./components/views/setup/SetupScreen.svelte";
	import TimeView from "./components/views/TimeView.svelte";
	import WpmView from "./components/views/WPMView.svelte";
	import Controller, { State } from "./controller/Controller";

	let controller: Controller = new Controller([]); // FIXME: dumb hack but it work for now. Empyt controller allows ui to populate until proper one is ready. in reality need to do checks for the controller

	let toggleSetup;

	$: if (toggleSetup) toggleSetup(); // Open config screen to set initial words
</script>

<style>
	#main {
		height: 100%;

		display: grid;
		grid-template-areas: "line line line line" "progress time wpm setup";
		grid-template-rows: 1fr auto;
		grid-template-columns: auto 1fr 1fr auto;
		align-items: center;
		gap: 5rem;

		padding: 5rem 20vw;
	}

	.line {
		grid-area: line;

		height: 100%;
	}

	.time {
		grid-area: time;
	}

	.wpm {
		grid-area: wpm;
	}
	.progress {
		grid-area: progress;
	}
	.setup {
		grid-area: setup;
		justify-self: end;
	}

	.grey {
		color: var(--theme-mid);
	}
</style>

<section id="main">
	<div class="line">
		<LineView {controller} />
	</div>

	<div class="progress" class:grey={$controller.state !== State.FINISHED}>
		<ProgressView {controller} />
	</div>
	<div class="time" class:grey={$controller.state !== State.FINISHED}>
		<TimeView {controller} />
	</div>
	<div class="wpm" class:grey={$controller.state !== State.FINISHED}>
		<WpmView {controller} />
	</div>

	<div class="setup">
		<SetupButton callback={toggleSetup} />
	</div>
</section>

<SetupScreen bind:toggle={toggleSetup} bind:controller />
