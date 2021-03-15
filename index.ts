let message: string = 'Hello World! What is the temperature today in Fahrenheit?';
console.log(message);

function FtoC (tempF: number){
    let tempC:number = (tempF - 32)*5/9
    if (tempC >40){
        return console.log("It's ${tempC} degrees Celsius out. Wow thats Hot!")
    }
    if (tempC <10){
        return console.log("It's ${tempC} degrees Celsius out. Wow thats Cold!")
    }
}