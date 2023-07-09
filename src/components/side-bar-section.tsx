import React, {useState} from 'react';
import expand from "../assets/expand.svg";
import AnimateHeight, {Height} from 'react-animate-height';

export enum SideBarSectionItemStyle {
    state = "state",
    plain = "plain",
    elevated = "elevated",
}

type SideBarSectionItem = {
    text: string
    icon?: string
    secondIcon?: string
}

type SideBarSectionParams = {
    title?: string
    style?: SideBarSectionItemStyle
    canMinimize?: boolean
    isLast?: boolean
    items: Array<SideBarSectionItem>
}

export default function SideBarSection(
    {
        title = "",
        style = SideBarSectionItemStyle.plain,
        canMinimize = false,
        isLast = false,
        items = []
    }: SideBarSectionParams) {

    const [height, setHeight] = useState<Height>("auto")
    const [isOpen, setIsOpen] = useState<boolean>(true)

    function state(item: SideBarSectionItem, index: number) {
        return <div key={index} className="state">{item.text}</div>
    }

    function plain(item: SideBarSectionItem, index: number) {
        return <div key={index} className="plain">{item.icon !== undefined ? <img src={item.icon} alt="Icon"/> : ""}
            {item.text}</div>
    }

    function elevated(item: SideBarSectionItem, index: number) {
        return <div key={index} className="elevated"><img src={item.icon} alt="Icon"/>
            {item.text}<img src={item.secondIcon} alt="Icon"/></div>
    }

    function minimize() {
        if (isOpen) {
            setHeight(0)
            setIsOpen(false)
        } else {
            setHeight("auto")
            setIsOpen(true)
        }
    }

    return <div className={"side-bar-section" + (isLast ? " last" : "")}>
        {title !== undefined ? <div className="title">
            {title}
            {canMinimize ? <div
                className={"expand-button" + (isOpen ? " active" : "")}
                onClick={minimize}><img src={expand} alt="Expand"/></div> : ""}
        </div> : ""}
        <AnimateHeight className="content" height={height} duration={500}>{
            items.map((item, index) => {
                return style === SideBarSectionItemStyle.state ? state(item, index) : style === SideBarSectionItemStyle.plain ? plain(item, index) : elevated(item, index)
            })
        }</AnimateHeight>
    </div>;
}
