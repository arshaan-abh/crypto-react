import {ReactElement} from "react"
import dots from "../assets/dots.svg"

type CardViewParam = {
    title?: string
    icon?: string
    content?: ReactElement
}

export default function CardView({title = "", icon = "", content = <></>}: CardViewParam) {
    return <div className="card-view">
        <div className="card-view-title">
            <img className="main-icon" src={icon} alt="Icon"/>{title}
            <img className="dots" src={dots} alt="Dots"/>
        </div>
        <div className="card-view-content">{content}</div>
    </div>
}
