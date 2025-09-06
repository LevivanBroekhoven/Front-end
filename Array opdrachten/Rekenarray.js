var arrayEen = [1,2,3,4,5,6,7,8,9,10];
var arrayTwee = [2,4,6,8,10,12,14,16,18,20];

function checklist(arrayEen, arrayTwee) {

    if (arrayEen.length === arrayTwee.length) {
        console.log("De arrays zijn even lang.");

    } else if (arrayEen.length > arrayTwee.length) {
        arrayTwee.push(0);

    } else {
        arrayEen.push(0);
    }
}

function optellen(arrayEen, arrayTwee) {
    let lijstoptellen = "";
    for (x in arrayEen) {
        let som = Number(arrayEen[x]) + Number(arrayTwee[x]);
        lijstoptellen += arrayEen[x] + " + " + arrayTwee[x] + " = " + som + "<br>";
    }
    document.getElementById("output1").innerHTML = lijstoptellen;
}


function aftrekken(arrayEen, arrayTwee) {
    let lijstaftrekken = "";
    for (x in arrayEen) {
        let som = Number(arrayEen[x]) + Number(arrayTwee[x]);
        lijstaftrekken += arrayEen[x] + " - " + arrayTwee[x] + " = " + som + "<br>";
    }
    document.getElementById("output2").innerHTML = lijstaftrekken;
}

function vermedigvuldigen(arrayEen, arrayTwee) {
    let lijstvermedigvuldigen = "";
    for (x in arrayEen) {
        let som = Number(arrayEen[x]) + Number(arrayTwee[x]);
        lijstvermedigvuldigen += arrayEen[x] + " * " + arrayTwee[x] + " = " + som + "<br>";
    }
    document.getElementById("output3").innerHTML = lijstvermedigvuldigen;
}

function delen(arrayEen, arrayTwee) {
    let lijstdelen = "";
    for (x in arrayEen) {
        let som = Number(arrayEen[x]) + Number(arrayTwee[x]);
        lijstdelen += arrayEen[x] + " / " + arrayTwee[x] + " = " + som + "<br>";
    }
    document.getElementById("output4").innerHTML = lijstdelen;
}

checklist(arrayEen, arrayTwee);
optellen(arrayEen, arrayTwee);
aftrekken(arrayEen, arrayTwee);
vermedigvuldigen(arrayEen, arrayTwee);
delen(arrayEen, arrayTwee);
