import React, { useContext, useEffect } from "react";
import List from "../components/List";
import { MovieContext } from "../context/MovieContext";

const Home = () => {
	const {
		movies,
		setMovies,
		input,
		setInput,
		currentId,
		setCurrentId,
		functions,
		fetchStatus,
		setFetchStatus,
	} = useContext(MovieContext);

	const { fetchData, getScore, functionDelete, functionEdit } = functions;

	useEffect(() => {
		if (fetchStatus === false) {
			fetchData();
			setFetchStatus(true);
		}
	}, [fetchData, fetchStatus, setFetchStatus]);

	return (
		<>
			<List />
		</>
	);
};

export default Home;
