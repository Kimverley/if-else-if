const prompt = require('prompt-sync')();

let systolic = parseInt(prompt("Check your Systolic? "));
let diastolic = parseInt(prompt("Check your Diastolic? "));

let based = "";

if (systolic <120 && diastolic< 80)
    {
    based= "Normal";
}
else if((systolic >=120  &&  systolic <=129) && (diastolic < 80))
{
    based="Elevated";
}
else if((systolic >=130  &&  systolic <=139) || (diastolic >= 80))
{
    based="High BP stage 1";
}
else if((systolic >=140  &&  systolic <=180) || (diastolic >= 80 && diastolic <= 120))
{
    based="High BP stage 2";
}
else
{
    based="Hypertensive Crisis"
}