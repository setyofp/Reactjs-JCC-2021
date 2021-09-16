import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

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
			<button
				className="button-theme"
				onClick={handleTheme}
				style={{ margin: "0 auto" }}
			>
				Change Navbar to {theme === "light" ? "Dark" : "Light"} Theme
			</button>
		</div>
	);
};

export default Button;
