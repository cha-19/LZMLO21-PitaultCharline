  // Fonction principale pour analyser le poème
function analyserPoeme() {
    const poeme = document.getElementById('poeme').value;
    
    
    if (poeme.trim() === "") {
        alert("Veuillez entrer un poème valide.");
        return;
    }
 // Fonction pour diviser le poème en strophes
    function diviserEnStrophes(poeme) {
        return poeme.split('\n\n').filter(strophe => strophe.trim() !== '');
    }

    // Fonction pour diviser une strophe en vers
    function diviserEnVers(strophe) {
        return strophe.split('\n').filter(vers => vers.trim() !== '');
    }

    // Fonction pour calculer le nombre de syllabes dans un mot (approximatif)
    function nombreSyllabesMot(mot) {
        return Math.max(1, Math.floor(mot.length / 3));
    }

           // Fonction pour calculer le nombre de syllabes dans un vers
    function nombreSyllabesVers(vers) {
        const mots = vers.split(/\s+/);
        let syllabesTotal = 0;
        mots.forEach(mot => {
            syllabesTotal += nombreSyllabesMot(mot);
        });
        return syllabesTotal;

            // Fonction pour obtenir la typologie des strophes
    function typologieStrophes(poeme) {
        const strophes = diviserEnStrophes(poeme);
        const typologie = {};
        strophes.forEach((strophe, index) => {
            const nombreVers = diviserEnVers(strophe).length;
            if (!typologie[nombreVers]) {
                typologie[nombreVers] = 0;
            }
            typologie[nombreVers]++;
        });
        return typologie;
    }

           // Fonction pour obtenir la typologie des vers
    function typologieVers(poeme) {
        const vers = poeme.split('\n').filter(vers => vers.trim() !== '');
        const typologie = {};
        vers.forEach(vers => {
            const syllabes = nombreSyllabesVers(vers);
            if (!typologie[syllabes]) {
                typologie[syllabes] = 0;
            }
            typologie[syllabes]++;
        });
        return typologie;
    }
    afficherMotsFrequents(poeme);
    afficherRichesseLexicale(poeme);
    afficherNombrePhrases(poeme);
    afficherLongueurMoyenneMots(poeme);
    afficherTypologieStrophes(poeme);
    afficherTypologieVers(poeme);
    afficherResultats(resultats); 
    motsPlusFrequents(phrase, n);
    calculerRichesseLexicale(poeme); 

}

// Fonction pour afficher les dix mots les plus fréquents du poème
function afficherMotsFrequents(poeme) {
     const motsFrequents = motsPlusFrequents(poeme, 10);
        console.log("Les dix mots les plus fréquents du poème (titre exclus):");
        console.log(motsFrequents);
    // Logique pour trouver les dix mots les plus fréquents
}

// Fonction pour afficher la richesse lexicale du poème sous forme de pourcentage
function afficherRichesseLexicale(poeme) {
     const richesseLexicale = calculerRichesseLexicale(poeme);
        console.log("Richesse lexicale du poème (titre exclus):");
        console.log(richesseLexicale + "%");
    // Logique pour calculer la richesse lexicale
}

// Fonction pour afficher le nombre de phrases du poème
function afficherNombrePhrases(poeme) {
       const nombrePhrases = strophes.reduce((total, strophe) => total + strophe.split('.').length, 0);
        console.log("Nombre de phrases du poème (titre exclus):");
        console.log(nombrePhrases);
    // Logique pour compter le nombre de phrases
}

// Fonction pour afficher la longueur moyenne des mots par phrase
function afficherLongueurMoyenneMots(poeme) {
      const nombreMots = vers.reduce((total, vers) => total + vers.split(/\s+/).length, 0);
        const longueurMoyenneMotsParPhrase = nombreMots / nombrePhrases;
        console.log("Longueur moyenne des mots par phrase (titre exclus):");
        console.log(longueurMoyenneMotsParPhrase);
    // Logique pour calculer la longueur moyenne des mots par phrase
}

// Fonction pour afficher la typologie des strophes
function afficherTypologieStrophes(poeme) {
      const typologieStropheResultat = typologieStrophes(poeme);
        console.log("Typologie des strophes:");
        Object.keys(typologieStropheResultat).forEach(key => {
            console.log(`- ${typologieStropheResultat[key]} strophe(s) de ${key} vers`);
        });
    // Logique pour compter les strophes et classifier leur nombre de vers
}

// Fonction pour afficher la typologie des vers
function afficherTypologieVers(poeme) {
     const typologieVersResultat = typologieVers(poeme);
        console.log("Typologie des vers:");
        Object.keys(typologieVersResultat).forEach(key => {
            console.log(`- ${typologieVersResultat[key]} vers de ${key} syllabes`);
        });
    // Logique pour compter les vers et classifier leur nombre de syllabes
}

// Fonction pour afficher les résultats
function afficherResultats(resultats) {

    // Logique pour afficher les résultats à côté ou en-dessous du poème

function motsPlusFrequents(phrase, n) { 
    // Fonction pour obtenir les mots les plus fréquents
}

function calculerRichesseLexicale(poeme) {
     const richesseLexicale = calculerRichesseLexicale(poeme);
        console.log("Richesse lexicale du poème (titre exclus):");
        console.log(richesseLexicale + "%");
    // Fonction pour calculer la richesse lexicale
}

}

let poem='Amitié fidèle'
Parmi les doux transports d’une amitié fidèle,
Je voyais près d’Iris couler mes heureux jours:
Iris que j’aime encore, et que j’aimerai toujours,
Brûlait des mêmes feux dont je brûlais pour elle:

Quand, par l’ordre du ciel, une fièvre cruelle
M’enleva cet objet de mes tendres amours;
Et, de tous mes plaisirs interrompant le cours,
Me laissa de regrets une suite éternelle.

Ah! qu’un si rude coup étonna mes esprits!
Que je versais de pleurs! que je poussais de cris!
De combien de douleurs ma douleur fut suivie!

Iris, tu fus alors moins à plaindre que moi:
Et, bien qu’un triste sort t’ait fait perdre la vie,
Hélas! en te perdant j’ai perdu plus que toi.




