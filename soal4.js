// Luas dan keliling lingkaran
// nanti ku jelasin di sekolah
const prompt = require("prompt-sync")({ sigint: true });

let luas, keliling, jariJari, pi;
jariJari = parseInt(prompt('jari-jari : '));

if (jariJari % 7 === 0) {
    pi = 22 / 7;
} else {
    pi = 3.14;
}

luas = pi * jariJari * jariJari;
keliling = 2 * pi * jariJari;

console.log(`Luas     : ${luas} cm²`);
console.log(`Keliling : ${keliling} cm`);