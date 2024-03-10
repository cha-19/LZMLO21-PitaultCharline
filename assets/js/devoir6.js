  // Fonction principale pour analyser le poème
function analyserPoeme() {
    var poeme = document.getElementById('poeme').value;
    
    if (poeme.trim() === "") {
        alert("Veuillez entrer un poème valide.");
        return;
    }

    afficherMotsFrequents(poeme);
    afficherRichesseLexicale(poeme);
    afficherNombrePhrases(poeme);
    afficherLongueurMoyenneMots(poeme);
    afficherTypologieStrophes(poeme);
    afficherTypologieVers(poeme);
}

// Fonction pour afficher les dix mots les plus fréquents du poème
function afficherMotsFrequents(poeme) {
    // Logique pour trouver les dix mots les plus fréquents
}

// Fonction pour afficher la richesse lexicale du poème sous forme de pourcentage
function afficherRichesseLexicale(poeme) {
    // Logique pour calculer la richesse lexicale
}

// Fonction pour afficher le nombre de phrases du poème
function afficherNombrePhrases(poeme) {
    // Logique pour compter le nombre de phrases
}

// Fonction pour afficher la longueur moyenne des mots par phrase
function afficherLongueurMoyenneMots(poeme) {
    // Logique pour calculer la longueur moyenne des mots par phrase
}

// Fonction pour afficher la typologie des strophes
function afficherTypologieStrophes(poeme) {
    // Logique pour compter les strophes et classifier leur nombre de vers
}

// Fonction pour afficher la typologie des vers
function afficherTypologieVers(poeme) {
    // Logique pour compter les vers et classifier leur nombre de syllabes
}

// Fonction pour afficher les résultats
function afficherResultats(resultats) {
    // Logique pour afficher les résultats à côté ou en-dessous du poème
}

let poem='Amitié fidèle
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
Hélas! en te perdant j’ai perdu plus que toi.'




