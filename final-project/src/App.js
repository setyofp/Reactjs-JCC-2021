import "./App.css";
import { MainProvider } from "./context/MainContext";
import { UserProvider } from "./context/UserContext";
import Routes from "./routes/Routes";

function App() {
	return (
		<>
			<UserProvider>
				<MainProvider>
					<Routes />
				</MainProvider>
			</UserProvider>
		</>
	);
}

export default App;
