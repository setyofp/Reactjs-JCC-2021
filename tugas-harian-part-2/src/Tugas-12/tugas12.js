import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

const Tugas12 = () => {
	const [mahasiswa, setMahasiswa] = useState([]);
	const [input, setInput] = useState({
		name: "",
		course: "",
		score: 0,
	});
	const [currentId, setCurrentId] = useState(-1);

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

	const handleChange = (event) => {
		setInput({ ...input, [event.target.name]: event.target.value });
	};

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

	const handleSubmit = (event) => {
		event.preventDefault();

		if (currentId === -1) {
			// untuk create data baru
			axios
				.post(`http://backendexample.sanbercloud.com/api/student-scores`, {
					name: input.name,
					course: input.course,
					score: input.score,
				})
				.then((res) => {
					let data = res.data;
					setMahasiswa([
						...mahasiswa,
						{
							id: data.id,
							name: data.name,
							course: data.course,
							score: data.score,
						},
					]);
				});
		} else {
			axios
				.put(
					`http://backendexample.sanbercloud.com/api/student-scores/${currentId}`,
					{ name: input.name, course: input.course, score: input.score }
				)
				.then(() => {
					let newMahasiswa = mahasiswa.find((e) => e.id === currentId);
					newMahasiswa.name = input.name;
					newMahasiswa.course = input.course;
					newMahasiswa.score = input.score;
					setMahasiswa([...mahasiswa]);
				});
		}
		setInput({
			name: "",
			course: "",
			score: 0,
		});
		setCurrentId(-1);
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
				<h1>Form Nilai Mahasiswa</h1>
				<form onSubmit={handleSubmit} className="form">
					<table>
						<tr>
							<td>
								<label htmlFor="name">Nama:</label>
							</td>
							<td>
								<input
									id="name"
									name="name"
									type="text"
									value={input.name}
									onChange={handleChange}
									required
								/>
							</td>
						</tr>
						<tr>
							<td>
								<label htmlFor="course">Mata Kuliah:</label>
							</td>
							<td>
								<input
									id="course"
									name="course"
									type="text"
									value={input.course}
									onChange={handleChange}
									required
								/>
							</td>
						</tr>
						<tr>
							<td>
								<label htmlFor="score">Nilai:</label>
							</td>
							<td>
								<input
									id="score"
									name="score"
									type="number"
									value={input.score}
									onChange={handleChange}
									min="0"
									max="100"
									required
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

export default Tugas12;
