<script>
	const jordaTyngdeAks = 9.81; // m/s**2
	const jupiterTyngdeAks = 24.79; // m/s**2
	const marsTyngdeAks = 3.72; // m/s**2

	let masse = 65; // kg

	const jordensTyngde = jordaTyngdeAks * masse;
	const jupitersTyngde = jupiterTyngdeAks * masse;
	const marsTyngde = marsTyngdeAks * masse;
</script>

<main>
	<h2>Masse: {masse} kg</h2>
	<p>Endre massen i kg:</p>
	<input type="number" min="1" max="200" bind:value={masse} />
	<hr />
	<h2>Jordens tyngde: {jordensTyngde} N</h2>
	<hr />
	<h2 style="color: {jupitersTyngde > jordensTyngde ? 'red' : 'black'}">
		Jupiters tyngde: {jupitersTyngde} N
	</h2>
	<hr />
	<h2 style="color: {marsTyngde > jordensTyngde ? 'red' : 'black'}">
		Mars tyngde: {marsTyngde} N
	</h2>
	<hr />
</main>
