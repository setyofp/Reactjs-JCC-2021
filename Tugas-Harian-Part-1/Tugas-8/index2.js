var readBooksPromise = require("./promise.js");

var books = [
	{ name: "LOTR", timeSpent: 3000 },
	{ name: "Fidas", timeSpent: 2000 },
	{ name: "Kalkulus", timeSpent: 4000 },
];

function startRead(timeLeft, i) {
	readBooksPromise(timeLeft, books[i])
		.then(function (timeLeft) {
			if (i < books.length - 1) {
				i++;
				startRead(timeLeft, i);
			}
		})
		.catch(function (err) {
			console.log(err);
		});
}
startRead(10000, 0);
