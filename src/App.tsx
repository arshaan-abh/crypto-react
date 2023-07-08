import React from 'react';
import './App.css';
import DashboardTemplate from "./components/dashboard-template";
import SideBar from "./components/side-bar";
import MainBarHead from "./components/main-bar-head";
import MainBarBody from "./components/main-bar-body";

export default function App() {
    return <DashboardTemplate sideBar={<SideBar></SideBar>}
                              mainBarHead={<MainBarHead></MainBarHead>}
                              mainBarBody={<MainBarBody></MainBarBody>}></DashboardTemplate>;
}
