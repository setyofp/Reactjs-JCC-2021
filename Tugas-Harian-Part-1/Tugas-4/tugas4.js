//soal 1
console.log("Jawaban Soal 1");
var x = 2;

console.log("LOOPING PERTAMA");
while (x <= 20) {
	console.log(x + " - I love coding");
	x += 2;
}
console.log("LOOPING KEDUA");

var y = 20;

while (y >= 2) {
	console.log(y + " - I will become a frontend developer");
	y -= 2;
}
console.log("");

//soal 2
console.log("Jawaban Soal 2");
for (var i = 1; i <= 20; i++) {
	if (i % 3 == 0 && i % 2 != 0) {
		console.log(i + " - I Love Coding");
	} else if (i % 2 == 1) {
		console.log(i + " - Santai");
	} else if (i % 2 == 0) {
		console.log(i + " - Berkualitas");
	}
}
console.log("");

//soal 3
console.log("Jawaban Soal 3");
for (var i = "#"; i.length <= 7; i += "#") {
	console.log(i);
}
console.log("");

//soal 4
console.log("Jawaban Soal 4");
var kalimat = [
	"aku",
	"saya",
	"sangat",
	"sangat",
	"senang",
	"belajar",
	"javascript",
];

var cutAdd = kalimat.splice(0, 3, "saya");
console.log('"' + kalimat.join(" ") + '"');
console.log("");

//soal 5
console.log("Jawaban Soal 5");
var sayuran = [];
var addVeg = sayuran.push(
	"Kangkung",
	"Bayam",
	"Buncis",
	"Kubis",
	"Timun",
	"Seledri",
	"Tauge"
);
var sortedVeg = sayuran.sort();

for (var i = 0; i < sortedVeg.length; i++) {
	var finalVeg = sortedVeg[i];
	console.log(i + 1 + ". " + finalVeg);
}
