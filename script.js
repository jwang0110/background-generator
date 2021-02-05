var _ = require('lodash');
console.log(_);
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var random = document.querySelector("button");
var body = document.getElementById("gradient");

function generateRandomColor() {
	var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
	return randomColor;
}

function setGradient(c1, c2) {
	body.style.background = 
	"linear-gradient(to right, " 
	+ c1 
	+ ", " 
	+ c2 
	+ ")";

	css.textContent = body.style.background + ";";
}

function inputGradient() {
	setGradient(color1.value, color2.value);
}

function randomGradient() {
	setGradient(generateRandomColor(), generateRandomColor());
}

inputGradient();
color1.addEventListener("input", inputGradient);
color2.addEventListener("input", inputGradient);
random.addEventListener("click", randomGradient);
