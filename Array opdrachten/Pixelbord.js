for (let x = 1; x < 31; x ++){
    var button = document.createElement("Button");
    button.appendChild(document.createTextNode(x));
    button.id = ("Button");
    var page = document.getElementById("container");
    button.setAttribute("clicks", 0);
    page.appendChild(button);
}


document.querySelectorAll("button").forEach(button =>{
button.addEventListener("click", function() { 
        let clicks = parseInt(this.getAttribute("clicks"));
        clicks++;
        this.setAttribute("clicks", clicks);
        if(clicks === 1){
        this.style.backgroundColor = "red"
        }if(clicks === 2){
        this.style.backgroundColor = "purple"
        }if(clicks === 3){
        this.style.backgroundColor = "blue"
        }if(clicks === 4){
        this.style.backgroundColor = "black"
        }else if(clicks === 5){
        this.remove()
        }; 
    }); 
});


