let userInput = prompt("Hoeveel namen *minimaal 3:");
let names = [];

if (userInput !== null && !isNaN(userInput) && parseInt(userInput) >= 3) {

    let numberOfNames = parseInt(userInput);

    for (let i = 0; i < numberOfNames; i++) {
        let name = prompt(`Voer naam ${i + 1} in:`);
        if (name !== null && name.trim() !== "") {
            names.push(name.trim());
        } else {
            alert("Naam mag niet leeg zijn.");
            i--; 
        }
    }
}


document.getElementById("output").innerText = names.join(', ');
document.getElementById("output2").innerText = names.reverse().join(', ');

