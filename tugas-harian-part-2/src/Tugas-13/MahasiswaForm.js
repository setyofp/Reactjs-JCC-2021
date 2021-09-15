import React, { useContext } from "react";
import axios from "axios";
import { MahasiswaContext } from "./MahasiswaContext";

const MahasiswaForm = () => {
	const {
		mahasiswa,
		setMahasiswa,
		name,
		setName,
		course,
		setCourse,
		score,
		setScore,
		currentId,
		setCurrentId,
	} = useContext(MahasiswaContext);

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

export default MahasiswaForm;
