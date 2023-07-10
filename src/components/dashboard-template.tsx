import menu from "../assets/menu.svg"
import {useState} from "react";

export default function DashboardTemplate({sideBar, mainBarHead, mainBarBody}: any) {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen)
    }

    return <div id="dashboard-template">
        <div className={"side-bar" + (isMenuOpen ? " active" : "")}>{sideBar}</div>
        <div className="main-bar">
            <div className="head">{mainBarHead}</div>
            <div className="body">{mainBarBody}</div>
        </div>
        <div id="menu-button" onClick={toggleMenu}><img src={menu} alt="Menu button"/></div>
    </div>
}

/* todo fix menu button position */
