import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Nav";
import Tugas9 from "../Tugas-9/tugas9";
import Tugas10 from "../Tugas-10/tugas10";
import Tugas11 from "../Tugas-11/tugas11";
import Tugas12 from "../Tugas-12/tugas12";

import DaftarMahasiswaForm from "./daftarMahasiswaForm";
import { DaftarMahasiswaProvider } from "./daftarMahasiswaContext";
import DaftarMahasiswaList from "./daftarMahasiswaList";

import { ThemeProvider } from "./ThemeContext";
import Button from "./Button";
import Tugas13 from "../Tugas-13/Mahasiswa";

const Routes = (props) => {
	return (
		<div>
			<Router>
				<div>
					<ThemeProvider>
						<Nav />
						<Button />
						<Switch>
							<Route exact path="/tugas9">
								<Tugas9 />
							</Route>
							<Route exact path="/tugas10">
								<Tugas10 />
							</Route>
							<Route exact path="/tugas11">
								<Tugas11 />
							</Route>
							<Route exact path="/tugas12">
								<Tugas12 />
							</Route>
							<Route exact path="/tugas13">
								<Tugas13 />
							</Route>

							<DaftarMahasiswaProvider>
								<Route exact path="/tugas14/create">
									<DaftarMahasiswaForm />
								</Route>
								<Route exact path="/tugas14">
									<DaftarMahasiswaList />
								</Route>
								<Route exact path="/tugas14/:id/edit">
									<DaftarMahasiswaForm />
								</Route>
							</DaftarMahasiswaProvider>
						</Switch>
					</ThemeProvider>
				</div>
			</Router>
		</div>
	);
};

export default Routes;
