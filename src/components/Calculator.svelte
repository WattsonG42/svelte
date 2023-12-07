<script>
	let displayValue = '';
	const numberKeys = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '(', ')', '.'];
	const operatorKeys = ['+', '-', '*', '/'];

	const handleKeyDown = (event) => {
		const key = event.key;
		if (key === 'Escape' || key === 'Backspace') {
			displayValue = '';
		} else if (key === 'Enter') {
			calculate();
		} else if (numberKeys.includes(key)) {
			displayValue += key;
		} else if (operatorKeys.includes(key)) {
			displayValue += key;
		}
	};

	// const appendToDisplay = (key) => (displayValue += key);
	// const clearDisplay = () => (displayValue = '');
	const calculate = () => {
		// perhaps add more sophisticated stuff here including exponents (double **)
		try {
			displayValue = eval(displayValue);
		} catch (error) {
			displayValue = 'Error';
		}
	};
</script>

<svelte:window on:keydown={handleKeyDown} />

<main id="calculator">
	<input bind:value={displayValue} readonly id="display" />
	<div id="keys">
		<div id="operator-keys">
			{#each operatorKeys as key}
				<button on:click={() => (displayValue += key)} class="operator-key">{key}</button>
			{/each}
			<button on:click={() => (displayValue = '')} class="operator-key">C</button>
		</div>
		<div id="number-keys">
			{#each numberKeys as key}
				<button on:click={() => (displayValue += key)}>{key}</button>
			{/each}
			<button on:click={calculate}>=</button>
		</div>
	</div>
</main>

<style>
	#calculator {
		font-family: Arial, sans-serif;
		background-color: hsl(0, 0%, 15%);
		border-radius: 15px;
		max-width: 500px;
		overflow: hidden;
	}
	#display {
		color: white;
		padding: 20px;
		font-size: 5rem;
		text-align: left;
		width: 100%;
		background: hsl(0, 0%, 20%);
		border: none;
	}
	#keys {
		display: grid;
		grid-template-columns: repeat(2, 0fr);
		gap: 10px;
		justify-content: center;
		align-items: start;
		padding: 25px;
		/* flex-flow: row nowrap; */
		/* grid-template-columns: repeat(4, 1fr); */
	}
	#number-keys {
		/* display: flex;
		flex-flow: row wrap; */
		gap: 10px;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
	}
	#operator-keys {
		/* display: flex;
		flex-flow: row wrap; */
		gap: 10px;
		display: grid;
		grid-template-rows: repeat(4, 1fr);
	}
	button {
		width: 100px;
		height: 100px;
		border-radius: 50px;
		border: none;
		background-color: hsl(0, 0%, 30%);
		color: white;
		font-size: 3rem;
		font-weight: bold;
		cursor: pointer;
	}
	button:hover {
		background-color: hsl(0, 0%, 40%);
	}
	button:active {
		background-color: hsl(0, 0%, 50%);
	}
	.operator-key {
		background-color: hsl(35, 100%, 55%);
	}
	.operator-key:hover {
		background-color: hsl(35, 100%, 65%);
	}
	.operator-key:active {
		background-color: hsl(35, 100%, 75%);
	}
</style>
