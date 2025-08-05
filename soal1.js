// Jalankan perintah ini dulu di terminal:
// npm install prompt-sync
// Masuk dulu ke direktori tugas ini sebelum menjalankan kode ini.

const prompt = require("prompt-sync")({ sigint: true });

let luas, keliling, sisi, konstanta;
konstanta = 4;
sisi = parseInt(prompt('sisi : '));


luas = sisi * sisi;
keliling = konstanta * sisi;

console.log(`Luas     : ${luas} cm²`);
console.log(`Keliling : ${keliling} cm`);
