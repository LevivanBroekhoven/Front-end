fetch("opdracht2_bijlage.json")
  .then(response => response.json())
  .then(jsonData => {
    console.log(jsonData);
    
    const input = document.createElement("input");
    input.id = "input";
    input.type = "number";
    input.placeholder = "Leeftijd";

    const button = document.createElement("button");
    button.id = "Button";
    button.textContent = "Filter";

    const displayDiv = document.createElement("div");
    displayDiv.id = "text";

    const page = document.getElementById("container");


    const formDiv = document.createElement("div");

    
    formDiv.id = "form";
    formDiv.appendChild(input);
    formDiv.appendChild(button);
    page.appendChild(formDiv);
    page.appendChild(displayDiv);


    function toonData(data) {
      displayDiv.innerHTML = ""; 
      data.forEach(person => {
        displayDiv.appendChild(document.createTextNode("Voornaam: " + person.voornaam));
        displayDiv.appendChild(document.createElement("br"));

        displayDiv.appendChild(document.createTextNode("Achternaam: " + person.achternaam));
        displayDiv.appendChild(document.createElement("br"));

        displayDiv.appendChild(document.createTextNode("Nationaliteit: " + person.nationaliteit));
        displayDiv.appendChild(document.createElement("br"));

        displayDiv.appendChild(document.createTextNode("Leeftijd: " + person.leeftijd));
        displayDiv.appendChild(document.createElement("br"));

        displayDiv.appendChild(document.createTextNode("Gewicht: " + person.gewicht));
        displayDiv.appendChild(document.createElement("br"));
        displayDiv.appendChild(document.createElement("br"));
      });
    }

    
    toonData(jsonData);

    
    button.addEventListener("click", () => {
        const minLeeftijd = parseInt(input.value);
        if (!isNaN(minLeeftijd)) {
          const gefilterd = jsonData.filter(p => parseInt(p.leeftijd) > minLeeftijd);
          toonData(gefilterd);
        } else {
          toonData(jsonData); 
        }
      });
      
    });
