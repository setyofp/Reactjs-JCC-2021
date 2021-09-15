import React, { useState, createContext } from "react";

export const MahasiswaContext = createContext();

export const MahasiswaProvider = (props) => {
	const [mahasiswa, setMahasiswa] = useState([]);
	const [input, setInput] = useState({
		name: "",
		course: "",
		score: 0,
	});
	const [currentId, setCurrentId] = useState(null);

	return (
		<MahasiswaContext.Provider
			value={{
				mahasiswa,
				setMahasiswa,
				input,
				setInput,
				currentId,
				setCurrentId,
			}}
		>
			{props.children}
		</MahasiswaContext.Provider>
	);
};
