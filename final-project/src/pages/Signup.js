import { Button, Input } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import signupimg from "../build/images/signup-img.webp";

function Signup() {
	let history = useHistory();
	const [input, setInput] = useState({ name: "", email: "", password: "" });

	const handleSubmit = (event) => {
		event.preventDefault();
		axios
			.post("https://backendexample.sanbersy.com/api/register", {
				name: input.name,
				email: input.email,
				password: input.password,
			})
			.then(() => {
				history.push("/login");
			})
			.catch((err) => {
				alert(err);
			});
	};

	const handleChange = (event) => {
		let value = event.target.value;
		let name = event.target.name;

		setInput({ ...input, [name]: value });
	};

	return (
		<div className="login-wrapper">
			<div className="login-img">
				<img src={signupimg} alt="" />
			</div>
			<div className="login-modal">
				<h1>Signup.</h1>
				<p style={{ marginBottom: 24, color: "grey" }}>
					Let's get you all set up so you can begin input movie or game list
					into the page <br />
					<strong>DO NOT REGISTER WITH INFORMATION OF YOUR REAL ACCOUNT</strong>
					<br />
					<strong>PLEASE CREATE RANDOM USERNAME, EMAIL & PASSWORD</strong>
				</p>
				<form onSubmit={handleSubmit}>
					<p>
						<label htmlFor="name">Name</label>
						<Input
							type="name"
							name="name"
							id="name"
							placeholder="Enter your name"
							onChange={handleChange}
							value={input.name}
						/>
					</p>
					<p>
						<label htmlFor="email">Your e-mail</label>
						<Input
							type="email"
							name="email"
							id="email"
							placeholder="name@domain.com"
							onChange={handleChange}
							value={input.email}
						/>
					</p>
					<p>
						<label htmlFor="password">Password</label>
						<Input
							type="password"
							name="password"
							id="password"
							placeholder="at least 8 character"
							onChange={handleChange}
							value={input.password}
						/>
					</p>
					<Button
						htmlType="submit"
						style={{ margin: "auto" }}
						onClick={handleSubmit}
					>
						Create an account
					</Button>
				</form>
			</div>
		</div>
	);
}

export default Signup;
