import React from 'react';
import Button from "./button";
import TextField from "./text-field";
import discord from "../assets/discord.svg";
import mystery from "../assets/mystery.svg";

type MenuButtonsParams = {
    direction: "row" | "column"
    gap: "long-gap" | "short-gap"
}

export default function MenuButtons({direction, gap}: MenuButtonsParams) {
    return <div className={`menu-buttons-container ${direction} ${gap}`}>
        <Button text="Login with Discord" icon={discord}></Button>
        <TextField text="Want to find something?" icon={mystery}></TextField>
    </div>
}
