function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


//fonction animations et vie retiree lors d une attaque 

function attack(DmgAttack, VictimName, SlayerName, victimLife, message, turnAttack) {

    victimLife.innerHTML = parseInt(victimLife.innerHTML) - DmgAttack;
    message.innerHTML = SlayerName + " attaque ! " + VictimName + " reçoit " + DmgAttack + " dégâts !";
    turnAttack += 1;
    return turn;
    }

//fonction permettant de savoir quel perso joue

function choseCharacter(tourCombat, persoActif) {
    if (tourCombat > 4){
        tourCombat = 1
    }
    
    if (tourCombat == 1){
        persoActif = document.getElementById("nomHero1").innerHTML;
    }
    
    if (tourCombat == 2){
        persoActif = document.getElementById("nomHero2").innerHTML;
    }
    
    if (tourCombat == 3){
        persoActif = document.getElementById("nomMonstre1").innerHTML;
    }
    
    if (tourCombat == 4){
        persoActif = document.getElementById("nomMonstre2").innerHTML;
    }

    return persoActif;
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

activeCharac = "Personne";

turn = 1;

choseCharacter(turn, activeCharac);

boutonAttaque.onclick = function() {

    damage = getRandomInt(10);

    attack(damage, nomMonstre, activeCharac, vieMonstre1, contenuBoiteDialogue, turn);
    }

//Mort du monstre

if (vieMonstre1.innerHTML <= 0) {
    vieMonstre1.innerHTML = 0;
    contenuBoiteDialogue.innerHTML = "Le monstre est vaincu. Tu as gagné ! Bravo.";
    }

//Mort du Joueur

if (vieHero1.innerHTML <= 0) {
    vieHero1.innerHTML = 0;
    contenuBoiteDialogue.innerHTML = "Tu es vaincu. Tu as perdu, dommage.";
    }
