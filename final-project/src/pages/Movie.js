import React, { useContext, useEffect } from "react";
import { MainContext } from "../context/MainContext";
import { Button, Card } from "antd";
import { useHistory } from "react-router-dom";

function Movie() {
	const { movie, functions, fetchStatusMovie, setFetchStatusMovie } =
		useContext(MainContext);
	const { fetchDataMovie } = functions;

	let history = useHistory();

	useEffect(() => {
		if (fetchStatusMovie === false) {
			fetchDataMovie();
			setFetchStatusMovie(true);
		}
	}, [fetchDataMovie, fetchStatusMovie, setFetchStatusMovie]);

	const onClick = (e) => {
		console.log(e.target.value);
		let ID_MOVIE = e.target.value;
		history.push(`movie/${ID_MOVIE}`);
	};

	return (
		<>
			<div class="movie">
				{movie.map((val, index) => {
					return (
						<Card
							hoverable
							style={{
								width: 240,
								display: "flex",
								flexDirection: "column",
								justifyContent: "space-between",
							}}
							cover={
								<img
									alt="example"
									src={val.image_url}
									style={{ width: "100%" }}
								/>
							}
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
			</div>
		</>
	);
}

export default Movie;
