const prompt = require("prompt-sync")({ sigint: true });

let celcius, reamur;
celcius = parseInt(prompt('masukan suhu celcius : '));
reamur = celcius * 4/5 

console.log(`Suhu Reamur : ${reamur} K`);






