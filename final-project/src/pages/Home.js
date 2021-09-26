import React from "react";
import { Button, Layout } from "antd";
import MovieCard from "../components/MovieCard";
import GameCard from "../components/GameCard";
import { useHistory } from "react-router-dom";
const { Content } = Layout;

function Home() {
	let history = useHistory();

	return (
		<Content style={{ padding: "16px 50px", marginTop: 60 }}>
			<div
				className="header"
				style={{ display: "flex", justifyContent: "space-between" }}
			>
				<h1 className="heading">MOVIES</h1>
				<Button style={{ margin: 16 }} onClick={() => history.push("/movie")}>
					see more
				</Button>
			</div>
			<div className="movie-wrapper" style={{ width: "100%" }}>
				<MovieCard />
			</div>
			<div
				className="header"
				style={{ display: "flex", justifyContent: "space-between" }}
			>
				<h1 className="heading">GAMES</h1>
				<Button style={{ margin: 16 }} onClick={() => history.push("/game")}>
					see more
				</Button>
			</div>
			<div className="movie-wrapper" style={{ width: "100%" }}>
				<GameCard />
			</div>
		</Content>
	);
}

export default Home;
