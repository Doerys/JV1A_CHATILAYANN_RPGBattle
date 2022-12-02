// calculer les dgts en random

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

// vie retiree lors d une attaque 

function attack(DmgAttack, victimLife) {

    victimLife.innerHTML = parseInt(victimLife.innerHTML) - DmgAttack;
    }

function removeButtons(buttonA, buttonB, buttonC){
    buttonA.style.display = 'none';
    buttonB.style.display = 'none';
    buttonC.style.display = 'none';
}

function showButtons(buttonA, buttonB, buttonC){
    buttonA.style.display = 'block';
    buttonB.style.display = 'block';
    buttonC.style.display = 'block';
}

// affiche le message pour l'attaque

function infosAttack(SlayerName, VictimName, DmgAttack, message){
    message.innerHTML = SlayerName + " attaque ! " + VictimName + " reçoit " + DmgAttack + " dégâts !";
}

// Declencher les animations attaque

function animationAttack(nameSlayer, animSlayer, nameVictim, animVictim){
    
    //hero attack

    animSlayer.setAttribute("src", "images/attack"+nameSlayer+".gif");

    //hero iddle et monstre frappe

    setTimeout(function() {
        animSlayer.setAttribute("src", "images/idle"+nameSlayer+".gif");
        animVictim.setAttribute("src", "images/hit"+nameVictim+".gif");}, 850);
        
    //animation monstre Idle

    setTimeout(function() {
        animVictim.setAttribute("src", "images/idle"+nameVictim+".gif");}, 1350);
}

// incrementer un tour après une attaque

function tourSupp(turnAttack){
    turnAttack += 1;
    return turnAttack;
}


function checkNouveauTour(tour){
    if (tour == 6){
        turn = bouclerTour(turn, contenuBoiteDialogue);

        setTimeout(function() {
            messageNouveauTour(turn, contenuBoiteDialogue, nomActiveChara);
        }, 3500);
    }
    if(tour < 6){   
        messageNouveauTour(turn, contenuBoiteDialogue, nomActiveChara);
    }
}

function messageNouveauTour(tour, message, persoActif){
    message.innerHTML = "Nous sommes au tour " + tour + ". C'est au tour de " + persoActif + " d'attaquer.";
}


// faire boucler le decompte des tours

function bouclerTour(decompteTour, message){
    if (decompteTour == 6){
        decompteTour = 1;
        message.innerHTML = "Nouveau tour !";
    }   
    return decompteTour;
}

// savoir quel perso joue en fonction du tour

function choseNameCharacter(tourCombat) {

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

    return persoActif;
}

// checker si le monstre doit risposter

function turnMonster(tour){
    if (tour > 4){
        damage = getRandomInt(8);
        attack(damage, vieHero1);
        infosAttack(nomMonstre, nomActiveChara, damage, contenuBoiteDialogue);
        animationAttack(nomMonstre, animationMonstre, nomActiveChara, animationHero);
        turn = tourSupp(turn);
    }
    return tour;
}

function turnPlayer(tour){
    if(tour <= 4){
        damage = getRandomInt(10);

        attack(damage, vieMonstre1);

        infosAttack(nomActiveChara, nomMonstre, damage, contenuBoiteDialogue);

        animationAttack(nomActiveChara, animationHero, nomMonstre, animationMonstre);
        checkDeathMonster(contenuBoiteDialogue,vieMonstre1);
        turn = tourSupp(turn);
    }
    return tour;
}

// Choix du sprite sur la scene

function choseSprite(persoTour){
    spriteAnimation = document.getElementById("animation"+persoTour);

    return spriteAnimation;
}

// verifie si le monstre est mort

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

// verifie si un perso est mort

function checkDeathCharacter(message, hpCharacter){
    hp = hpCharacter.innerHTML;
    if (hp <= 0) {
        hpCharacter.innerHTML = 0;
        message.innerHTML = "Le héros est vaincu. Zut.";
        console.log("hero mort");
    } else {
        console.log("hero vivant");
    }
}

//Elements de HTML

boutonAttaque = document.getElementById("boutonAttaque");
boutonDefense = document.getElementById("boutonDefense");
boutonPouvoir = document.getElementById("boutonPouvoir");
vieMonstre1 = document.getElementById("vieMonstre1");
vieHero1 = document.getElementById("vieHero1");
contenuBoiteDialogue = document.getElementById("contenuBoiteDialogue");
animationMonstre = document.getElementById("animationMonstre1");
nomMonstre = document.getElementById("nomMonstre1").innerHTML;

turn = 1;

nomActiveChara = choseNameCharacter(turn);
messageNouveauTour(turn, contenuBoiteDialogue, nomActiveChara);

animationHero = choseSprite(nomActiveChara);

boutonAttaque.onclick = function() {

    removeButtons(boutonAttaque, boutonDefense, boutonPouvoir);

    turnPlayer(turn);

    setTimeout(function() {
        turnMonster(turn);

        turn = bouclerTour(turn, contenuBoiteDialogue);

    }, 1500);

    setTimeout(function() {
        nomActiveChara = choseNameCharacter(turn);
        animationHero = choseSprite(nomActiveChara);
        checkNouveauTour(turn);
        showButtons(boutonAttaque, boutonDefense, boutonPouvoir);
    }, 3000);
}

//à régler : le fait que la boite de dialogue ne dise pas que le monstre riposte, elle passe direct au nouveau tour
