for (let x = 1; x < 4; x ++){
    var button = document.createElement("Button");
    button.appendChild(document.createTextNode("Button " + x));
    button.id = ("Button") + x;
    var page = document.getElementById("container");
    page.appendChild(button);
}


// color_one_button = document.getElementById(1)
//     color_one_button.addEventListener("click" , function(){
//         document.body.style.backgroundColor = "green";
//     }
// );

// color_one_button = document.getElementById(2)
//     color_one_button.addEventListener("click" , function(){
//         document.body.style.backgroundColor = "blue";
//     }
// );

// color_one_button = document.getElementById(3)
//     color_one_button.addEventListener("click" , function(){
//         document.body.style.backgroundColor = "red";
//     }
// );

function changeColor(id, color){
    let color_one_button = document.getElementById(id);
    color_one_button.addEventListener("click", function(){
        document.body.style.backgroundColor = color;
    });
}


changeColor("Button1", "green");
changeColor("Button2", "blue");
changeColor("Button3", "red");