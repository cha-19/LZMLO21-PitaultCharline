// Déclaration de la variable contenant le poème et son titre
let poemTitle = "Amitié Fidèle";
let poem = `Parmi les doux transports d’une amitié fidèle,
Je voyais près d’Iris couler mes heureux jours :
Iris que j’aime encore, et que j’aimerai toujours,
Brûlait des mêmes feux dont je brûlais pour elle :

Quand, par l’ordre du ciel, une fièvre cruelle
M’enleva cet objet de mes tendres amours ;
Et, de tous mes plaisirs interrompant le cours,
Me laissa de regrets une suite éternelle.

Ah ! qu’un si rude coup étonna mes esprits !
Que je versais de pleurs ! que je poussais de cris !
De combien de douleurs ma douleur fut suivie !

Iris, tu fus alors moins à plaindre que moi :
Et, bien qu’un triste sort t’ait fait perdre la vie,
Hélas ! en te perdant j’ai perdu plus que toi.`;

// Nettoyage du poème pour enlever les ponctuations et les caractères spéciaux
let cleanPoem = poem.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");

// Conversion du poème en tableau de mots
let words = cleanPoem.toLowerCase().split(/\s+/);

// Calcul des cinq mots les plus fréquents
let wordCount = {};
words.forEach(word => {
    wordCount[word] = (wordCount[word] || 0) + 1;
});
let sortedWords = Object.keys(wordCount).sort((a, b) => wordCount[b] - wordCount[a]);
let topFiveWords = sortedWords.slice(0, 5);

// Calcul de la richesse lexicale
let uniqueWords = new Set(words);
let lexicalRichness = uniqueWords.size / words.length;

// Comptage des phrases
let sentences = poem.split(/[.!?]/).filter(sentence => sentence.trim() !== '');
let sentenceCount = sentences.length;

// Comptage des strophes
let stanzas = poem.split(/\n\s*\n/).filter(stanza => stanza.trim() !== '');
let stanzaCount = stanzas.length;

console.log("Titre du poème :", poemTitle);
console.log("Les cinq mots les plus fréquents :", topFiveWords);
console.log("Richesse lexicale :", lexicalRichness);
console.log("Nombre de phrases :", sentenceCount);
console.log("Nombre de strophes :", stanzaCount);
