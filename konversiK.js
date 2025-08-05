const prompt = require("prompt-sync")({ sigint: true });

let celcius, kelvin;
celcius = parseInt(prompt('suhu celcius : '));
kelvin = celcius + 273.15;

console.log(`Suhu Kelvin : ${kelvin} K`);
