const prompt = require('prompt-sync')();

let temp = parseInt(prompt("Check temperature? "));

let tempN;

if (temp > 0) {
    tempN = "ice(Solid)";
} else if (temp >= 0 && temp <= 99) {
    tempN = "Water(Liquid)";
} 
else {
    tempN = "Steam(Gas)";
} 
console.log("The temperature celcius is " + tempN);