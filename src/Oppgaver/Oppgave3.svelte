<script>
	let sporsmaal1 = '';

	const radioOptions = ['+', '-', '*', '**', '%', '/'];
	let selectedRadioOption = '';

	const dropdownOptions = ['Gul', 'Oransj', 'Lilla', 'Blå', 'Hvit', 'Rød', 'Grønn'];
	let selectedDropdownOption = '';

	let sporsmaal4 = 0;

	let points = 0;
	let answerMode = false;
	const checkAnswers = () => {
		answerMode = true;
		console.log(sporsmaal1);
		if (sporsmaal1.trim().toLowerCase() === 'apple') {
			points += 1;
		}
		if (selectedRadioOption === '%') {
			points += 1;
		}
		if (selectedDropdownOption === 'Lilla') {
			points += 1;
		}
		if (sporsmaal4 === 64) {
			points += 1;
		}
	};

	let validateTextInput = () => {
		// Use a regular expression to allow only alphabetical characters
		if (sporsmaal1.length > 10) {
			sporsmaal1 = sporsmaal1.slice(0, 10);
		}
	};
</script>

{#if answerMode}
	<p><b>Hvert riktig svar gir ett poeng. Dine poeng: {points}</b></p>
	<!-- OBS: Denne knappen resetter ikke poeng!!! -->
	<button on:click={() => (answerMode = !answerMode)}>Returner (resetter ikke poeng)</button>
{:else}
	<form>
		<h3>Spørsmål 1</h3>
		<label for="sporsmaal1">Hva er 'eple' på engelsk? Svaret er på under 10 bokstaver</label>
		<input
			type="text"
			placeholder="Skriv inn oversettelsen her"
			on:input={validateTextInput}
			bind:value={sporsmaal1}
		/>
		<hr />

		<h3>Spørsmål 2</h3>
		<p>Hvilken regneoperasjon representerer modulo?</p>
		|
		{#each radioOptions as option}
			<label>
				<!-- Kan legge til on:change={handleRadioChange} -->
				<input type="radio" value={option} bind:group={selectedRadioOption} />
				{option}
			</label>
			|
		{/each}
		<!-- input tag ==> bind:group -->
		<!-- <label for="sporsmaal2">Velg symbolet som representerer regneoperasjonen modulo</label>
        <select id="sporsmaal2" bind:value={someBinding}>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
            <option value="**">**</option>
            <option value="%">%</option>
        </select> -->
		<hr />

		<h3>Spørsmål 3</h3>
		<p>Hvilken farge finnes <i>ikke</i> på en vanlig Rubiks kube?</p>
		<select bind:value={selectedDropdownOption}>
			{#each dropdownOptions as option}
				<option value={option}>{option}</option>
			{/each}
		</select>
		<hr />

		<h3>Spørsmål 4</h3>
		<label for="sporsmaal1">Hva er 8*8?</label>
		<input type="number" bind:value={sporsmaal4} />
		<hr />
		<!-- No point in type submit, because there is no backend to read data -->
		<button type="submit" on:click={checkAnswers}>Sjekk svar på quizzen</button>
	</form>
{/if}

<style>
	* {
		text-align: center;
	}
</style>
