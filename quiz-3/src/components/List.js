import React, { useContext, useEffect } from "react";
import { MovieContext } from "../context/MovieContext";

const List = () => {
	const {
		movies,
		setMovies,
		input,
		setInput,
		currentId,
		setCurrentId,
		functions,
		fetchStatus,
		setFetchStatus,
	} = useContext(MovieContext);

	const { fetchData, getPrice, convSize, functionDelete, functionEdit } =
		functions;

	useEffect(() => {
		if (fetchStatus === false) {
			fetchData();
			setFetchStatus(true);
		}
	}, [fetchData, fetchStatus, setFetchStatus]);

	return (
		<>
			{movies !== null && (
				<>
					{movies.map((e, index) => {
						return (
							<>
								<div className="row">
									<div className="section">
										<div className="card">
											<div>
												<h2>{e.name}</h2>
												<h5>Release Year: {e.release_year}</h5>
												<img src={e.image_url} alt="" />
												<div>
													<strong>Price: {getPrice(e.price)}</strong>
													<br />
													<strong>Rating: {e.rating}</strong>
													<br />
													<strong>Size: {convSize(e.size)}</strong>
													<br />
													<strong>
														Platform:{" "}
														{e.is_android_app === 1 ? " Android " : " "}
														<span />
														<span />
														{e.is_ios_app === 1 ? " iPhone " : " "}
													</strong>
												</div>
												<p>
													<strong>Description: </strong>
													{e.description}
												</p>
											</div>
										</div>
									</div>
								</div>
							</>
						);
					})}
				</>
			)}
		</>
	);
};

export default List;
