// BALOK
const prompt = require("prompt-sync")({ sigint: true });

let panjang, lebar, tinggi, konstanta, volume;
konstanta = 2;
panjang = parseInt(prompt('panjang : '));
tinggi = parseInt(prompt('tinggi : '));
lebar = parseInt(prompt('lebar : '));


volume = panjang * lebar * tinggi;
luasPermukaan = (konstanta * (panjang * lebar + panjang * tinggi + lebar * tinggi)); // Asumsikan a, b, c adalah sisi-sisi segitiga
console.log(`luasPermukaan : ${luasPermukaan} cm²`);
console.log(`Volume   : ${volume} cm³`);