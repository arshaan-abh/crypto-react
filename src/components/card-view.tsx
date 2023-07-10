import {ReactElement} from "react"

type CardViewParam = {
    title?: string
    icon?: string
    content?: ReactElement
}

export default function CardView({title = "", icon = "", content = <></>}: CardViewParam) {
    return <div className="card-view">
        <div className="card-view-title">{title}</div>
        <div className="card-view-content">{content}</div>
    </div>
}
