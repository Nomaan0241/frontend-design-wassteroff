import React from "react";
import "../componants/navbar.css";

import Avtar from "../assets/avatar.svg";
import Setting from "../assets/setting.svg";

const Navbar = () => {
	return (
		<div className="main-nav">
			<div className="side-section-nav ">
				<div className="logo">W</div>
				<div className="heading">WASSERSTOFF</div>
				<input className="searchbar" type="text" />

				<div className="nav-menu">
					<p className="nav-menu-options">Statistics</p>
					<p className=" nav-menu-selected ">Overview</p>
					<p className="nav-menu-options">Dashboard</p>
					<p className="nav-menu-options">Analytics </p>
				</div>
			</div>

			<div className="nav-user">
				<img className="nav-user-avatar" src={Avtar} alt="avtar"></img>
				<img className="nav-user-setting" src={Setting} alt="setting"></img>
			</div>
			<div className="main-section-nav"></div>
		</div>
	);
};

export default Navbar;
