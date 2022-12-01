function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


//fonction animations et vie retiree lors d une attaque 

function attack(DmgAttack, VictimName, SlayerName, victimLife, message) {

    victimLife.innerHTML = parseInt(victimLife.innerHTML) - DmgAttack;
    message.innerHTML = SlayerName + "attaque !" + VictimName + "reçoit" + DmgAttack + "dégâts !";
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
nomHero = document.getElementById("nomHero1");
nomMonstre = document.getElementById("nomMonstre1");

boutonAttaque.onclick = function() {

    damage = getRandomInt(10);

    attack(damage, nomMonstre, nomHero, vieMonstre1, contenuBoiteDialogue);
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
