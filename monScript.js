// ------------------------------------- FONCTIONS -------------------------------------

// FONCTIONS COMBAT

    // RANDOM - calcul random
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    // COMBAT - Soustraction vie 
    function attack(DmgAttack, victimLife) {
        victimLife.innerHTML = parseInt(victimLife.innerHTML) - DmgAttack;
    }

    // COMBAT - message boite dialogue
    function infosAttack(SlayerName, VictimName, DmgAttack, message){
        message.innerHTML = SlayerName + " attaque ! " + VictimName + " reçoit " + DmgAttack + " dégâts !";
    }

    // COMBAT - serie animations
        // declencher serie animations
        function animationAttack(nameSlayer, animSlayer, nameVictim, animVictim){
        
            //attaquant attack
            animSlayer.setAttribute("src", "images/attack"+nameSlayer+".gif");

            //attaquant iddle et defenseur hit
            setTimeout(function() {
                animSlayer.setAttribute("src", "images/idle"+nameSlayer+".gif");
                animVictim.setAttribute("src", "images/hit"+nameVictim+".gif");}, 850);
                
            //defenseur idle
            setTimeout(function() {
                animVictim.setAttribute("src", "images/idle"+nameVictim+".gif");}, 1350);
        }

// FONCTIONS ROULEMENT DE TOUR

    // TOUR - incrementer un tour
    function tourSupp(turnAttack){
        turnAttack += 1;
        return turnAttack;
    }

    // TOUR - verifie si tous les tours sont passes
    function checkNouveauTour(tour){
        if (tour == 6){
            turn = bouclerTour(turn, contenuBoiteDialogue);
        }
        console.log("tour" + tour);
    }

    // Tour - fait boucler le decompte des tours
    function bouclerTour(decompteTour, message){
        decompteTour = 1;
        message.innerHTML = "Nouveau tour !";
        return decompteTour;
    }

// FONCTIONS MISE EN PLACE DE TOUR

    // MISE EN PLACE - nom du perso
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

    // MISE EN PLACE - sprite du perso
    function choseSprite(perso){
        spriteAnimation = document.getElementById("animation"+perso);
        return spriteAnimation;
    }

    // MISE EN PLACE - barre du vie du perso
    function choseLife(perso){
        barLife = document.getElementById("vie"+perso);
        console.log(barLife);
        return barLife;
    }

    // MISE EN PLACE - message annonce
    function messageDebutTour(tour, message, persoActif){
        message.innerHTML = "Nous sommes au tour " + tour + ". C'est au tour de " + persoActif + " d'attaquer.";
    }

    // MISE EN PLACE - Tour monstre ou tour heros
    function checkWhichSideTour(tour){
        if(tour < 5){
            showButtons(boutonAttaque, boutonDefense, boutonPouvoir);
        }

        if(tour > 4){
            turnMonster(turn);
        }
    }

// FONCTIONS INTERFACE

    // INTERFACE - Enleve les boutons quand le joueur agit pas
    function removeButtons(buttonA, buttonB, buttonC){
        buttonA.style.display = 'none';
        buttonB.style.display = 'none';
        buttonC.style.display = 'none';
    }

    // INTERFACE - Remet les boutons quand le joueur agit
    function showButtons(buttonA, buttonB, buttonC){
        buttonA.style.display = 'block';
        buttonB.style.display = 'block';
        buttonC.style.display = 'block';
    }

