function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


//fonction animations et vie retiree lors d une attaque 

function attack(DmgAttack, VictimName, SlayerName, victimLife, message) {

    victimLife.innerHTML = parseInt(victimLife.innerHTML) - DmgAttack;
    message.innerHTML = SlayerName + " attaque ! " + VictimName + " reçoit " + DmgAttack + " dégâts !";
    turnAttack += 1;
    return turnAttack;
    }

//fonction permettant de savoir quel perso joue

function choseCharacter(message, tourCombat) {
    
    if (tourCombat == 1){
        persoActif = document.getElementById("nomHero1").innerHTML;
    }
    
    else if (tourCombat == 2){
        persoActif = document.getElementById("nomHero2").innerHTML;
    }

    message.innerHTML = "Nous sommes au tour " + turn + ". C'est au tour de " + persoActif + " d'attaquer.";

    return persoActif;
}

function checkDeathMonster(message, hpmonster) {
    hp = hpmonster.innerHTML;
    if (hp <= 0) {
        hpmonster.innerHTML = 0;
        message.innerHTML = "Monstre mort";
        console.log("monstre mort");
    } else {
        console.log("monstre vivant");
    }
}

//Elements de HTML

boutonAttaque = document.getElementById("boutonAttaque");
boutonDefense = document.getElementById("boutonDefense");
boutonPouvoir = document.getElementById("boutonPouvoir");
vieMonstre1 = document.getElementById("vieMonstre1");
vieHero1 = document.getElementById("vieHero1");
contenuBoiteDialogue = document.getElementById("contenuBoiteDialogue");
animationHero1 = document.getElementById("animationHero1");
animationMonstre1 = document.getElementById("animationMonstre1");
nomMonstre = document.getElementById("nomMonstre1").innerHTML;

turn = 1;

activeCharac = choseCharacter(contenuBoiteDialogue, turn);

boutonAttaque.onclick = function() {

    damage = getRandomInt(10);

    //turn = attack(damage, nomMonstre, activeCharac, vieMonstre1, contenuBoiteDialogue, turn);

    checkDeathMonster(contenuBoiteDialogue,vieMonstre1);

    //Mort du Joueur

    if (vieHero1.innerHTML <= 0) {
        vieHero1.innerHTML = 0;
        contenuBoiteDialogue.innerHTML = "Tu es vaincu. Tu as perdu, dommage.";
        }
    }

