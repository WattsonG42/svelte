class Trekant {
    constructor(side) {
        this.side = side;
    }

    regn_ut_omkrets() {
        return this.side * 3;
    }

    regn_ut_areal() {
        return (Math.sqrt(3) / 4) * this.side * this.side;
    }
}

class Heksagon {
    constructor(side) {
        this.side = side;
    }

    regn_ut_omkrets() {
        return this.side * 6;
    }

    regn_ut_areal() {
        return ((3 * Math.sqrt(3)) / 2) * this.side * this.side;
    }
}

class Prisme {
    constructor(grunnflate, hoyde) {
        this.grunnflate = grunnflate;
        this.hoyde = hoyde;
    }

    regn_ut_volum() {
        return this.grunnflate.regn_ut_areal() * this.hoyde;
    }
    regn_ut_areal() {
        return 2 * this.grunnflate.regn_ut_areal() + this.grunnflate.regn_ut_omkrets() * this.hoyde;

    }
}
export { Prisme, Heksagon, Trekant }
