import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import MovieList from "./pages/MovieList";
import { MovieProvider } from "./context/MovieContext";
import MovieForm from "./pages/MovieForm";
import About from "./pages/About";
import MovieSearch from "./pages/MovieSearch";

const Routes = () => {
	return (
		<>
			<BrowserRouter>
				<MovieProvider>
					<Nav />
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/mobile-list">
							<MovieList />
						</Route>
						<Route path="/mobile-form">
							<MovieForm />
						</Route>
						<Route path="/mobile-form/edit/:Value">
							<MovieForm />
						</Route>
						<Route path="/search/:searchValue">
							<MovieSearch />
						</Route>
						<Route path="/about" exact component={About} />
					</Switch>
					<Footer />
				</MovieProvider>
			</BrowserRouter>
		</>
	);
};

export default Routes;
