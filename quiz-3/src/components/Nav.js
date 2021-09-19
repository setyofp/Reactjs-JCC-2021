import { Button, Input } from "antd";
import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { MovieContext } from "../context/MovieContext";
import logo from "../logo.png";

const Nav = () => {
	const [filterText, setFilterText] = useState("");

	let history = useHistory();

	const onSearching = (event) => {
		let input = filterText;
		console.log(input);
		history.push(`/search/${input}`);
	};

	return (
		<div className="topnav">
			<Link to="/">
				<img src={logo} alt="logo jabar coding camp" />
			</Link>
			<Link to="/">Home</Link>
			<Link to="/mobile-list">Movie List</Link>
			<Link to="/about">About</Link>
			<div className="search-bar">
				<Input
					type="text"
					id="search"
					placeholder="Cari film"
					value={filterText}
					onChange={(e) => setFilterText(e.target.value.toLocaleLowerCase())}
				/>
				<Input
					type="button"
					value="cari"
					style={{ width: 60, marginRight: 50 }}
					onClick={onSearching}
				/>
			</div>
		</div>
	);
};

export default Nav;
