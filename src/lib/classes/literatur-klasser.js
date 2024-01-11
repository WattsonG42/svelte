// litteratur-klasser.js
export class Bok {
	constructor(tittel) {
		this.tittel = tittel
		this.forfattere = []
	}
	
	leggTilForfatter(forfatter) {
		let finnesAlleredeIForfattere = this.forfattere.includes(forfatter)
		// Ikke legg til forfatter hvis vedkommende allerede er i listen.
		if (!finnesAlleredeIForfattere) {
			this.forfattere.push(forfatter)
			/*
			* Legg til boka i forfatterens verker.
			*
			* Forfatter-klassens leggTilVerk-metode
			* kommer til å forhindre at vi legger til boka dobbelt,
			* så vi trenger ikke å sjekke om den allerede finnes.
			*/
			forfatter.leggTilVerk(this)
		}
	}
}

export class Forfatter {
	constructor(fornavn, etternavn) {
		this.fornavn = fornavn
		this.etternavn = etternavn
		this.verker = []
	}
	
	leggTilVerk(verk) {
		let erIVerker = this.verker.includes(verk)
		
		// Ikke legg til verk hvis det allerede er i listen.
		if (!erIVerker) {
			this.verker.push(verk)
			/*
			* Legg til forfatteren i bokas forfatterliste.
			*
			* Bok-klassens leggTilForfatter-metode
			* kommer til å forhindre at vi legger til forfatteren dobbelt,
			* så vi trenger ikke å sjekke om forfatteren allerede finnes.
			*/
			verk.leggTilForfatter(this)
		}
	}
}