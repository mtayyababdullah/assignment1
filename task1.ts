import { CLIENT_RENEG_LIMIT } from "tls";

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



console.log("Please select an option \n 1-fruits\n 2-vegetables\n 3-grocery")
const selection = prompt("")
console.log("selection is: "+ selection)



if (selection == "1") {

    console.log(`You have selected ${opt1}`);

    console.log("Please select a fruit\n 1-apple: 10/kg\n 2-orange: 20/doz\n 3-orange: 50/doz")

    let fruit = prompt("");
    


    if (fruit == "1"){

        console.log(`You have selected ${frut1}`);

        let fruts = prompt("Please enter how much you want to buy:");

        console.log (`${fruts} kg ${frut1} added to cart`)

        
        let totalBill = fruts * 10

        console.log (`Your total amount is ${totalBill}`)

        let dis: number = 10;

            let disamt = totalBill * (dis / 100);

            let discount = totalBill - (totalBill * (dis / 100));

        if (totalBill > 100){

            
            console.log (`Your total Discount is ${disamt}`);

            console.log (`Your total amount after discount is ${discount}`)
        } else {

            console.log ('Sorry you are not eligible for discount');}

    }else if(fruit == "2"){

        console.log(`You have selected ${frut2}`);

        let fruts = prompt("Please enter how much you want to buy:");

        console.log (`${fruts} doz ${frut2} added to cart`)

        let totalBill = fruts * 20

        console.log (`Your total amount is ${totalBill}`)

        let dis: number = 10;

            let disamt = totalBill * (dis / 100);

            let discount = totalBill - (totalBill * (dis / 100));

        if (totalBill > 100){

            
            console.log (`Your total Discount is ${disamt}`);

            console.log (`Your total amount after discount is ${discount}`)
        } else {

            console.log ('Sorry you are not eligible for discount');}

    }else if(fruit == "3"){

        console.log(`You have selected ${frut3}`);

       
        let fruts = prompt("Please enter how much you want to buy:");

        console.log (`${fruts} doz ${frut3} added to cart`)

        let totalBill = fruts * 50

        console.log (`Your total amount is ${totalBill}`)

        let dis: number = 10;

            let disamt = totalBill * (dis / 100);

            let discount = totalBill - (totalBill * (dis / 100));

        if (totalBill > 100){

            
            console.log (`Your total Discount is ${disamt}`);

            console.log (`Your total amount after discount is ${discount}`)
        } else {

            console.log ('Sorry you are not eligible for discount');}
    }

    

} else if (selection == '2'){

    console.log(`You have selected ${opt2}`);

    console.log ("Please select a vegetables\n 1-potato: 10/kg\n 2-carrot: 20/kg\n 3-cabbage: 50/kg")

    let vegetabel = prompt("");



    if (vegetabel == "1"){

        console.log(`You have selected ${veg1}`);

        let vegt = prompt("Please enter how much you want to buy:");

        console.log (`${vegt} kg ${veg1} added to cart`)

        let totalBill = vegt * 10

        console.log (`Your total amount is ${totalBill}`)

        let dis: number = 10;

            let disamt = totalBill * (dis / 100);

            let discount = totalBill - (totalBill * (dis / 100));

        if (totalBill > 100){

            
            console.log (`Your total Discount is ${disamt}`);

            console.log (`Your total amount after discount is ${discount}`)
        } else {

            console.log ('Sorry you are not eligible for discount');}

    }else if(vegetabel == "2"){

        console.log(`You have selected ${veg2}`);

        let vegt = prompt("Please enter how much you want to buy:");

        console.log (`${vegt} kg ${veg2} added to cart`)

        let totalBill = vegt * 20

        console.log (`Your total amount is ${totalBill}`)

        let dis: number = 10;

            let disamt = totalBill * (dis / 100);

            let discount = totalBill - (totalBill * (dis / 100));

        if (totalBill > 100){

            
            console.log (`Your total Discount is ${disamt}`);

            console.log (`Your total amount after discount is ${discount}`)
        } else {

            console.log ('Sorry you are not eligible for discount');}

    }else if(vegetabel == "3"){
        console.log(`You have selected ${veg3}`);

        let vegt = prompt("Please enter how much you want to buy:");

        console.log (`${vegt} kg ${veg3} added to cart`)

        let totalBill = vegt * 50

        console.log (`Your total amount is ${totalBill}`)

        let dis: number = 10;

            let disamt = totalBill * (dis / 100);

            let discount = totalBill - (totalBill * (dis / 100));

        if (totalBill > 100){

            
            console.log (`Your total Discount is ${disamt}`);

            console.log (`Your total amount after discount is ${discount}`)
        } else {

            console.log ('Sorry you are not eligible for discount');}
    }

} else if (selection == '3'){

    console.log(`You have selected ${opt3}`);

    console.log ("Please select a grocery\n 1-soap: 10/pcs\n 2-shampoo: 20/pcs\n 3-lotion: 50/pcs")

    let grocery = prompt("");



    if (grocery == "1"){

        console.log(`You have selected ${groc1}`);

        let grocy = prompt("Please enter how much you want to buy:");

        console.log (`${grocy} pcs ${groc1} added to cart`)

        let totalBill = grocy * 10

        console.log (`Your total amount is ${totalBill}`)

        let dis: number = 10;

            let disamt = totalBill * (dis / 100);

            let discount = totalBill - (totalBill * (dis / 100));

        if (totalBill > 100){

            
            console.log (`Your total Discount is ${disamt}`);

            console.log (`Your total amount after discount is ${discount}`)
        } else {

            console.log ('Sorry you are not eligible for discount');}

    }else if(grocery == "2"){

        console.log(`You have selected ${groc2}`);

        let grocy = prompt("Please enter how much you want to buy:");

        console.log (`${grocy} pcs ${groc2} added to cart`)

        let totalBill = grocy * 20

        console.log (`Your total amount is ${totalBill}`)

        let dis: number = 10;

            let disamt = totalBill * (dis / 100);

            let discount = totalBill - (totalBill * (dis / 100));

        if (totalBill > 100){

            
            console.log (`Your total Discount is ${disamt}`);

            console.log (`Your total amount after discount is ${discount}`)
        } else {

            console.log ('Sorry you are not eligible for discount');}

    }else if(grocery == "3"){
        console.log(`You have selected ${groc3}`);

        let grocy = prompt("Please enter how much you want to buy:");

        console.log (`${grocy} pcs ${groc3} added to cart`)

        let totalBill = grocy * 50

        console.log (`Your total amount is ${totalBill}`)

        let dis: number = 10;

            let disamt = totalBill * (dis / 100);

            let discount = totalBill - (totalBill * (dis / 100));

        if (totalBill > 100){

            
            console.log (`Your total Discount is ${disamt}`);

            console.log (`Your total amount after discount is ${discount}`)
        } else {

            console.log ('Sorry you are not eligible for discount');}
    }
} 
else {

    console.log('You have not selected an option')
    
}

