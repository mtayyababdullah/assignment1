"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt = require("prompt-sync")();
//Task 2:
//Scenario 1: Sum numbers
let addition = (c, d) => c + d;
console.log(addition(50, 25));
//Scenario 2: Check Even or Odd
let num = prompt("Please enter a number ");
if (num % 2 == 0) {
    console.log("It is Even");
}
else {
    console.log("It is odd");
}
//Scenario 3: Calculate Area:
function rectangleArea(width, height) {
    return width * height;
}
console.log(rectangleArea(5, 7));
//Scenario 4: String Reversal
function reverse(str) {
    // split the name into an array
    // reverse the array
    // join the name back
    return str.split('').reverse().join('');
}
let original = "Tayyab";
let reversestring = reverse(original);
console.log(reversestring);
// Scenario 5: Temperature Conversion:
function convertCelsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
let tempC = 20;
let tempF = convertCelsiusToFahrenheit(tempC);
console.log(`${tempC}°C is equal to ${tempF}°F.`);
