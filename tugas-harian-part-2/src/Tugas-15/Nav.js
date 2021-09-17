import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../Tugas-14/ThemeContext";
import { Layout, Switch } from "antd";

const Nav = () => {
	const [theme, setTheme] = useContext(ThemeContext);
	const { Header } = Layout;

	const handleTheme = (e) => {
		if (theme === "dark") {
			setTheme("light");
		} else if (theme === "light") {
			setTheme("dark");
		} else {
			setTheme("light");
		}
	};
	return (
		<Header className={`navbar navbar-${theme}`}>
			<div className="nav-items">
				<Link className="nav-link" activeClassName="isActive" exact to="/">
					Tugas 9
				</Link>
				<Link className="nav-link" activeClassName="isActive" to="/tugas10">
					Tugas 10
				</Link>
				<Link className="nav-link" activeClassName="isActive" to="/tugas11">
					Tugas 11
				</Link>
				<Link className="nav-link" activeClassName="isActive" to="/tugas12">
					Tugas 12
				</Link>
				<Link className="nav-link" activeClassName="isActive" to="/tugas13">
					Tugas 13
				</Link>
				<Link className="nav-link" activeClassName="isActive" to="/tugas14">
					Tugas 14
				</Link>
				<Link className="nav-link" activeClassName="isActive" to="/tugas15">
					Tugas 15
				</Link>
			</div>
			<div style={{ display: "flex", alignItems: "center" }}>
				<Switch onClick={handleTheme} />
			</div>
		</Header>
	);
};
export default Nav;
