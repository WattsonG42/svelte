<script>
    let phrase1, phrase2 = false;
    let bothChecked = false;

    $: if (phrase1 && phrase2) {
        bothChecked = true;
    }
</script>

{#if bothChecked}
    <p>It's a duck!</p>
{:else}
    <form>
        <label for="phrase-1">Walks like a duck</label>
        <input id="phrase-1" type="checkbox" on:change={() => phrase1 = !phrase1}>
    
        <label for="phrase-2">Qwacks like a duck</label>
        <input id="phrase-2" type="checkbox" on:change={() => phrase2 = !phrase2}>
    </form>     
{/if}
