export class Pokemon{
    constructor(nom, niveau, pv, vitesse, type){
        this.nom = nom;
        this.niveau = niveau;
        this.pv = pv;
        this.vitesse = vitesse;
        this.type = type;
    }
}
// différents pokemon
let puissance;
export class Pikachu extends Pokemon{
    constructor(nom, niveau, pv, vitesse, type){
        super(nom, niveau, pv, vitesse, type,);
        this.attaques = [
            this.vive_attaque = (ennemi) => {
                puissance = 12
                if (ennemi.type == "eau" ) {
                    ennemi.pv -= puissance*2;
                    if (ennemi.pv < 0) {
                        return `${ennemi.nom} a perdu ${puissance*2} points de vie. ${ennemi.nom} est KO.`
                    } else {
                        return `${ennemi.nom} a perdu ${puissance*2} points de vie. Il lui en reste ${ennemi.pv}`
                    }
                } else {
                    ennemi.pv -= puissance;
                    if (ennemi.pv < 0) {
                        return `${ennemi.nom} a perdu ${puissance} points de vie. ${ennemi.nom} est KO.`
                    } else {
                        return `${ennemi.nom} a perdu ${puissance} points de vie. Il lui en reste ${ennemi.pv}`
                    }
                }
            },
            this.cage_eclair = (ennemi) => {
                puissance = 5
                if (ennemi.type == "eau" ) {
                    ennemi.pv -= puissance*2;
                    if (ennemi.pv < 0) {
                        return `${ennemi.nom} a perdu ${puissance*2} points de vie. ${ennemi.nom} est KO.`
                    } else {
                        return `${ennemi.nom} a perdu ${puissance*2} points de vie. Il lui en reste ${ennemi.pv}`
                    }
                } else {
                    ennemi.pv -= puissance;
                    if (ennemi.pv < 0) {
                        return `${ennemi.nom} a perdu ${puissance} points de vie. ${ennemi.nom} est KO.`
                    } else {
                        return `${ennemi.nom} a perdu ${puissance} points de vie. Il lui en reste ${ennemi.pv}`
                    }
                }
            },
            this.tonnerre = (ennemi) => {
                puissance = 20
                if (ennemi.type == "eau" ) {
                    ennemi.pv -= puissance*2;
                    if (ennemi.pv < 0) {
                        return `${ennemi.nom} a perdu ${puissance*2} points de vie. ${ennemi.nom} est KO.`
                    } else {
                        return `${ennemi.nom} a perdu ${puissance*2} points de vie. Il lui en reste ${ennemi.pv}`
                    }
                } else {
                    ennemi.pv -= puissance;
                    if (ennemi.pv < 0) {
                        return `${ennemi.nom} a perdu ${puissance} points de vie. ${ennemi.nom} est KO.`
                    } else {
                        return `${ennemi.nom} a perdu ${puissance} points de vie. Il lui en reste ${ennemi.pv}`
                    }
                }
            },
            this.fatal_foudre = (ennemi) => {
                puissance = 24
                if (ennemi.type == "eau" ) {
                    ennemi.pv -= puissance*2;
                    if (ennemi.pv < 0) {
                        return `${ennemi.nom} a perdu ${puissance*2} points de vie. ${ennemi.nom} est KO.`
                    } else {
                        return `${ennemi.nom} a perdu ${puissance*2} points de vie. Il lui en reste ${ennemi.pv}`
                    }
                } else {
                    ennemi.pv -= puissance;
                    if (ennemi.pv < 0) {
                        return `${ennemi.nom} a perdu ${puissance} points de vie. ${ennemi.nom} est KO.`
                    } else {
                        return `${ennemi.nom} a perdu ${puissance} points de vie. Il lui en reste ${ennemi.pv}`
                    }
                }
            }
        ]
    }
}
export class Carapuce extends Pokemon{
    constructor(nom, niveau, pv, vitesse, type){
        super(nom, niveau, pv, vitesse, type);
        this.puissance = 0;
        this.list_att = ["pistolet à O", "morsure", "écume", "coup d'boule"]
        this.attaques = [
            this.pistolet_a_O = (ennemi) => {
                puissance = 12
                if (ennemi.type == "feu" ) {
                    ennemi.pv -= puissance*2;
                    if (ennemi.pv < 0) {
                        return `${ennemi.nom} a perdu ${puissance*2} points de vie. ${ennemi.nom} est KO.`
                    } else {
                        return `${ennemi.nom} a perdu ${puissance*2} points de vie. Il lui en reste ${ennemi.pv}`
                    }
                } else {
                    ennemi.pv -= puissance;
                    if (ennemi.pv < 0) {
                        return `${ennemi.nom} a perdu ${puissance} points de vie. ${ennemi.nom} est KO.`
                    } else {
                        return `${ennemi.nom} a perdu ${puissance} points de vie. Il lui en reste ${ennemi.pv}`
                    }
                }
            },
            this.morsure = (ennemi) => {
                puissance = 15
                if (ennemi.type == "feu" ) {
                    ennemi.pv -= puissance*2;
                    if (ennemi.pv < 0) {
                        return `${ennemi.nom} a perdu ${puissance*2} points de vie. ${ennemi.nom} est KO.`
                    } else {
                        return `${ennemi.nom} a perdu ${puissance*2} points de vie. Il lui en reste ${ennemi.pv}`
                    }
                } else {
                    ennemi.pv -= puissance;
                    if (ennemi.pv < 0) {
                        return `${ennemi.nom} a perdu ${puissance} points de vie. ${ennemi.nom} est KO.`
                    } else {
                        return `${ennemi.nom} a perdu ${puissance} points de vie. Il lui en reste ${ennemi.pv}`
                    }
                }
            },
            this.ecume = (ennemi) => {
                puissance = 4
                if (ennemi.type == "feu" ) {
                    ennemi.pv -= puissance*2;
                    if (ennemi.pv < 0) {
                        return `${ennemi.nom} a perdu ${puissance*2} points de vie. ${ennemi.nom} est KO.`
                    } else {
                        return `${ennemi.nom} a perdu ${puissance*2} points de vie. Il lui en reste ${ennemi.pv}`
                    }
                } else {
                    ennemi.pv -= puissance;
                    if (ennemi.pv < 0) {
                        return `${ennemi.nom} a perdu ${puissance} points de vie. ${ennemi.nom} est KO.`
                    } else {
                        return `${ennemi.nom} a perdu ${puissance} points de vie. Il lui en reste ${ennemi.pv}`
                    }
                }
            },
            this.coup_dboule = (ennemi) => {
                puissance = 23
                if (ennemi.type == "feu" ) {
                    ennemi.pv -= puissance*2;
                    if (ennemi.pv < 0) {
                        return `${ennemi.nom} a perdu ${puissance*2} points de vie. ${ennemi.nom} est KO.`
                    } else {
                        return `${ennemi.nom} a perdu ${puissance*2} points de vie. Il lui en reste ${ennemi.pv}`
                    }
                } else {
                    ennemi.pv -= puissance;
                    if (ennemi.pv < 0) {
                        return `${ennemi.nom} a perdu ${puissance} points de vie. ${ennemi.nom} est KO.`
                    } else {
                        return `${ennemi.nom} a perdu ${puissance} points de vie. Il lui en reste ${ennemi.pv}`
                    }
                }
            }
        ]
    }
}