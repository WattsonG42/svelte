export class Tallvenner {
    // constructor(positivtHeltall) {
    //     this.positivtHeltall = positivtHeltall;
    // }
    
    finnTallvenn(tall) {
        let tallvennListe = [];
        
        // Itererer over halvparten av tallet slik at man ikke får duplikater
        for (let gjeldendeTall = 0; gjeldendeTall <= tall / 2; gjeldendeTall++) {
            
            // Finner resten som hører til gjeldendeTall for å få tallet,
            let rest = tall - gjeldendeTall;
            tallvennListe.push([gjeldendeTall, rest]);
        }
        return tallvennListe;
    }
    
    kvadrerTall(tall) {
        return tall ** 2; 
    }
    
    erKvadratTall(tall) {
        return Math.sqrt(tall) % 1 === 0 && tall !== 0;
    }

    finnPytagoreiskTrippel(tall) { // positivt heltall
        let kvadrertTall = this.kvadrerTall(tall); 
        let tallvenner = this.finnTallvenn(kvadrertTall);

        let listeMedPytagoreiskTrippel = [];
        for (let tallpar of tallvenner) {
            if (this.erKvadratTall(tallpar[0]) && this.erKvadratTall(tallpar[1])) {
                let a = Math.sqrt(tallpar[0]);
                let b = Math.sqrt(tallpar[1]);
                let c = tall;
                listeMedPytagoreiskTrippel.push([a, b, c]);
            }
        }
        return listeMedPytagoreiskTrippel;
    }
} 