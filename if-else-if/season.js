const prompt = require('prompt-sync')();

let num = parseInt(prompt("Type on month number to find season = "));

let based;

if (num === 12 || num === 1 || num === 2 ) 
    {
    based = "Winter";
} 
else if (num === 3 || num === 4 || num === 5 ) {
    based = "Spring";

} 
else if (num === 6 || num === 7 || num === 8 ) {
    based = "Summer";

} 
else if (num === 9 || num === 10 || num === 11 ) {
    based = "Fall";

} 
else {
    based = "invalid number";
}

console.log(" The month number season is " + based)