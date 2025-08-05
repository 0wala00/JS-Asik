

// lingkaran

const prompt = require("prompt-sync")({ sigint: true });

const pi = 3.14;

let jari_jari;
while (true) {
   jari_jari = parseFloat(prompt("Masukkan jari_jari: "));
    if (jari_jari > 0 && !isNaN(jari_jari)) {
        break;
    } else {
        console.log("Input tidak valid. Silakan masukkan angka lebih dari 0 dan jangan berupa huruf atau karakter lain.");
    }
}

let luas = pi * jari_jari * jari_jari;
let keliling = 2 * pi * jari_jari;
