
const prompt = require('prompt-sync')();

let age = parseInt(prompt("Check your age group? "));

let agegroup;

if (age >= 0 && age <=12) {
    agegroup = "Child";
} 
else if (age >= 13 && age <= 19) {
    agegroup = "Teenager";

} 
else if (age >= 20 && age <= 59) {
    agegroup = "Adult";
}
else {
    agegroup = "Senior";
}

console.log("Your age group is " + agegroup)