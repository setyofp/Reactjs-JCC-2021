//soal1
console.log("Jawaban Soal 1");

const circleArea = (radius) => {
	return Math.round(Math.PI * (radius * radius));
};

console.log(circleArea(7));

const circlePerimeter = (radius) => {
	return Math.round(2 * Math.PI * radius);
};

console.log(circlePerimeter(7));

console.log("");

//soal 2
console.log("Jawaban Soal 2");

const introduce = (...rest) => {
	let [name, age, gender, profession] = rest;
	return `Pak ${name} adalah seorang ${profession} yang berusia ${age} tahun`;
};

//kode di bawah ini jangan dirubah atau dihapus
const perkenalan = introduce("John", "30", "Laki-Laki", "penulis");
console.log(perkenalan); // Menampilkan "Pak John adalah seorang penulis yang berusia 30 tahun"

console.log("");

//soal 3
console.log("Jawaban Soal 3");

const newFunction = (firstName, lastName) => {
	return {
		firstName,
		lastName,
		fullName: () => {
			console.log(`${firstName} ${lastName}`);
		},
	};
};

// kode di bawah ini jangan diubah atau dihapus sama sekali
console.log(newFunction("John", "Doe").firstName);
console.log(newFunction("Richard", "Roe").lastName);
newFunction("William", "Imoh").fullName();

console.log("");

//soal 4
console.log("Jawaban Soal 4");

let phone = {
	name: "Galaxy Note 20",
	brand: "Samsung",
	year: 2020,
	colors: ["Mystic Bronze", "Mystic White", "Mystic Black"],
};
// kode diatas ini jangan di rubah atau di hapus sama sekali

/* Tulis kode jawabannya di sini */

const { brand: phoneBrand, name: phoneName, year, colors } = phone;
const [colorBronze, colorWhite, colorBlack] = colors;

// kode di bawah ini jangan dirubah atau dihapus
console.log(phoneBrand, phoneName, year, colorBlack, colorBronze);

console.log("");

//soal 5
console.log("Jawaban Soal 5");

let warna = ["biru", "merah", "kuning", "hijau"];

let dataBukuTambahan = {
	penulis: "john doe",
	tahunTerbit: 2020,
};

let buku = {
	nama: "pemograman dasar",
	jumlahHalaman: 172,
	warnaSampul: ["hitam"],
};
// kode diatas ini jangan di rubah atau di hapus sama sekali

/* Tulis kode jawabannya di sini */
buku.warnaSampul = [...buku.warnaSampul, ...warna];
buku = { ...buku, ...dataBukuTambahan };
console.log(buku);
