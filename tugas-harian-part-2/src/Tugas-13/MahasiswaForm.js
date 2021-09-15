import React, { useContext } from "react";
import axios from "axios";
import { MahasiswaContext } from "./MahasiswaContext";

const MahasiswaForm = () => {
	const { mahasiswa, setMahasiswa, input, setInput, currentId, setCurrentId } =
		useContext(MahasiswaContext);

	const handleChange = (event) => {
		setInput({ ...input, [event.target.name]: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		if (currentId === null) {
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

export default MahasiswaForm;
