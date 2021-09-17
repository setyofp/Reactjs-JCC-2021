import React, { useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { DaftarMahasiswaContext } from "../Tugas-14/daftarMahasiswaContext";
import { Button } from "antd";
import {
	DeleteFilled,
	DeleteTwoTone,
	EditFilled,
	EditTwoTone,
} from "@ant-design/icons";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

import { Table, Tag, Space, message } from "antd";

import { Layout, Menu, Breadcrumb } from "antd";
import axios from "axios";

const DaftarMahasiswaList15 = () => {
	const {
		dataMahasiswa,
		setDataMahasiswa,
		functions,
		idMahasiswa,
		input,
		setInput,
		setCurrentId,
	} = useContext(DaftarMahasiswaContext);

	const { fetchData, functionDelete, functionEdit } = functions;

	const { Header, Content, Footer } = Layout;

	let history = useHistory();

	useEffect(() => {
		fetchData();
	}, []);

	const handleDelete = (event) => {
		let idMahasiswa = parseInt(event.target.value);

		axios
			.delete(
				`http://backendexample.sanbercloud.com/api/student-scores/${idMahasiswa}`
			)
			.then(() => {
				let newDataMahasiswa = dataMahasiswa.filter((res) => {
					return res.id !== idMahasiswa;
				});
				setDataMahasiswa(newDataMahasiswa);
			});
		message.success("Data berhasil dihapus");
	};

	const handleEdit = (event) => {
		let idMahasiswa = parseInt(event.target.value);

		axios
			.get(
				`http://backendexample.sanbercloud.com/api/student-scores/${idMahasiswa}`
			)
			.then((res) => {
				let data = res.data;
				console.log(data);
				history.push(`/tugas15/${idMahasiswa}/edit`);
				setInput({
					id: data.id,
					name: data.name,
					course: data.course,
					score: data.score,
				});
				setCurrentId(data.id);
			});
	};

	const columns = [
		{
			title: "Nama",
			dataIndex: "name",
			key: "name",
			sorter: (a, b) => a.name.localeCompare(b.name),
		},
		{
			title: "Mata Kuliah",
			dataIndex: "course",
			key: "course",
		},
		{
			title: "Nilai",
			dataIndex: "score",
			key: "score",
		},
		{
			title: "Index Nilai",
			key: "indexNilai",
			render: (text, record) => (
				<>
					{record.score >= 80
						? "A"
						: record.score >= 70 && record.score < 80
						? "B"
						: record.score >= 60 && record.score < 70
						? "C"
						: record.score >= 50 && record.score < 60
						? "D"
						: "E"}
				</>
			),
		},
		{
			title: "Action",
			key: "action",
			render: (text, record) => (
				<>
					<Space size={10}>
						<Button
							value={record.id}
							style={{ background: "#FFB319" }}
							type="primary"
							onClick={handleEdit}
						>
							<EditOutlined />
						</Button>
						<Button
							value={record.id}
							onClick={handleDelete}
							type="primary"
							danger
						>
							<DeleteOutlined />
						</Button>
					</Space>
				</>
			),
		},
	];

	return (
		<div className="fruit-15">
			<div className="fruit-table-15"></div>
			<h1>Daftar Nilai Mahasiswa</h1>

			<Button type="primary" className="to-form-15">
				<Link to="/tugas15/create">Buat Data Nilai Mahasiswa Baru</Link>
			</Button>
			<Table dataSource={dataMahasiswa} columns={columns} />
		</div>
	);
};

export default DaftarMahasiswaList15;
