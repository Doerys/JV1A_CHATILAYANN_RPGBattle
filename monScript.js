//Elements de HTML

boutonAttaque = document.getElementById("boutonAttaque");
boutonDefense = document.getElementById("boutonDefense");
boutonPouvoir = document.getElementById("boutonPouvoir");
vieMonstre1 = document.getElementById("vieMonstre1");
vieHero1 = document.getElementById("vieHero1");
contenuBoiteDialogue = document.getElementById("contenuBoiteDialogue");
animationHero1 = document.getElementById("animationHero1");
animationMonstre1 = document.getElementById("animationMonstre1");

tourCombat = 1;

heros = [Archer, Mage, Guerrier, Mousquetaire];
monstres = [Spectre, Sanglier, Geant];

//Organisation des tours en combat

if (tourCombat == 1){
    personnageAction = heros[0];
}

if (tourCombat == 2){
    personnageAction = heros[1];
}

if (tourCombat == 3){
    personnageAction = heros[2];
}

if (tourCombat == 4){
    personnageAction = heros[3];
}

if (tourCombat == 5){
    monstreAction = monstres[0];
}

if (tourCombat == 6){
    monstreAction = monstres[1];
}

if (tourCombat == 7){
    monstreAction = monstres[2];
}


//Variables

//heros = [Archer, Mage, Guerrier, Mousquetaire];
//monstres = [Spectre, Sanglier, Geant];
 
//Attaque du Joueur

boutonAttaque.onclick = function() {

    contenuBoiteDialogue.innerHTML = "L'archer tire !";
    animationHero1.setAttribute("src", "images/attackPersonnage1.gif");

    //dégâts attaque

    setTimeout(function() {
        vieMonstre1.innerHTML = parseInt(vieMonstre1.innerHTML) - 5;
        animationHero1.setAttribute("src", "images/idlePersonnage1.gif");
        contenuBoiteDialogue.innerHTML = "Le monstre reçoit 5 dégâts !";
        animationMonstre1.setAttribute("src", "images/hitMonstre1.gif");}, 850);
        
    //animation monstre Idle

    setTimeout(function() {
        animationMonstre1.setAttribute("src", "images/idleMonstre1.gif");}, 1350);
    
    //riposte du monstre

    setTimeout(function() {
        animationMonstre1.setAttribute("src", "images/attackMonstre1.gif");
        contenuBoiteDialogue.innerHTML = "Le monstre riposte !"}, 2000);

    //dégâts du monstre
    
    setTimeout(function() {
        vieHero1.innerHTML = parseInt(vieHero1.innerHTML) - 5;
        animationMonstre1.setAttribute("src", "images/idleMonstre1.gif");
        contenuBoiteDialogue.innerHTML = "Vous subissez 5 dégâts !";
        animationHero1.setAttribute("src", "images/hitPersonnage1.gif");}, 3500);

    //retour à la normale

    setTimeout(function() {
        animationHero1.setAttribute("src", "images/idlePersonnage1.gif");}, 3950);

    tour += 1;
            
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
    }