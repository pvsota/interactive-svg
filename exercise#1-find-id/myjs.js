document.addEventListener("DOMContentLoaded", loadSvg);
let spots;
        async function loadSvg(){
        let svgData = await fetch("layers.svg");
        let mySvg = await svgData.text();

        document.querySelector("#holder").innerHTML = mySvg;
        spots = document.querySelector("#spots");
        spots.addEventListener("click", showText)
        }

//console.log("You did something right");

function showText(){
    let showtext = document.querySelector("#sometext");
    let id = event.target.getAttribute("id");
    console.log("You did something right");

    if (id == "mac"){
        showtext.innerHTML = "Shitty Computer";
    }
    else if (id == "bike"){
        showtext.innerHTML = "Crappy Bike";
    }
    else if (id == "phone"){
        showtext.innerHTML = "Call me!";
    }
}

