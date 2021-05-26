var _ = require('lodash');

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");


function setGradient() {
	body.style.background = "linear-gradient(to right, "
		+ color1.value + ", " + color2.value + ")";

		css.textContent = body.style.background + ";";
}

setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);


// function randomColor() {
// 	var r = Math.floor(Math.random() * 256);
// 	var g = Math.floor(Math.random() * 256);
// 	var b = Math.floor(Math.random() * 256);
// 	console.log(r.toString(), g.toString(), b.toString());
// }

// var randomButton = document.querySelector(".randomButtonClass")

// function clickRandomButton() {
// 	color1.value = randomColor;
// 	color2.value = randomColor;
// }

// randomButton.addEventListener("click", clickRandomButton);


// 3. BONUS: Add a random button which generates two random 
// 		numbers for the colour inputs.