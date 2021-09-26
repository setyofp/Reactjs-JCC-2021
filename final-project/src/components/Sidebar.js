import { Layout, Menu } from "antd";
import {
	VideoCameraOutlined,
	TrophyOutlined,
	UserOutlined,
} from "@ant-design/icons";
import React from "react";
import { NavLink } from "react-router-dom";
// import { UserContext } from "../context/UserContext";
import Cookies from "js-cookie";

const { SubMenu } = Menu;
const { Sider } = Layout;

const Sidebar = () => {
	// const { loginStatus } = useContext(UserContext);

	return (
		<>
			{Cookies.get("token") !== undefined && (
				<Sider width={200} className="site-layout-background">
					<Menu
						mode="inline"
						defaultSelectedKeys={["1"]}
						defaultOpenKeys={["sub1"]}
						style={{
							height: "100%",
							borderRight: 0,
							marginTop: 64,
							position: "fixed",
							width: 200,
						}}
					>
						<SubMenu key="sub1" icon={<VideoCameraOutlined />} title="Movie">
							<Menu.Item key="1">
								<NavLink to="/movie-list">Movie Table</NavLink>
							</Menu.Item>
							<Menu.Item key="2">
								<NavLink to="/movie-form">Movie Form</NavLink>
							</Menu.Item>
						</SubMenu>
						<SubMenu key="sub2" icon={<TrophyOutlined />} title="Game">
							<Menu.Item key="3">
								<NavLink to="/game-list">Game Table</NavLink>
							</Menu.Item>
							<Menu.Item key="4">
								<NavLink to="/game-form">Game Form</NavLink>
							</Menu.Item>
						</SubMenu>
						<SubMenu key="sub3" icon={<UserOutlined />} title="User">
							<Menu.Item key="5">
								<NavLink to="/chg-pwd">Update Password</NavLink>
							</Menu.Item>
						</SubMenu>
					</Menu>
				</Sider>
			)}
		</>
	);
};

export default Sidebar;
