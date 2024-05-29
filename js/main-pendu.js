const listeMot = ['javelliserions','pirouettassent','constituassiez','mercantilismes','massifieraient','paternellement','paraisonneront','enamourassions','miniaturiseras','anthropologies','surajoutassiez','raccourcissant','fluorisassions','retranscrirons','levretteraient','septembriseurs' ];
let message = document.getElementById('message');
let bouton = document.getElementById('bouton');
let tentative = document.getElementById('nombre-tenta');
let motProposer = document.getElementById('test-mot');
let nombreTentatives;
let motRecherche;
let lettreProposer;
const motTest = ['_','_','_','_','_','_','_','_','_','_','_','_','_','_']

function getRandomInt(max){
    return Math.floor(Math.random() * Math.floor(max));
}

position = getRandomInt(15);
motRecherche = listeMot[position];

nombreTentatives = 9;
tentative.innerHTML = 'Il vous reste ' + nombreTentatives + ' tentatives.';

function testPendu(){
    let lettreProposer = document.getElementById('test-lettre').value;
    nombreTentatives = nombreTentatives - 1;
    if(motRecherche.includes(lettreProposer)){
        nombreTentatives = nombreTentatives + 1;
    }
    if(nombreTentatives == 0){
        message.innerHTML = '<div class="alert alert-danger" role="alert">Vous avez perdu ! Le mot était ' + motRecherche + '.</div>'
        ;
        bouton.disabled = true;
    }
    for (let boucle = 0; boucle < 14; boucle ++){
        if(motRecherche[boucle] == lettreProposer){
            motTest[boucle] = lettreProposer;
        }
    }
    motProposer.innerHTML =  motTest;
    if(motTest.includes('_')){
        tentative.innerHTML = 'Il vous reste ' + nombreTentatives + ' tentatives.';
    }else{
        message.innerHTML = '<div class="alert alert-success" role="alert">Bravo ! Vous avez gagné</div>';
        
        tentative.innerHTML = 'Vous aviez encore ' + nombreTentatives + ' tentatives.';
        bouton.disabled = true;
    }
}

bouton.addEventListener('click', testPendu, false)
