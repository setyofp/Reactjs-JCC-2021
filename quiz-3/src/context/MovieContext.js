import axios from "axios";
import React, { createContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { message } from "antd";

export const MovieContext = createContext();
export const MovieProvider = (props) => {
	let history = useHistory();
	const [movies, setMovies] = useState([]);
	const [input, setInput] = useState({
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
	const [currentId, setCurrentId] = useState(-1);
	const [fetchStatus, setFetchStatus] = useState(false);

	const getPrice = (price) => {
		if (price === 0) {
			return `FREE`;
		} else {
			return price;
		}
	};

	const convSize = (size) => {
		if (size >= 1000) {
			return `${size / 1000}GB`;
		} else {
			return `${size}MB`;
		}
	};

	const fetchData = async () => {
		let result = await axios.get(
			`http://backendexample.sanbercloud.com/api/mobile-apps`
		);
		let data = result.data;
		console.log(data);
		setMovies(
			data.map((e, index) => {
				// let indexScore = getScore(e.score);
				return {
					no: index + 1,
					id: e.id,
					name: e.name,
					description: e.description,
					category: e.category,
					size: e.size,
					price: e.price,
					rating: e.rating,
					image_url: e.image_url,
					release_year: e.release_year,
					is_android_app: e.is_android_app,
					is_ios_app: e.is_ios_app,
					// indexScore: indexScore,
				};
			})
		);
	};

	const fetchById = async (ID_MOBILE_APPS) => {
		let res = await axios.get(
			`http://backendexample.sanbercloud.com/api/mobile-apps/${ID_MOBILE_APPS}`
		);
		let data = res.data;
		setInput({
			name: data.name,
			description: data.description,
			category: data.category,
			size: data.size,
			price: data.price,
			rating: data.rating,
			image_url: data.image_url,
			release_year: data.release_year,
			is_android_app: data.is_android_app,
			is_ios_app: data.is_ios_app,
		});
		setCurrentId(data.id);
	};

	// const getScore = (score) => {
	// 	if (score >= 80) {
	// 		return "A";
	// 	} else if (score >= 70 && score < 80) {
	// 		return "B";
	// 	} else if (score >= 60 && score < 70) {
	// 		return "C";
	// 	} else if (score >= 50 && score < 60) {
	// 		return "D";
	// 	} else {
	// 		return "E";
	// 	}
	// };

	const functionSubmit = () => {
		axios
			.post(`http://backendexample.sanbercloud.com/api/mobile-apps`, {
				name: input.name,
				description: input.description,
				category: input.category,
				size: input.size,
				price: input.price,
				rating: input.rating,
				image_url: input.image_url,
				release_year: input.release_year,
				is_android_app: input.is_android_app,
				is_ios_app: input.is_ios_app,
			})
			.then((res) => {
				let data = res.data;
				setMovies([
					...movies,
					{
						id: data.id,
						name: data.name,
						description: data.description,
						category: data.category,
						size: data.size,
						price: data.price,
						rating: data.rating,
						image_url: data.image_url,
						release_year: data.release_year,
						is_android_app: data.is_android_app,
						is_ios_app: data.is_ios_app,
					},
				]);
				message.success("Data berhasil ditambahkan");
			});
	};

	const functionUpdate = (currentId) => {
		axios
			.put(
				`http://backendexample.sanbercloud.com/api/mobile-apps/${currentId}`,
				{
					name: input.name,
					description: input.description,
					category: input.category,
					size: input.size,
					price: input.price,
					rating: input.rating,
					image_url: input.image_url,
					release_year: input.release_year,
					is_android_app: input.is_android_app,
					is_ios_app: input.is_ios_app,
				}
			)
			.then((res) => {
				let newDataMahasiswa = movies.find((e) => e.id === currentId);
				newDataMahasiswa.name = input.name;
				newDataMahasiswa.description = input.description;
				newDataMahasiswa.category = input.category;
				newDataMahasiswa.size = input.size;
				newDataMahasiswa.price = input.price;
				newDataMahasiswa.rating = input.rating;
				newDataMahasiswa.image_url = input.image_url;
				newDataMahasiswa.release_year = input.release_year;
				newDataMahasiswa.is_android_app = input.is_android_app;
				newDataMahasiswa.is_ios_app = input.is_ios_app;
				setMovies([...movies]);
				history.push("/mobile-list");
			});
	};

	const functionDelete = (ID_MOBILE_APPS) => {
		axios
			.delete(
				`http://backendexample.sanbercloud.com/api/mobile-apps/${ID_MOBILE_APPS}`
			)
			.then(() => {
				let newDataMahasiswa = movies.filter((res) => {
					return res.id !== ID_MOBILE_APPS;
				});
				setMovies(newDataMahasiswa);
			});
		message.success("Data berhasil dihapus");
	};

	const functionEdit = (ID_MOBILE_APPS) => {
		axios
			.get(
				`http://backendexample.sanbercloud.com/api/mobile-apps/${ID_MOBILE_APPS}`
			)
			.then((res) => {
				let data = res.data;
				console.log(data);
				setInput({
					id: data.id,
					name: data.name,
					description: data.description,
					category: data.category,
					size: data.size,
					price: data.price,
					rating: data.rating,
					image_url: data.image_url,
					release_year: data.release_year,
					is_android_app: data.is_android_app,
					is_ios_app: data.is_ios_app,
				});
				setCurrentId(data.id);
			});
	};

	const functions = {
		fetchData,
		getPrice,
		functionSubmit,
		functionUpdate,
		functionDelete,
		functionEdit,
		fetchById,
		convSize,
	};

	return (
		<MovieContext.Provider
			value={{
				movies,
				setMovies,
				input,
				setInput,
				currentId,
				setCurrentId,
				functions,
				fetchStatus,
				setFetchStatus,
			}}
		>
			{props.children}
		</MovieContext.Provider>
	);
};
