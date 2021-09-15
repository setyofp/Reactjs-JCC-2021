import { MahasiswaProvider } from "./MahasiswaContext";
import MahasiswaForm from "./MahasiswaForm";
import MahasiswaList from "./MahasiswaList";
import "../App.css";

const Tugas13 = () => {
	return (
		<MahasiswaProvider>
			<MahasiswaList />
			<MahasiswaForm />
		</MahasiswaProvider>
	);
};

export default Tugas13;
