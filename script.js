document.getElementById("convertButton").addEventListener("click", function () {
    var inputText = document.getElementById("inputText").value;
    var lines = inputText.split('\n');

    for (var i = 0; i < lines.length; i++) {
        var words = lines[i].split('_');
        var camelCase = words[0];

        for (var j = 1; j < words.length; j++) {
            camelCase += words[j][0].toUpperCase() + words[j].slice(1);
        }

        console.log(camelCase);
    }
});