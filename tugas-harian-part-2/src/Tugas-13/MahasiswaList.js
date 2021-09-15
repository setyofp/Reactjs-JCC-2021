import React, { useContext, useEffect } from "react";
import axios from "axios";
import { MahasiswaContext } from "./MahasiswaContext";

const MahasiswaList = () => {
	const { mahasiswa, setMahasiswa, setInput, setCurrentId } =
		useContext(MahasiswaContext);

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios.get(
				`http://backendexample.sanbercloud.com/api/student-scores`
			);

			setMahasiswa(
				result.data.map((e) => {
					return { id: e.id, name: e.name, course: e.course, score: e.score };
				})
			);
		};

		fetchData();
	}, []);

	const handleEdit = (event) => {
		let ID_STUDENT = event.target.value;
		axios
			.get(
				`http://backendexample.sanbercloud.com/api/student-scores/${ID_STUDENT}`
			)
			.then((res) => {
				let data = res.data;
				setInput({
					name: data.name,
					course: data.course,
					score: data.score,
					id: data.id,
				});
				setCurrentId(data.id);
			});
	};

	const handleDelete = (event) => {
		let ID_STUDENT = parseInt(event.target.value);
		axios
			.delete(
				`http://backendexample.sanbercloud.com/api/student-scores/${ID_STUDENT}`
			)
			.then(() => {
				let newMahasiswa = mahasiswa.filter((el) => {
					return el.id !== ID_STUDENT;
				});
				setMahasiswa(newMahasiswa);
			});
	};

	return (
		<div className="fruit">
			<div className="fruit-table">
				<h1>Daftar Nilai Mahasiswa</h1>
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
						{mahasiswa.map((val, index) => {
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

export default MahasiswaList;
