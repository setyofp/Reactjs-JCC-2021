import axios from "axios";
import React, { createContext } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export const DaftarMahasiswaContext = createContext();

export const DaftarMahasiswaProvider = (props) => {
	let history = useHistory();
	const [dataMahasiswa, setDataMahasiswa] = useState([]);
	const [input, setInput] = useState({
		name: "",
		course: "",
		score: 0,
	});
	const [currentId, setCurrentId] = useState(-1);

	const fetchData = async () => {
		let result = await axios.get(
			`http://backendexample.sanbercloud.com/api/student-scores`
		);
		let data = result.data;
		console.log(data);
		setDataMahasiswa(
			data.map((e) => {
				return {
					id: e.id,
					name: e.name,
					score: e.score,
					course: e.course,
				};
			})
		);
	};

	const functionDelete = (idMahasiswa) => {
		axios
			.delete(
				`http://backendexample.sanbercloud.com/api/student-scores/${idMahasiswa}`
			)
			.then(() => {
				let newDataMahasiswa = dataMahasiswa.filter((res) => {
					return res.id !== idMahasiswa;
				});
				setDataMahasiswa(newDataMahasiswa);
			});
	};

	const functionSubmit = (param) => {
		axios
			.post(`http://backendexample.sanbercloud.com/api/student-scores`, {
				name: input.name,
				course: input.course,
				score: input.score,
			})
			.then((res) => {
				let data = res.data;
				setDataMahasiswa([
					...dataMahasiswa,
					{
						id: data.id,
						name: data.name,
						score: data.score,
						course: data.course,
					},
				]);
			});
	};

	const functionUpdate = (param) => {
		axios
			.put(
				`http://backendexample.sanbercloud.com/api/student-scores/${currentId}`,
				{
					name: input.name,
					course: input.course,
					score: input.score,
				}
			)
			.then((res) => {
				let newDataMahasiswa = dataMahasiswa.find((e) => e.id === currentId);
				newDataMahasiswa.name = input.name;
				newDataMahasiswa.course = input.course;
				newDataMahasiswa.score = input.score;
				setDataMahasiswa([...dataMahasiswa]);
			});
	};

	const functionEdit = (idMahasiswa) => {
		axios
			.get(
				`http://backendexample.sanbercloud.com/api/student-scores/${idMahasiswa}`
			)
			.then((res) => {
				let data = res.data;

				setInput({
					id: data.id,
					name: data.name,
					course: data.course,
					score: data.score,
				});
				setCurrentId(data.id);
				history.push(`/tugas14/${idMahasiswa}/edit`);
			});
	};

	const functions = {
		fetchData,
		functionDelete,
		functionSubmit,
		functionUpdate,
		functionEdit,
	};

	return (
		<DaftarMahasiswaContext.Provider
			value={{
				dataMahasiswa,
				setDataMahasiswa,
				input,
				setInput,
				currentId,
				setCurrentId,
				functions,
			}}
		>
			{props.children}
		</DaftarMahasiswaContext.Provider>
	);
};
