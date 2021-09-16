import React from "react"
import { DaftarMahasiswaProvider } from "./daftarMahasiswaContext"
import DaftarMahasiswaForm from "./daftarMahasiswaForm"
import DaftarMahasiswaList from "./daftarMahasiswaList"

const DaftarMahasiswa = () => {
    return(
        <DaftarMahasiswaProvider>
            <DaftarMahasiswaList/>
            <DaftarMahasiswaForm/>
        </DaftarMahasiswaProvider>
    )
}

export default DaftarMahasiswa