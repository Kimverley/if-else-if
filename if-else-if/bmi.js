const prompt = require('prompt-sync')();

let weight = parseInt(prompt("Check your BMI category based group? "));

let based;

if (weight < 18.5) {
    based = "Underweight";
} 
else if (weight >= 18.5 && weight <= 24.9) {
    based = "Normal";

} 
else if (weight >= 25 && weight <= 29.9) {
    based = "Overweight";

} 
else {
    based = "OBESE";
}

console.log("Your weight category is " + based)