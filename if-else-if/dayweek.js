const prompt = require('prompt-sync')();

let num = parseInt(prompt("Type a number from 1-7 to determine the day of week =  "));

let day;

if (num === 1) {
    day = "Sunday";
} else if (num === 2) {
    day = "Monday";
} 
 else if (num === 3) {
    day = "Tuesday";
} 
 else if (num === 3) {
    day = "Wednesday";
} 
 else if (num === 4) {
    day = "Thursday";
} 
else if (num === 5) {
    day = "Thursday";
} 
else if (num === 6) {
    day = "Friday";
} 
else if (num === 7) {
    day = "Saturday";
} 
else {
    day = "invalid day";
}

console.log("The day is " + day);