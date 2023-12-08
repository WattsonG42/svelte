<script>
	async function lesFil() {
		// Leser filen rad for rad som string
		let tekst = await files[0].text();
		let array = tekst.split('\n');

		// Gir ut hele variabelen array til konsollen
		console.log(array);

		// Totalt antall linjer
		array.length;

		// Summer alle elementer i en array, kan gjøres lettere med reduce eller forEach
		let sum = 0;
		for (let i = 0; i < array.length; i++) {
			sum += array[i];
		}

		// let sum = 0;
		array.forEach((element) => {
			sum += element;
		});

		// 0 is the starting value
		// first param is the accumulator, what you reduce into
		array.reduce((sum, element) => {
			return sum + element;
		}, 0);

		// Next challenge
		let allBlocks = [];
		let currentBlock = [];

		for (let i = 0; i < array.length; i++) {
			// Check if the line is a number or an empty string
			if (array[i] === '' || !isNaN(array[i])) {
				// Add the number to the current block sum
				allBlocks.push(currentBlock);
				currentBlock = [];
			} else {
				// Save the current block sum and reset it for the next block
				currentBlock.push(Number(array[i]));
			}
		}

		let howManyBlocksOfNumbers = allBlocks.length;

		// Summere hver sum i hver blokk til en sum per blokk
		let sumOfEachBlock = [];
		allBlocks.forEach((block) => {
			let blockSum = block.reduce((sum, currentBlockNum) => sum + currentBlockNum, 0);
			sumOfEachBlock.push(blockSum);
		});

		// Sjekke index + max nummer
		let maxNumber;
		let maxIndex;
		for (let i = 0; i < sumOfEachBlock.length; i++) {
			if (sumOfEachBlock[i] > maxNumber) {
				maxNumber = sumOfEachBlock[i];
				maxIndex = i;
			}
		}
	}
</script>

<!-- Something ain't right here -->
<!-- <input bind:files type="file" on:change={lesFil} />
<p class="svar">Svaret er: {svar}</p> -->
