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

    // --- DEFENSE ---

        // Detecte le perso que le joueur controle pour lui appliquer un bouclier
        function applyShield(nomPerso, tour, message, listHero){
            if (tour == 1){
                listHero[0] = true;
            }
            if (tour == 2){
                listHero[1] = true;
            }
            if (tour == 3){
                listHero[2] = true;
            }
            if (tour == 4){
                listHero[3] = true;
            }

            message.innerHTML = nomPerso + " se prépare à bloquer la prochaine attaque.";
            console.log("defense des heros : " + heroesDef);
            
            return listHero;
        }

        // Applique a la cible du monstre la valeur de defense stockée en fonction du perso
        function pickShield(nameVictimHero, listHero){
            if (nameVictimHero == "Archer"){
                victimDefense = listHero[0];
            }
            else if (nameVictimHero == "Mage"){
                victimDefense = listHero[1];
            }
            else if (nameVictimHero == "Guerrier"){
                victimDefense = listHero[2];
            }
            else if (nameVictimHero == "Assassin"){
                victimDefense = listHero[3];
            }
            return victimDefense;
        }

    // --- POUVOIR

        // Soustraction de mana. Pour l'instant, enlève 5 points dans tous les cas.
        function useMana(manaPerso) {
            manaPerso.innerHTML = parseInt(manaPerso.innerHTML) - 5;
        }

        // Applique l'effet "brulure" sur le monstre cible quand le mage joue son pouvoir
        function applyFire(nomMonstre, listMonstre){
            if (nomMonstre == "Champignon"){
                listMonstre[0] = 2;
            }
            else if (nomMonstre == "Sanglier"){
                listMonstre[1] = 2;
            }
            else if (nomMonstre == "Geant"){
                listMonstre[2] = 2;
            }

            console.log("brulure des monstres : " + listMonstre);
            console.log(nomMonstre + " brûlé par joueur.");
            return listMonstre;
        }

        // Applique l'effet "gel" sur le monstre cible quand l'archer joue son pouvoir
        function applyIce(nomMonstre, listMonstre){
            if (nomMonstre == "Champignon"){
                listMonstre[0] = true;
            }
            else if (nomMonstre == "Sanglier"){
                listMonstre[1] = true;
            }
            else if (nomMonstre == "Geant"){
                listMonstre[2] = true;
            }

            console.log("gel des monstres : " + listMonstre);
            console.log(nomMonstre + " est gelé.");
            return listMonstre;
        }

        // serie d'animations commmune aux pouvoirs archer et mage
        function animationPowerArcherMage(namePerso, animPerso, nameVictim, animVictim){
                
            //pouvoir animation
            animPerso.setAttribute("src", "images/attack2"+namePerso+".gif");

            //attaquant iddle et defenseur hit
            setTimeout(function() {
                animPerso.setAttribute("src", "images/idle"+namePerso+".gif");
                animVictim.setAttribute("src", "images/hit"+nameVictim+".gif");}, 2000);
                
            //defenseur idle
            setTimeout(function() {
                animVictim.setAttribute("src", "images/idle"+nameVictim+".gif");}, 2500);
        }
        
        // animations du pouvoir guerrier
        function animationPowerGuerrier(namePerso, animPerso){
                
            //pouvoir animation
            animPerso.setAttribute("src", "images/attack2"+namePerso+".gif");

            //retour idle
            setTimeout(function() {
                animPerso.setAttribute("src", "images/idle"+namePerso+".gif");}, 2000);
        }

        // animation du pouvoir assassin
        function animationPowerAssassin(nameSlayer, animSlayer, nameVictim1, nameVictim2, nameVictim3, animCible1, animCible2, animCible3){

            //attaquant attack
            animSlayer.setAttribute("src", "images/attack2"+nameSlayer+".gif");

            //attaquant iddle et defenseur hit
            setTimeout(function() {

                animSlayer.setAttribute("src", "images/idle"+nameSlayer+".gif");

                animCible1.setAttribute("src", "images/hit"+nameVictim1+".gif");
                animCible2.setAttribute("src", "images/hit"+nameVictim2+".gif");
                animCible3.setAttribute("src", "images/hit"+nameVictim3+".gif")}, 2000);
                
            //defenseur idle
            setTimeout(function() {
                animCible1.setAttribute("src", "images/idle"+nameVictim1+".gif");
                animCible2.setAttribute("src", "images/idle"+nameVictim2+".gif");
                animCible3.setAttribute("src", "images/idle"+nameVictim3+".gif");}, 2500);
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

        // Stocke la mana d'un perso
        function choseMana(perso){
            barMana = document.getElementById("mana"+perso);
            return barMana;
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

    // --- MONSTRE ---

        // Applique au monstre actif la valeur de gel stockée en fonction du perso
        function pickIce(nomMonstre, listMonstre){
            if (nomMonstre == "Champignon"){
                iceState = listMonstre[0];
            }
            else if (nomMonstre == "Sanglier"){
                iceState = listMonstre[1];
            }
            else if (nomMonstre == "Geant"){
                iceState = listMonstre[2];
            }
            return iceState;
        }

        // Applique au monstre actif la valeur de brulure stockée en fonction du perso
        function pickFire(nomMonstre, listMonstre){
            if (nomMonstre == "Champignon"){
                fireState = listMonstre[0];
            }
            else if (nomMonstre == "Sanglier"){
                fireState = listMonstre[1];
            }
            else if (nomMonstre == "Geant"){
                fireState = listMonstre[2];
            }
            return fireState;
        }

        // Retire de 1 le cooldown du feu
        function lessFireCooldown(nomMonstre, listMonstre){
            if (nomMonstre == "Champignon"){
                listMonstre[0] -= 1 ;
            }
            else if (nomMonstre == "Sanglier"){
                listMonstre[1] -= 1;
            }
            else if (nomMonstre == "Geant"){
                listMonstre[2] -= 1;
            }
            return listMonstre;
        }

        // Retire l'effet gel une fois subi
        function reiniIce(nomMonstre, listMonstre){
            if (nomMonstre == "Champignon"){
                listMonstre[0] = false ;
            }
            else if (nomMonstre == "Sanglier"){
                listMonstre[1] = false ;
            }
            else if (nomMonstre == "Geant"){
                listMonstre[2] = false ;
            }
            return listMonstre;
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

    // --- DEFENSE ---

        // Reinitialise de l'ensemble des boucliers a la fin du tour
        function ReiniShield(listDefHeros){

            listDefHeros = [false, false, false, false];
            console.log("Reinitialisation des boucliers");
        }

    // --- TOUR ---

        // Fait boucler le decompte des tours et reinitialise les boucliers
        function ReiniTour(decompteTour, message){
            decompteTour = 1;
            console.log("tour" + decompteTour);
            message.innerHTML = "Nouveau tour !";

            // Reinitialise les defenses
            ReiniShield(heroesDef);

            return decompteTour;
        }

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
            if(turn == 1 || turn == 2 || turn == 3 || turn == 4){
                manaActiveChara = choseMana(nomActiveChara);
            }
            console.log("nom du perso = " + nomActiveChara);
        }

    // --- GESTION DES MORTS ---

       // verifie si un monstre est mort
       function checkDeathMonster(message, hpmonster, ennemiMort, nameDeadMonster, animationDeadMonster) {
        hp = hpmonster.innerHTML;
        if (hp <= 0) {
            hpmonster.innerHTML = 0;
            spriteDisparait(animationDeadMonster);
            message.innerHTML = nameDeadMonster + " a été vaincu.";
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

                // On réactive tous les boutons
                enableActions()

                // Stocke la liste d'actions permises pour le perso actif
                listActionsActiveChara = whichCharacterPlay(turn);

                //Enleve les actions impossibles a faire
                disableActions();

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


                    console.log("actions Archer : " + listActionsArcher);
                    console.log("actions Mage : " +listActionsMage);
                    console.log("actions Guerrier : " +listActionsGuerrier);
                    console.log("actions Assassin : " +listActionsAssassin);
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

    // ATTACK PLAYER - Serie actions pour attaque du joueur
    function attackPlayer(){

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
        deadMobScore = checkDeathMonster(contenuBoiteDialogue,vieVictim, deadMobScore, hitCharacter, animationVictim);
        console.log("Nombre de monstres morts : " + deadMobScore);

        // Reini les capacites permises au perso actif pour le prochain tours
        listActionsActiveChara = actionAttackDone(listActionsActiveChara);

        // On recupere la liste d'actions associe au perso actif
        whichCharacterHavePlayed(turn);

        // verification si victoire
        victory(contenuBoiteDialogue, deadMobScore);

        // stoppe le jeu en cas de victoire, ou relance un nouveau tour
        stopTheGame(deadMobScore, deadHeroScore);

    }

    // DEFENSE PLAYER - Serie actions pour defense du joueur
    function defensePlayer(){

        // fonction appliquant une protection
        
        applyShield(nomActiveChara, turn, contenuBoiteDialogue, heroesDef);

        // feedbacks visuels

        // Reini les capacites permises pour le prochain tours
        listActionsActiveChara = actionDefenseDone(listActionsActiveChara);

        // On recupere la liste d'actions associe au perso actif
        whichCharacterHavePlayed(turn);
        
        // stoppe le jeu en cas de victoire, ou relance un nouveau tour
        stopTheGame(deadMobScore, deadHeroScore);
    }

    // POWER PLAYER - Serie actions pour pouvoir du joueur
    
    function powerPlayer(){

        // Retire la mana utilisee
        useMana(manaActiveChara);

        // repere quel personnage joue, puis active le pouvoir qui lui est associe
        whichCharacterPower(turn);

        // Reini les capacites permises pour le prochain tours
        listActionsActiveChara = actionPowerDone(listActionsActiveChara);

        // On recupere la liste d'actions associe au perso actif
        whichCharacterHavePlayed(turn);

        // stoppe le jeu en cas de victoire, ou relance un nouveau tour
        stopTheGame(deadMobScore, deadHeroScore);
    }

    // --- POUVOIRS ---

        // Roue des pouvoirs - selectionne le pouvoir en fonction du perso actif
        function whichCharacterPower(tour){
            if(tour == 1){
                archerPower(contenuBoiteDialogue);
            }
            if(tour == 2){
                magePower(contenuBoiteDialogue);
            }
            if(tour == 3){
                guerrierPower(contenuBoiteDialogue);
            }
            if(tour == 4){
                assassinPower(contenuBoiteDialogue);
            }
        }

        // Enclenche le pouvoir de l'archer
        function archerPower(message){

            // choix random de monstre a taper. Verifie qu'il est vivant, sinon relance le choix, encore et encore, jusqu'a tomber sur qq de vivant
            do{
                victimSelection();
                victimCharaAlive = checkAliveVictim(vieVictim);
            } while(victimCharaAlive == false);

            // fonction pour appliquer l'effet de gel
            applyIce(hitCharacter, iceList);

            // feedbacks visuels
            console.log("Pouvoir archer activé");
            message.innerHTML = "L'archer tire une flèche de givre, gelant l'ennemi pour le tour actuel.";
            animationPowerArcherMage(nomActiveChara, animActiveChara, hitCharacter, animationVictim);
        }

        // Enclenche le pouvoir du mage
        function magePower(message){

            // random de dgt
            damage = getRandomInt(5);

            // choix random de monstre a taper. Verifie qu'il est vivant, sinon relance le choix, encore et encore, jusqu'a tomber sur qq de vivant
            do{
                victimSelection();
                victimCharaAlive = checkAliveVictim(vieVictim);
            } while(victimCharaAlive == false);

            // soustraction de la vie du monstre
            attack(damage, vieVictim);
            message.innerHTML = "Sort de feu ! Le monstre subit " + damage + " et subira des brulures";

            // fonction pour appliquer l'effet de brûlure
            applyFire(hitCharacter, fireCooldown);

            // feedbacks visuels
            console.log("Pouvoir mage activé");
            animationPowerArcherMage(nomActiveChara, animActiveChara, hitCharacter, animationVictim);

            // verification si monstre mort
            deadMobScore = checkDeathMonster(contenuBoiteDialogue, vieVictim, deadMobScore, hitCharacter, animationVictim);
            console.log("Nombre de monstres morts : " + deadMobScore);

            // verification si victoire
            victory(contenuBoiteDialogue, deadMobScore);
        }

        // Enclenche le pouvoir du guerrier
        function guerrierPower(message){
            archerDef = true;
            mageDef = true;
            guerrierDef = true;
            assassinDef = true;

            console.log("Pouvoir guerrier activé");
            message.innerHTML = "Le Guerrier déploie son bouclier sacré, protégeant l'ensemble du groupe.";
            animationPowerGuerrier(nomActiveChara, animActiveChara);

            console.log("Archer def = " + archerDef);
            console.log("Mage def = " + mageDef);
            console.log("Guerrier def = " + guerrierDef);
            console.log("Assassin def = " + assassinDef);
        }

        // Enclenche le pouvoir de l'assassin
        function assassinPower(message){
            // random de dgt
            damage = getRandomInt(5);

            // Selectionne les noms des 3 monstres
            cibleAssassin1 = document.getElementById("nomMonstre1").innerHTML; 
            cibleAssassin2 = document.getElementById("nomMonstre2").innerHTML;
            cibleAssassin3 = document.getElementById("nomMonstre3").innerHTML;

            // Stocke la vie des 3 monstres
            vieCibleAssassin1 = choseLife(cibleAssassin1);
            vieCibleAssassin2 = choseLife(cibleAssassin2),
            vieCibleAssassin3 = choseLife(cibleAssassin3);

            // Stocke l'animation des 3 monstres
            animCibleAssassin1 = choseSprite(cibleAssassin1);
            animCibleAssassin2 = choseSprite(cibleAssassin2);
            animCibleAssassin3 = choseSprite(cibleAssassin3);

            // Blesse les 3 monstres
            attack(damage, vieCibleAssassin1);
            attack(damage, vieCibleAssassin2);
            attack(damage, vieCibleAssassin3);

            // feedbacks visuels
            message.innerHTML = "L'assassin charge son épée. Sa lame frappe l'ensemble des monstres !";
            animationPowerAssassin(nomActiveChara, animActiveChara, cibleAssassin1, cibleAssassin2, cibleAssassin3, animCibleAssassin1, animCibleAssassin2, animCibleAssassin3);
            
            // verification si monstre mort
            deadMobScore = checkDeathMonster(contenuBoiteDialogue,vieCibleAssassin1, deadMobScore, cibleAssassin1, animCibleAssassin1);
            deadMobScore = checkDeathMonster(contenuBoiteDialogue,vieCibleAssassin2, deadMobScore, cibleAssassin2, animCibleAssassin2);
            deadMobScore = checkDeathMonster(contenuBoiteDialogue,vieCibleAssassin3, deadMobScore, cibleAssassin3, animCibleAssassin3);

            console.log("Nombre de monstres morts : " + deadMobScore);

            // verification si victoire
            victory(contenuBoiteDialogue, deadMobScore);
        }

    // --- MONSTER TURN --- 
    
        // Serie actions tour du monstre
        function turnMonster(){

            // choix random de hero a taper. Verifie qu'il est vivant, sinon relance le choix, encore et encore, jusqu'a tomber sur qq de vivant
            do{
                victimSelection();
                victimCharaAlive = checkAliveVictim(vieVictim);
            } while(victimCharaAlive == false);

            // Application de la valeur de brulure au monstre qui attaque
            fireState = pickFire(nomActiveChara, fireCooldown);
            
            // degats de brulure si brulure
            burn(fireState);

            // Application de la valeur de gel au monstre qui attaque
            iceState = pickIce(nomActiveChara, iceList);

            // Application de la valeur de defense au heros cible.
            victimDef = pickShield(hitCharacter, heroesDef);

            // verification si le perso cible a une defense. Si non, enclenche une attaque.
            examStates(nomActiveChara, hitCharacter, iceState, victimDef, contenuBoiteDialogue);
            
            // verification si hero mort
            deadHeroScore = checkDeathCharacter(contenuBoiteDialogue, vieVictim, deadHeroScore);
            console.log("Nombre de heros morts : " + deadHeroScore);

            // verification si defaite
            
            gameOver(contenuBoiteDialogue, deadHeroScore);

            // stoppe le jeu en cas de victoire, ou relance un nouveau tour
            stopTheGame(deadMobScore, deadHeroScore);
        }

        // Verifie si le monstre est gele, puis si la cible possede un bouclier avant de lancer une attaque
        function examStates(nomMonstre, nomVictim, etatGlace, victimDefense, messageEchecAttaque){
            if(etatGlace == true){
                console.log("Le monstre est gele");
                messageEchecAttaque.innerHTML = nomMonstre + " est gelé, et ne peut donc pas attaquer.";
                iceList = reiniIce(nomActiveChara, iceList);
            }
            else if (victimDefense == true){
                console.log("La defense est activee");
                messageEchecAttaque.innerHTML = nomVictim + " pare l'attaque du " + nomMonstre;
            }
            else{
                attackMonstre();
            }
        }
        
        // Si monstre brulé, applique des dgts de brulure
        function burn(effetFeu)
        {
            if (effetFeu > 0){
                //random de dgt
                damage = getRandomInt(5);

                // application des dgts
                attack(damage, vieActiveChara);
                console.log(nomActiveChara + " brule de " + damage);

                //animation dgt de brulure
                animActiveChara.setAttribute("src", "images/hit"+nomActiveChara+".gif");

                //attaquant iddle et defenseur hit
                setTimeout(function() {
                    animActiveChara.setAttribute("src", "images/idle"+nomActiveChara+".gif");}, 1000);

                // Retrait d'1 en cooldown
                fireCooldown = lessFireCooldown(nomActiveChara, fireCooldown); 
            }
        }

        // Declenche l'attaque du monstre
        function attackMonstre(){
            // calcul dgt random
            damage = getRandomInt(8);

            // retrait de pv
            attack(damage, vieVictim);

            // feedbacks visuels
            infosAttack(nomActiveChara, hitCharacter, damage, contenuBoiteDialogue);
            animationAttack(nomActiveChara, animActiveChara, hitCharacter, animationVictim);
        }

// Stocke la liste d'actions permises pour le perso actif
function whichCharacterPlay(tour){
    
    if(tour == 1){
        listPersoActif = listActionsArcher;
        console.log("liste archer");
    }
    if(tour == 2){
        listPersoActif = listActionsMage;
    }
    if(tour == 3){
        listPersoActif = listActionsGuerrier;
    }
    if(tour == 4){
        listPersoActif = listActionsAssassin;
    }
    console.log("liste des actions récupérées : " + listPersoActif);
    return listPersoActif;
}

// Réagence les boutons pour le prochain tour
function enableActions(){
    boutonAttaque.disabled = false;
    boutonAttaque.style.backgroundColor = "#B03333";
    boutonDefense.disabled = false;
    boutonDefense.style.backgroundColor = "#27821C";
    boutonPouvoir.disabled = false;
    boutonPouvoir.style.backgroundColor = "#1C4082";
}

//Enleve les actions impossibles a faire
function disableActions(){

    if(listActionsActiveChara[0] == 1){
        boutonAttaque.disabled = true;
        boutonAttaque.style.backgroundColor = "grey";
    }

    if(listActionsActiveChara[1] == 1){
        boutonDefense.disabled = true;
        boutonDefense.style.backgroundColor = "grey";
    }

    if(listActionsActiveChara[2] == 1){
        boutonPouvoir.disabled = true;
        boutonPouvoir.style.backgroundColor = "grey";
    }

    if(manaActiveChara.innerHTML == 0){
        boutonPouvoir.disabled = true;
        boutonPouvoir.style.backgroundColor = "grey";
        console.log("plus de mana");
    }
}

// Retire un bouton
function removeOneButton(boutonAEnlever){
    document.getElementById("mySelect").disabled = true;
}

// Change actions

function actionAttackDone(listeActions){
    listeActions = [1, 0, 0];
    console.log("liste des actions à venir : " + listeActions);
    return listeActions;
}

function actionDefenseDone(listeActions){
    listeActions = [0, 1, 0];
    console.log("liste des actions : " + listeActions);
    return listeActions;
}

function actionPowerDone(listeActions){
    listeActions = [0, 0, 1];
    console.log("liste des actions : " + listeActions);
    return listeActions;
}

function whichCharacterHavePlayed(tour){
    if(tour == 1){
        listActionsArcher = returnActionsArcher(listActionsActiveChara);
    }
    if(tour == 2){
        listActionsMage = returnActionsMage(listActionsActiveChara);
    }
    if(tour == 3){
        listActionsGuerrier = returnActionsGuerrier(listActionsActiveChara);
    }
    if(tour == 4){
        listActionsAssassin = returnActionsAssassin(listActionsActiveChara);
    }

}

function returnActionsArcher(listePersoActif){
    listActionsArcher = listePersoActif;
    return listActionsArcher;
}

function returnActionsMage(listePersoActif){
    listActionsMage = listePersoActif;
    return listActionsMage;
}

function returnActionsGuerrier(listePersoActif){
    listActionsGuerrier = listePersoActif;
    return listActionsGuerrier;
}

function returnActionsAssassin(listePersoActif){
    listActionsAssassin = listePersoActif;
    return listActionsAssassin;
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
listActionsActiveChara = [0, 0, 0];
deadMobScore = 0;
deadHeroScore = 0;
heroSide = true;

// Variables de defense

heroesDef = [false, false, false, false];

victimDef = false;

// Variables de glace

iceList = [false, false, false];

iceState = false;

// Variables de feu

fireCooldown = [0, 0, 0];

fireState = 0;


listActionsArcher = [1, 0, 0];
listActionsMage = [0, 1, 0];
listActionsGuerrier = [0, 0, 0];
listActionsAssassin = [0, 0, 0];

turn = 1;

// DEBUT DU JEU

    // Selection du premier perso
    characterSelection();

    // On lance le tour de joueur
    startHeroPhase(heroSide);

    //Message boite de dialogue
    messageDebutTour(turn, contenuBoiteDialogue, nomActiveChara);

// CLIC BOUTON ATTAQUE
boutonAttaque.onclick = function() {

    // retrait bouton
    removeButtons(boutonAttaque, boutonDefense, boutonPouvoir);

    // actions joueur
    attackPlayer();
}

// CLIC BOUTON DEFENSE
boutonDefense.onclick = function() {

    // retrait bouton
    removeButtons(boutonAttaque, boutonDefense, boutonPouvoir);

    // actions joueur
    defensePlayer();

}

// CLIC BOUTON POUVOIR
boutonPouvoir.onclick = function() {

    // retrait bouton
    removeButtons(boutonAttaque, boutonDefense, boutonPouvoir);

    // actions joueur
    powerPlayer();

}