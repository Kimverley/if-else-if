const prompt = require('prompt-sync')();

let temp = prompt("Check temperature? ");

let tempN;

if (temp >= 31) {
    tempN = "Hot";
} else if (temp >= 20 && temp <= 30) {
    tempN = "Warm";
} else if (temp >= 10 && temp <= 19) {
    tempN = "Cool";
} else {
    tempN = "Cold";
}

console.log("The temperature is " + tempN);