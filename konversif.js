const prompt = require("prompt-sync")({ sigint: true });

let celcius, fahrenheit;
celcius = parseInt(prompt('suhu celcius : '));
fahrenheit = (9/5) * celcius + 32;

console.log(`Suhu Fahrenheit : ${fahrenheit} K`);