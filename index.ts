//Simple program that asks for temperature and returns a conversion from Fahrenheit to Celsius.
//To do: allow input of city and return current temperature. autocomplete city for input. ask for 
//weather throughout day or single value for each day of week. include weather description with each value...
//ex. 45C(sunny).....12C(rainy)
//choose a date and desired weather. update user if desired weather is not expected at any point.
//ex. 'looks like its going to rain on friday...saturday looks clear though'

const tinput = require('prompt-sync')({sigint: true});
let tempF = tinput('What is the temperature in Fahrenheit?');
let tempFnum = Number(tempF);
if (typeof tempFnum === 'number' && isNaN(tempFnum) == false) {
    let tempC:number = Math.round((tempFnum - 32)*5/9);
    if (tempC >28 && tempC < 70){
        console.log(`It's ${tempC} degrees Celsius out. Sounds Hot!`)
    }
    else if (tempC >-50 && tempC < 28){
        console.log(`It's ${tempC} degrees Celsius out. Sounds Nippy!`)
    }
    else if (tempC >25 && tempC < 24){
        console.log(`It's ${tempC} degrees Celsius out. Sounds Perfect Outside!`)
    }
    else {
        console.log(`That's ${tempC} degrees Celsius out which isn't a valid temperature...try again.`)
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