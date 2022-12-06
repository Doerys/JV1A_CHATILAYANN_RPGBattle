// ------------------------------------- FONCTIONS -------------------------------------

// --------------- FONCTIONS "PRIMITIVES" (Les plus basiques) ----------------

    // RANDOM - calcul random
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    // --- TOUR ---

        // Incrementer un tour
        function tourSupp(tour){
            tour += 1;
            return tour;
        }

        // Fait boucler le decompte des tours
        function ReiniTour(decompteTour, message){
            decompteTour = 1;
            console.log("tour" + decompteTour);
            message.innerHTML = "Nouveau tour !";
            return decompteTour;
        }
        
        // Message a chaque debut de tour
        function messageDebutTour(tour, message, persoActif){
            message.innerHTML = "C'est au tour de " + persoActif + " d'attaquer.";
        }

        // Verifie si le tour actuel est un tour de heros ou un tour de monstre
        function checkWhichSideTour(tour){
            if(tour < 5){
                console.log("Tour hero");
                tourHero = true;
            }
    
            if(tour > 4){
                console.log("Tour monstres");
                tourHero = false;
            }
            return tourHero;
        }

    // --- ATTAQUE ---

        // Soustraction de vie 
        function attack(DmgAttack, victimLife) {
            victimLife.innerHTML = parseInt(victimLife.innerHTML) - DmgAttack;
        }

        // Message boite dialogue
        function infosAttack(SlayerName, VictimName, DmgAttack, message){
            message.innerHTML = SlayerName + " attaque ! " + VictimName + " reçoit " + DmgAttack + " dégâts !";
        }

        // Serie animations
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
   
    // --- STOCKAGE DE VARIABLES ---

        // Stocke le nom du perso en train de jouer
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

        // Stocke le sprite d'un perso
        function choseSprite(perso){
            spriteAnimation = document.getElementById("animation"+perso);
            return spriteAnimation;
        }

        // Stocke le sprite d'un perso
        function choseLife(perso){
            barLife = document.getElementById("vie"+perso);
            return barLife;
        }

    // --- INTERFACE ---

        // Enleve les boutons
        function removeButtons(buttonA, buttonB, buttonC){
            buttonA.style.display = 'none';
            buttonB.style.display = 'none';
            buttonC.style.display = 'none';
        }

        // Remet les boutons
        function showButtons(buttonA, buttonB, buttonC){
            buttonA.style.display = 'block';
            buttonB.style.display = 'block';
            buttonC.style.display = 'block';
        }

        // Disparition d'un sprite
        function spriteDisparait(animationCharacter){
            animationCharacter.style.visibility = 'hidden';
        }

    // --- FIN DE JEU ---

        // conditions de victoire
        function victory(message, nbEnnemisMorts){
            if(nbEnnemisMorts == 3){
                message.innerHTML = "Victoire ! Vous avez vaincu tous les mobs !";
                console.log("VICTOIRE");
            }
        }
        
        // conditions de defaite
        function gameOver(message, nbHerosMorts){
            if(nbHerosMorts == 4){
                message.innerHTML = "Défaite ! Tous vos héros ont péri !";
                console.log("DEFAITE");
            }
        }

    // --- GESTION DES MORTS ---

        // Relance le random de choix de perso si perso deja mort (A RANGER)
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




// ---------- FONCTIONS INTERMEDIAIRES (fonctions appelant à des fonctions primitives) ---------

    // --- RANDOM ---

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

    // --- TOUR ---

        // verifie si les 8 tours sont passes. Si oui, lance la reinitialisation
        function checkReiniTour(tour){
            if (tour == 8){
                turn = ReiniTour(turn, contenuBoiteDialogue);
            }
            console.log("tour" + tour);
        }

    // --- STOCKAGE DE VARIABLES --- 

        // stocke le nom, les pv et animation du perso actif
        function characterSelection(){
            nomActiveChara = choseNameCharacter(turn);
            vieActiveChara = choseLife(nomActiveChara);
            animActiveChara = choseSprite(nomActiveChara);
    
            console.log("nom du perso = " + nomActiveChara);
        }

    // --- GESTION DES MORTS ---

       // verifie si un monstre est mort
       function checkDeathMonster(message, hpmonster, ennemiMort) {
        hp = hpmonster.innerHTML;
        if (hp <= 0) {
            hpmonster.innerHTML = 0;
            spriteDisparait(animationVictim);
            message.innerHTML = hitCharacter + " a été vaincu.";
            ennemiMort += 1;
            console.log("monstre mort");
        } else {
            console.log("monstre vivant");
        }
        return ennemiMort;
        }

        // verifie si un monstre est mort
        function checkDeathCharacter(message, hpCharacter, heroMort){
            hp = hpCharacter.innerHTML;
            if (hp <= 0) {
                hpCharacter.innerHTML = 0;
                spriteDisparait(animationVictim);
                message.innerHTML = hitCharacter + " a été vaincu.";
                heroMort += 1;
                console.log("hero mort");
            } else {
                console.log("hero vivant");
            }
            return heroMort;
        }

        // Passe au tour suivant si un perso est mort
        function checkAliveCharacter(hpCharacter){
            
            //Check si vie du perso = 0. Si oui, on annonce qu'il est mort et on rajoute un tour
            if (hpCharacter.innerHTML == 0){
                ActiveCharaAlive = false;
                console.log("personnage mort, au suivant");
                turn = tourSupp(turn);
                checkReiniTour(turn);
            }
            // Perso vivant, tout va bien
            else{
                ActiveCharaAlive = true;
            }
            return ActiveCharaAlive;
        }




