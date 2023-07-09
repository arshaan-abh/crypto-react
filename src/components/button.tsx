import React from 'react';

export default function Button({text, icon}: any) {
    return <div className="button"><img src={icon} alt="Icon"/>{text}</div>;
}
