<script>
	import { Trekant, Heksagon, Prisme } from './classes';

	let sideTrekant = 0;
	let sideHeksagon = 0;
	let hoydePrisme = 0;

	let prismeVolum = 0;
	let prismeAreal = 0;

	function beregnPrisme() {
		const trekant = new Trekant(sideTrekant);
		const heksagon = new Heksagon(sideHeksagon);
		const prisme = new Prisme(trekant, hoydePrisme);

		prismeVolum = prisme.regn_ut_volum();
		prismeAreal = prisme.regn_ut_areal();
	}
</script>

<div>
	<input type="number" bind:value={sideTrekant} placeholder="Side for trekant" />
	<input type="number" bind:value={sideHeksagon} placeholder="Side for heksagon" />
	<input type="number" bind:value={hoydePrisme} placeholder="Høyde for prisme" />
	<button on:click={beregnPrisme}>Beregn Prisme</button>

	<div>
		<p>Prisme Volum: {prismeVolum}</p>
		<p>Prisme Areal: {prismeAreal}</p>
	</div>
</div>