// FONCTIONS ACTIONS DES PERSOS
    
    // ACTIONS - Si tour des monstres, declenche serie actions
    function turnMonster(tour){

        // retrait bouton
        removeButtons(boutonAttaque, boutonDefense, boutonPouvoir);
    
        // retrait de pv
        damage = getRandomInt(8);

        // choix random de hero a taper
        hitCharacter = choseNameCharacterHit(hitCharacter);
        
        // animation et vie du hero choisi
        animationVictim = choseSprite(hitCharacter);
        vieVictim = choseLife(hitCharacter);

        //vie retiree
        attack(damage, vieVictim);
        
        // feedbacks visuels
        infosAttack(nomMonstre, hitCharacter, damage, contenuBoiteDialogue);
        animationAttack(nomMonstre, animationMonstre, hitCharacter, animationVictim);
        
        // verification si hero mort
        checkDeathCharacter(contenuBoiteDialogue, vieVictim);

        // incrementation nouveau tour
        turn = tourSupp(turn);
        
        // preparation du prochain tour
        setTimeout(function() {
            // verification si tous les persos ont agi
            checkNouveauTour(turn);

            //choix des persos
            nomActiveChara = choseNameCharacter(turn);
            animationHero = choseSprite(nomActiveChara);

            //message debut tour et reapparition boutons
            messageDebutTour(turn, contenuBoiteDialogue, nomActiveChara);
            checkWhichSideTour(turn);
        }, 3000);
    }

    // choix du joueur a taper
    function choseNameCharacterHit(victimHero){
        result = getRandomInt(3);
        console.log(result);
        console.log(victimHero)
        
        if(result == 0){
            victimHero = document.getElementById("nomHero1").innerHTML; 
        }
        else if(result == 1){
            victimHero = document.getElementById("nomHero2").innerHTML;
        }
        else if(result == 2){
            victimHero = document.getElementById("nomHero3").innerHTML;
        }
        else if(result == 3){
            victimHero = document.getElementById("nomHero4").innerHTML;
        }
        console.log(victimHero);

        return victimHero;
    }
    
    // ACTIONS - Si tour du joueur, declenche serie actions
    function turnPlayer(){

        // retrait de pv
        damage = getRandomInt(10);

        // selection du monstre a taper ~~ a ameliorer ~~
        hitCharacter = nomMonstre;
        vieVictim = choseLife(hitCharacter);

        attack(damage, vieVictim);

        // feedbacks visuels
        infosAttack(nomActiveChara, hitCharacter, damage, contenuBoiteDialogue);  
        animationAttack(nomActiveChara, animationHero, hitCharacter, animationMonstre);
        
        // verification si monstre mort
        checkDeathMonster(contenuBoiteDialogue,vieVictim);
    }

// FONCTIONS DE MORT

    // MORT - verifie si le monstre est mort
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

    // MORT - verifie si le monstre est mort
    function checkDeathCharacter(message, hpCharacter){
        hp = hpCharacter;
        if (hp <= 0) {
            hpCharacter = 0;
            message = "Le héros est vaincu. Zut.";
            console.log("hero mort");
        } else {
            console.log("hero vivant");
        }
    }


// ------------------------------------- DEBUT DU JEU -------------------------------------

//Elements de HTML

boutonAttaque = document.getElementById("boutonAttaque");
boutonDefense = document.getElementById("boutonDefense");
boutonPouvoir = document.getElementById("boutonPouvoir");
contenuBoiteDialogue = document.getElementById("contenuBoiteDialogue");

animationMonstre = document.getElementById("animationMonstre1");
nomMonstre = document.getElementById("nomMonstre1").innerHTML;

turn = 1;

// DEBUT DU JEU

    //Nom du premier perso a jouer
    nomActiveChara = choseNameCharacter(turn);

    //Sprite du premier perso a jouer
    animationHero = choseSprite(nomActiveChara);

    vieMonstre = choseLife(nomMonstre);

    //Message boite de dialogue
    messageDebutTour(turn, contenuBoiteDialogue, nomActiveChara);

    // ~~ A REMPLIR ~~
    checkWhichSideTour(turn);

// CLIC BOUTON ATTAQUE
boutonAttaque.onclick = function() {

    // retrait bouton
    removeButtons(boutonAttaque, boutonDefense, boutonPouvoir);

    // actions joueur
    turnPlayer();

    // incrementation nouveau tour
    turn = tourSupp(turn);

    // preparation du prochain tour
    setTimeout(function() {
        // verification si tous les persos ont agi
        checkNouveauTour(turn);

        //choix des persos
        nomActiveChara = choseNameCharacter(turn);
        animationHero = choseSprite(nomActiveChara);

        //message debut tour et reapparition boutons
        messageDebutTour(turn, contenuBoiteDialogue, nomActiveChara);
        checkWhichSideTour(turn);
    }, 3000);
}

// Mon monstre peut riposter, mais il manque le choix du personnage à taper. Il faut un random pour déterminer qui est touché.