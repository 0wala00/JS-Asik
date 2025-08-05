// Jalankan perintah ini dulu di terminal:
// npm install prompt-sync

const prompt = require("prompt-sync")({ sigint: true });

let luas, keliling, alas, tinggi, konstanta;
konstanta = 0.5;
alas = parseInt(prompt('alas : '));
tinggi = parseInt(prompt('tinggi : '));
sisi = parseInt(prompt('sisi : '));


luas = konstanta * alas * tinggi;
keliling = sisi + sisi + sisi; // Asumsikan a, b, c adalah sisi-sisi segitiga
console.log(`Luas     : ${luas} cm²`);
console.log(`Keliling : ${keliling} cm`);
