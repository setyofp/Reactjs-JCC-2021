import logo from "./logojcc.png";
import "./App.css";

function App() {
	return (
		<div className="App">
			<div className="card">
				<div className="logo">
					<img src={logo} alt="Logo Jabar Coding Camp 2021" />
				</div>
				<div className="form">
					<h2>Things to do</h2>
					<p id="desc">During Bootcamp in Jabarcodingcamp</p>
					<form action="#">
						<p>
							<input type="checkbox" name="todo" id="git" />
							<label htmlFor="git">Belajar Git & CLI</label>
						</p>
						<p>
							<input type="checkbox" name="todo" id="html-css" />
							<label htmlFor="html-css">Belajar HTML & CSS</label>
						</p>
						<p>
							<input type="checkbox" name="todo" id="javascript" />
							<label htmlFor="javascript">Belajar JavaScript</label>
						</p>
						<p>
							<input type="checkbox" name="todo" id="basic-react" />
							<label htmlFor="basic-react">Belajar ReactJS Dasar</label>
						</p>
						<p>
							<input type="checkbox" name="todo" id="advance-react" />
							<label htmlFor="advance-react">Belajar ReactJS Advance</label>
						</p>
						<button>Send</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default App;
