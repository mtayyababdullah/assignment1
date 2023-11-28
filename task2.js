"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt = require("prompt-sync")();
//Task 2:
let addition = (c, d) => c + d;
console.log(addition(50, 25));
let num = prompt("Please enter a number ");
if (num % 2 == 0) {
    console.log("It is Even");
}
else {
    console.log("It is odd");
}
function rectangleArea(width, height) {
    return width * height;
}
console.log(rectangleArea(5, 7));
function convertCelsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
let tempC = 20;
let tempF = convertCelsiusToFahrenheit(tempC);
console.log(`${tempC}°C is equal to ${tempF}°F.`);
