//Elements de HTML

boutonAttaque = document.getElementById("boutonAttaque");
boutonDefense = document.getElementById("boutonDefense");
boutonPouvoir = document.getElementById("boutonPouvoir");
vieMonstre1 = document.getElementById("vieMonstre1");
vieHero1 = document.getElementById("vieHero1");
contenuBoiteDialogue = document.getElementById("contenuBoiteDialogue");
animationHero1 = document.getElementById("animationHero1");
animationMonstre1 = document.getElementById("animationMonstre1");

boutonAttaque.onclick = function() {

    contenuBoiteDialogue.innerHTML = "L'archer tire !";
    animationHero1.setAttribute("src", "images/attackArcher.gif");

    //dégâts attaque

    setTimeout(function() {
        vieMonstre1.innerHTML = parseInt(vieMonstre1.innerHTML) - 5;
        animationHero1.setAttribute("src", "images/idleArcher.gif");
        contenuBoiteDialogue.innerHTML = "Le monstre reçoit 5 dégâts !";
        animationMonstre1.setAttribute("src", "images/hitSpectre.gif");}, 850);
        
    //animation monstre Idle

    setTimeout(function() {
        animationMonstre1.setAttribute("src", "images/idleSpectre.gif");}, 1350);
    
    //riposte du monstre

    setTimeout(function() {
        animationMonstre1.setAttribute("src", "images/attackSpectre.gif");
        contenuBoiteDialogue.innerHTML = "Le monstre riposte !"}, 2000);

    //dégâts du monstre
    
    setTimeout(function() {
        vieHero1.innerHTML = parseInt(vieHero1.innerHTML) - 5;
        animationMonstre1.setAttribute("src", "images/idleSpectre.gif");
        contenuBoiteDialogue.innerHTML = "Vous subissez 5 dégâts !";
        animationHero1.setAttribute("src", "images/hitArcher.gif");}, 3500);

    //retour à la normale

    setTimeout(function() {
        animationHero1.setAttribute("src", "images/idleArcher.gif");}, 3950);

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