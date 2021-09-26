import React, { useContext, useEffect } from "react";
import { MainContext } from "../context/MainContext";
import { Card } from "antd";
import { MobileOutlined, CalendarOutlined } from "@ant-design/icons";
import { useParams } from "react-router-dom";

function GameDetail() {
	const { game, functions, fetchStatusGame, setFetchStatusGame } =
		useContext(MainContext);
	const { fetchDataGame } = functions;
	let { ID_GAME } = useParams();

	useEffect(() => {
		if (fetchStatusGame === false) {
			fetchDataGame();
			setFetchStatusGame(true);
		}
	}, [fetchDataGame, fetchStatusGame, setFetchStatusGame]);

	return (
		<>
			{game
				.filter((mov) => mov.id === parseInt(ID_GAME))
				.map((val, index) => {
					return (
						<div className="game-detail">
							<div className="img-wrapper">
								<img src={val.image_url} alt="" />
							</div>
							<Card hoverable>
								<h1>{val.name}</h1>
								<div className="card-meta">
									<p>
										<CalendarOutlined />
										{val.release}
									</p>
									<p>
										<MobileOutlined />
										{val.platform}
									</p>
								</div>

								<p>
									<span>
										<b>Genre: </b>
									</span>
									{val.genre}
								</p>
								<p>
									<span>
										<b>Playing Mode: </b>
									</span>
									<br />
									<span>{val.singlePlayer === 1 ? "single player" : ""}</span>
									<br />

									<span>{val.multiplayer === 1 ? "multi player" : ""}</span>
								</p>
								{/* <p className="description">
									<span>
										<b>Description: </b>
									</span>
									{val.multiplayer}
								</p> */}
							</Card>
						</div>
					);
				})}
		</>
	);
}

export default GameDetail;
