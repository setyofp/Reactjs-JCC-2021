import Cookies from "js-cookie";
import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Layout, Menu } from "antd";
import logo from "../build/images/prime-logo.webp";
import { UserContext } from "../context/UserContext";
const { Header } = Layout;

function Nav() {
	const { setLoginStatus } = useContext(UserContext);

	let history = useHistory();
	const handleLogout = () => {
		setLoginStatus(false);
		Cookies.remove("user");
		Cookies.remove("email");
		Cookies.remove("token");
		history.push("/login");
	};

	return (
		<>
			<Header style={{ position: "fixed", zIndex: 2, width: "100%" }}>
				<div className="logo">
					<NavLink to="/">
						<img src={logo} alt="amazon prime logo" />
					</NavLink>
				</div>
				<Menu theme="light" mode="horizontal">
					<Menu.Item key="home">
						<NavLink to="/">Home</NavLink>
					</Menu.Item>
					<Menu.Item key="movie">
						<NavLink to="/movie">Movie List</NavLink>
					</Menu.Item>
					<Menu.Item key="game">
						<NavLink to="/game">Game List</NavLink>
					</Menu.Item>
				</Menu>
				{/* <Menu theme="light" mode="horizontal"> */}
				{Cookies.get("token") !== undefined && (
					<Menu theme="light" mode="horizontal">
						<Menu.Item key="logout" onClick={handleLogout}>
							Logout
						</Menu.Item>
					</Menu>
				)}
				{Cookies.get("token") === undefined && (
					<Menu theme="light" mode="horizontal">
						<Menu.Item key="register">
							<NavLink to="/register">Register</NavLink>
						</Menu.Item>
						<Menu.Item key="login">
							<NavLink to="/login">Login</NavLink>
						</Menu.Item>
					</Menu>
				)}
				{/* </Menu> */}
			</Header>
		</>
	);
}

export default Nav;
