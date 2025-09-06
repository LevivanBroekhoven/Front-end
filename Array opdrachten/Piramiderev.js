var setjenumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13,14,15,16,17,18,19,20];

var numberprompt = prompt("enter een number tussen de 0 en de 20");
let piramide = "";

for (let i = numberprompt; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
        piramide += setjenumbers[j] + " ";
    }
    piramide += "<br>";
}

document.getElementById("output").innerHTML = piramide;
