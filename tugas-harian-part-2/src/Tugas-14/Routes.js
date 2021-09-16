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
							<Route path="/tugas9" exact component={Tugas9} />
							<Route path="/tugas10" exact component={Tugas10} />
							<Route path="/tugas11" exact component={Tugas11} />
							<Route path="/tugas12" exact component={Tugas12} />
							<Route path="/tugas13" exact component={Tugas13} />

							<DaftarMahasiswaProvider>
								<Route
									path="/tugas14/create"
									exact
									component={DaftarMahasiswaForm}
								/>
								<Route path="/tugas14" exact component={DaftarMahasiswaList} />
								<Route
									path="/tugas14/:id/edit"
									exact
									component={DaftarMahasiswaForm}
								/>
							</DaftarMahasiswaProvider>
						</Switch>
					</ThemeProvider>
				</div>
			</Router>
		</div>
	);
};

export default Routes;
