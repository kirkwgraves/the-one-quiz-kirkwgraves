
// Basics

$('ul li:first-child').css('text-decoration', 'underline').css('font-weight', '800');
$('section:eq(1) aside:first-child').css('color', 'blue');
$('div:eq(0)').css('float', 'right');
$('div:eq(2)').css('text-align', 'center');


var el = document.getElementById('vanilla_output');
el.innerHTML = 'This content generated with vanilla JavaScript';

$('#jquery_output').html('This content generated with jQuery');

// Functions and Operators

//1
function Modulus(num1, num2) {
	return num1 % num2;
}

console.log(Modulus(10,3));

//2
function doMath(num1, num2, f) {
	return f(num1, num2);
}

function add(num1, num2) {
	return num1 + num2;
}

function subtract(num1, num2) {
	return num1 - num2;
}

console.log(doMath(14,3, add));
console.log(doMath(14,3, subtract));

// Arrays

var Planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

//1
function sortedPlanets(array) {
	array.sort();
	return array;
}

var sortedResult = sortedPlanets(Planets);
console.log('sortedResult', sortedResult);

//2
function reversedPlanets(element, index, array) {
	return element.split('').reverse().join('');
}

var reversedResult = Planets.map(reversedPlanets);
console.log('reversedResult', reversedResult);

//3 
function longPlanets(element, index, array) {
	if (element.length >= 7) {
		return element;
	}
}

var longResult = Planets.filter(longPlanets);
console.log('longResult', longResult);

// XHR

function getAnimals() {
	$.ajax('data/animals.json').done(function(ajaxData) {
		var animals = ajaxData.animals;
		console.log('animals', animals);
		var justAnimalsArray = [];
		for (var i = 0; i < animals.length; i++) {
			justAnimalsArray.push(animals[i].type);
		}
		console.log('animals: ', justAnimalsArray);
	});
}

getAnimals();






