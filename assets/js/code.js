window.onload = function() {
    let fileInput = document.getElementById('fileInput');
    let fileDisplayArea = document.getElementById('fileDisplayArea');

    // On "écoute" si le fichier donné a été modifié.
    // Si on a donné un nouveau fichier, on essaie de le lire.
    fileInput.addEventListener('change', function(e) {
        // Dans le HTML (ligne 22), fileInput est un élément de tag "input" avec un attribut type="file".
        // On peut récupérer les fichiers données avec le champs ".files" au niveau du javascript.
        // On peut potentiellement donner plusieurs fichiers,
        // mais ici on n'en lit qu'un seul, le premier, donc indice 0.
        let file = fileInput.files[0];
        // on utilise cette expression régulière pour vérifier qu'on a bien un fichier texte.
        let textType = new RegExp("text.*");

        if (file.type.match(textType)) { // on vérifie qu'on a bien un fichier texte
            // lecture du fichier. D'abord, on crée un objet qui sait lire un fichier.
            var reader = new FileReader();

            // on dit au lecteur de fichier de placer le résultat de la lecture
            // dans la zone d'affichage du texte.
            reader.onload = function(e) {
                fileDisplayArea.innerText = reader.result;
            }

            // on lit concrètement le fichier.
            // Cette lecture lancera automatiquement la fonction "onload" juste au-dessus.
            reader.readAsText(file);    

            document.getElementById("logger").innerHTML = '<span class="infolog">Fichier chargé avec succès</span>';
        } else { // pas un fichier texte : message d'erreur.
            fileDisplayArea.innerText = "";
            document.getElementById("logger").innerHTML = '<span class="errorlog">Type de fichier non supporté !</span>';
        }
    });
}

 function segmentText() {
            var text = document.getElementById("fileDisplayArea").innerText;
            var delimiter = document.getElementById("delimID").value;
            var words = text.split(new RegExp("[" + delimiter + "]+")).filter(Boolean);
            var wordCount = words.length;

            
            words.sort(function(a, b) {
                return a.length - b.length;
            });

           
            var wordCountDisplay = document.createElement("p");
            wordCountDisplay.textContent = "Total words: " + wordCount;
            document.getElementById("page-analysis").appendChild(wordCountDisplay);

            
            var table = document.createElement("table");
            var headerRow = table.insertRow();
            var wordHeader = headerRow.insertCell();
            wordHeader.textContent = "Word";
            var lengthHeader = headerRow.insertCell();
            lengthHeader.textContent = "Length";

            words.forEach(function(word) {
                var row = table.insertRow();
                var wordCell = row.insertCell();
                wordCell.textContent = word;
                var lengthCell = row.insertCell();
                lengthCell.textContent = [word.length]=value;
            });


            document.getElementById("page-analysis").appendChild(table);
        }