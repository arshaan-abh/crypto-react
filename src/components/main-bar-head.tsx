import React from 'react';
import Profile from "./profile";
import MenuButtons from "./menu-buttons";
import sms from "../assets/sms.svg"
import notification from "../assets/notification.svg"

export default function MainBarHead() {
    return <div id="main-bar-head">
        <MenuButtons direction="row" gap="long-gap"></MenuButtons>
        <div className="main-bar-head-right-section">
            <div className="small-button"><img src={sms} alt="SMS"/></div>
            <div className="small-button"><img src={notification} alt="Notification"/></div>
        </div>
        <Profile></Profile>
    </div>;
}
