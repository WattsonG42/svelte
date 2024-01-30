<script>
    import { Tallvenner } from '../../lib/classes/tallvenn.js';
  
    let tallvenner = new Tallvenner();
    let inputNumber = 0;
    let pythagoreanTriple = []

    function checkTriple(inputNumber) {
        pythagoreanTriple = tallvenner.finnPytagoreiskTrippel(inputNumber);
    }

    $: checkTriple(inputNumber)
    
</script>
  
<main>
    <h1>Check Pythagorean Triple</h1>
    <input type="number" bind:value={inputNumber} min="1" placeholder="Enter a positive integer">
    <!-- <button on:click={() => {checkTriple(inputNumber); tallvenner=tallvenner}}>Check</button> -->

    {#if pythagoreanTriple.length > 0}
        <p>{inputNumber} is part of a Pythagorean triple: {pythagoreanTriple}</p>
    {:else}
        <p>{inputNumber} is not part of any Pythagorean triple.</p>
    {/if}
</main>

<style>
  main {
    font-family: Arial, sans-serif;
    padding: 20px;
    font-size: 25px;
    text-align: center;
  }

  /* inlcude button here if used */
  input {
    margin-bottom: 10px;
    font-size: 25px;
  }

</style>
