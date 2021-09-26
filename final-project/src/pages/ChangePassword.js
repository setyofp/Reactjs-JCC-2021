import { Button, Input } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import registerimg from "../build/images/register-img.webp";

function ChangePassword() {
	const [input, setInput] = useState({ password: "", confirmPassword: "" });

	let history = useHistory();

	const handleChange = (event) => {
		let value = event.target.value;
		let name = event.target.name;

		setInput({ ...input, [name]: value });
		console.log(input);
	};

	const handleSubmit = () => {
		const { password, confirmPassword } = input;
		if (password !== confirmPassword) {
			alert(`Password don't match`);
		} else {
			axios
				.post("https://backendexample.sanbersy.com/api/change-password", {
					password: input.password,
				})
				.then(() => {
					history.push("/login");
				})
				.catch((err) => {
					alert(err);
				});
		}
	};

	return (
		<div className="login-wrapper">
			<div className="login-img">
				<img src={registerimg} alt="" style={{ paddingLeft: 12 }} />
			</div>
			<div className="login-modal">
				<h1 style={{ marginBottom: 8 }}>Change Password</h1>

				<form onSubmit={handleSubmit}>
					<p>
						<label htmlFor="password">Enter new password</label>
						<Input
							type="password"
							name="password"
							id="password"
							placeholder="Enter your new password"
							onChange={handleChange}
							value={input.password}
						/>
					</p>
					<p>
						<label htmlFor="confirmPassword">Confirm your password</label>
						<Input
							type="password"
							name="confirmPassword"
							id="confirmPassword"
							placeholder="Enter again your new password"
							onChange={handleChange}
							value={input.confirmPassword}
						/>
					</p>
					<Button htmlType="submit" onClick={handleSubmit}>
						Update Password
					</Button>
				</form>
			</div>
		</div>
	);
}

export default ChangePassword;
