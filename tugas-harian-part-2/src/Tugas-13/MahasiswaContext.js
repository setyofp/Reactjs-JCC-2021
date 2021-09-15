import React, { useState, createContext } from "react";

export const MahasiswaContext = createContext();

export const MahasiswaProvider = (props) => {
	const [mahasiswa, setMahasiswa] = useState([]);
	const [name, setName] = useState("");
	const [course, setCourse] = useState("");
	const [score, setScore] = useState(null);
	const [currentId, setCurrentId] = useState(null);

	return (
		<MahasiswaContext.Provider
			value={{
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
			}}
		>
			{props.children}
		</MahasiswaContext.Provider>
	);
};
