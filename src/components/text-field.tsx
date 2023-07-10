import React from 'react'

type TextFieldParam = {
    text: string
    icon: string
}

export default function TextField({text = "", icon = ""}: TextFieldParam) {
    return <div className="text-field-container">
        <input type="text" placeholder={" " + text} className="text-field"/><img src={icon} alt="Icon"/>
    </div>
}
