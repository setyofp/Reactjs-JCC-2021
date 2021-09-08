// di index.js
var readBooks = require("./callback.js");

var books = [
	{ name: "LOTR", timeSpent: 3000 },
	{ name: "Fidas", timeSpent: 2000 },
	{ name: "Kalkulus", timeSpent: 4000 },
	{ name: "komik", timeSpent: 1000 },
];

function read(timeLeft, i) {
	readBooks(timeLeft, books[i], function (timeLeft) {
		if (i < books.length - 1) {
			i++;
			read(timeLeft, i);
		}
	});
}
read(10000, 0);
