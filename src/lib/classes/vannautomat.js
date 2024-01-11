// vannautomat.js

export class Vannautomat {
  constructor(kapasitet) {
    this.kapasitet = kapasitet;
    this.innhold = 0;
  }

  tappVann(liter) {
    this.innhold -= liter;
    if (this.innhold < 0) {
      this.innhold = 0;
    }
    return this.innhold;
  }

  beskrivVanninhold() {
    const prosentFull = (this.innhold / this.kapasitet) * 100;
    return `Vannstand: ${this.innhold} liter (${prosentFull.toFixed(2)}% av kapasiteten)`;
  }

  lagBeskjedTilSkjerm() {
    if (this.innhold === 0) {
      return 'Tanken er tom, fyll på igjen';
    } else {
      return this.beskrivVanninhold();
    }
  }
}
