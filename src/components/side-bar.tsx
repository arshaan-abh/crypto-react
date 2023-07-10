import React from 'react';
import SideBarSection, {SideBarSectionItemStyle} from "./side-bar-section";
import CoinWidget from './coin-widget';
import MenuButtons from "./menu-buttons";
import logo from "../assets/logo.svg";
import home from "../assets/home.svg";
import leaderboard from "../assets/leaderboard.svg";
import infinite from "../assets/infinite.svg";
import celebration from "../assets/celebration.svg";
import interests from "../assets/interests.svg";
import psychiatry from "../assets/psychiatry.svg";
import bitcoin from "../assets/bitcoin.svg";

export default function SideBar() {
    return <div id="side-bar">
        <div className="logo">
            <img src={logo} alt="logo"></img>Dashboard
        </div>
        <MenuButtons direction="column" gap="short-gap"></MenuButtons>
        <SideBarSection style={SideBarSectionItemStyle.state}
                        items={[{text: "Connected"}, {text: "25 Players online"}]}></SideBarSection>
        <SideBarSection canMinimize={true} title="Dashboard" style={SideBarSectionItemStyle.plain}
                        items={[{text: "Home page", icon: home}, {
                            text: "Leaderboards",
                            icon: leaderboard
                        }]}></SideBarSection>
        <SideBarSection canMinimize={true} title="All Rooms" style={SideBarSectionItemStyle.elevated}
                        items={[{text: "Infinite Room", icon: infinite, secondIcon: bitcoin}, {
                            text: "Infinite Room",
                            icon: infinite,
                            secondIcon: bitcoin
                        }, {text: "Infinite Room", icon: infinite, secondIcon: bitcoin}, {
                            text: "Whale Room",
                            icon: celebration,
                            secondIcon: bitcoin
                        }, {text: "Shrimp Room", icon: interests, secondIcon: bitcoin}, {
                            text: "Create Room",
                            icon: psychiatry,
                            secondIcon: bitcoin
                        }]}></SideBarSection>
        <SideBarSection canMinimize={true} title="Additional Information" style={SideBarSectionItemStyle.plain}
                        isLast={true} items={[{text: "Provably Fair"}, {text: "Support"}]}></SideBarSection>

        <CoinWidget></CoinWidget>
    </div>;
}