if (selection >= 1 && selection <= 3){

    let paymnetMethodCount = 2;
    console.log ("Please select a payment option \n 1-Bank Transfer\n 2-Credit Card")

    let paymentOptions = prompt("");

    if(paymentOptions < 1 || paymentOptions > 2){
        console.log ("you have not selected any Payment option");
        console.log ("Please select a payment option \n 1-Bank Transfer\n 2-Credit Card")
        paymentOptions = prompt("");

        for (let i = 1; i <= paymnetMethodCount; i++) {

            for (let j = 1; j <= paymentOptions; j++){
    
                if(j === 1){
                    let bank = prompt("Please enter your bank number: ")
                    console.log ("Payment Received");
                    break;
                }else{
                    let Card = prompt("Please enter your Card number: ")
                    console.log ("Payment Received");
                    break;
                }
            }

            if(paymentOptions){
                break;
            }
        
        }
        
    } else {

        for (let i = 1; i <= paymnetMethodCount; i++) {

            for (let j = 1; j <= paymentOptions; j++){
    
                if(paymentOptions == 1){
                    let bank = prompt("Please enter your bank number: ")
                    console.log ("Payment Received");
                    break;
                }else{
                    let Card = prompt("Please enter your Card number: ")
                    console.log ("Payment Received");
                    break;
                }
            }
            if(paymentOptions){
                break;
            }
        }

    }




}

