fetch("games.json")
.then(response => response.json())
  .then(jsonData => {
    console.log(jsonData);

    const input = document.createElement("input");
    input.id = "input";
    input.type = "number";
    input.placeholder = "prijs";

    const Fbutton = document.createElement("button");
    Fbutton.id = "Button";
    Fbutton.textContent = "Filter";

    const dropdown = document.createElement("select");
    dropdown.id = "dropdown";
    const option = document.createElement("option");
    option.textContent = "ALL";
    const option1 = document.createElement("option");
    option1.textContent = "RPG";
    const option2 = document.createElement("option");
    option2.textContent = "FPS";
    const option3 = document.createElement("option");
    option3.textContent = "Action";
    const option4 = document.createElement("option");
    option4.textContent = "MOBA";
    const option5 = document.createElement("option");
    option5.textContent = "Simulation";
    const option6 = document.createElement("option");
    option6.textContent = "Sport";
    const option7 = document.createElement("option");
    option7.textContent = "Sandbox";
    const option8 = document.createElement("option");
    option8.textContent = "Visual Novel";

    const OKbutton = document.createElement("button");
    OKbutton.id = "OKbutton";
    OKbutton.textContent = "OK";


    const displayDiv = document.createElement("div");
    displayDiv.id = "text";

    const page = document.getElementById("container");
    const page2 = document.getElementById("container2");

    const body = document.getElementById("body");


    const title = document.getElementById("title");

    const formDiv = document.createElement("div");


    formDiv.appendChild(dropdown);
    dropdown.appendChild(option);
    dropdown.appendChild(option1);
    dropdown.appendChild(option2);
    dropdown.appendChild(option3);
    dropdown.appendChild(option4);
    dropdown.appendChild(option5);
    dropdown.appendChild(option6);
    dropdown.appendChild(option7);
    dropdown.appendChild(option8);

    formDiv.appendChild(OKbutton);



    formDiv.appendChild(input);
    formDiv.appendChild(Fbutton);

    title.insertAdjacentElement('afterend', formDiv);

    
    formDiv.id = "form";

    page.appendChild(displayDiv);

    function toonData(data) {
      displayDiv.innerHTML = ""; 
      data.forEach(game => {
        const wrapper = document.createElement("div");
        wrapper.className = "game-wrapper";

        const Cbutton = document.createElement("button");
        Cbutton.id = "Button" + game.title;
        Cbutton.className = "GameButton"; 
        Cbutton.textContent = "Add to Cart";
        wrapper.appendChild(Cbutton);

        const gameContainer = document.createElement("div");
        gameContainer.className = "game-container";
        gameContainer.appendChild(document.createElement("br"));

        const title = document.createElement("div");
        title.className = "title";
        title.textContent = game.title;
        gameContainer.appendChild(title);

        const genre = document.createElement("div");
        genre.className = "genre";
        genre.textContent = game.genre;
        gameContainer.appendChild(genre);

        const rating = document.createElement("div");
        rating.className = "rating";
        rating.textContent = "Rating: " + game.rating;
        gameContainer.appendChild(rating);

        const price = document.createElement("div");
        price.className = "price";
        price.textContent = "$" + game.price ;
        gameContainer.appendChild(price);

    
        
        wrapper.appendChild(gameContainer);
        displayDiv.appendChild(wrapper);
      });
    }

    

toonData(jsonData);



document.addEventListener('click', (e) => {
    if (e.target.classList.contains('GameButton')) {
        const gameTitle = e.target.id.replace('Button', '');
        const wrapper = e.target.parentElement; 

        
        if (wrapper.parentElement.id === 'text') {
            alert("Game added to cart: " + gameTitle);
            page2.appendChild(wrapper);
            e.target.textContent = "Remove from Cart";
        } 
        else if (wrapper.parentElement.id === 'container2') {
            alert("Game removed from cart: " + gameTitle);
            displayDiv.appendChild(wrapper); 
            e.target.textContent = "Add to Cart";
        }
        updateTotal(); 
    }
}); 

const totalPriceEl = document.getElementById('totalPrice');

function updateTotal() {
    let total = 0;
    const items = page2.querySelectorAll('.price');
    items.forEach(item => {
        total += parseFloat(item.textContent.replace('$', ''));
    });
    totalPriceEl.textContent = "Totaal: €" + total.toFixed(2);
}




Fbutton.addEventListener("click", () => {
    const minprijs = parseInt(input.value);
    if (!isNaN(minprijs)) {
        const gefilterd = jsonData.filter(p => parseFloat(p.price) > minprijs);
        toonData(gefilterd);
    } else {
        toonData(jsonData);
    }
});


OKbutton.addEventListener("click", () => {
    console.log("OK button clicked");
    const genre = dropdown.value;
    const gefilterd = jsonData.filter(p => p.genre === genre);

    if (genre ==="ALL" ){
        toonData(jsonData);
    }
    else{
        toonData(gefilterd);
    }
});
})