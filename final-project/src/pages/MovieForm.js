import { Button, Input } from "antd";
import React, { useContext, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { MainContext } from "../context/MainContext";

const MovieForm = () => {
	const {
		inputMovie,
		setInputMovie,
		currentIdMovie,
		setCurrentIdMovie,
		functions,
	} = useContext(MainContext);
	const { functionSubmitMovie, functionUpdateMovie, fetchByIdMovie } =
		functions;
	let { Value } = useParams();
	const { TextArea } = Input;
	let history = useHistory();

	useEffect(() => {
		if (Value !== undefined) {
			fetchByIdMovie(Value);
		}
	}, []);

	const handleChange = (event) => {
		let typeOfValue = event.target.value;
		let name = event.target.name;

		setInputMovie({ ...inputMovie, [name]: typeOfValue });
		console.log(inputMovie);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(inputMovie);

		if (currentIdMovie === -1) {
			functionSubmitMovie();
		} else {
			functionUpdateMovie(currentIdMovie);
		}

		setInputMovie({
			title: "",
			description: "",
			year: 0,
			duration: 0,
			genre: "",
			rating: 0,
			review: "",
			image_url: "",
		});
		setCurrentIdMovie(-1);
		history.push("/movie-list");
	};

	return (
		<div className="form">
			<h1>Form Movie</h1>
			<Button type="primary" style={{ textAlign: "right" }}>
				<Link to="/movie-list">Back to List</Link>
			</Button>
			<form onSubmit={handleSubmit}>
				<p>
					<label htmlFor="title">Title:</label>
				</p>
				<Input
					onChange={handleChange}
					value={inputMovie.title}
					type="text"
					name="title"
					id="title"
					required="required"
				/>
				<p>
					<label htmlFor="description">Description:</label>
				</p>

				<TextArea
					onChange={handleChange}
					value={inputMovie.description}
					type="text"
					name="description"
					id="description"
					rows="10"
					required="required"
				/>

				<p>
					<label htmlFor="year">Year:</label>
				</p>
				<Input
					onChange={handleChange}
					value={inputMovie.year}
					type="number"
					name="year"
					id="year"
					min="1980"
					max="2021"
					required="required"
				/>

				<p>
					<label htmlFor="duration">Duration:</label>
				</p>
				<p>
					<Input
						onChange={handleChange}
						value={inputMovie.duration}
						type="number"
						name="duration"
						id="duration"
						required="required"
					/>
				</p>

				<p>
					<label htmlFor="genre">Genre:</label>
				</p>
				<Input
					onChange={handleChange}
					value={inputMovie.genre}
					type="text"
					name="genre"
					id="genre"
					required="required"
				/>

				<p>
					<label htmlFor="rating">Rating:</label>
				</p>
				<Input
					onChange={handleChange}
					value={inputMovie.rating}
					type="number"
					name="rating"
					id="rating"
					min="0"
					max="10"
					required="required"
				/>

				<p>
					<label htmlFor="review">Review:</label>
				</p>
				<TextArea
					onChange={handleChange}
					value={inputMovie.review}
					type="text"
					name="review"
					id="review"
					rows="10"
					required="required"
				/>

				<p>
					<label htmlFor="image_url">Image URL:</label>
				</p>
				<Input
					onChange={handleChange}
					value={inputMovie.image_url}
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

export default MovieForm;
