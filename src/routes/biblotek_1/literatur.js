export class Bok {
    constructor(tittel) {
        this.tittel = tittel;
        this.forfattere = [];
    }

    legg_til_forfatter(forfatter) {
        if (!this.forfattere.includes(forfatter)) {
            this.forfattere.push(forfatter);
            forfatter.legg_til_verk(this);
        }
    }
}

export class Forfatter {
    constructor(fornavn, etternavn) {
        this.fornavn = fornavn;
        this.etternavn = etternavn;
        this.verkX = [];
    }

    legg_til_verk(verk) {
        if (!this.verkX.includes(verk)) {
            this.verkX.push(verk);
            verk.legg_til_forfatter(this);
        }
    }
}
legg_til_forfatter
leggTilForfatter

