import React from 'react';
import Button from "./button";
import TextField from "./text-field";
import Profile from "./profile";
import discord from "../assets/discord.svg"
import mystery from "../assets/mystery.svg"
import sms from "../assets/sms.svg"
import notification from "../assets/notification.svg"

export default function MainBarHead() {
    return <div id="main-bar-head">
        <Button text="Login with Discord" icon={discord} marginRight="2rem"></Button>
        <TextField text="Want to find something?" icon={mystery}></TextField>
        <div className="main-bar-head-right-section">
            <div className="small-button"><img src={sms} alt="SMS"/></div>
            <div className="small-button"><img src={notification} alt="Notification"/></div>
        </div>
        <Profile></Profile>
    </div>;
}
