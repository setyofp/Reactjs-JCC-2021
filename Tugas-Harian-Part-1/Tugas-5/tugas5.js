//soal 1
console.log("Jawaban Soal 1");

function luasPersegiPanjang(panjang, lebar) {
	return panjang * lebar;
}

function kelilingPersegiPanjang(panjang, lebar) {
	return 2 * (panjang + lebar);
}

function volumeBalok(panjang, lebar, tinggi) {
	return panjang * lebar * tinggi;
}

var panjang = 12;
var lebar = 4;
var tinggi = 8;

var luasPersegiPanjang = luasPersegiPanjang(panjang, lebar);
var kelilingPersegiPanjang = kelilingPersegiPanjang(panjang, lebar);
var volumeBalok = volumeBalok(panjang, lebar, tinggi);

console.log(luasPersegiPanjang);
console.log(kelilingPersegiPanjang);
console.log(volumeBalok);

console.log("");

//soal 2
console.log("Jawaban Soal 2");

function introduce(name, age, address, hobby) {
	return (
		"Nama saya " +
		name +
		", umur saya " +
		age +
		" tahun, alamat saya di " +
		address +
		", dan saya punya hobby yaitu " +
		hobby +
		"!"
	);
}

var name = "John";
var age = 30;
var address = "Jalan belum jadi";
var hobby = "Gaming";

var perkenalan = introduce(name, age, address, hobby);
console.log(perkenalan); // Menampilkan "Nama saya John, umur saya 30 tahun, alamat saya di Jalan belum jadi, dan saya punya hobby yaitu Gaming!"

console.log("");

//soal 3
console.log("Jawaban Soal 3");

var arrayDaftarPeserta = ["John Doe", "laki-laki", "baca buku", 1992];
var objectDaftarPeserta = {};

objectDaftarPeserta.nama = arrayDaftarPeserta[0];
objectDaftarPeserta.jenisKelamin = arrayDaftarPeserta[1];
objectDaftarPeserta.hobi = arrayDaftarPeserta[2];
objectDaftarPeserta.tahunLahir = arrayDaftarPeserta[3];

console.log(objectDaftarPeserta);

console.log("");

//soal 4
console.log("Jawaban Soal 4");

var fruits = [
	{
		nama: "Nanas",
		warna: "Kuning",
		adaBiji: "tidak",
		harga: 9000,
	},
	{
		nama: "Jeruk",
		warna: "Oranye",
		adaBiji: "ada",
		harga: 8000,
	},
	{
		nama: "Semangka",
		warna: "Hijau & Merah",
		adaBiji: "ada",
		harga: 10000,
	},
	{
		nama: "Pisang",
		warna: "Kuning",
		adaBiji: "tidak",
		harga: 5000,
	},
];

var filterBiji = fruits.filter(function (isAny) {
	return isAny.adaBiji == "tidak";
});

console.log(filterBiji);

console.log("");

//soal 5
console.log("Jawaban Soal 5");

function tambahDataFilm(title, runTime, genre, year) {
	return dataFilm.push({
		nama: title,
		durasi: runTime,
		genre: genre,
		tahun: year,
	});
}

var dataFilm = [];

tambahDataFilm("LOTR", "2 jam", "action", "1999");
tambahDataFilm("avenger", "2 jam", "action", "2019");
tambahDataFilm("spiderman", "2 jam", "action", "2004");
tambahDataFilm("juon", "2 jam", "horror", "2004");

console.log(dataFilm);
