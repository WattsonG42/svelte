<script>
    let brett = Array(9).fill(null);
    let gjeldendeSpiller = 'X';
    let vinner = null;

    function spillTrekk(index) {
        if (brett[index] || vinner) {
            return;
        }

        brett[index] = gjeldendeSpiller;
        gjeldendeSpiller = gjeldendeSpiller === 'X' ? 'O' : 'X';
        sjekkVinner();
    }

    function sjekkVinner() {
        const vinnendeKombinasjoner = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let kombinasjon of vinnendeKombinasjoner) {
            const [a, b, c] = kombinasjon;
            if (brett[a] && brett[a] === brett[b] && brett[a] === brett[c]) {
                vinner = brett[a];
                return;
            }
        }

        if (!brett.includes(null)) {
            vinner = 'Uavgjort';
        }
    }

    function resetSpill() {
        brett = Array(9).fill(null);
        gjeldendeSpiller = 'X';
        vinner = null;
    }
</script>

<style>
    .brett {
        display: grid;
        grid-template-columns: repeat(3, 100px);
        grid-template-rows: repeat(3, 100px);
        grid-gap: 10px;
    }
    .celle {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: lightgray;
        font-size: 2em;
        cursor: pointer;
    }
</style>

<div class="brett">
    {#each brett as celle, index}
        <div class="celle" on:click={() => spillTrekk(index)}>
            {celle}
        </div>
    {/each}
</div>

{#if vinner}
    <p>{vinner === 'Uavgjort' ? 'Spillet er uavgjort' : `Vinneren er ${vinner}`}</p>
    <button on:click={resetSpill}>Start på nytt</button>
{/if}