const prompt = require('prompt-sync')();
let score = parseInt(prompt("What is your credit score: "));

if(score <= 850 && score >= 800){
    console.log("Exceptional - Best Rates Available");
}
else if(score >= 740 && score <= 799){
    console.log("Very Good - Better Than Average");
}
else if(score >= 670 && score <= 739){
    console.log("Good - Near or Above Average");
}
else if(score >= 580 && score <= 669){
    console.log("Fair - Below Average");
}
else if(score >= 300 && score <= 579){
    console.log("Poor - Credit may be Denied");
}
else{
    console.log("Invalide Input");
}