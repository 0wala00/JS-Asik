
const prompt = require("prompt-sync")({ sigint: true });

    let suhu = parseInt(prompt("Masukan suhu : "));

if (suhu < 0) {
    console.log("ES");
} else if (suhu < 100) {
    console.log("air");
} else {
    console.log("uap air");
}

suhu2 = parseInt(prompt("Masukan Suhu Lainnya: "));
 

if ({suhu2} = suhu) {
    console.log("Masukan angka lain");
}
else{
    console.log("true")
}