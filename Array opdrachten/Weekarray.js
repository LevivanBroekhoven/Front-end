const days = ["Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag", "Zondag"];

document.getElementById("Weekarray").innerHTML = days.join(', ');

document.getElementById("Werkarray").innerHTML = days.slice(0, 5).join(', ');

document.getElementById("Weekend").innerHTML = days.slice(5).join(', ');

document.getElementById("R weekarray").innerHTML = [...days].reverse().join(', ');

document.getElementById("R werkarray").innerHTML = [...days].slice(0, 5).reverse().join(', ');

document.getElementById("R weekend").innerHTML = [...days].slice(5).reverse().join(', ');
