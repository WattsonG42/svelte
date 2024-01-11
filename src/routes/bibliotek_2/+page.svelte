<!-- bibliotek-grensesnitt.svelte -->
<script>
	import { Bok, Forfatter } from "../../lib/classes/literatur-klasser.js"
	
	// Bibliotekarene legger inn Mamma mø.
	let mammaMoe = new Bok("Mamma Mø")
	
	let jukka = new Forfatter("Jukka", "Wieslander")
	let tomas = new Forfatter("Tomas", "Wieslander")
	mammaMoe.leggTilForfatter(jukka)
	mammaMoe.leggTilForfatter(tomas)
	
	// Så legger de inn Gubben og katten.
	let sven = new Forfatter("Sven", "Nordquist")
	let gubbenOgKatten = new Bok("Gubben og katten")
	gubbenOgKatten.leggTilForfatter(sven)
	
	// Så oppdager de at Sven også var med på Mamma Mø.
	sven.leggTilVerk(mammaMoe)
	
	let boksamling = [mammaMoe, gubbenOgKatten]
	let forfattere = [jukka, tomas, sven]
</script>

<h1>Biblioteket mitt</h1>
<h2>Bøker</h2>
<ul>
	{#each boksamling as bok}
		<li>
			"{bok.tittel}" av
			<ul>
				{#each bok.forfattere as forfatter}
					<li>{forfatter.fornavn} {forfatter.etternavn}</li>
				{/each}
			</ul>
	</li>
	{/each}
</ul>

<h2>Forfattere</h2>
<ul>
	{#each forfattere as forfatter}
		<li>{forfatter.fornavn} {forfatter.etternavn} har skrevet:</li>
		<ul>
			{#each forfatter.verker as verk}
				<li>"{verk.tittel}"</li>
			{/each}
		</ul>
	{/each}
</ul>