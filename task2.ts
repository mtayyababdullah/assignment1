

//Task 2:

let  addition = (c: number, d: number) => c + d;

console.log (addition(50,25));


let num = 11;

if (num % 2 == 0) {
    console.log("It is Even");
  } else {
    console.log("It is odd");
  }

function rectangleArea(width: number, height: number) {
    return width * height;
  }
  console.log(rectangleArea(5, 7))



function convertCelsiusToFahrenheit(celsius: number): number {
    return (celsius * 9 / 5) + 32;
}

let tempC: number = 20;
let tempF: number = convertCelsiusToFahrenheit(tempC);
console.log(`${tempC}°C is equal to ${tempF}°F.`);