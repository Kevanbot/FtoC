const tinput = require('prompt-sync')({sigint: true});
let tempF = tinput('What is the temperature in Fahrenheit?');
let tempFnum = Number(tempF);
if (typeof tempFnum === 'number' && isNaN(tempFnum) == false) {
    let tempC:number = (tempFnum - 32)*5/9;
    if (tempC >40){
        console.log(`It's ${tempC} degrees Celsius out.`)
    }
    else {
        console.log(`It's ${tempC} degrees Celsius out.`)
    }
}
else {
    while (isNaN(tempFnum)) {
    var tempFerror = tinput(`What is the temperature in Fahrenheit!?! "${tempF}" is not a number`);
    tempFnum = Number(tempFerror);}
    let tempCerror:number = (tempFnum - 32)*5/9;
        if (tempCerror >28){
        console.log(`It's ${tempCerror} degrees Celsius out.`)
        }
        else {
        console.log(`It's ${tempCerror} degrees Celsius out.`)
        }
    }

//.toString()



