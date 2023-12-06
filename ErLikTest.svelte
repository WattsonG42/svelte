<script>
    // komponent-egenskaper vi kan bruke utenfor denne filen
    export let funksjon;
    export let inndata;
    export let forventetUtdata;
    // komponent-egenskaper som kun brukes i denne filen
    let feil;
    let erLike;
    let resultat;

    // gjennomfør selve testen
    try{
        //spread-operator (...inndata) hvis inndata er en array ellers uten!
        resultat = funksjon(...inndata);
        erLike = resultat == forventetUtdata;
    }
    catch (error){
        feil = error;
        console.log(error);
    }
    
</script>

<!-- ************ HTML = Vis resultatene **************-->

<!-- 1) emoji for riktig, feil, andre tilfeller -->
{#if feil}
    {@html "&#10060;"} 
{:else if erLike}
    {@html "&#9989;"} 
{:else}
    {@html "&#127879;"}
{/if}

<!-- 2) Inndata skal bli til (pil) forventetUtdata -->
<span class="data">{JSON.stringify(inndata)}</span>
{@html "&#10145;"}
<span class="data">{JSON.stringify(forventetUtdata)}</span>

<!-- 3) Hvis resultat er feil / andre tilfeller, vis feilmelding eller resultat fra funksjonen -->
{#if feil || !erLike}
    <ul>
        <li>
            {#if feil}
                KRASJET: <span class="data">"{feil.message}"</span>
            {:else}
                FIKK -> <span class="data">{JSON.stringify(resultat)}</span>
            {/if}
        </li>
    </ul>
{/if}

<!-- ******************* STIL *****************-->
<style>
    .data{
        font-family: monospace;
        white-space: pre;
    }
</style>
