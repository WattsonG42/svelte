<script>
function shuffle_get_random_elements(arr, count) {
    
    let shuffled = arr.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled.slice(0, count);
}

function get_random_number(min_num, max_num) {
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

function trekk_kort(){
    if (stokk.lenght === 0) {
        stokk = Standar_kortstokk();
    }
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

function kalkuler_vekt(masse, tyngdeaks) {
    const vekt = masse * tyngdeaks
    const vis_i_rod = tyngdeaks > 9.81;
    return {
        vekt: vekt,
        vis_i_rod: vis_i_rod
    };
}

function fakultet(nummer) {
    if (nummer === 0 || nummer === 1) return 1;
    return nummer * fakultet(nummer - 1);
}

function kombiner_arrays(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
}

function flate_ut_array(array) {
    return array.reduce((akk, val) => Array.isArray(val) ? akk.concat(flateUtArray(val)) : akk.concat(val), []);
}

function rotere_array(array, steg) {
    return array.slice(steg).concat(array.slice(0, steg));
}

function kast_terninger_DnD(input) {
    const deler = input.split("d");
    const antallTerninger = parseInt(deler[0], 10);
    const antallSider = parseInt(deler[1], 10);
    let resultater = [];

    for (let i = 0; i < antallTerninger; i++) {
        resultater.push(Math.floor(Math.random() * antallSider) + 1);
    }

    return resultater;
}

function remove_by_index(array, index) {
    array.splice(index, 1);
    return array;
}

function add_to_end(array, element) {
    array.push(element);
    return array;
}

function add_to_start(array, element) {
    array.unshift(element);
    return array;
}

function remove_by_value(array, value) {
    return array.filter(element => element !== value);
}

function find_element(array, callback) {
    return array.find(callback);
    //EKS
    // array = [1, 2, 3, 4];
    // const found = findElement(array, element => element > 2);
    // console.log(found); output: 3
}

function merge_arrays(...arrays) {
    return arrays.flat();
}

function transformElements(array, transformFunction) {
    return array.map(transformFunction);
    //EKS: const filtered = filterArray(array, element => element % 2 === 0);
}

function filter_array(array, testFunction) {
    return array.filter(testFunction)
    //EKS
    // array = [1, 2, 3, 4];
    // const filtered = filterArray(array, element => element % 2 === 0);
    // console.log(filtered); // Output: [2, 4]
}

function countOccurrences(array, value) {
    const count = array.reduce((acc, curr) => acc + (curr === value ? 1 : 0), 0);
    return count;
}

function manipulateString(str) {
    console.log(`Original string: ${str}`);
    console.log(`Length: ${str.length}`);
    console.log(`Upper case: ${str.toUpperCase()}`);
    console.log(`Lower case: ${str.toLowerCase()}`);
    console.log(`Replaced space with dash: ${str.replace(/ /g, '-')}`);
}

function manipulateArray(arr) {
    console.log(`Original array: ${arr}`);
    arr.push('new item');
    console.log(`After push: ${arr}`);
    arr.pop();
    console.log(`After pop: ${arr}`);
    console.log(`Sorted array: ${arr.sort()}`);
    console.log(`Reversed array: ${arr.reverse()}`);
}

</script>