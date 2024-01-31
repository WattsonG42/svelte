export class JokerSpill {
    constructor() {
        this.antallTall = 5; // Vi endrer antallet tall til 5 for denne versjonen av spillet
        this.valgteTall = [];
        this.riktigeTall = this.genererTilfeldigeTall();
    }

    genererTilfeldigeTall() {
        let tilfeldigeTall = [];
        for (let i = 0; i < this.antallTall; i++) {
            tilfeldigeTall.push(Math.floor(Math.random() * 10));
        }
        return tilfeldigeTall;
    }

    sjekkValg(brukerValg) {
        let poeng = 0;
        for (let i = 0; i < this.antallTall; i++) {
            if (this.riktigeTall[i] === brukerValg[i]) {
                poeng++;
            }
        }
        return poeng;
    }
}
