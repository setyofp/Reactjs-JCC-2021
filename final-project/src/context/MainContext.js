import axios from "axios";
import React, { createContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { message } from "antd";
import Cookies from "js-cookie";

const MainContext = createContext();
const MainProvider = (props) => {
	let history = useHistory();
	const [movie, setMovie] = useState([]);
	const [game, setGame] = useState([]);
	const token = Cookies.get("token");

	const [inputMovie, setInputMovie] = useState({
		title: "",
		description: "",
		year: 0,
		duration: 0,
		genre: "",
		rating: 0,
		review: "",
		image_url: "",
	});
	const [inputGame, setInputGame] = useState({
		name: "",
		genre: "",
		singlePlayer: 0,
		multiplayer: 0,
		platform: "",
		release: "",
		image_url: "",
	});

	const [currentIdMovie, setCurrentIdMovie] = useState(-1);
	const [currentIdGame, setCurrentIdGame] = useState(-1);

	const [fetchStatusMovie, setFetchStatusMovie] = useState(false);
	const [fetchStatusGame, setFetchStatusGame] = useState(false);

	const API_MOVIE = `https://backendexample.sanbersy.com/api/data-movie`;
	const API_GAME = `https://backendexample.sanbersy.com/api/data-game`;

	const fetchDataMovie = async () => {
		let result = await axios.get(`${API_MOVIE}`);
		let data = result.data;
		console.log(data);
		setMovie(
			data.map((e, index) => {
				return {
					no: index + 1,
					id: e.id,
					title: e.title,
					description: e.description,
					year: e.year,
					duration: e.duration,
					genre: e.genre,
					rating: e.rating,
					review: e.review,
					image_url: e.image_url,
				};
			})
		);
	};

	const fetchDataGame = async () => {
		let result = await axios.get(API_GAME);
		let data = result.data;
		console.log(data);
		setGame(
			data.map((e, index) => {
				return {
					no: index + 1,
					id: e.id,
					name: e.name,
					genre: e.genre,
					singlePlayer: e.singlePlayer,
					multiplayer: e.multiplayer,
					platform: e.platform,
					release: e.release,
					image_url: e.image_url,
				};
			})
		);
	};

	const fetchByIdMovie = async (ID_MOVIE) => {
		let res = await axios.get(`${API_MOVIE}/${ID_MOVIE}`);
		let data = res.data;
		setInputMovie({
			id: data.id,
			title: data.title,
			description: data.description,
			year: data.year,
			duration: data.duration,
			genre: data.genre,
			rating: data.rating,
			review: data.review,
			image_url: data.image_url,
		});
		setCurrentIdMovie(data.id);
	};

	const fetchByIdGame = async (ID_GAME) => {
		let res = await axios.get(`${API_GAME}/${ID_GAME}`);
		let data = res.data;
		setInputGame({
			id: data.id,
			name: data.name,
			genre: data.genre,
			singlePlayer: data.singlePlayer,
			multiplayer: data.multiplayer,
			platform: data.platform,
			release: data.release,
			image_url: data.image_url,
		});
		setCurrentIdGame(data.id);
	};

	const functionSubmitMovie = () => {
		axios
			.post(
				`${API_MOVIE}`,
				{
					title: inputMovie.title,
					description: inputMovie.description,
					year: inputMovie.year,
					duration: inputMovie.duration,
					genre: inputMovie.genre,
					rating: inputMovie.rating,
					review: inputMovie.review,
					image_url: inputMovie.image_url,
				},
				{ headers: { Authorization: "Bearer " + token } }
			)
			.then((res) => {
				let data = res.data;
				setMovie([
					...movie,
					{
						id: data.id,
						title: data.title,
						description: data.description,
						year: data.year,
						duration: data.duration,
						genre: data.genre,
						rating: data.rating,
						review: data.review,
						image_url: data.image_url,
					},
				]);
				history.push("/movie-list");
			});
	};
	const functionSubmitGame = () => {
		axios
			.post(
				`${API_GAME}`,
				{
					name: inputGame.name,
					genre: inputGame.genre,
					singlePlayer: inputGame.singlePlayer,
					multiplayer: inputGame.multiplayer,
					platform: inputGame.platform,
					release: inputGame.release,
					image_url: inputGame.image_url,
				},
				{ headers: { Authorization: "Bearer " + token } }
			)
			.then((res) => {
				let data = res.data;
				setGame([
					...game,
					{
						id: data.id,
						name: data.name,
						genre: data.genre,
						singlePlayer: data.singlePlayer,
						multiplayer: data.multiplayer,
						platform: data.platform,
						release: data.release,
						image_url: data.image_url,
					},
				]);
				history.push("/game-list");
			});
	};

	const functionUpdateMovie = (currentIdMovie) => {
		axios
			.put(
				`${API_MOVIE}/${currentIdMovie}`,
				{
					title: inputMovie.title,
					description: inputMovie.description,
					year: inputMovie.year,
					duration: inputMovie.duration,
					genre: inputMovie.genre,
					rating: inputMovie.rating,
					review: inputMovie.review,
					image_url: inputMovie.image_url,
				},
				{ headers: { Authorization: "Bearer " + token } }
			)
			.then((res) => {
				let newDataMovie = movie.find((e) => e.id === currentIdMovie);
				newDataMovie.title = inputMovie.title;
				newDataMovie.description = inputMovie.description;
				newDataMovie.year = inputMovie.year;
				newDataMovie.duration = inputMovie.duration;
				newDataMovie.genre = inputMovie.genre;
				newDataMovie.rating = inputMovie.rating;
				newDataMovie.review = inputMovie.review;
				newDataMovie.image_url = inputMovie.image_url;
				setMovie([...movie]);
				history.push("/movie-list");
			});
	};
	const functionUpdateGame = (currentIdGame) => {
		axios
			.put(
				`${API_GAME}/${currentIdGame}`,
				{
					name: inputGame.name,
					genre: inputGame.genre,
					singlePlayer: inputGame.singlePlayer,
					multiplayer: inputGame.multiplayer,
					platform: inputGame.platform,
					release: inputGame.release,
					image_url: inputGame.image_url,
				},
				{ headers: { Authorization: "Bearer " + token } }
			)
			.then((res) => {
				let newDataGame = game.find((e) => e.id === currentIdGame);
				newDataGame.name = inputGame.name;
				newDataGame.genre = inputGame.genre;
				newDataGame.singlePlayer = inputGame.singlePlayer;
				newDataGame.multiplayer = inputGame.multiplayer;
				newDataGame.platform = inputGame.platform;
				newDataGame.release = inputGame.release;
				newDataGame.image_url = inputGame.image_url;
				setMovie([...game]);
				history.push("/game-list");
			});
	};

	const functionDeleteMovie = (ID_MOVIE) => {
		axios
			.delete(`${API_MOVIE}/${ID_MOVIE}`, {
				headers: { Authorization: "Bearer " + token },
			})
			.then(() => {
				let newDataMovie = movie.filter((res) => {
					return res.id !== ID_MOVIE;
				});
				setMovie(newDataMovie);
			});
		message.success("Data berhasil dihapus");
	};
	const functionDeleteGame = (ID_GAME) => {
		axios
			.delete(`${API_GAME}/${ID_GAME}`, {
				headers: { Authorization: "Bearer " + token },
			})
			.then(() => {
				let newDataGame = game.filter((res) => {
					return res.id !== ID_GAME;
				});
				setGame(newDataGame);
			});
		message.success("Data berhasil dihapus");
	};

	const functionEditMovie = (ID_MOBILE_APPS) => {
		axios.get(`${API_MOVIE}/${ID_MOBILE_APPS}`).then((res) => {
			let data = res.data;
			console.log(data);
			setInputMovie({
				id: data.id,
				title: data.title,
				description: data.description,
				year: data.year,
				duration: data.duration,
				genre: data.genre,
				rating: data.rating,
				review: data.review,
				image_url: data.image_url,
			});
			setCurrentIdMovie(data.id);
		});
	};
	const functionEditGame = (ID_GAME) => {
		axios.get(`${API_GAME}/${ID_GAME}`).then((res) => {
			let data = res.data;
			console.log(data);
			setInputMovie({
				id: data.id,
				name: data.name,
				genre: data.genre,
				singlePlayer: data.singlePlayer,
				multiplayer: data.multiplayer,
				platform: data.platform,
				release: data.release,
				image_url: data.image_url,
			});
			setCurrentIdGame(data.id);
		});
	};

	const functions = {
		fetchDataMovie,
		fetchDataGame,
		functionSubmitMovie,
		functionSubmitGame,
		functionUpdateMovie,
		functionUpdateGame,
		functionDeleteMovie,
		functionDeleteGame,
		functionEditMovie,
		functionEditGame,
		fetchByIdMovie,
		fetchByIdGame,
	};

	return (
		<MainContext.Provider
			value={{
				movie,
				setMovie,
				game,
				setGame,
				inputMovie,
				setInputMovie,
				inputGame,
				setInputGame,
				currentIdMovie,
				setCurrentIdMovie,
				currentIdGame,
				setCurrentIdGame,
				functions,
				fetchStatusMovie,
				setFetchStatusMovie,
				fetchStatusGame,
				setFetchStatusGame,
				API_GAME,
				API_MOVIE,
			}}
		>
			{props.children}
		</MainContext.Provider>
	);
};

export { MainContext, MainProvider };
