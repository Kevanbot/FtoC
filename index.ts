const tinput = require('prompt-sync')({sigint: true});
let tempF = tinput('what is the temp in F?');
let tempFnum = Number(tempF);
if (typeof tempFnum === 'number' && isNaN(tempFnum) == false) {
    let tempC:number = (tempFnum - 32)*5/9;
    if (tempC >40){
        console.log(`It's ${tempC} degrees Celsius out. Wow thats Hot!`)
    }
    else {
        console.log(`It's ${tempC} degrees Celsius out. Wow thats cold!`)
    }
}
else {
    while (isNaN(tempFnum)) {
    const tempFerror = tinput('what is the temp in F? Thats not a number you ignoramous!');
    tempFnum = Number(tempFerror);}
    let tempCerror:number = (tempFnum - 32)*5/9;
        if (tempCerror >40){
        console.log(`It's ${tempCerror} degrees Celsius out. Wow thats Hot!`)
        }
        else {
        console.log(`It's ${tempCerror} degrees Celsius out. Wow thats cold!`)
        }
    }





