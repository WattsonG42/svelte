<script>
	import { reverseString } from '../lib/reverseString.js';
	import ErLikTest from '../unit_testing/ErLikTest.svelte';

	let testCases = [
		[[''], ''],
		[['AskerVGS'], 'SGVreksA'],
		[['Otto'], 'ottO'],
		[['10'], '01']
	];
</script>

<h1>Enhetstester for reverseString.js</h1>

<h2>reverseSring</h2>

<!-- Legg merke til arrayet i inndataene -->

<ul>
	{#each testCases as currentCase}
		<li>
			<!-- Kan enten legge på en ekstra [0] her eller i håndtere listeobjektet i selve biblioteket -->
			<ErLikTest
				inndata={currentCase[0]}
				forventetUtdata={currentCase[1]}
				funksjon={reverseString}
			/>
		</li>
	{/each}
</ul>

<style>
	* {
		font-family: 'monospace';
	}
</style>
