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
        function messageDebutTour(message, persoActif){
            message.innerHTML = "C'est au tour de " + persoActif + " d'agir.";
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

        function choixAnimAttack(nameSlayer, animSlayer, nameVictim, animVictim, tour){
            
            //Attaque de l'archer
            if(tour == 1){

            //attaquant attack
            animSlayer.setAttribute("src", "images/attack"+nameSlayer+".gif");

            //attaquant iddle et defenseur hit
            setTimeout(function() {
                animSlayer.setAttribute("src", "images/idle"+nameSlayer+".gif");
                animVictim.setAttribute("src", "images/hit"+nameVictim+".gif");}, 850);

                if(nameVictim == "Champignon"){
                    //defenseur idle
                    setTimeout(function() {
                        animVictim.setAttribute("src", "images/idle"+nameVictim+".gif");           
                    }, 1400);
                }

                if(nameVictim == "Sanglier"){
                    //defenseur idle
                    setTimeout(function() {
                        animVictim.setAttribute("src", "images/idle"+nameVictim+".gif");           
                    }, 1600);
                }
        
                if(nameVictim == "Geant"){
                    //defenseur idle
                    setTimeout(function() {
                        animVictim.setAttribute("src", "images/idle"+nameVictim+".gif");           
                    }, 1600);
                }
            }

            //Attaque du mage
            if(tour == 2){

                //attaquant attack
                animSlayer.setAttribute("src", "images/attack"+nameSlayer+".gif");

                //attaquant iddle et defenseur hit
                setTimeout(function() {
                    animSlayer.setAttribute("src", "images/idle"+nameSlayer+".gif");
                    animVictim.setAttribute("src", "images/hit"+nameVictim+".gif");}, 850);

                    if(nameVictim == "Champignon"){
                        //defenseur idle
                        setTimeout(function() {
                            animVictim.setAttribute("src", "images/idle"+nameVictim+".gif");           
                        }, 1400);
                    }

                    if(nameVictim == "Sanglier"){
                        //defenseur idle
                        setTimeout(function() {
                            animVictim.setAttribute("src", "images/idle"+nameVictim+".gif");           
                        }, 1600);
                    }

                    if(nameVictim == "Geant"){
                        //defenseur idle
                        setTimeout(function() {
                            animVictim.setAttribute("src", "images/idle"+nameVictim+".gif");           
                        }, 1600);
                    }
            }

            // Attaque du guerrier
            if(tour == 3){

                //attaquant attack
                animSlayer.setAttribute("src", "images/attack"+nameSlayer+".gif");

                //attaquant iddle et defenseur hit
                setTimeout(function() {
                    animSlayer.setAttribute("src", "images/idle"+nameSlayer+".gif");
                    animVictim.setAttribute("src", "images/hit"+nameVictim+".gif");}, 1000);

                    if(nameVictim == "Champignon"){
                        //defenseur idle
                        setTimeout(function() {
                            animVictim.setAttribute("src", "images/idle"+nameVictim+".gif");           
                        }, 1600);
                    }

                    if(nameVictim == "Sanglier"){
                        //defenseur idle
                        setTimeout(function() {
                            animVictim.setAttribute("src", "images/idle"+nameVictim+".gif");           
                        }, 1750);
                    }
            
                    if(nameVictim == "Geant"){
                        //defenseur idle
                        setTimeout(function() {
                            animVictim.setAttribute("src", "images/idle"+nameVictim+".gif");           
                        }, 1750);
                    }
            }

            // Attaque de l'assassin
            if(tour == 4){

                //attaquant attack
                animSlayer.setAttribute("src", "images/attack"+nameSlayer+".gif");

                //attaquant iddle et defenseur hit
                setTimeout(function() {
                    animSlayer.setAttribute("src", "images/idle"+nameSlayer+".gif");
                    animVictim.setAttribute("src", "images/hit"+nameVictim+".gif");}, 1200);

                    if(nameVictim == "Champignon"){
                        //defenseur idle
                        setTimeout(function() {
                            animVictim.setAttribute("src", "images/idle"+nameVictim+".gif");           
                        }, 1600);
                    }
            
                    if(nameVictim == "Sanglier"){
                        //defenseur idle
                        setTimeout(function() {
                            animVictim.setAttribute("src", "images/idle"+nameVictim+".gif");           
                        }, 1950);
                    }

                    if(nameVictim == "Geant"){
                        //defenseur idle
                        setTimeout(function() {
                            animVictim.setAttribute("src", "images/idle"+nameVictim+".gif");           
                        }, 1950);
                    }
            }

            // Attaque du champignon
            if(tour == 5){
                //attaquant attack
                animSlayer.setAttribute("src", "images/attack"+nameSlayer+".gif");

                //attaquant iddle et defenseur hit
                setTimeout(function() {
                    animSlayer.setAttribute("src", "images/idle"+nameSlayer+".gif");
                    animVictim.setAttribute("src", "images/hit"+nameVictim+".gif");}, 1400);

                    if(nameVictim == "Archer"){
                        //defenseur idle
                        setTimeout(function() {
                            animVictim.setAttribute("src", "images/idle"+nameVictim+".gif");           
                        }, 2000);
                    }
        
                    if(nameVictim == "Mage"){
                        //defenseur idle
                        setTimeout(function() {
                            animVictim.setAttribute("src", "images/idle"+nameVictim+".gif");           
                        }, 2000);
                    }
        
                    if(nameVictim == "Guerrier"){
                        //defenseur idle
                        setTimeout(function() {
                            animVictim.setAttribute("src", "images/idle"+nameVictim+".gif");           
                        }, 2000);
                    }
        
                    if(nameVictim == "Assassin"){
                        //defenseur idle
                        setTimeout(function() {
                            animVictim.setAttribute("src", "images/idle"+nameVictim+".gif");           
                        }, 2000);
                    }
        
            }

            // Attaque du sanglier
            if(tour == 6){
                //attaquant attack
                animSlayer.setAttribute("src", "images/attack"+nameSlayer+".gif");

                //attaquant iddle et defenseur hit
                setTimeout(function() {
                    animSlayer.setAttribute("src", "images/idle"+nameSlayer+".gif");
                    animVictim.setAttribute("src", "images/hit"+nameVictim+".gif");}, 1700);

                    if(nameVictim == "Archer"){
                        //defenseur idle
                        setTimeout(function() {
                            animVictim.setAttribute("src", "images/idle"+nameVictim+".gif");           
                        }, 2250);
                    }
        
                    if(nameVictim == "Mage"){
                        //defenseur idle
                        setTimeout(function() {
                            animVictim.setAttribute("src", "images/idle"+nameVictim+".gif");           
                        }, 2250);
                    }
        
                    if(nameVictim == "Guerrier"){
                        //defenseur idle
                        setTimeout(function() {
                            animVictim.setAttribute("src", "images/idle"+nameVictim+".gif");           
                        }, 2250);
                    }
        
                    if(nameVictim == "Assassin"){
                        //defenseur idle
                        setTimeout(function() {
                            animVictim.setAttribute("src", "images/idle"+nameVictim+".gif");           
                        }, 2250);
                    }
            }

            // attaque du Geant
            if(tour == 7){
                //attaquant attack
                animSlayer.setAttribute("src", "images/attack"+nameSlayer+".gif");

                //attaquant iddle et defenseur hit
                setTimeout(function() {
                    animSlayer.setAttribute("src", "images/idle"+nameSlayer+".gif");
                    animVictim.setAttribute("src", "images/hit"+nameVictim+".gif");}, 1100);

                    if(nameVictim == "Archer"){
                        //defenseur idle
                        setTimeout(function() {
                            animVictim.setAttribute("src", "images/idle"+nameVictim+".gif");           
                        }, 1500);
                    }
        
                    if(nameVictim == "Mage"){
                        //defenseur idle
                        setTimeout(function() {
                            animVictim.setAttribute("src", "images/idle"+nameVictim+".gif");           
                        }, 1500);
                    }
        
                    if(nameVictim == "Guerrier"){
                        //defenseur idle
                        setTimeout(function() {
                            animVictim.setAttribute("src", "images/idle"+nameVictim+".gif");           
                        }, 1500);
                    }
        
                    if(nameVictim == "Assassin"){
                        //defenseur idle
                        setTimeout(function() {
                            animVictim.setAttribute("src", "images/idle"+nameVictim+".gif");           
                        }, 1500);
                    }
            }
        }

        // Serie animations
        function animationAttack(){

            choixAnimAttack(nomActiveChara, animActiveChara, hitCharacter, animationVictim, turn);
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

        function animationShield(tour){

            if(tour == 1){
                indicArcher.setAttribute("src", "images/shieldUp.gif");
                indicArcher.style.height = "61px";
                indicArcher.style.width = "61px";
            }
            if(tour == 2){
                indicMage.setAttribute("src", "images/shieldUp.gif");
                indicMage.style.height = "61px";
                indicMage.style.width = "61px";
            }
            if(tour == 3){
                indicGuerrier.setAttribute("src", "images/shieldUp.gif");
                indicGuerrier.style.height = "71px";
                indicGuerrier.style.width = "71px";
            }
            if(tour == 4){
                indicAssassin.setAttribute("src", "images/shieldUp.gif");
                indicAssassin.style.height = "71px";
                indicAssassin.style.width = "71px";
            }
        
            setTimeout(function(){
                
                //Reboot archer
                indicArcher.setAttribute("src", "images/indicateur5.gif");
                indicArcher.style.height = "15%";
                indicArcher.style.width = "15%";
        
                //Reboot mage
                indicMage.setAttribute("src", "images/indicateur5.gif");
                indicMage.style.height = "15%";
                indicMage.style.width = "15%";
        
                //Reboot guerrier        
                indicGuerrier.setAttribute("src", "images/indicateur5.gif");
                indicGuerrier.style.height = "15%";
                indicGuerrier.style.width = "15%";
        
                //Reboot assassin
                indicAssassin.setAttribute("src", "images/indicateur5.gif");
                indicAssassin.style.height = "15%";
                indicAssassin.style.width = "15%";
                
                // on retire l'indicateur
                removeIndicator();
            
            }, 2100);
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
        function animationPowerArcher(namePerso, animPerso, nameVictim, animVictim){
                
            //pouvoir animation
            animPerso.setAttribute("src", "images/attack2"+namePerso+".gif");

            //attaquant iddle et defenseur hit
            setTimeout(function() {
                animPerso.setAttribute("src", "images/idle"+namePerso+".gif");
                animVictim.setAttribute("src", "images/hit"+nameVictim+".gif");}, 2500);

                if(nameVictim == "Champignon"){
                    //defenseur idle
                    setTimeout(function() {
                        animVictim.setAttribute("src", "images/idle"+nameVictim+".gif");           
                    }, 3050);
                }

                if(nameVictim == "Sanglier"){
                    //defenseur idle
                    setTimeout(function() {
                        animVictim.setAttribute("src", "images/idle"+nameVictim+".gif");           
                    }, 3250);
                }

                if(nameVictim == "Geant"){
                    //defenseur idle
                    setTimeout(function() {
                        animVictim.setAttribute("src", "images/idle"+nameVictim+".gif");           
                    }, 3250);
                }
        }
        
        // serie d'animations commmune aux pouvoirs archer et mage
        function animationPowerMage(namePerso, animPerso, nameVictim, animVictim){
                
            //pouvoir animation
            animPerso.setAttribute("src", "images/attack2"+namePerso+".gif");

            //attaquant iddle et defenseur hit
            setTimeout(function() {
                animPerso.setAttribute("src", "images/idle"+namePerso+".gif");
                animVictim.setAttribute("src", "images/hit"+nameVictim+".gif");}, 2400);
                
            if(nameVictim == "Champignon"){
                //defenseur idle
                setTimeout(function() {
                    animVictim.setAttribute("src", "images/idle"+nameVictim+".gif");           
                }, 2950);
            }

            if(nameVictim == "Sanglier"){
                //defenseur idle
                setTimeout(function() {
                    animVictim.setAttribute("src", "images/idle"+nameVictim+".gif");           
                }, 3150);
            }

            if(nameVictim == "Geant"){
                //defenseur idle
                setTimeout(function() {
                    animVictim.setAttribute("src", "images/idle"+nameVictim+".gif");           
                }, 3150);
            }
        }


        // animations du pouvoir guerrier
        function animationPowerGuerrier(namePerso, animPerso){
                
            //pouvoir animation
            animPerso.setAttribute("src", "images/attack2"+namePerso+".gif");

            //Bouclier archer
            indicArcher.style.visibility = "visible";
            indicArcher.setAttribute("src", "images/shieldUp.gif");
            indicArcher.style.height = "61px";
            indicArcher.style.width = "61px";

            //Bouclier Mage
            indicMage.style.visibility = "visible";
            indicMage.setAttribute("src", "images/shieldUp.gif");
            indicMage.style.height = "61px";
            indicMage.style.width = "61px";

            //Bouclier Guerrier
            indicGuerrier.style.visibility = "visible";
            indicGuerrier.setAttribute("src", "images/shieldUp.gif");
            indicGuerrier.style.height = "71px";
            indicGuerrier.style.width = "71px";

            //Bouclier Assassin
            indicAssassin.style.visibility = "visible";
            indicAssassin.setAttribute("src", "images/shieldUp.gif");
            indicAssassin.style.height = "71px";
            indicAssassin.style.width = "71px";

            //retour idle
            setTimeout(function() {
                animPerso.setAttribute("src", "images/idle"+namePerso+".gif");}, 1000);

            //Icone bouclier
            setTimeout(function() {
            
                //Reboot archer
                indicArcher.setAttribute("src", "images/indicateur5.gif");
                indicArcher.style.height = "15%";
                indicArcher.style.width = "15%";

                //Reboot mage
                indicMage.setAttribute("src", "images/indicateur5.gif");
                indicMage.style.height = "15%";
                indicMage.style.width = "15%";

                //Reboot guerrier        
                indicGuerrier.setAttribute("src", "images/indicateur5.gif");
                indicGuerrier.style.height = "15%";
                indicGuerrier.style.width = "15%";

                //Reboot assassin
                indicAssassin.setAttribute("src", "images/indicateur5.gif");
                indicAssassin.style.height = "15%";
                indicAssassin.style.width = "15%";
                
                removeIndicator();}, 2100);

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
                animCible3.setAttribute("src", "images/hit"+nameVictim3+".gif")}, 2300);
                
            //champignon idle
            setTimeout(function() {
                animCible1.setAttribute("src", "images/idle"+nameVictim1+".gif");}, 2850);

            //geant et sanglier idle
            setTimeout(function() {
                animCible2.setAttribute("src", "images/idle"+nameVictim2+".gif");
                animCible3.setAttribute("src", "images/idle"+nameVictim3+".gif");}, 3050);
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

        // Réagence les boutons pour le prochain tour
        function enableActions(boutAtt, boutDef, boutPouvoir){
            boutAtt.disabled = false;
            boutAtt.style.backgroundColor = "#B03333";
            boutAtt.style.cursor = "pointer";

            boutDef.disabled = false;
            boutDef.style.backgroundColor = "#27821C";
            boutDef.style.cursor = "pointer";
            
            boutPouvoir.disabled = false;
            boutPouvoir.style.backgroundColor = "#4396E1";
            boutPouvoir.style.cursor = "pointer";
        }

        //Enleve les actions (boutons) impossibles a faire
        function disableActions(boutAtt, boutDef, boutPouvoir, listeActions, mana){

            if(listeActions[0] == 1){
                boutAtt.disabled = true;
                boutAtt.style.backgroundColor = "grey";
                boutAtt.style.cursor = "default";
            }

            if(listeActions[1] == 1){
                boutDef.disabled = true;
                boutDef.style.backgroundColor = "grey";
                boutDef.style.cursor = "default";
            }

            if(listeActions[2] == 1){
                boutPouvoir.disabled = true;
                boutPouvoir.style.backgroundColor = "grey";
                boutPouvoir.style.cursor = "default";
            }

            if(mana.innerHTML == 0){
                boutPouvoir.disabled = true;
                boutPouvoir.style.backgroundColor = "grey";
                boutPouvoir.style.cursor = "default";
                console.log("plus de mana");
            }
        }

        // Affichage de l'image d'un personnage en action
        function changeImageBoiteDialogue(image, actifCharacter){
            image.style.visibility = "visible";
            image.setAttribute("src", "images/face"+actifCharacter+".png");
        }

        // On retire l'image de la boite de dialogue 
        function removeImageBoiteDialogue(image){
            image.style.visibility = "hidden";
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

    // --- GESTION DES COOLDOWNS ---

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

        //affiche un indicateur sur le perso actif
        function putIndicator(tour){
            if(tour == 1){
                indicArcher.style.visibility = "visible";
            }
            if(tour == 2){
                indicMage.style.visibility = "visible";
            }
            if(tour == 3){
                indicGuerrier.style.visibility = "visible";
            }
            if(tour == 4){
                indicAssassin.style.visibility = "visible";
            }
        }

        function removeIndicator(){
            indicArcher.style.visibility = "hidden";
            indicMage.style.visibility = "hidden";
            indicGuerrier.style.visibility = "hidden";
            indicAssassin.style.visibility = "hidden";
        }

        // Retourne une action effectuee pour la rendre inutilisable le tour suivant

            // Action attaque
            function actionAttackDone(listeActions){
                listeActions = [1, 0, 0];
                console.log("liste des actions à venir : " + listeActions);
                return listeActions;
            }

            // Action defense
            function actionDefenseDone(listeActions){
                listeActions = [0, 1, 0];
                console.log("liste des actions : " + listeActions);
                return listeActions;
            }

            // Action pouvoir
            function actionPowerDone(listeActions){
                listeActions = [0, 0, 1];
                console.log("liste des actions : " + listeActions);
                return listeActions;
            }

        //Stocke la liste d'actions permises pour le prochain tour au perso
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

            // La liste des cooldowns du "perso actif" est renvoyee a Archer
            function returnActionsArcher(listePersoActif){
                listActionsArcher = listePersoActif;
                return listActionsArcher;
            }

            // La liste des cooldowns du "perso actif" est renvoyee a Mage
            function returnActionsMage(listePersoActif){
                listActionsMage = listePersoActif;
                return listActionsMage;
            }
            
            // La liste des cooldowns du "perso actif" est renvoyee a Guerrier
            function returnActionsGuerrier(listePersoActif){
                listActionsGuerrier = listePersoActif;
                return listActionsGuerrier;
            }
            
            // La liste des cooldowns du "perso actif" est renvoyee a Assassin
            function returnActionsAssassin(listePersoActif){
                listActionsAssassin = listePersoActif;
                return listActionsAssassin;
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
       function checkDeathMonster(message, hpmonster, ennemiMort, nameDeadMonster, animationDeadMonster, nomPerso, degats) {
        hp = hpmonster.innerHTML;
        if (hp <= 0) {
            hpmonster.innerHTML = 0;
            spriteDisparait(animationDeadMonster);
            message.innerHTML = nomPerso + " inflige " + degats + " dégâts et achève le " + nameDeadMonster;
            ennemiMort += 1;
            console.log("monstre mort");
        } else {
            console.log("monstre vivant");
        }
        return ennemiMort;
        }

        // verifie si un monstre est mort
        function checkDeathCharacter(message, hpCharacter, heroMort, nomMonstre, degats, nomHeroMort){
            hp = hpCharacter.innerHTML;
            if (hp <= 0) {
                hpCharacter.innerHTML = 0;
                spriteDisparait(animationVictim);
                message.innerHTML = nomMonstre + " occasionne " + degats + " de dégâts à " + nomHeroMort + " qui lâche son dernier souffle.";
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

    // --- GESTION DES COOLDOWNS ---

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
                enableActions(boutonAttaque, boutonDefense, boutonPouvoir);

                // Stocke la liste d'actions permises pour le perso actif
                listActionsActiveChara = whichCharacterPlay(turn);

                // Met un indicateur sur le perso actif
                putIndicator(turn);

                //Enleve les actions impossibles a faire
                disableActions(boutonAttaque, boutonDefense, boutonPouvoir, listActionsActiveChara, manaActiveChara);

                // Affichage de l'image du joueur actif
                changeImageBoiteDialogue(imageBoiteDialogue, nomActiveChara);

                //message debut tour pour joueur
                messageDebutTour(contenuBoiteDialogue, nomActiveChara);
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

                // Si on est en tour joueur
                if(turn == 1 || turn == 2 || turn == 3 || turn == 4){

                    // duree apres action attaquer
                    if(listActionsActiveChara[0] == 1){


                        // incrementation nouveau tour
                        turn = tourSupp(turn);

                        setTimeout(function() {

                            // On retire l'image de la boite de dialogue 
                            removeImageBoiteDialogue(imageBoiteDialogue);
        
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
                        }, 2000);
                    }

                    // duree apres action defense
                    if(listActionsActiveChara[1] == 1){

                        // incrementation nouveau tour
                        turn = tourSupp(turn);

                        setTimeout(function() {

                            // On retire l'image de la boite de dialogue 
                            removeImageBoiteDialogue(imageBoiteDialogue);
        
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
                        }, 2500);
                    }

                    // duree apres action pouvoir
                    if(listActionsActiveChara[2] == 1){

                        // incrementation nouveau tour
                        turn = tourSupp(turn);

                        setTimeout(function() {

                            // On retire l'image de la boite de dialogue 
                            removeImageBoiteDialogue(imageBoiteDialogue);
        
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
                        }, 3800);
                    }
                }

                // Si on est en tour monstre
                else{

                    // incrementation nouveau tour
                    turn = tourSupp(turn);

                    setTimeout(function() {

                        // On retire l'image de la boite de dialogue 
                        removeImageBoiteDialogue(imageBoiteDialogue);
    
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
                    }, 2700);
                }
        
                
            }
        }

    // ATTACK PLAYER - Serie actions pour attaque du joueur
    function attackPlayer(){

        // Enleve indicateur visuel sur le perso actif
        removeIndicator();

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
        animationAttack();

        clearTimeout();
        
        // verification si monstre mort
        deadMobScore = checkDeathMonster(contenuBoiteDialogue,vieVictim, deadMobScore, hitCharacter, animationVictim, nomActiveChara, damage);
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

        // feedbacks visuels ET retrait de l'indicateur
        animationShield(turn);

        // Reini les capacites permises pour le prochain tours
        listActionsActiveChara = actionDefenseDone(listActionsActiveChara);

        // On recupere la liste d'actions associe au perso actif
        whichCharacterHavePlayed(turn);
        
        // stoppe le jeu en cas de victoire, ou relance un nouveau tour
        stopTheGame(deadMobScore, deadHeroScore);
    }

    // POWER PLAYER - Serie actions pour pouvoir du joueur
    
    function powerPlayer(){

        // Enleve indicateur visuel sur le perso actif
        removeIndicator();

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
            message.innerHTML = "L'archer tire une flèche de givre, gelant " + hitCharacter + " pour le tour actuel.";
            animationPowerArcher(nomActiveChara, animActiveChara, hitCharacter, animationVictim);
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
            message.innerHTML = "Sort de feu ! " + hitCharacter + " subit " + damage + " et subira des brulures aux prochains tours !";

            // fonction pour appliquer l'effet de brûlure
            applyFire(hitCharacter, fireCooldown);

            // feedbacks visuels
            console.log("Pouvoir mage activé");
            animationPowerMage(nomActiveChara, animActiveChara, hitCharacter, animationVictim);

            // verification si monstre mort
            deadMobScore = checkDeathMonster(contenuBoiteDialogue, vieVictim, deadMobScore, hitCharacter, animationVictim, nomActiveChara, damage);
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
            message.innerHTML = "L'assassin charge son épée. Sa lame frappe l'ensemble des monstres, infligeant à chacun " + damage + " de dégâts !";
            animationPowerAssassin(nomActiveChara, animActiveChara, cibleAssassin1, cibleAssassin2, cibleAssassin3, animCibleAssassin1, animCibleAssassin2, animCibleAssassin3);
            
            // verification si monstre mort
            deadMobScore = checkDeathMonster(contenuBoiteDialogue,vieCibleAssassin1, deadMobScore, cibleAssassin1, animCibleAssassin1, nomActiveChara, damage);
            deadMobScore = checkDeathMonster(contenuBoiteDialogue,vieCibleAssassin2, deadMobScore, cibleAssassin2, animCibleAssassin2, nomActiveChara, damage);
            deadMobScore = checkDeathMonster(contenuBoiteDialogue,vieCibleAssassin3, deadMobScore, cibleAssassin3, animCibleAssassin3, nomActiveChara, damage);

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

            setTimeout(function(){
                
                // Si monstre brule, + de temps accorde aux animations
                if (fireState > 0){
                    burn(contenuBoiteDialogue);

                    setTimeout(function(){
                    // Application de la valeur de gel au monstre qui attaque
                    iceState = pickIce(nomActiveChara, iceList);

                    // Application de la valeur de defense au heros cible.
                    victimDef = pickShield(hitCharacter, heroesDef);

                    // verification si le perso cible a une defense. Si non, enclenche une attaque.
                    examStates(nomActiveChara, hitCharacter, iceState, victimDef, contenuBoiteDialogue);
                    
                    // verification si hero mort
                    deadHeroScore = checkDeathCharacter(contenuBoiteDialogue, vieVictim, deadHeroScore, nomActiveChara, damage, hitCharacter);
                    console.log("Nombre de heros morts : " + deadHeroScore);

                    // verification si defaite        
                    gameOver(contenuBoiteDialogue, deadHeroScore);

                    // stoppe le jeu en cas de victoire, ou relance un nouveau tour
                    stopTheGame(deadMobScore, deadHeroScore);}, 2000);
                }

                // Si monstre non brule, on passe direct à la suite
                else if (fireState == 0){

                    // Application de la valeur de gel au monstre qui attaque
                    iceState = pickIce(nomActiveChara, iceList);

                    // Application de la valeur de defense au heros cible.
                    victimDef = pickShield(hitCharacter, heroesDef);

                    // verification si le perso cible a une defense. Si non, enclenche une attaque.
                    examStates(nomActiveChara, hitCharacter, iceState, victimDef, contenuBoiteDialogue);
                    
                    // verification si hero mort
                    deadHeroScore = checkDeathCharacter(contenuBoiteDialogue, vieVictim, deadHeroScore, nomActiveChara, damage, hitCharacter);
                    console.log("Nombre de heros morts : " + deadHeroScore);

                    // verification si defaite        
                    gameOver(contenuBoiteDialogue, deadHeroScore);

                    // stoppe le jeu en cas de victoire, ou relance un nouveau tour
                    stopTheGame(deadMobScore, deadHeroScore);
                }}, 1000);
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
        
        // Applique des dgts de brulure
        function burn(message){
            //random de dgt
            damage = getRandomInt(5);

            // application des dgts
            attack(damage, vieActiveChara);
            message.innerHTML = nomActiveChara + " subit " + damage + " points de brûlures !";

            //animation dgt de brulure
            animActiveChara.setAttribute("src", "images/hit"+nomActiveChara+".gif");

            //attaquant iddle et defenseur hit
            
            if(nomActiveChara == "Champignon"){
                setTimeout(function() {
                    animActiveChara.setAttribute("src", "images/idle"+nomActiveChara+".gif");}, 550);
            }

            if(nomActiveChara == "Sanglier"){
                setTimeout(function() {
                    animActiveChara.setAttribute("src", "images/idle"+nomActiveChara+".gif");}, 750);
            }

            if(nomActiveChara == "Geant"){
                setTimeout(function() {
                    animActiveChara.setAttribute("src", "images/idle"+nomActiveChara+".gif");}, 750);
            }

            // Retrait d'1 en cooldown
            fireCooldown = lessFireCooldown(nomActiveChara, fireCooldown);
        }

        // Declenche l'attaque du monstre
        function attackMonstre(){
            // calcul dgt random
            damage = getRandomInt(8);
            // Affichage de l'image du joueur actif
            changeImageBoiteDialogue(imageBoiteDialogue, hitCharacter);

            // retrait de pv
            attack(damage, vieVictim);

            // feedbacks visuels
            infosAttack(nomActiveChara, hitCharacter, damage, contenuBoiteDialogue);
            animationAttack(nomActiveChara, animActiveChara, hitCharacter, animationVictim);
        }

// ------------------------------------- DEBUT DU JEU -------------------------------------

//Elements de HTML

boutonAttaque = document.getElementById("boutonAttaque");
boutonDefense = document.getElementById("boutonDefense");
boutonPouvoir = document.getElementById("boutonPouvoir");
contenuBoiteDialogue = document.getElementById("contenuBoiteDialogue");

infobulleChampignon = document.getElementById("infobulleChampignon");
infobulleSanglier = document.getElementById("infobulleSanglier");
infobulleGeant = document.getElementById("infobulleGeant");

champignon = document.getElementById("animationChampignon");
sanglier = document.getElementById("animationSanglier");
geant = document.getElementById("animationGeant");

infosAttaque = document.getElementById("infobulleAttaque");
infosDefense = document.getElementById("infobulleDefense");
infosPouvoir = document.getElementById("infobullePouvoir");

indicArcher = document.getElementById("indicateurArcher");
indicMage = document.getElementById("indicateurMage");
indicGuerrier = document.getElementById("indicateurGuerrier");
indicAssassin = document.getElementById("indicateurAssassin");

textPouvoir = document.getElementById("infosPouvoir");


imageBoiteDialogue = document.getElementById("imagePersoActif");


// Variables du joueur actif (celui dont c'est le tour)

ActiveCharaAlive = true;
listActionsActiveChara = [0, 0, 0];

victimCharaAlive = true;

//Nombre de personnages morts de chaque camp
deadMobScore = 0;
deadHeroScore = 0;

// Booleenne pour verifier si tour de joueur ou non
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

// Cooldown des actions de personnage
listActionsArcher = [0, 0, 0];
listActionsMage = [0, 0, 0];
listActionsGuerrier = [0, 0, 0];
listActionsAssassin = [0, 0, 0];

// Compteur de tour
turn = 1;

// DEBUT DU JEU

    // Selection du premier perso
    characterSelection();

    // On lance le tour de joueur
    startHeroPhase(heroSide);

    //Message boite de dialogue
    messageDebutTour(contenuBoiteDialogue, nomActiveChara);

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

// Infobulles des monstres

champignon.onmouseover = function()
{
    infobulleChampignon.style.visibility = "visible";
    console.log("infobulle détecté");
}

champignon.onmouseout = function()
{
    infobulleChampignon.style.visibility = "hidden";
    console.log("infobulle détecté");
}

sanglier.onmouseover = function()
{
    infobulleSanglier.style.visibility = "visible";
    console.log("infobulle détecté");
}

sanglier.onmouseout = function()
{
    infobulleSanglier.style.visibility = "hidden";
    console.log("infobulle détecté");
}

geant.onmouseover = function()
{
    infobulleGeant.style.visibility = "visible";
    console.log("infobulle détecté");
}

geant.onmouseout = function()
{
    infobulleGeant.style.visibility = "hidden";
    console.log("infobulle détecté");
}

// Infobulles des competences

boutonAttaque.onmouseover = function()
{
    infosAttaque.style.visibility = "visible";
}

boutonAttaque.onmouseout = function()
{
    infosAttaque.style.visibility = "hidden";
}

boutonDefense.onmouseover = function()
{
    infosDefense.style.visibility = "visible";
}

boutonDefense.onmouseout = function()
{
    infosDefense.style.visibility = "hidden";
}

boutonPouvoir.onmouseover = function()
{
    infosPouvoir.style.visibility = "visible";
    if (turn == 1){
        textPouvoir.innerHTML = "L'archer tire une flèche de givre, bloquant un ennemi au prochain tour.";
    }
    if (turn == 2){
        textPouvoir.innerHTML = "Le mage lance une boule de feu, brûlant un ennemi durant les deux prochains tours.";
    }
    if (turn == 3){
        textPouvoir.innerHTML = "Le guerrier déploie son bouclier pour appliquer la défense à l'ensemble du groupe.";
    }
    if (turn == 4){
        textPouvoir.innerHTML = "L'assassin charge sa rapière en magie, pour blesser tous les ennemis en même temps.";
    }
}

boutonPouvoir.onmouseout = function()
{
    infosPouvoir.style.visibility = "hidden";
}