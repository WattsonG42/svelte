<script>
    import { Vannautomat } from '../../lib/classes/vannautomat.js';

    let vannautomat = new Vannautomat(5);
    let hvorMyeVannSomKomUtSist = 0;
    let standardVannmengde = 0.5;

    function tappVann() {
        hvorMyeVannSomKomUtSist = vannautomat.tappVann(standardVannmengde);
    }

    function tomTanken() {
        vannautomat.tappVann(vannautomat.innhold);
    }

    function fyllTanken() {
        vannautomat.innhold = vannautomat.kapasitet;
    }
</script>

<main>
    <h1>Vannautomat Testing</h1>
    <p>{vannautomat.lagBeskjedTilSkjerm()}</p>
    <p>Siste vannmengde som kom ut: {hvorMyeVannSomKomUtSist} liter</p>
    <button on:click={() => {tappVann(); vannautomat=vannautomat;}}>Tapp vann</button>
    <hr>
    <h2>Synlig for teknikere</h2>
    <div>
        <button on:click={() => {tomTanken(); vannautomat=vannautomat;}}>Tøm tanken</button>
        <button on:click={() => {fyllTanken(); vannautomat=vannautomat;}}>Fyll tanken</button>
    </div>
</main>
