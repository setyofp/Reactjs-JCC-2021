var filterBooksPromise = require("./promise2.js");

// Lanjutkan code untuk menjalankan function filterBookPromise
async function filterBooks(isColorful, totalPage) {
	try {
		var result = await filterBooksPromise(isColorful, totalPage);
		console.log(result);
	} catch (err) {
		console.log(err.message);
	}
}

filterBooksPromise(true, 40)
	.then((x) => console.log(x))
	.catch((err) => console.log(err.message));
filterBooks(false, 250);
filterBooks(true, 30);
