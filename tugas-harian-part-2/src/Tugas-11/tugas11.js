import React, { useState } from "react";
import "../App.css";

const Tugas11 = () => {
	const [buah, setBuah] = useState([
		{ nama: "Nanas", hargaTotal: 100000, beratTotal: 4000 },
		{ nama: "Manggis", hargaTotal: 350000, beratTotal: 10000 },
		{ nama: "Nangka", hargaTotal: 90000, beratTotal: 2000 },
		{ nama: "Durian", hargaTotal: 400000, beratTotal: 5000 },
		{ nama: "Strawberry", hargaTotal: 120000, beratTotal: 6000 },
	]);

	const [nama, setNama] = useState();
	const [hargaTotal, setHargaTotal] = useState();
	const [beratTotal, setBeratTotal] = useState();
	const [currentIndex, setCurrentIndex] = useState(-1);

	// handle input
	const handleName = (event) => {
		setNama(event.target.value);
	};

	const handlePrice = (event) => {
		// parseInt(event.target.value);
		setHargaTotal(event.target.value);
	};

	const handleWeight = (event) => {
		// parseInt(event.target.value)
		setBeratTotal(event.target.value);
	};

	//Submit
	const handleSubmit = (event) => {
		event.preventDefault();
		let newList = buah;

		if (currentIndex === -1) {
			newList = [...newList, { nama, hargaTotal, beratTotal }];
		} else {
			newList[currentIndex] = { nama, hargaTotal, beratTotal };
		}

		setBuah(newList);
		setCurrentIndex(-1);
		setNama("");
		setHargaTotal("");
		setBeratTotal("");
	};

	//Delete
	const handleDelete = (event) => {
		let index = parseInt(event.target.value);
		let deletedItem = buah[index];
		let newData = buah.filter((e) => {
			return e !== deletedItem;
		});
		setBuah(newData);
	};

	//Update
	const handleEdit = (event) => {
		let index = parseInt(event.target.value);
		let editValue = buah[index];

		setNama(editValue.nama);
		setHargaTotal(editValue.hargaTotal);
		setBeratTotal(editValue.beratTotal);
		setCurrentIndex(index);
		setBuah(buah);
	};

	return (
		<div className="fruit">
			<div className="fruit-table">
				<h1>Daftar Harga Buah</h1>
				<table>
					<thead>
						<tr>
							<th>No</th>
							<th>Nama</th>
							<th>Harga total</th>
							<th>Berat total</th>
							<th>Harga per kg</th>
							<th>Aksi</th>
						</tr>
					</thead>
					<tbody>
						{buah.map((val, index) => {
							return (
								<tr>
									<td>{index + 1}</td>
									<td>{val.nama}</td>
									<td>{val.hargaTotal}</td>
									<td>{val.beratTotal / 1000} kg</td>
									<td>{val.hargaTotal / (val.beratTotal / 1000)}</td>
									<td>
										<button onClick={handleEdit} value={index}>
											Edit
										</button>
										<button onClick={handleDelete} value={index}>
											Delete
										</button>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
				<h1>Form Daftar Harga Buah</h1>
				<form onSubmit={handleSubmit} className="form">
					<table>
						<tr>
							<td>
								<label htmlFor="nama">Nama:</label>
							</td>
							<td>
								<input
									id="nama"
									name="nama"
									type="text"
									value={nama}
									onChange={handleName}
									required
								/>
							</td>
						</tr>
						<tr>
							<td>
								<label htmlFor="price">Harga total:</label>
							</td>
							<td>
								<input
									id="price"
									name="price"
									type="number"
									value={hargaTotal}
									onChange={handlePrice}
									required
								/>
							</td>
						</tr>
						<tr>
							<td>
								<label htmlFor="weight">Berat total (dalam gram):</label>
							</td>
							<td>
								<input
									id="weight"
									name="weight"
									type="number"
									value={beratTotal}
									onChange={handleWeight}
									min="2000"
								/>
							</td>
						</tr>
						<tr>
							<td></td>
							<td>
								<input type="submit" value="Submit" />
							</td>
						</tr>
					</table>
				</form>
			</div>
		</div>
	);
};

export default Tugas11;
