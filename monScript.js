// fonction pour calculer les dgts

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


//fonction vie retiree lors d une attaque 

function attack(DmgAttack, victimLife) {

    victimLife.innerHTML = parseInt(victimLife.innerHTML) - DmgAttack;
    }

// permet d'incrementer un tour après une attaque

function tourSupp(turnAttack){
    turnAttack += 1;
    return turnAttack;
}

// permet de faire boucler le decompte des tours

function turnMonster(tour, damageHero, hpHero){
    if (tour < 4){
        hpHero.innerHTML = parseInt(hpHero.innerHTML) - damageHero;
    }
}

function bouclerTour(decompteTour, message){
    if (decompteTour == 6){
        decompteTour = 1;
        message.innerHTML = "Nouveau tour !";
    }
    return decompteTour;
}

// affiche le message pour l'attaque

function infosAttack(SlayerName, VictimName, DmgAttack, message){
    message.innerHTML = SlayerName + " attaque ! " + VictimName + " reçoit " + DmgAttack + " dégâts !";
}

//fonction permettant de savoir quel perso joue

function choseCharacter(message, tourCombat) {

    if (tourCombat == 1){
        persoActif = document.getElementById("nomHero1").innerHTML;
    }
    
    else if (tourCombat == 2){
        persoActif = document.getElementById("nomHero2").innerHTML;
    }

    else if (tourCombat == 3){
        persoActif = document.getElementById("nomHero3").innerHTML;
    }

    else if (tourCombat == 4){
        persoActif = document.getElementById("nomHero4").innerHTML;
    }

    else if (tourCombat == 5){
        persoActif = document.getElementById("nomMonstre1").innerHTML;
    }

    message.innerHTML = "Nous sommes au tour " + turn + ". C'est au tour de " + persoActif + " d'attaquer.";

    return persoActif;
}

function checkDeathMonster(message, hpmonster) {
    hp = hpmonster.innerHTML;
    if (hp <= 0) {
        hpmonster.innerHTML = 0;
        message.innerHTML = "Le monstre est vaincu. Tu as gagné ! Bravo.";
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

    attack(damage, vieMonstre1);

    infosAttack(activeCharac, nomMonstre, damage, contenuBoiteDialogue);

    checkDeathMonster(contenuBoiteDialogue,vieMonstre1);

    turn = tourSupp(turn);

    setTimeout(function() {
        turn = bouclerTour(turn, contenuBoiteDialogue);

        damage = getRandomInt(10)

        turnMonster(turn, damage, vieHero1);


    }, 500);

    setTimeout(function() {
        activeCharac = choseCharacter(contenuBoiteDialogue, turn);
    }, 1000);
    
    

    //Mort du Joueur

    if (vieHero1.innerHTML <= 0) {
        vieHero1.innerHTML = 0;
        contenuBoiteDialogue.innerHTML = "Tu es vaincu. Tu as perdu, dommage.";
        }
    }

