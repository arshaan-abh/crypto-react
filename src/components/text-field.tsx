import React from 'react'

type TextFieldParam = {
    text?: string
    icon?: string
    marginRight?: string
}

export default function TextField({text = "", icon = "", marginRight = "0"}: TextFieldParam) {
    return <div className="text-field-container" style={{marginRight: marginRight}}>
        <input type="text" placeholder={" " + text} className="text-field"/><img src={icon} alt="Icon"/>
    </div>
}
