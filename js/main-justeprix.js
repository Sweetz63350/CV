let randomImage;
let justePrix;
let nombreTentatives;
const imageObjet = [
  "chaise.png",
  "costume-haloween.png",
  "grill.png",
  "guitare.png",
  "sac-a-main.png",
];
const nomObjet = [
  "Une chaise gaming",
  "Un costume d'Halloween",
  "Un barbecue",
  "Une guitare",
  "Un sac à main",
];
let message = document.getElementById("message");
let bouton = document.getElementById("bouton");
let image = document.getElementById("objet");
let nomImage = document.getElementById("nom-objet");
let tentative = document.getElementById("nombre-tenta");

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

justePrix = 1 + getRandomInt(100);
randomImage = getRandomInt(5);

function getImage(value) {
  return '<img src="/image/' + value + '" alt="image juste prix">';
}
image.innerHTML = getImage(imageObjet[randomImage]);
nomImage.innerHTML = nomObjet[randomImage];

nombreTentatives = 10;
tentative.innerHTML = "Il vous reste " + nombreTentatives + " tentatives.";

function jeuJustePrix() {
  prixTest = document.getElementById("test-prix").value;
  if (nombreTentatives == 0) {
    message.innerHTML =
      "Vous avez perdu ! Le juste Prix était de " + justePrix + " €.";
    bouton.disabled = true;
  }
  if (prixTest > justePrix) {
    message.innerHTML = "C'est moins ! Votre tentative : " + prixTest;
    nombreTentatives = nombreTentatives - 1;
    tentative.innerHTML = "Il vous reste " + nombreTentatives + " tentatives.";
  }
  if (prixTest < justePrix) {
    message.innerHTML = "C'est plus ! Votre tentative : " + prixTest;
    nombreTentatives = nombreTentatives - 1;
    tentative.innerHTML = "Il vous reste " + nombreTentatives + " tentatives.";
  }
  if (prixTest == justePrix) {
    message.innerHTML =
      "Vous avez gagné ! Le juste Prix était bien de " + justePrix + " €.";
    bouton.disabled = true;
  }
}

bouton.addEventListener("click", jeuJustePrix, false);
