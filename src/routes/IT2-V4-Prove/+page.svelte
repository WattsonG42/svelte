<script>
    class Skole {
        constructor(navn, klasser, adresse) {
            this.navn = navn;
            this.klasser = klasser; // skal være klasse[]
            this.adresse = adresse;
        }
        alleEleverPaaSkolen() {
            let listeMedElever = [];
            for (let klasse of this.klasser) {
                for (let elev of klasse.elever) {
            listeMedElever.push(elev.navn);
            }
        }
        listeMedElever.sort();
        return listeMedElever;
    }

    }
    class Klasse {
        constructor(navn, trinn, elever) {
            this.navn = navn;
            this.trinn = trinn; 
            this.elever = elever; // skal være elev[]
        }
    }
    class Elev {
        constructor(navn, adresse, epost) {
            this.navn = navn;
            this.adresse = adresse;
            this.epost = epost;
        }
    }

    
    let  listeMedOla = [];
    let  listeMedKlasser = [];
    
    for (let i = 1; i < 11; i++) {
        listeMedOla.push(new Elev(`Ola Nordmann ${i}`, 'Norgestraat 101, 1001 Oslo', `ola.nordmann${i}@eksempel.no`))
    }
  
    for (let i = 1; i < 6; i++) {
        listeMedKlasser.push(new Klasse(`ST${i}`,  `VG${i}`, listeMedOla))
    }
 
    const askervgs = new Skole('Asker VGS', listeMedKlasser, 'Fredtunveien') 
    // console.log(listeMedKlasser[0])
</script>


<h2>Oppgave 1</h2>
<hr>
<h2>Oppgave 2</h2>
<p>Her er en liste med ola</p>
{#each listeMedOla as ola}
    <ul>
        <li>{ola.navn}{ola.adresse}{ola.epost}</li>
    </ul>
{/each}
<hr>
{#each askervgs.alleEleverPaaSkolen() as elev}
    <ul>
        <ol>{elev}</ol>
    </ul>
{/each}
<hr>
