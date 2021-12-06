import {pikachu, carapuce} from "./variable.js";

let attaque;
let attaque_cara
alert("Bienvenu dans l'arène Pokémon !")
alert("Vous allez affronter Carapuce avec votre Pikachu.")
alert("Que le meilleur gagne !")
export function combat() {
    while (pikachu.pv > 0 && carapuce.pv >0) {
        attaque = prompt(`Entrez le numéro de l'attaque que vous souhaitez lancer : 
1. vive-attaque, 2. cage-éclair, 3. tonnerre, 4. fatal-foudre`)
        while (isNaN(attaque) || parseInt(attaque)<1 || parseInt(attaque)>4 ) {
            attaque = prompt(`Vous devez entrez un numéro entre 1 et 4 : 
1. vive-attaque, 2. cage-éclair, 3. tonnerre, 4. fatal-foudre`)
        }
        if (pikachu.vitesse > carapuce.vitesse) {
            switch (attaque) {
                case "1":
                    alert(`Pikachu lance vive-attaque !`)
                    alert(pikachu.vive_attaque(carapuce))
                    break;
                case "2":
                    alert(`Pikachu lance cage-éclair !`)
                    alert(pikachu.cage_eclair(carapuce))
                    break;
                case "3":
                    alert(`Pikachu lance tonnerre !`)
                    alert(pikachu.tonnerre(carapuce))
                    break;
                case "4":
                    alert(`Pikachu lance fatale-foudre !`)
                    alert(pikachu.fatal_foudre(carapuce))
                    break;
                default:
                    alert("Vous prenez la fuite !")
                    pikachu.pv =0
                    break;
            }
            if (pikachu.pv < 1) {
                break
            } else {
                attaque_cara = Math.round(Math.random()*3)
                carapuce.attaques[Math.round(Math.random()*3)](pikachu);
                alert(`Carapuce lance ${carapuce.list_att[attaque_cara]} !`)
                alert(carapuce.attaques[Math.round(Math.random()*3)](pikachu))
            }
        } else {
            if (!attaque) {
                alert("Vous prenez la fuite !")
                break
            } else {
                attaque_cara = Math.round(Math.random()*3)
                carapuce.attaques[Math.round(Math.random()*3)](pikachu);
                alert(`Carapuce lance ${carapuce.list_att[attaque_cara]} !`)
                alert(carapuce.attaques[Math.round(Math.random()*3)](pikachu))

                switch (attaque) {
                    case "1":
                        alert(`Pikachu lance vive-attaque !`)
                        alert(pikachu.vive_attaque(carapuce))
                        break;
                    case "2":
                        alert(`Pikachu lance cage-éclair !`)
                        alert(pikachu.cage_eclair(carapuce))
                        break;
                    case "3":
                        alert(`Pikachu lance tonnerre !`)
                        alert(pikachu.tonnerre(carapuce))
                        break;
                    case "4":
                        alert(`Pikachu lance fatale-foudre !`)
                        alert(pikachu.fatal_foudre(carapuce))
                        break;
            }
        }
        }
    }
    if (carapuce.pv < 1) {
        alert("Vous avez gagné !")
    } else {
        alert("Vous avez perdu...")
    }
}