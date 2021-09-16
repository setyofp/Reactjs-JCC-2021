import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { DaftarMahasiswaContext } from "./daftarMahasiswaContext";
const DaftarMahasiswaList = () => {
	const { dataMahasiswa, functions } = useContext(DaftarMahasiswaContext);

	const { fetchData, functionDelete, functionEdit } = functions;

	useEffect(() => {
		fetchData();
	}, []);

	const handleDelete = (event) => {
		let idMahasiswa = parseInt(event.target.value);

		functionDelete(idMahasiswa);
	};

	const handleEdit = (event) => {
		let idMahasiswa = parseInt(event.target.value);

		functionEdit(idMahasiswa);
	};

	return (
		<div className="fruit">
			<div className="fruit-table">
				<h1>Daftar Nilai Mahasiswa</h1>

				<button className="to-form">
					<Link to="/tugas14/create">Buat Data Nilai Mahasiswa Baru</Link>
				</button>
				<table>
					<thead>
						<tr>
							<th>No</th>
							<th>Nama</th>
							<th>Mata Kuliah</th>
							<th>Nilai</th>
							<th>Indeks Nilai</th>
							<th>Aksi</th>
						</tr>
					</thead>
					<tbody>
						{dataMahasiswa.map((val, index) => {
							let indeks;
							if (val.score >= 80) {
								indeks = "A";
							} else if (val.score >= 70 && val.score < 80) {
								indeks = "B";
							} else if (val.score >= 60 && val.score < 70) {
								indeks = "C";
							} else if (val.score >= 50 && val.score < 60) {
								indeks = "D";
							} else if (val.score < 50) {
								indeks = "E";
							} else {
								indeks = "not valid";
							}

							return (
								<tr key={index}>
									<td>{index + 1}</td>
									<td>{val.name}</td>
									<td>{val.course}</td>
									<td>{val.score}</td>
									<td>{indeks}</td>
									<td>
										<button onClick={handleEdit} value={val.id}>
											Edit
										</button>
										<button onClick={handleDelete} value={val.id}>
											Delete
										</button>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default DaftarMahasiswaList;
