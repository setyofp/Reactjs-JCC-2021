import { Button, Input } from "antd";
import loginimg from "../build/images/login-img.webp";
import Cookies from "js-cookie";
import { useHistory } from "react-router";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import React, { useContext, useState } from "react";

function Login() {
	let history = useHistory();
	const { setLoginStatus } = useContext(UserContext);

	const [inputUser, setInputUser] = useState({
		email: "",
		password: "",
	});

	const handleChange = (event) => {
		let typeOfInput = event.target.value;
		let name = event.target.name;

		setInputUser({ ...inputUser, [name]: typeOfInput });
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		axios
			.post("https://backendexample.sanbersy.com/api/user-login", {
				email: inputUser.email,
				password: inputUser.password,
			})
			.then((res) => {
				var user = res.data.user;
				var token = res.data.token;
				Cookies.set("user", user.name, { expires: 1 });
				Cookies.set("email", user.email, { expires: 1 });
				Cookies.set("token", token, { expires: 1 });
				history.push("/");
				setLoginStatus(true);
			})
			.catch((err) => {
				alert(err);
			});
	};
	return (
		<div className="login-wrapper">
			<div className="login-img">
				<img src={loginimg} alt="" />
			</div>
			<div className="login-modal">
				<h1>Login.</h1>
				<p style={{ marginBottom: 24, color: "grey" }}>
					Log in with your data that you entered during your registration
				</p>
				<form onSubmit={handleSubmit}>
					<p>
						<label htmlFor="email">Your e-mail</label>
						<Input
							type="email"
							name="email"
							id="email"
							placeholder="name@domain.com"
							onChange={handleChange}
							value={inputUser.email}
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
							value={inputUser.password}
						/>
					</p>
					<Button htmlType="submit" onClick={handleSubmit}>
						Login
					</Button>
				</form>
			</div>
		</div>
	);
}

export default Login;
