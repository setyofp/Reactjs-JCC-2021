import React, { useContext, useEffect } from "react";
import { MainContext } from "../context/MainContext";
import { Button, Card } from "antd";
import { useHistory } from "react-router-dom";

function MovieCard() {
	const { movie, functions, fetchStatusMovie, setFetchStatusMovie } =
		useContext(MainContext);
	const { fetchDataMovie } = functions;

	let history = useHistory();

	const onClick = (e) => {
		console.log(e.target.value);
		let ID_MOVIE = e.target.value;
		history.push(`movie/${ID_MOVIE}`);
	};

	useEffect(() => {
		if (fetchStatusMovie === false) {
			fetchDataMovie();
			setFetchStatusMovie(true);
		}
	}, [fetchDataMovie, fetchStatusMovie, setFetchStatusMovie]);

	return (
		<>
			{movie.slice(0, 4).map((val, index) => {
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

export default MovieCard;
