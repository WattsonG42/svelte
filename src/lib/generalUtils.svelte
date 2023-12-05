<script>
function Shuffle_get_Random_Elements(arr, count) {
    
    let shuffled = arr.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled.slice(0, count);
}

function get_Random_Number(min_num, max_num) {
    ran_num = Math.floor(Math.random() * (min_num - max_num)) + min_num;
    return ran_num
}

function Standar_kortstokk() {
    const farger = ['H', 'D', 'C', 'S'];
    const verdier = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const stokk = [];

    for (let farge of farger) {
        for (let verdi of verdier) {
            const kortStr = verdi + farge
            stokk.push([verdi, farge, kortStr])

        }
    }

    return stokk;
}

function array_shuffle(array) {
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function omvendtTekst(inputStreng) {
    var tegnListe = inputStreng.split('')
    var omvendtList = tegnListe.reverse('')
    var omvendtStreng = omvendtList.join('')
    return omvendtStreng
}

function endreCase(streng, indeks) {
    if (indeks < 0 || indeks >= streng.length) {
        return streng;
    }

    const bokstav = streng.charAt(indeks)
    const liten_bokstav = bokstav.toLowerCase();
    const stor_bokstav = bokstav.toUpperCase();

    if (bokstav === liten_bokstav) {
        return streng.slice(0, indeks) + stor_bokstav + streng.slice(indeks + 1);
    } else {
        return streng.slice(0, indeks) + liten_bokstav + streng.slice(indeks + 1);
    }
}


function les_Data_Fra_Fil(filnavn, callback) {
    fetch(filnavn)
        .then(Response => Response.text())
        .then(data => {
            const data_array = data.split('\n')
            callback(data_array)
        })
        .catch(error => {
            console.error('Feil ved lesing av filen: ' + error);
            console.log(data_array);

        });
}

async function les_data(){
    let tekst = await files[0].text();
    let array = tekst.split('\n')
    //body komponent HTML
    //<input bind:files type="file" on:change={les_data}>
    //<p class="svar">Svaret er: {svar}</p>
    //console.log(array)
}

function summer_array(array) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        if (!isNaN(array[i])) {
            sum += parseFloat(array[i]);
        }
    }
    return sum;
    //const tall_array = ['1','2','3','4','5']
    //const total_sum = summer_array(tall_array);
    //console.log('Total sum:', total_sum);
}

function kalkulerVekt(masse, tyngdeaks) {
    const vekt = masse * tyngdeaks
    const vis_i_rod = tyngdeaks > 9.81;
    return {
        vekt: vekt,
        vis_i_rod: vis_i_rod
    };
}




</script>