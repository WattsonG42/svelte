<script>
    import { Bok, Forfatter } from "./literatur";

    const mammaMo = new Bok("Mamma Mø");
    const jukka = new Forfatter("Jukka", "Wieslander");
    const tomas = new Forfatter("Tomas", "Wieslander");

    mammaMo.legg_til_forfatter(jukka);
    mammaMo.legg_til_forfatter(tomas);

    const sven = new Forfatter("Sven", "Nordquist");
    const gubbenOgKatten = new Bok("Gubben og Katten");
    gubbenOgKatten.legg_til_forfatter(sven);

    sven.legg_til_verk(mammaMo);

    const boksamling = [mammaMo, gubbenOgKatten];
    const forfattere = [jukka, tomas, sven];
</script>

<ul>
    {#each boksamling as bok}
        <li>
            {bok.tittel}
            <ul>
                {#each bok.forfattere as forfatter}
                    <li>{forfatter.fornavn} {forfatter.etternavn}</li>
                {/each}
            </ul>
        </li>
    {/each}
</ul>

<h2>Forfattere:</h2>
<ul>
    {#each forfattere as forfatter}
        <li>
            {forfatter.fornavn}
            {forfatter.etternavn} - Verk:
            {#each forfatter.verkX as verk}
                <span>{verk.tittel}; </span>
            {/each}
        </li>
    {/each}
</ul>
