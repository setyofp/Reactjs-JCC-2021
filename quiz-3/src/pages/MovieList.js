import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { MovieContext } from "../context/MovieContext";
import { Table, Space, Button } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

const MovieList = () => {
	let history = useHistory();
	const { movies, setInput, functions, fetchStatus, setFetchStatus } =
		useContext(MovieContext);
	const { fetchData, functionDelete, functionEdit } = functions;

	useEffect(() => {
		if (fetchStatus === false) {
			fetchData();
			setFetchStatus(true);
		}
	}, [fetchData, fetchStatus, setFetchStatus]);

	const handleDelete = (event) => {
		let ID_MOBILE_APPS = parseInt(event.target.value);

		functionDelete(ID_MOBILE_APPS);
	};

	const handleEdit = (event) => {
		let ID_MOBILE_APPS = parseInt(event.target.value);
		console.log(ID_MOBILE_APPS);
		history.push(`/mobile-form/edit/${ID_MOBILE_APPS}`);
		functionEdit(ID_MOBILE_APPS);
	};

	const handleCreate = () => {
		history.push("/mobile-form");
		setInput({
			nama: "",
			course: "",
			score: 0,
		});
	};

	const columns = [
		{
			title: "Name",
			dataIndex: "name",
			key: "name",
		},
		{
			title: "Description",
			dataIndex: "description",
			key: "description",
		},
		{
			title: "Category",
			dataIndex: "category",
			key: "category",
		},
		{
			title: "Size",
			dataIndex: "size",
			key: "size",
		},
		{
			title: "Price",
			dataIndex: "price",
			key: "price",
		},
		{
			title: "Rating",
			dataIndex: "rating",
			key: "rating",
		},
		{
			title: "Image URL",
			dataIndex: "image_url",
			key: "image_url",
		},
		{
			title: "Release Year",
			dataIndex: "release_year",
			key: "release_year",
		},
		{
			title: "Platform",

			key: "platform",
			render: (text, record) => (
				<>
					<span>{record.is_android_app === 1 ? "Android" : ""}</span>
					<br />
					<span>{record.is_ios_app === 1 ? "iPhone" : ""}</span>
				</>
			),
		},
		{
			title: "Action",
			key: "action",
			render: (text, record) => (
				<>
					<Space size={10}>
						<Button
							value={record.id}
							style={{ background: "#FFB319" }}
							type="primary"
							onClick={handleEdit}
						>
							<EditOutlined />
						</Button>
						<Button
							value={record.id}
							onClick={handleDelete}
							type="primary"
							danger
							style={{ right: 5 }}
						>
							<DeleteOutlined />
						</Button>
					</Space>
				</>
			),
		},
	];

	return (
		<div className="table">
			<h1>List of Movies</h1>
			<Button type="primary" onClick={handleCreate}>
				Tambah Data Movies
			</Button>
			<Table columns={columns} dataSource={movies} tableLayout="fixed" />,
		</div>
	);
};

export default MovieList;
