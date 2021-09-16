import React, { useContext } from "react";
import { DaftarMahasiswaContext } from "./daftarMahasiswaContext";
import { Link, useHistory } from "react-router-dom";

const DaftarMahasiswaForm = () => {
	const { input, setInput, currentId, setCurrentId, functions } = useContext(
		DaftarMahasiswaContext
	);

	const { functionSubmit, functionUpdate } = functions;

	let history = useHistory();

	const handleChange = (event) => {
		let typeOfValue = event.target.value;
		let name = event.target.name;

		setInput({ ...input, [name]: typeOfValue });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(input);

		if (currentId === -1) {
			functionSubmit();
		} else {
			functionUpdate();
		}

		setInput({
			name: "",
			course: "",
			score: 0,
		});
		setCurrentId(-1);
		history.push(`/tugas14`);
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
					<button className="to-list">
						<Link to="/tugas14">Kembali Ke Tabel</Link>
					</button>
				</form>
			</div>
		</div>
	);
};

export default DaftarMahasiswaForm;
