window.onload = function() {
    let fileInput = document.getElementById('fileInput');
    let fileDisplayArea = document.getElementById('fileDisplayArea');

    fileInput.addEventListener('change', function(e) {
        let file = fileInput.files[0];
        let textType = new RegExp("text.*");

        if (file.type.match(textType)) {
            var reader = new FileReader();

            reader.onload = function(e) {
                fileDisplayArea.innerText = reader.result;
                document.getElementById("logger").innerHTML = '<span class="infolog">Fichier chargé avec succès</span>';
            }

            reader.readAsText(file);    
        } else {
            fileDisplayArea.innerText = "";
            document.getElementById("logger").innerHTML = '<span class="errorlog">Type de fichier non supporté !</span>';
        }
    });
}

function sort_words() {
    const output = document.getElementById("fileDisplayArea").innerText;
    let result =  document.getElementById("page-analysis");
    let delimiters = document.getElementById("delimID").value;

    let delim2 = delimiters.replace("-", "\\-").replace("[", "\\[").replace("]", "\\]") + "—\\s";

    let word_regex = new RegExp("[" + delim2 + "]", 'g');

    let all_words = output.split(word_regex);
    let cleaned_words = all_words.filter(x => x.trim() != '');

    let dic_length = {};

    for (let word of cleaned_words){
        if (word.length in dic_length){
            dic_length[word.length]["freq"] += 1;
            if (!dic_length[word.length]["elements"].includes(word.toLowerCase())) {
                dic_length[word.length]["elements"].push(word.toLowerCase());
            }
        } else {
            dic_length[word.length] = {
                "freq": 1,
                "elements": [word.toLowerCase()]
            };  
        }
    }

    let table = document.createElement("table");
    table.style.margin = "auto";
    let head = table.appendChild(document.createElement("tr"));
    head.innerHTML = "<th>Nombre de caractères</th><th>Nombre d'occurrences</th><th>Formes(s) unique(s)</th>";

    let ordered = Object.keys(dic_length).sort((a, b) => a - b);

    for (let elem of ordered){
        let row = table.appendChild(document.createElement("tr"));
        let cell_length = row.appendChild(document.createElement("td"));
        let cell_total = row.appendChild(document.createElement("td"));
        let cell_details = row.appendChild(document.createElement("td"));
        cell_length.innerHTML = elem;
        cell_total.innerHTML = dic_length[elem]["freq"];
        cell_details.innerHTML = dic_length[elem]["elements"].sort().join(', ') + ' (' + dic_length[elem]["elements"].length + ')';
    }

    result.innerHTML = `<p>Le texte contient au total ${cleaned_words.length} mots.</p>`;
    result.append(table);
}

function pie_chars() {
    const output = document.getElementById("fileDisplayArea").innerText;
    let delimiters = document.getElementById("delimID").value;

    let delim2 = delimiters.replace("-", "\\-").replace("[", "\\[").replace("]", "\\]") + "—\\s";

    let word_regex = new RegExp("[" + delim2 + "]", 'g');

    let all_words = output.split(word_regex);
    let cleaned_words = all_words.filter(x => x.trim() != '');

    let dic_length = {};
    for (let word of cleaned_words) {
        if (word.length in dic_length) {
           dic_length[word.length] += 1;
        } else {
           dic_length[word.length] = 1;
        }
    }
    let ordered = Object.keys(dic_length).sort((a, b) => a - b);
    let size_chars = [];
    for (let elem of ordered) {
        size_chars.push(dic_length[elem]);
    }
    let data = { labels: ordered, series: size_chars };
    let options = { width: 400, height: 200 };
    document.getElementById('page-analysis').innerHTML = '';
    new Chartist.Pie("#page-analysis", data, options);

}

function findCooccurrents() {
    let fileInput = document.getElementById("fileInput");
    if (fileInput.files.length === 0) {
        alert("Aucun fichier chargé. Veuillez sélectionner un fichier.");
        return;
    }

    let file = fileInput.files[0];
    let reader = new FileReader();

    reader.onload = function(e) {
        let text = reader.result;
        // Ici, vous devez implémenter la logique pour trouver les co-occurrences des mots dans le texte
        // Puis, une fois que vous avez les données, vous appelez plotCoOccurrences() avec ces données.
        // Exemple :
        let coOccurrenceData = calculateCoOccurrences(text); 
        plotCoOccurrences(coOccurrenceData);
    };

    reader.readAsText(file);
}

function calculateCoOccurrences(text) {
    let words = text.split(/\s+/); // Diviser le texte en mots
    let coOccurrenceData = [];

    // Compter les occurrences de chaque mot
    let wordCount = {};
    words.forEach(word => {
        if (wordCount[word]) {
            wordCount[word]++;
        } else {
            wordCount[word] = 1;
        }
    });

    // Créer les données de co-occurrence
    Object.keys(wordCount).forEach(word => {
        coOccurrenceData.push({
            word: word,
            totalFrequency: wordCount[word],
            leftFrequency: 0, // Placeholder pour les fréquences à gauche
            rightFrequency: 0 // Placeholder pour les fréquences à droite
        });
    });

    return coOccurrenceData;
}


  function plotCoOccurrences(coOccurrenceData) {
    

    // Préparer les données pour Chartist
    let labels = topCoOccurrences.map(coOccurrence => coOccurrence.word);
    let series = [
        topCoOccurrences.map(coOccurrence => coOccurrence.totalFrequency),
        topCoOccurrences.map(coOccurrence => coOccurrence.leftFrequency),
        topCoOccurrences.map(coOccurrence => coOccurrence.rightFrequency)
    ];

    // Options du graphique
    let options = {
        axisX: {
            labelInterpolationFnc: function (value, index) {
                return labels[index];
            }
        }
    };

    // Afficher le graphique en barres
    new Chartist.Bar('#coOccurrenceChart', {
        labels: labels,
        series: series
    }, options);


}