// ---------------- FONCTIONS GLOBALES (fonctions appelant à des fonctions intermédiaires) ----------

    // --- TOUR ---

        // Enclenche les tours de monstre
        function startMonsterPhase(heroTour){
            if(heroTour == false){
                turnMonster();
            }
        }
        
        // Enclenche les tours de joueur
        function startHeroPhase(heroTour){  
            if(heroTour == true){          
            
                // Reapparition des boutons
            showButtons(boutonAttaque, boutonDefense, boutonPouvoir);

            //message debut tour pour joueur
            messageDebutTour(turn, contenuBoiteDialogue, nomActiveChara);
            }
        }

    // --- STOCKAGE DE VARIABLES --- 

        // Selectionne des personnages jusqu'a tomber sur un personnage en vie
        function selectionUntilAlive(){
            do{
                characterSelection();
                
                // Verification qu'il est toujours en vie
                ActiveCharaAlive = checkAliveCharacter(vieActiveChara);
            } while(ActiveCharaAlive == false);
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

    // --- FIN DE JEU ---
        
        // relance un nouveau tour, ou arrete le jeu en cas de defaite ou de victoire
        function stopTheGame(mortsEnnemis, mortsHeros){
            if (mortsEnnemis == 3 || mortsHeros == 4){
                console.log("Jeu termine");
            }
            else if (mortsEnnemis != 3 && mortsHeros != 4){    
                // incrementation nouveau tour
                turn = tourSupp(turn);
        
                setTimeout(function() {

                    console.log("---- Nouveau tour ----");

                    // verification si tous les persos ont agi
                    checkReiniTour(turn);

                    // selection de persos jusqu a un perso en vie            
                    selectionUntilAlive();

                    //check si tour ennemi ou allie
                    heroSide = checkWhichSideTour(turn);

                    // Si tour de joueur = actionne

                    startHeroPhase(heroSide);
            
                    // Si tour des monstre = actionne
                    startMonsterPhase(heroSide);
                }, 3000);
            }
        }

    // PLAYER TURN - Serie actions tour du joueur
    function turnPlayer(){

        // random de dgt
        damage = getRandomInt(10);

        // choix random de monstre a taper. Verifie qu'il est vivant, sinon relance le choix, encore et encore, jusqu'a tomber sur qq de vivant
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
        deadMobScore = checkDeathMonster(contenuBoiteDialogue,vieVictim, deadMobScore);
        console.log("Nombre de monstres morts : " + deadMobScore);
        checkAliveCharacter(turn, vieActiveChara);

        // verification si victoire
        victory(contenuBoiteDialogue, deadMobScore);

        // stoppe le jeu en cas de victoire, ou relance un nouveau tour
        stopTheGame(deadMobScore, deadHeroScore);

    }

    // MONSTER TURN - Serie actions tour du monstre
    function turnMonster(){

        // calcul dgt random
        damage = getRandomInt(8);

        // choix random de hero a taper. Verifie qu'il est vivant, sinon relance le choix, encore et encore, jusqu'a tomber sur qq de vivant
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
        deadHeroScore = checkDeathCharacter(contenuBoiteDialogue, vieVictim, deadHeroScore);
        console.log("Nombre de heros morts : " + deadHeroScore);

        // verification si defaite
        
        gameOver(contenuBoiteDialogue, deadHeroScore);

        // stoppe le jeu en cas de victoire, ou relance un nouveau tour
        stopTheGame(deadMobScore, deadHeroScore);
    }







// ------------------------------------- DEBUT DU JEU -------------------------------------

//Elements de HTML

boutonAttaque = document.getElementById("boutonAttaque");
boutonDefense = document.getElementById("boutonDefense");
boutonPouvoir = document.getElementById("boutonPouvoir");
contenuBoiteDialogue = document.getElementById("contenuBoiteDialogue");

// ~~ variable non monstre a enlever, pour la remplacer quand les monstres pourront etre select ~~

ActiveCharaAlive = true;
victimCharaAlive = true;
deadMobScore = 0;
deadHeroScore = 0;
heroSide = true;


turn = 1;

// DEBUT DU JEU

    //Premier perso choisi

    
    // Selection du premier perso
    characterSelection();

    // On lance le tour de joueur
    startHeroPhase();

    //Message boite de dialogue
    messageDebutTour(turn, contenuBoiteDialogue, nomActiveChara);

// CLIC BOUTON ATTAQUE
boutonAttaque.onclick = function() {

    // retrait bouton
    removeButtons(boutonAttaque, boutonDefense, boutonPouvoir);

    // actions joueur
    turnPlayer();
}