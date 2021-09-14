import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

const Tugas12 = () => {
	const [mahasiswa, setMahasiswa] = useState([]);
	const [name, setName] = useState("");
	const [course, setCourse] = useState("");
	const [score, setScore] = useState(null);
	const [currentId, setCurrentId] = useState(null);

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

	const handleName = (event) => {
		let inputValue = event.target.value;
		setName(inputValue);
	};

	const handleCourse = (event) => {
		let inputValue = event.target.value;
		setCourse(inputValue);
	};

	const handleScore = (event) => {
		let inputValue = event.target.value;
		setScore(inputValue);
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		if (currentId === null) {
			// untuk create data baru
			axios
				.post(`http://backendexample.sanbercloud.com/api/student-scores`, {
					name: name,
					course: course,
					score: score,
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
					{ name: name, course: course, score: score }
				)
				.then(() => {
					let singlePeserta = mahasiswa.find((el) => el.id === currentId);
					singlePeserta.name = name;
					singlePeserta.course = course;
					singlePeserta.score = score;
					setMahasiswa([...mahasiswa]);
				});
		}
		setName("");
		setCourse("");
		setScore(0);
		setCurrentId(null);
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
									value={name}
									onChange={handleName}
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
									value={course}
									onChange={handleCourse}
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
									value={score}
									onChange={handleScore}
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
