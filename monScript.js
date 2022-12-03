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
                animVictim.setAttribute("src", "images/hit"+nameVictim+".gif");}, 1000);
                
            //defenseur idle
            setTimeout(function() {
                animVictim.setAttribute("src", "images/idle"+nameVictim+".gif");}, 1500);
        }

// FONCTIONS ROULEMENT DE TOUR

    // TOUR - incrementer un tour
    function tourSupp(tour){
        tour += 1;
        return tour;
    }

    // TOUR - verifie si tous les tours sont passes
    function checkReiniTour(tour){
        if (tour == 8){
            turn = ReiniTour(turn, contenuBoiteDialogue);
        }
        console.log("tour" + tour);
    }

    // Tour - fait boucler le decompte des tours
    function ReiniTour(decompteTour, message){
        decompteTour = 1;
        console.log("tour" + decompteTour);
        message.innerHTML = "Nouveau tour !";
        return decompteTour;
    }

// FONCTIONS MISE EN PLACE DE TOUR

    // stocke le nom, les pv et animation du perso actif
    function characterSelection(){
        nomActiveChara = choseNameCharacter(turn);
        vieActiveChara = choseLife(nomActiveChara);
        animActiveChara = choseSprite(nomActiveChara);

        console.log("nom du perso = " + nomActiveChara);
    }

    // stocke le nom, les pv et animation du perso subissant une attaque
    function victimSelection(){

        if(heroSide == true){
            hitCharacter = choseNameMonsterHit();
        }
        
        if(heroSide == false){
            hitCharacter = choseNameCharacterHit();
        }
        
        vieVictim = choseLife(hitCharacter);
        animationVictim = choseSprite(hitCharacter);

        console.log("nom de la cible = " + hitCharacter);
    }

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
        
        else if (tourCombat == 6){
            persoActif = document.getElementById("nomMonstre2").innerHTML;
        }

        else if (tourCombat == 7){
            persoActif = document.getElementById("nomMonstre3").innerHTML;
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
        return barLife;
    }

    // MISE EN PLACE - message annonce
    function messageDebutTour(tour, message, persoActif){
        message.innerHTML = "C'est au tour de " + persoActif + " d'attaquer.";
    }

    // MISE EN PLACE - Tour monstre ou tour heros
    function checkWhichSideTour(tour){
        if(tour < 5){
            console.log("Tour hero");
            tourHero = true;

            // Choix du nouveau perso a agir
            do{
                characterSelection();
                ActiveCharaAlive = checkAliveCharacter(vieActiveChara);
            } while(ActiveCharaAlive == false);
            
            // Reapparition des boutons
            showButtons(boutonAttaque, boutonDefense, boutonPouvoir);

            //message debut tour pour joueur
            messageDebutTour(turn, contenuBoiteDialogue, nomActiveChara);
        }

        if(tour > 4){
            console.log("Tour monstres");
            tourHero = false;
        }
        return tourHero;
    }

    // Enclenche les tours de monstre

    function startMonsterPhase(heroTour){
        if(heroTour == false){
            turnMonster();
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
    
    // MONSTER TURN 

        // Serie actions tour du monstre
        function turnMonster(){

            // Choix du nouveau monstre a agir
            do{
                characterSelection();
                ActiveCharaAlive = checkAliveCharacter(vieActiveChara);
            } while(ActiveCharaAlive == false);
        
            // calcul dgt random
            damage = getRandomInt(8);

            // choix random de hero a taper
            do{
                victimSelection();
                victimCharaAlive = checkAliveVictim(vieVictim);
            } while(victimCharaAlive == false);

            // retrait de pv
            attack(damage, vieVictim);
            
            // feedbacks visuels
            infosAttack(nomActiveChara, hitCharacter, damage, contenuBoiteDialogue);
            animationAttack(nomActiveChara, animActiveChara, hitCharacter, animationVictim);
            
            // verification si hero mort
            checkDeathCharacter(contenuBoiteDialogue, vieVictim);

            // incrementation nouveau tour
            turn = tourSupp(turn);
            
            // preparation du prochain tour
            setTimeout(function() {
                // verification si tous les persos ont agi pour reinitialisation
                checkReiniTour(turn);

                //check si tour ennemi ou allie
                heroSide = checkWhichSideTour(turn);
                
                // Si tour des monstre = actionne
                startMonsterPhase(heroSide);
            }, 3000);
            console.log("---- Nouveau tour ----");
        }
        // choix random du joueur a taper
        function choseNameCharacterHit(){
            result = getRandomInt(4);
            console.log(result);
            
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

            console.log("monstre-> hero n° "+result);

            return victimHero;
        }
        


    // PLAYER TURN

        //Serie actions tour du joueur
        function turnPlayer(){

            // random de dgt
            damage = getRandomInt(10);

            // choix random de monstre a taper
            do{
                victimSelection();
                victimCharaAlive = checkAliveVictim(vieVictim);
            } while(victimCharaAlive == false);

            // retrait de pv
            attack(damage, vieVictim);

            // feedbacks visuels
            infosAttack(nomActiveChara, hitCharacter, damage, contenuBoiteDialogue);  
            animationAttack(nomActiveChara, animActiveChara, hitCharacter, animationVictim);
            
            // verification si monstre mort
            checkDeathMonster(contenuBoiteDialogue,vieVictim);
            checkAliveCharacter(turn, vieActiveChara)
        }
        // choix random du monstre a taper
        function choseNameMonsterHit(){
            result = getRandomInt(3);
            
            if(result == 0){
                victim = document.getElementById("nomMonstre1").innerHTML; 
            }
            else if(result == 1){
                victim = document.getElementById("nomMonstre2").innerHTML;
            }
            else if(result == 2){
                victim = document.getElementById("nomMonstre3").innerHTML;
            }

            console.log("hero-> monstre n° "+result);

            return victim;
        }

// FONCTIONS DE MORT

    // MORT - verifie si le monstre est mort
    function checkDeathMonster(message, hpmonster) {
        hp = hpmonster.innerHTML;
        if (hp <= 0) {
            hpmonster.innerHTML = 0;
            spriteDisparait(animationVictim, hitCharacter);
            message.innerHTML = "Le monstre est vaincu. Tu as gagné ! Bravo.";
            console.log("monstre mort");
        } else {
            console.log("monstre vivant");
        }
    }

    // MORT - verifie si le monstre est mort
    function checkDeathCharacter(message, hpCharacter){
        hp = hpCharacter.innerHTML;
        if (hp <= 0) {
            hpCharacter.innerHTML = 0;
            spriteDisparait(animationVictim, hitCharacter);
            message.innerHTML = hitCharacter + "a été vaincu.";
            console.log("hero mort");
        } else {
            console.log("hero vivant");
        }
    }

    function spriteDisparait(animationCharacter, nomCharacter){
        animationCharacter.style.visibility = 'hidden';
    }


// FONCTIONS CHECK DE VIE

    // Rajoute un tour si le perso est mort
    function checkAliveCharacter(hpCharacter){
        //Check si vie = 0. Si oui, on rajoute un tour et on relance la selection
        if (hpCharacter.innerHTML == 0){
            console.log("personnage mort, au suivant");
            turn = tourSupp(turn);
            checkReiniTour(turn);
            ActiveCharaAlive = false;
        }
        else{
            ActiveCharaAlive = true;
        }
        return ActiveCharaAlive;
    }

    // Relance le random de choix de perso si perso deja mort
    function checkAliveVictim(hpCharacter){
        if (hpCharacter.innerHTML == 0){
            victimCharaAlive = false;
            console.log("Cible deja morte, on change");
        }
        else{
            victimCharaAlive = true;
        }
        return victimCharaAlive;
    }

function gameOver(){

}

function victory()
// ------------------------------------- DEBUT DU JEU -------------------------------------

//Elements de HTML

boutonAttaque = document.getElementById("boutonAttaque");
boutonDefense = document.getElementById("boutonDefense");
boutonPouvoir = document.getElementById("boutonPouvoir");
contenuBoiteDialogue = document.getElementById("contenuBoiteDialogue");

// ~~ variable non monstre a enlever, pour la remplacer quand les monstres pourront etre select ~~

ActiveCharaAlive = true;
victimCharaAlive = true;



turn = 1;

// DEBUT DU JEU

    //Premier perso choisi
    heroSide = checkWhichSideTour(turn);
    
    checkAliveCharacter(turn, vieActiveChara, nomActiveChara);

    //Message boite de dialogue
    messageDebutTour(turn, contenuBoiteDialogue, nomActiveChara);

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
        checkReiniTour(turn);

        //check si tour ennemi ou allie
        heroSide = checkWhichSideTour(turn);

        // Si tour des monstre = actionne
        startMonsterPhase(heroSide);
    }, 3000);

    console.log("---- Nouveau tour ----");
}