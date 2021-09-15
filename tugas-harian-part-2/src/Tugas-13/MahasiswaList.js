import React, { useContext, useEffect } from "react";
import axios from "axios";
import { MahasiswaContext } from "./MahasiswaContext";

const MahasiswaList = () => {
	const {
		mahasiswa,
		setMahasiswa,
		setName,
		setCourse,
		setScore,
		setCurrentId,
	} = useContext(MahasiswaContext);

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios.get(
				`http://backendexample.sanbercloud.com/api/student-scores`
			);

			setMahasiswa(
				result.data.map((x) => {
					return { id: x.id, name: x.name, course: x.course, score: x.score };
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
				setName(data.name);
				setCourse(data.course);
				setScore(data.score);
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
				let newPesertaLomba = mahasiswa.filter((el) => {
					return el.id !== ID_STUDENT;
				});
				setMahasiswa(newPesertaLomba);
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
							const { id, name, course, score } = val;
							let indeks;
							if (score >= 80) {
								indeks = "A";
							} else if (score >= 70 && score < 80) {
								indeks = "B";
							} else if (score >= 60 && score < 70) {
								indeks = "C";
							} else if (score >= 50 && score < 60) {
								indeks = "D";
							} else if (score < 50) {
								indeks = "E";
							} else {
								indeks = "not valid";
							}
							return (
								<tr key={index}>
									<td>{index + 1}</td>
									<td>{name}</td>
									<td>{course}</td>
									<td>{score}</td>
									<td>{indeks}</td>
									<td>
										<button onClick={handleEdit} value={id}>
											Edit
										</button>
										<button onClick={handleDelete} value={id}>
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
