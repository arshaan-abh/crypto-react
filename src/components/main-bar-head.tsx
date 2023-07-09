import React from 'react';
import Button from "./button";
import discord from "../assets/discord.svg"

export default function MainBarHead() {
    return <div id="main-bar-head">
        <Button text="Login with Discord" icon={discord}></Button>
    </div>;
}
