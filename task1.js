"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt = require("prompt-sync")();
let opt1 = "fruits";
let opt2 = "vegetables";
let opt3 = "grocery";
let frut1 = "Apple";
let frut2 = "Banana";
let frut3 = "Orange";
let veg1 = "potato";
let veg2 = "carrot";
let veg3 = "cabbage";
let groc1 = "soap";
let groc2 = "shampoo";
let groc3 = "lotion";
let selection = prompt("please select an option 1-fruits, 2-vegetabels, 3-grocery");
if (selection == "1") {
    console.log(`You have selected ${opt1}`);
    let fruit = prompt("Please select a fruit 1-apple: 10/kg, 2-orange: 20/doz, 3-orange: 50/doz");
    if (fruit == "1") {
        console.log(`You have selected ${frut1}`);
        let fruts = prompt("Please enter how much you want to buy:");
        console.log(`${fruts} kg ${frut1} added to cart`);
        let totalBill = fruts * 10;
        console.log(`Your total amount is ${totalBill}`);
        let dis = 10;
        let disamt = totalBill * (dis / 100);
        let discount = totalBill - (totalBill * (dis / 100));
        if (totalBill > 100) {
            console.log(`Your total Discount is ${disamt}`);
            console.log(`Your total amount after discount is ${discount}`);
        }
        else {
            console.log('Sorry you are not eligible for discount');
        }
    }
    else if (fruit == "2") {
        console.log(`You have selected ${frut2}`);
        let fruts = prompt("Please enter how much you want to buy:");
        console.log(`${fruts} doz ${frut2} added to cart`);
        let totalBill = fruts * 20;
        console.log(`Your total amount is ${totalBill}`);
        let dis = 10;
        let disamt = totalBill * (dis / 100);
        let discount = totalBill - (totalBill * (dis / 100));
        if (totalBill > 100) {
            console.log(`Your total Discount is ${disamt}`);
            console.log(`Your total amount after discount is ${discount}`);
        }
        else {
            console.log('Sorry you are not eligible for discount');
        }
    }
    else if (fruit == "3") {
        console.log(`You have selected ${frut3}`);
        let fruts = prompt("Please enter how much you want to buy:");
        console.log(`${fruts} doz ${frut3} added to cart`);
        let totalBill = fruts * 50;
        console.log(`Your total amount is ${totalBill}`);
        let dis = 10;
        let disamt = totalBill * (dis / 100);
        let discount = totalBill - (totalBill * (dis / 100));
        if (totalBill > 100) {
            console.log(`Your total Discount is ${disamt}`);
            console.log(`Your total amount after discount is ${discount}`);
        }
        else {
            console.log('Sorry you are not eligible for discount');
        }
    }
}
else if (selection == '2') {
    console.log(`You have selected ${opt2}`);
    let vegetabel = prompt("Please select a vegetables 1-potato: 10/kg, 2-carrot: 20/kg, 3-cabbage: 50/kg");
    if (vegetabel == "1") {
        console.log(`You have selected ${veg1}`);
        let vegt = prompt("Please enter how much you want to buy:");
        console.log(`${vegt} kg ${veg1} added to cart`);
        let totalBill = vegt * 10;
        console.log(`Your total amount is ${totalBill}`);
        let dis = 10;
        let disamt = totalBill * (dis / 100);
        let discount = totalBill - (totalBill * (dis / 100));
        if (totalBill > 100) {
            console.log(`Your total Discount is ${disamt}`);
            console.log(`Your total amount after discount is ${discount}`);
        }
        else {
            console.log('Sorry you are not eligible for discount');
        }
    }
    else if (vegetabel == "2") {
        console.log(`You have selected ${veg2}`);
        let vegt = prompt("Please enter how much you want to buy:");
        console.log(`${vegt} kg ${veg2} added to cart`);
        let totalBill = vegt * 20;
        console.log(`Your total amount is ${totalBill}`);
        let dis = 10;
        let disamt = totalBill * (dis / 100);
        let discount = totalBill - (totalBill * (dis / 100));
        if (totalBill > 100) {
            console.log(`Your total Discount is ${disamt}`);
            console.log(`Your total amount after discount is ${discount}`);
        }
        else {
            console.log('Sorry you are not eligible for discount');
        }
    }
    else if (vegetabel == "3") {
        console.log(`You have selected ${veg3}`);
        let vegt = prompt("Please enter how much you want to buy:");
        console.log(`${vegt} kg ${veg3} added to cart`);
        let totalBill = vegt * 50;
        console.log(`Your total amount is ${totalBill}`);
        let dis = 10;
        let disamt = totalBill * (dis / 100);
        let discount = totalBill - (totalBill * (dis / 100));
        if (totalBill > 100) {
            console.log(`Your total Discount is ${disamt}`);
            console.log(`Your total amount after discount is ${discount}`);
        }
        else {
            console.log('Sorry you are not eligible for discount');
        }
    }
}
else if (selection == '3') {
    console.log(`You have selected ${opt3}`);
    let grocery = prompt("Please select a grocery 1-soap: 10/pcs, 2-shampoo: 20/pcs, 3-lotion: 50/pcs");
    if (grocery == "1") {
        console.log(`You have selected ${groc1}`);
        let grocy = prompt("Please enter how much you want to buy:");
        console.log(`${grocy} pcs ${groc1} added to cart`);
        let totalBill = grocy * 10;
        console.log(`Your total amount is ${totalBill}`);
        let dis = 10;
        let disamt = totalBill * (dis / 100);
        let discount = totalBill - (totalBill * (dis / 100));
        if (totalBill > 100) {
            console.log(`Your total Discount is ${disamt}`);
            console.log(`Your total amount after discount is ${discount}`);
        }
        else {
            console.log('Sorry you are not eligible for discount');
        }
    }
    else if (grocery == "2") {
        console.log(`You have selected ${groc2}`);
        let grocy = prompt("Please enter how much you want to buy:");
        console.log(`${grocy} pcs ${groc2} added to cart`);
        let totalBill = grocy * 20;
        console.log(`Your total amount is ${totalBill}`);
        let dis = 10;
        let disamt = totalBill * (dis / 100);
        let discount = totalBill - (totalBill * (dis / 100));
        if (totalBill > 100) {
            console.log(`Your total Discount is ${disamt}`);
            console.log(`Your total amount after discount is ${discount}`);
        }
        else {
            console.log('Sorry you are not eligible for discount');
        }
    }
    else if (grocery == "3") {
        console.log(`You have selected ${groc3}`);
        let grocy = prompt("Please enter how much you want to buy:");
        console.log(`${grocy} pcs ${groc3} added to cart`);
        let totalBill = grocy * 50;
        console.log(`Your total amount is ${totalBill}`);
        let dis = 10;
        let disamt = totalBill * (dis / 100);
        let discount = totalBill - (totalBill * (dis / 100));
        if (totalBill > 100) {
            console.log(`Your total Discount is ${disamt}`);
            console.log(`Your total amount after discount is ${discount}`);
        }
        else {
            console.log('Sorry you are not eligible for discount');
        }
    }
}
else {
    console.log('You have not selected an option');
}
let paymentOptions = prompt("Please select a grocery 1-Bank Transfer, 2-Credit Card");
for (let i = 1; i = 2; i++) {
    let bank = prompt("Please enter your bank number: ");
    console.log("Payment Received");
    break;
    for (let j = 1; j = 2; j++) {
        let Card = prompt("Please enter your Card number: ");
        console.log("Payment Received");
        break;
    }
}
