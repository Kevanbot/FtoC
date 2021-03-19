const tinput = require('prompt-sync')({sigint: true});
let tempF = tinput('what is the temp in F?');
let tempFnum = Number(tempF);
if (typeof tempFnum === 'number' && isNaN(tempFnum) == false) {
    let tempC:number = (tempFnum - 32)*5/9;
    if (tempC >40){
        console.log(`It's ${tempC} degrees Celsius out. Wow thats Hot! Damn Hot! Oof! das a hot one!`)
    }
    else {
        console.log(`It's ${tempC} degrees Celsius out. Wow thats cold! Your nips must be razorsharp!`)
    }
}
else {
    while (isNaN(tempFnum)) {
    var tempFerror = tinput(`what is the temp in Fahrenheit!?! "${tempF}" is not a number you ignoramous!`);
    tempFnum = Number(tempFerror);}
    let tempCerror:number = (tempFnum - 32)*5/9;
        if (tempCerror >32){
        console.log(`It's ${tempCerror} degrees Celsius out. Wow thats Hot!`)
        }
        else {
        console.log(`It's ${tempCerror} degrees Celsius out. Wow thats cold!`)
        }
    }

//.toString()



