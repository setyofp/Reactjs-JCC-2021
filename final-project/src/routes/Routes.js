import React from "react";
import "../App.css";
import { Layout } from "antd";
import Nav from "../components/Header";
import Foot from "../components/Footer";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import MovieList from "../pages/MovieList";
import { MainProvider } from "../context/MainContext";
import MovieForm from "../pages/MovieForm";
import GameList from "../pages/GameList";
import GameForm from "../pages/GameForm";
import Home from "../pages/Home";
import MovieDetail from "../pages/MovieDetail";
import GameDetail from "../pages/GameDetail";
import Game from "../pages/Game";
import Movie from "../pages/Movie";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import { UserProvider } from "../context/UserContext";
import Cookies from "js-cookie";
import Sidebar from "../components/Sidebar";
import ChangePassword from "../pages/ChangePassword";
// import { UserContext } from "../context/UserContext";

function Routes() {
	const LoginRoute = ({ ...props }) => {
		if (Cookies.get("token") !== undefined) {
			return <Redirect to="/" />;
		} else {
			return <Route {...props} />;
		}
	};

	// const { loginStatus } = useContext(UserContext);

	return (
		<Router>
			<MainProvider>
				<UserProvider>
					<Layout className="layout">
						<Nav />
						<Layout>
							{/* {loginStatus === true && <Sidebar />} */}
							<Sidebar />
							<Switch>
								<Route exact path="/" component={Home} />
								<Route exact path="/movie" component={Movie} />
								<Route exact path="/movie-list" component={MovieList} />
								<Route exact path="/movie/:ID_MOVIE" component={MovieDetail} />
								<Route exact path="/movie-form" component={MovieForm} />
								<Route
									exact
									path="/movie-form/edit/:Value"
									component={MovieForm}
								/>
								<Route exact path="/game" component={Game} />
								<Route exact path="/game/:ID_GAME" component={GameDetail} />
								<Route exact path="/game-list" component={GameList} />
								<Route exact path="/game-form" component={GameForm} />
								<Route
									exact
									path="/game-form/edit/:Value"
									component={GameForm}
								/>
								<LoginRoute exact path="/login" component={Login} />
								<LoginRoute exact path="/register" component={Signup} />
								<Route exact path="/chg-pwd" component={ChangePassword} />

								{/* <Route exact path="/signup" component={Signup} /> */}
							</Switch>
						</Layout>
						<Foot />
					</Layout>
				</UserProvider>
			</MainProvider>
		</Router>
	);
}

export default Routes;
