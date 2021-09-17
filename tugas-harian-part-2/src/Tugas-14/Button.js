import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { Button as Buttons } from "antd";

const Button = () => {
	const [theme, setTheme] = useContext(ThemeContext);
	const handleTheme = () => {
		if (theme === "dark") {
			setTheme("light");
		} else {
			setTheme("dark");
		}
		console.log(theme);
	};

	return (
		<div class="button">
			<Buttons
				className="button-theme"
				onClick={handleTheme}
				style={{ margin: "0 auto" }}
			>
				Change Navbar to {theme === "light" ? "Dark" : "Light"} Theme
			</Buttons>
		</div>
	);
};

export default Button;
