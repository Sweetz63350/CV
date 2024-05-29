const message = document.getElementById("message");
const message2 = document.getElementById("message2");
const message3 = document.getElementById("message3");

const bouton = document.getElementById("bouton");
const tentative = document.getElementById("nombre-tenta");
const couleur1 = document.getElementById("couleur-1");
const couleur2 = document.getElementById("couleur-2");
const couleur3 = document.getElementById("couleur-3");
const couleur4 = document.getElementById("couleur-4");

let nombreTentatives = 12;
let tentativesRestantes = nombreTentatives;
let bienPlace = 0;
let malPlace = 0;
let manche = 0;
let testCouleur = []; //couleurs proposées
let reponseCouleur = []; //solution qui sert de test avec testCouleur

const listeCouleur = ["Jaune", "Bleu", "Rouge", "Vert", "Blanc", "Noir"]; //couleurs disponibles
const finaleCouleur = []; //solution
const essaie = []; //tableau des essaies précédents

//fonction aléatoire.
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

//choix des couleurs aléatoires.
for (let boucle = 0; boucle < 4; boucle++) {
  randomCouleur = getRandomInt(6);
  reponseCouleur[boucle] = listeCouleur[randomCouleur];
  finaleCouleur[boucle] = reponseCouleur[boucle];
}

function testCombinaison() {
  //initialisation des variables.
  testCouleur = [
    couleur1.value,
    couleur2.value,
    couleur3.value,
    couleur4.value,
  ];
  tentativesRestantes--; //tentativesRestantes = tentativesRestantes - 1
  bienPlace = 0;
  malPlace = 0;
  reponseCouleur = [...finaleCouleur]; //on copie les valeurs d'un tableau dans l'autre
  essaie[manche] = [...testCouleur]; //on copie les valeurs d'un tableau dans l'autre

  //remise à 0 de l'affichage des tentatives précédentes.
  message.innerHTML = "";

  //affichage des tentatives précédentes avec un "for of".
  for (let element of essaie) {
    message.innerHTML +=
      '<div class="border border-dark border-3">' + element + "</div>";
  }
  manche++;

  //affichage du nombre de tentatives restantes.
  tentative.innerHTML = "Il vous reste " + tentativesRestantes + " tentatives.";

  //test des couleurs bien placées.
  for (let boucle = 0; boucle < 4; boucle++) {
    if (testCouleur[boucle] == reponseCouleur[boucle]) {
      bienPlace++;
      reponseCouleur[boucle] = "";
      testCouleur[boucle] = "_";
    }
  }

  //test des couleurs mal placées.
  for (let boucle = 0; boucle < 4; boucle++) {
    for (let boucle2 = 0; boucle2 < 4; boucle2++) {
      if (testCouleur[boucle] == reponseCouleur[boucle2]) {
        malPlace++;
        reponseCouleur[boucle2] = "";
        testCouleur[boucle] = "_";
      }
    }
  }

  //affichage des bienPlacé/malPlacé precédents.
  message2.innerHTML +=
    '<div class="border border-dark border-3"> Bien placé : ' +
    bienPlace +
    "   Mal placé : " +
    malPlace +
    "</div>";

  //test victoire.
  if (bienPlace == 4) {
    message3.innerHTML =
      '<div class="alert alert-success" role="alert">Bravo ! Vous avez gagné</div>';
    tentative.innerHTML =
      "Vous aviez encore " + tentativesRestantes + " tentatives.";
    bouton.disabled = true;
  } else {
    message3.innerHTML =
      '<div class="alert alert-dark" role="alert">Vous avez ' +
      bienPlace +
      " pions bien placé et " +
      malPlace +
      " pions mal placé.</div>";
  }

  //test défaite.
  if (tentativesRestantes == 0) {
    message3.innerHTML =
      '<div class="alert alert-danger" role="alert">Vous avez perdu ! La bonne réponse était : ' +
      finaleCouleur +
      "</div>";
    bouton.disabled = true;
  }
}

bouton.addEventListener("click", testCombinaison, false);
