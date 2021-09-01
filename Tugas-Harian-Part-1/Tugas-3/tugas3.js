// soal 1
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";
var kalimat =
	kataPertama +
	" " +
	kataKedua.charAt(0).toUpperCase() +
	kataKedua.substr(1) +
	" " +
	kataKetiga.substr(0, 6) +
	kataKetiga.charAt(6).toUpperCase() +
	" " +
	kataKeempat.toUpperCase();

console.log("Jawaban Soal 1");
console.log(kalimat);
console.log("");

// soal 2
var panjangPersegiPanjang = 8;
var lebarPersegiPanjang = 5;

var alasSegitiga = 6;
var tinggiSegitiga = 7;

var kelilingPersegiPanjang = 2 * (panjangPersegiPanjang + lebarPersegiPanjang);
var luasSegitiga = 0.5 * alasSegitiga * tinggiSegitiga;

console.log("Jawaban Soal 2");
console.log(kelilingPersegiPanjang);
console.log(luasSegitiga);
console.log("");

// soal 3
var sentences = "wah javascript itu keren sekali";

var firstWord = sentences.substring(0, 3);
var secondWord = sentences.substring(4, 14); // do your own!
var thirdWord = sentences.substring(15, 18); // do your own!
var fourthWord = sentences.substring(19, 24); // do your own!
var fifthWord = sentences.substring(25, 31); // do your own!

console.log("Jawaban Soal 3");
console.log("Kata Pertama: " + firstWord);
console.log("Kata Kedua: " + secondWord);
console.log("Kata Ketiga: " + thirdWord);
console.log("Kata Keempat: " + fourthWord);
console.log("Kata Kelima: " + fifthWord);
console.log("");

// soal 4
var nilaiJohn = 80;
var nilaiDoe = 50;

if (nilaiJohn >= 80) {
	indeksJohn = "A";
} else if (nilaiJohn >= 70 && nilaiJohn < 80) {
	indeksJohn = "B";
} else if (nilaiJohn >= 60 && nilaiJohn < 70) {
	indeksJohn = "C";
} else if (nilaiJohn >= 50 && nilaiJohn < 60) {
	indeksJohn = "D";
} else {
	indeksJohn = "E";
}

if (nilaiDoe >= 80) {
	indeksDoe = "A";
} else if (nilaiDoe >= 70 && nilaiDoe < 80) {
	indeksDoe = "B";
} else if (nilaiDoe >= 60 && nilaiDoe < 70) {
	indeksDoe = "C";
} else if (nilaiDoe >= 50 && nilaiDoe < 60) {
	indeksDoe = "D";
} else {
	indeksDoe = "E";
}
console.log("Jawaban Soal 4");
console.log(indeksJohn);
console.log(indeksDoe);
console.log("");

// soal 5
var tanggal = 9;
var bulan = 6;
var tahun = 1998;

switch (bulan) {
	case 1: {
		bulanString = "Januari";
		break;
	}
	case 2: {
		bulanString = "Februari";
		break;
	}
	case 3: {
		bulanString = "Maret";
		break;
	}
	case 4: {
		bulanString = "April";
		break;
	}
	case 5: {
		bulanString = "Mei";
		break;
	}
	case 6: {
		bulanString = "Juni";
		break;
	}
	case 7: {
		bulanString = "Juli";
		break;
	}
	case 8: {
		bulanString = "Agustus";
		break;
	}
	case 9: {
		bulanString = "September";
		break;
	}
	case 10: {
		bulanString = "Oktober";
		break;
	}
	case 11: {
		bulanString = "November";
		break;
	}
	case 12: {
		bulanString = "Desember";
		break;
	}
}
var dateTime = tanggal + " " + bulanString + " " + tahun;
console.log("Jawaban Soal 5");
console.log(dateTime);
