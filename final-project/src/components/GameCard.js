import React, { useContext, useEffect } from "react";
import { MainContext } from "../context/MainContext";
import { Button, Card } from "antd";
import { useHistory } from "react-router-dom";

function GameCard() {
	const { game, functions, fetchStatusGame, setFetchStatusGame } =
		useContext(MainContext);
	const { fetchDataGame } = functions;

	let history = useHistory();

	useEffect(() => {
		if (fetchStatusGame === false) {
			fetchDataGame();
			setFetchStatusGame(true);
		}
	}, [fetchDataGame, fetchStatusGame, setFetchStatusGame]);

	const onClick = (e) => {
		console.log(e.target.value);
		let ID_GAME = e.target.value;
		history.push(`game/${ID_GAME}`);
	};

	return (
		<>
			{game.slice(0, 4).map((val, index) => {
				return (
					<Card
						hoverable
						style={{
							width: 280,
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-between",
						}}
						cover={<img alt="example" src={val.image_url} />}
					>
						<Button
							type="primary"
							size="small"
							onClick={onClick}
							value={val.id}
						>
							&gt;
						</Button>
					</Card>
				);
			})}
		</>
	);
}

export default GameCard;
