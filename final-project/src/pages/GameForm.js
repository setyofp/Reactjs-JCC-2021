import { Button, Input } from "antd";
import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { MainContext } from "../context/MainContext";

const GameForm = () => {
	const {
		inputGame,
		setInputGame,
		currentIdGame,
		setCurrentIdGame,
		functions,
		API_GAME,
	} = useContext(MainContext);
	const { functionSubmitGame, functionUpdateGame, fetchByIdGame } = functions;
	let { Value } = useParams();
	let history = useHistory();

	useEffect(() => {
		if (Value !== undefined) {
			fetchByIdGame(Value);
		}
	}, []);

	const handleChange = (event) => {
		let typeOfValue = event.target.value;
		let name = event.target.name;

		setInputGame({ ...inputGame, [name]: typeOfValue });
	};

	const handleChecked = (event) => {
		let isChecked = event.target.checked;
		let typeOfValue = event.target.value;
		let name = event.target.name;
		if (isChecked === true) {
			typeOfValue = 1;
		} else {
			typeOfValue = 0;
		}
		console.log(name);
		console.log(typeOfValue);
		console.log(isChecked);
		setInputGame({ ...inputGame, [name]: typeOfValue });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(inputGame);

		if (currentIdGame === -1) {
			functionSubmitGame();
		} else {
			functionUpdateGame(currentIdGame);
		}

		setInputGame({
			name: "",
			genre: "",
			singlePlayer: 0,
			multiplayer: 0,
			platform: "",
			release: "",
			image_url: "",
		});
		setCurrentIdGame(-1);
		history.push("/game-list");
	};

	return (
		<div className="form">
			<h1>Form Game</h1>
			<Button type="primary" style={{ textAlign: "right" }}>
				<Link to="/game-list">Back to List</Link>
			</Button>
			<form onSubmit={handleSubmit}>
				<p>
					<label htmlFor="name">Name:</label>
				</p>
				<Input
					onChange={handleChange}
					value={inputGame.name}
					type="text"
					name="name"
					id="name"
					required="required"
				/>
				<p>
					<label htmlFor="genre">Genre:</label>
				</p>
				<Input
					onChange={handleChange}
					value={inputGame.genre}
					type="text"
					name="genre"
					id="genre"
					required="required"
				/>

				<p>Platform</p>

				<p>
					<label htmlFor="singlePlayer">Single Player:</label>
					<input
						onChange={handleChecked}
						value={inputGame.singlePlayer}
						type="checkbox"
						defaultChecked="true"
						name="singlePlayer"
						id="singlePlayer"
						required="required"
					/>
				</p>

				<p>
					<label htmlFor="multiplayer">Multi Player:</label>
					<input
						onChange={handleChecked}
						value={inputGame.multiplayer}
						type="checkbox"
						defaultChecked="true"
						name="multiplayer"
						id="multiplayer"
					/>
				</p>

				<p>
					<label htmlFor="platform">Platform:</label>
				</p>
				<Input
					onChange={handleChange}
					value={inputGame.platform}
					type="text"
					name="platform"
					id="platform"
					required="required"
				/>

				<p>
					<label htmlFor="release">Release:</label>
				</p>
				<p>
					<Input
						onChange={handleChange}
						value={inputGame.release}
						type="text"
						name="release"
						id="release"
						min="2000"
						max="2021"
						required="required"
					/>
				</p>

				<p>
					<label htmlFor="image_url">Image URL:</label>
				</p>
				<Input
					onChange={handleChange}
					value={inputGame.image_url}
					type="text"
					name="image_url"
					id="image_url"
					required="required"
				/>

				<p>
					<Input type="submit" value="Submit" />
				</p>
			</form>
		</div>
	);
};

export default GameForm;
