const prompt = require('prompt-sync')();

let color = prompt("Type on traffic color light = ");

let based;

if (color === "red") {
    based = "stop";
} 
else if (color === "yellow") {
    based = "Slow down";

} 
else if (color === "green") {
    based = "go";

} 
else {
    based = "invalid light color";
}

console.log("The traffic color means " + based)