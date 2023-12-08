<script>
    import { listOfRandomNumbers } from "../lib/randomNumber.js"

    let binaeretall = [];
    let antallEnere = 0;
    let antallNullere = 0;
    let flestAv = "";

    binaeretall = listOfRandomNumbers(0, 1000, 0, 2);
    console.log(`Successfully populated list with numbers ${binaeretall} and the total length is currently ${binaeretall.length}`);

    binaeretall.forEach((elem) => {
        if (elem === 1) {
            antallEnere += 1
        } else if (elem === 0) {
            antallNullere += 1
        }
    })
</script>

<p>Antall nullere: {antallNullere}</p>
<p>Antall enere: {antallEnere}</p>