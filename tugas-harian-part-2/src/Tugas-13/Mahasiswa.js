import { MahasiswaProvider } from "./MahasiswaContext";
import MahasiswaForm from "./MahasiswaForm";
import MahasiswaList from "./MahasiswaList";
import "../App.css";

const Mahasiswa = () => {
	return (
		<MahasiswaProvider>
			<MahasiswaList />
			<MahasiswaForm />
		</MahasiswaProvider>
	);
};

export default Mahasiswa;
