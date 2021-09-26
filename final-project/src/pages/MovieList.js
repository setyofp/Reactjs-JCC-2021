import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { MainContext } from "../context/MainContext";
import { Table, Space, Button, Image } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Input } from "antd";
import axios from "axios";
const { Search } = Input;

const MovieList = () => {
	let history = useHistory();
	const {
		movie,
		setMovie,
		setInputMovie,
		functions,
		fetchStatusMovie,
		setFetchStatusMovie,
		API_MOVIE,
	} = useContext(MainContext);
	const { fetchDataMovie, functionDeleteMovie, functionEditMovie } = functions;

	useEffect(() => {
		if (fetchStatusMovie === false) {
			fetchDataMovie();
			setFetchStatusMovie(true);
		}
	}, [fetchDataMovie, fetchStatusMovie, setFetchStatusMovie]);

	const handleDeleteMovie = (event) => {
		let ID_MOVIE = parseInt(event.target.value);

		functionDeleteMovie(ID_MOVIE);
	};

	const handleEditMovie = (event) => {
		let ID_MOVIE = parseInt(event.target.value);
		console.log(ID_MOVIE);
		history.push(`/movie-form/edit/${ID_MOVIE}`);
		functionEditMovie(ID_MOVIE);
	};

	const handleCreateMovie = () => {
		history.push("/movie-form");
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
	};

	const onSearch = (value) => {
		let fetchSearch = async () => {
			let result = await axios.get(`${API_MOVIE}`);
			let data = result.data;

			let filterResult = data.filter((e) => {
				return Object.values(e)
					.join(" ")
					.toLowerCase()
					.includes(value.toLowerCase());
			});

			setMovie(
				filterResult.map((e, index) => {
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

			console.log(filterResult);
		};

		fetchSearch();
	};

	const columns = [
		{
			title: "Title",
			dataIndex: "title",
			key: "title",
			sorter: {
				compare: (a, b) => a.name.localeCompare(b.name),
			},
		},
		{
			title: "Description",
			dataIndex: "description",
			key: "description",
			ellipsis: "true",
			sorter: {
				compare: (a, b) => a.name.localeCompare(b.name),
			},
		},
		{
			title: "Year",
			dataIndex: "year",
			key: "year",
			sorter: {
				compare: (a, b) => a.singlePlayer - b.singlePlayer,
			},
		},
		{
			title: "Duration",
			dataIndex: "duration",
			key: "duration",
			sorter: {
				compare: (a, b) => a.singlePlayer - b.singlePlayer,
			},
		},
		{
			title: "Genre",
			dataIndex: "genre",
			key: "genre",
			sorter: {
				compare: (a, b) => a.name.localeCompare(b.name),
			},
		},
		{
			title: "Rating",
			dataIndex: "rating",
			key: "rating",
			sorter: {
				compare: (a, b) => a.singlePlayer - b.singlePlayer,
			},
		},
		{
			title: "Review",
			dataIndex: "review",
			key: "review",
			ellipsis: "true",
			sorter: {
				compare: (a, b) => a.name.localeCompare(b.name),
			},
		},
		{
			title: "Image URL",
			dataIndex: "image_url",
			key: "image_url",
			render: (img) => <Image width={100} src={img} />,
		},

		{
			title: "Action",
			key: "action",
			render: (text, record) => (
				<>
					<Space size={10}>
						<Button
							value={record.id}
							style={{ background: "#FFB319", borderRadius: 4 }}
							type="primary"
							onClick={handleEditMovie}
						>
							<EditOutlined />
						</Button>
						<Button
							value={record.id}
							onClick={handleDeleteMovie}
							type="primary"
							danger
							style={{ right: 5, borderRadius: 4 }}
						>
							<DeleteOutlined />
						</Button>
					</Space>
				</>
			),
		},
	];

	return (
		<div className="table" style={{ marginTop: 80, padding: "0 40px" }}>
			<h1>List of Movies</h1>
			<Search
				placeholder="input search text"
				onSearch={onSearch}
				style={{ width: 400, display: "block", marginBottom: 8 }}
			/>
			<Button
				type="primary"
				onClick={handleCreateMovie}
				style={{ marginBottom: 8 }}
			>
				Tambah Data Movies
			</Button>
			<Table columns={columns} dataSource={movie} tableLayout="fixed" />,
		</div>
	);
};

export default MovieList;
