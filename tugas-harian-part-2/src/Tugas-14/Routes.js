import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "../Tugas-15/Nav";
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
import DaftarMahasiswaForm15 from "../Tugas-15/daftarMahasiswaForm-15";
import DaftarMahasiswaList15 from "../Tugas-15/daftarMahasiswaList-15";
import { Layout, Menu, Breadcrumb } from "antd";

const Routes = (props) => {
	const { Header, Content, Footer } = Layout;
	return (
		<div>
			<Router>
				<div>
					<Layout>
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
									<Route exact path="/tugas15">
										<DaftarMahasiswaList15 />
									</Route>
									<Route exact path="/tugas15/create">
										<DaftarMahasiswaForm15 />
									</Route>
									<Route exact path="/tugas15/:id/edit">
										<DaftarMahasiswaForm15 />
									</Route>
								</DaftarMahasiswaProvider>
							</Switch>
						</ThemeProvider>
					</Layout>
				</div>
			</Router>
		</div>
	);
};

export default Routes;
