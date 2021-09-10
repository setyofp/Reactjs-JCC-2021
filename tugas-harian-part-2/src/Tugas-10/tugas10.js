import React, { useState, useEffect } from "react";
import "../App.css";

const Tugas10 = () => {
	const [countdown, setCountdown] = useState(100);
	const [time, setTime] = useState(new Date());
	const [display, setDisplay] = useState(true);

	useEffect(() => {
		let result;
		if (countdown > 0) {
			result = setInterval(() => {
				setCountdown((countdown) => countdown - 1);
				setTime(new Date());
			}, 1000);
		} else {
			setDisplay(() => false);
		}

		return () => clearInterval(result);
	}, [countdown]);

	return (
		<div className="countdown">
			<div className="countdown-show">
				{display === true ? (
					<>
						<h1>Now At - {time.toLocaleTimeString()}</h1>
						<h3>Countdown: {countdown}</h3>
					</>
				) : null}
			</div>
		</div>
	);
};

export default Tugas10;
