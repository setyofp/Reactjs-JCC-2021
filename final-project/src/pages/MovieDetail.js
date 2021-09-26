import React, { useContext, useEffect } from "react";
import { MainContext } from "../context/MainContext";
import { Card } from "antd";
import {
	StarFilled,
	CalendarOutlined,
	FieldTimeOutlined,
} from "@ant-design/icons";
import { useParams } from "react-router-dom";

function MovieDetail() {
	const { movie, functions, fetchStatusMovie, setFetchStatusMovie } =
		useContext(MainContext);
	const { fetchDataMovie } = functions;
	let { ID_MOVIE } = useParams();

	useEffect(() => {
		if (fetchStatusMovie === false) {
			fetchDataMovie();
			setFetchStatusMovie(true);
		}
	}, [fetchDataMovie, fetchStatusMovie, setFetchStatusMovie]);

	return (
		<>
			{movie
				.filter((mov) => mov.id === parseInt(ID_MOVIE))
				.map((val, index) => {
					return (
						<div className="movie-detail">
							<div className="img-wrapper">
								<img src={val.image_url} alt="" />
							</div>
							<Card hoverable style={{ width: 240 }}>
								<h1>{val.title}</h1>
								<div className="card-meta">
									<p>
										<CalendarOutlined />
										{val.year}
									</p>
									<p>
										<StarFilled />
										{val.rating}
									</p>
								</div>
								<p>
									<FieldTimeOutlined />
									{val.duration} minutes
								</p>
								<p>
									<span>
										<b>Genre: </b>
									</span>
									{val.genre}
								</p>
								<p>
									<span>
										<b>Review: </b>
									</span>
									{val.review}
								</p>
								<p className="description">
									<span>
										<b>Description: </b>
									</span>
									{val.description}
								</p>
							</Card>
						</div>
					);
				})}
		</>
	);
}

export default MovieDetail;
