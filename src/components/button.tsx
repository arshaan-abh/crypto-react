import React from 'react';

export enum ButtonStyle {
    purple = "purple",
    lightBlue = "light-blue"
}

type ButtonParam = {
    text?: string
    icon?: string
    marginRight?: string
    isSmall?: boolean
    style?: ButtonStyle
}

export default function Button(
    {
        text = "",
        icon = "",
        marginRight = "0",
        isSmall = false,
        style = ButtonStyle.purple
    }: ButtonParam) {
    return <div className={"button" + (isSmall ? " small" : "") + ` ${style}`} style={{marginRight: marginRight}}>
        {icon !== "" ? <>
            <img src={icon} alt="Icon"/>{text}
        </> : <>
            <div style={{textAlign: "center", width: "100%"}}>{text}</div>
        </>}
    </div>;
}
