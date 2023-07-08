import React from 'react';
import logo from "../logo.svg";

export default function SideBar() {
    return <div id="side-bar">
        <div className="logo">
            <img src={logo} alt="logo"></img>Dashboard
        </div>
    </div>;
}
