import { Button, Input } from "antd";
import React, { useContext, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { MovieContext } from "../context/MovieContext";

const MovieForm = () => {
	const { input, setInput, currentId, setCurrentId, functions } =
		useContext(MovieContext);
	const { functionSubmit, functionUpdate, fetchById } = functions;
	let { Value } = useParams();
	const { TextArea } = Input;
	let history = useHistory();

	useEffect(() => {
		if (Value !== undefined) {
			fetchById(Value);
		}
	}, []);

	const handleChange = (event) => {
		let typeOfValue = event.target.value;
		let name = event.target.name;

		setInput({ ...input, [name]: typeOfValue });
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
		console.log(typeOfValue);
		console.log(name);
		setInput({ ...input, [name]: typeOfValue });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(input);

		if (currentId === -1) {
			functionSubmit();
		} else {
			functionUpdate(currentId);
		}

		setInput({
			name: "",
			description: "",
			category: "",
			size: 0,
			price: 0,
			rating: 0,
			image_url: "",
			release_year: 0,
			is_android_app: 0,
			is_ios_app: 0,
		});
		setCurrentId(-1);
		history.push("/mobile-list");
	};

	return (
		<div className="form">
			<h1>Form Movie</h1>
			<Button type="primary" style={{ textAlign: "right" }}>
				<Link to="/mobile-list">Back to List</Link>
			</Button>
			<form onSubmit={handleSubmit}>
				<p>
					<label htmlFor="name">Name:</label>
				</p>
				<Input
					onChange={handleChange}
					value={input.name}
					type="text"
					name="name"
					id="name"
					required="required"
				/>
				<p>
					<label htmlFor="category">Category:</label>
				</p>

				<Input
					onChange={handleChange}
					value={input.category}
					type="text"
					name="category"
					id="category"
					required="required"
				/>

				<p>
					<label htmlFor="description">Description:</label>
				</p>
				<TextArea
					onChange={handleChange}
					value={input.description}
					type="text"
					name="description"
					id="description"
					rows="10"
					required="required"
				/>

				<p>
					<label htmlFor="release_year">Year:</label>
				</p>
				<p>
					<Input
						onChange={handleChange}
						value={input.release_year}
						type="number"
						name="release_year"
						id="release_year"
						defaultValue="2007"
						min="2007"
						max="2021"
						required="required"
					/>
				</p>

				<p>
					<label htmlFor="size">Size(MB):</label>
				</p>
				<Input
					onChange={handleChange}
					value={input.size}
					type="number"
					name="size"
					id="size"
					required="required"
				/>

				<p>
					<label htmlFor="price">Price:</label>
				</p>
				<Input
					onChange={handleChange}
					value={input.price}
					type="number"
					name="price"
					id="price"
					required="required"
				/>

				<p>
					<label htmlFor="rating">Rating:</label>
				</p>
				<Input
					onChange={handleChange}
					value={input.rating}
					type="number"
					name="rating"
					id="rating"
					min="0"
					max="5"
					required="required"
				/>

				<p>
					<label htmlFor="image_url">Img URL:</label>
				</p>
				<Input
					onChange={handleChange}
					value={input.image_url}
					type="text"
					name="image_url"
					id="image_url"
					required="required"
				/>

				<p>Platform</p>

				<p>
					<label htmlFor="is_android_app">Android:</label>
					<input
						onChange={handleChecked}
						value={input.is_android_app}
						type="checkbox"
						defaultChecked="true"
						name="is_android_app"
						id="is_android_app"
						required="required"
					/>
				</p>

				<p>
					<label htmlFor="is_ios_app">iOS:</label>
					<input
						onChange={handleChecked}
						value={input.is_ios_app}
						type="checkbox"
						defaultChecked="true"
						name="is_ios_app"
						id="is_ios_app"
					/>
				</p>

				<p>
					<Input type="submit" value="Submit" />
				</p>
			</form>
		</div>
	);
};

export default MovieForm;
