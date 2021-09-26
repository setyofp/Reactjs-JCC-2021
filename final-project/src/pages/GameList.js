import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { MainContext } from "../context/MainContext";
import { Table, Space, Button, Image } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Input } from "antd";
import axios from "axios";
const { Search } = Input;

const GameList = () => {
	let history = useHistory();
	const {
		game,
		setGame,
		setInputGame,
		functions,
		fetchStatusGame,
		setFetchStatusGame,
		API_GAME,
	} = useContext(MainContext);
	const { fetchDataGame, functionDeleteGame, functionEditGame } = functions;

	useEffect(() => {
		if (fetchStatusGame === false) {
			fetchDataGame();
			setFetchStatusGame(true);
		}
	}, [fetchDataGame, fetchStatusGame, setFetchStatusGame]);

	const handleDeleteGame = (event) => {
		let ID_GAME = parseInt(event.target.value);

		functionDeleteGame(ID_GAME);
	};

	const handleEditGame = (event) => {
		let ID_GAME = parseInt(event.target.value);
		console.log(ID_GAME);
		history.push(`/game-form/edit/${ID_GAME}`);
		functionEditGame(ID_GAME);
	};

	const handleCreateGame = () => {
		history.push("/game-form");
		setInputGame({
			name: "",
			genre: "",
			singlePlayer: 0,
			multiplayer: 0,
			platform: "",
			release: "",
			image_url: "",
		});
	};

	const onSearch = (value) => {
		let fetchSearch = async () => {
			let result = await axios.get(`${API_GAME}`);
			let data = result.data;

			let filterResult = data.filter((e) => {
				return Object.values(e)
					.join(" ")
					.toLowerCase()
					.includes(value.toLowerCase());
			});

			setGame(
				filterResult.map((e, index) => {
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

			console.log(filterResult);
		};

		fetchSearch();
	};

	const columns = [
		{
			title: "Name",
			dataIndex: "name",
			key: "name",
			sorter: {
				compare: (a, b) => a.name.localeCompare(b.name),
				// multiple: 6,
			},
		},
		{
			title: "Genre",
			dataIndex: "genre",
			key: "genre",
			sorter: {
				compare: (a, b) => a.name.localeCompare(b.name),
				// multiple: 5,
			},
		},
		{
			title: "Single Player",
			dataIndex: "singlePlayer",
			key: "singlePlayer",
			sorter: {
				compare: (a, b) => a.singlePlayer - b.singlePlayer,
				// multiple: 4,
			},
		},
		{
			title: "Multi Player",
			dataIndex: "multiplayer",
			key: "multiplayer",
			sorter: {
				compare: (a, b) => a.singlePlayer - b.singlePlayer,
				// multiple: 3,
			},
		},
		{
			title: "Platform",
			dataIndex: "platform",
			key: "platform",
			sorter: {
				compare: (a, b) => a.platform.localeCompare(b.platform),
				// multiple: 2,
			},
		},
		{
			title: "Release",
			dataIndex: "release",
			key: "release",
			sorter: {
				compare: (a, b) => a.release.localeCompare(b.release),
				// multiple: 1,
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
							onClick={handleEditGame}
						>
							<EditOutlined onClick={handleEditGame} value={record.id} />
						</Button>
						<Button
							value={record.id}
							onClick={handleDeleteGame}
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

	function onChange(pagination, filters, sorter, extra) {
		console.log("params", pagination, filters, sorter, extra);
	}

	return (
		<div className="table" style={{ marginTop: 80, padding: "0 40px" }}>
			<h1>List of Game</h1>
			<Search
				placeholder="input search text"
				onSearch={onSearch}
				style={{ width: 400, display: "block", marginBottom: 8 }}
			/>
			<Button
				type="primary"
				onClick={handleCreateGame}
				style={{ marginBottom: 8 }}
			>
				Tambah Data Game
			</Button>
			<Table
				columns={columns}
				dataSource={game}
				tableLayout="fixed"
				onChange={onChange}
			/>
			,
		</div>
	);
};

export default GameList;
