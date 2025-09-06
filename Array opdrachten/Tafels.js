var arrayhoeveel = [1,2,3,4,5,6,7,8,9,10];

function Tafel2(arrayhoeveel) {
    let lijstoptellen = "";
    for (x in arrayhoeveel) {
        let som = arrayhoeveel[x] * 2;
        lijstoptellen += arrayhoeveel[x] + " * " + 2 + " = " + som + "<br>";
    }
    console.log(lijstoptellen);
    document.getElementById("output1").innerHTML = lijstoptellen;
}


function Tafel4(arrayhoeveel) {
    let lijstoptellen = "";
    for (x in arrayhoeveel) {
        let som = arrayhoeveel[x] * 4;
        lijstoptellen += arrayhoeveel[x] + " * " + 4 + " = " + som + "<br>";
    }
    console.log(lijstoptellen);
    document.getElementById("output2").innerHTML = lijstoptellen;
}

function Tafel6(arrayhoeveel) {
    let lijstoptellen = "";
    for (x in arrayhoeveel) {
        let som = arrayhoeveel[x] * 6;
        lijstoptellen += arrayhoeveel[x] + " * " + 6 + " = " + som + "<br>";
    }
    console.log(lijstoptellen);
    document.getElementById("output3").innerHTML = lijstoptellen;
}

function Tafel8(arrayhoeveel) {
    let lijstoptellen = "";
    for (x in arrayhoeveel) {
        let som = arrayhoeveel[x] * 8;
        lijstoptellen += arrayhoeveel[x] + " * " + 8 + " = " + som + "<br>";
    }
    console.log(lijstoptellen);
    document.getElementById("output4").innerHTML = lijstoptellen;
}


Tafel2(arrayhoeveel);
Tafel4(arrayhoeveel);
Tafel6(arrayhoeveel);
Tafel8(arrayhoeveel);
