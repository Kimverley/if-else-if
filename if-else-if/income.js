const prompt = require('prompt-sync')();

let tax = parseInt(prompt("Find your annual income? "));

let income;

if (tax <= 0 && tax >=10000)
 {
    income = "No far";
} 
else if (tax >= 10001 && tax <=30000) {
    income = "10%";
} 
else if (tax >= 30001 && tax <=60000) {
    income = "20%";
} 
else if (tax >= 60001 && tax <=100000) {
    income = "30%";
} 
else if (tax >= 100001) {
    income = "40%";
} 

console.log("The annual income is " + income);